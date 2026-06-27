// Maakt Gmail-CONCEPTEN (Drafts) aan voor partners@warmtepomp.ai op basis van
// scripts/installateurs-goedgekeurd.csv. Scope gmail.compose -> kan NIET versturen.
// Verstuurt dus niets; maakt alleen concepten + twee lijsten (WhatsApp/formulier).
//
// Dedup: e-mail, bedrijfsnaam én domein tegen reeds-benaderd.csv, blocklist,
// fabrikant/merk-domeinen, en verzonden-log.json (idempotent her-draaien).
//
// Draaien: node scripts/create-drafts.mjs   [--dry-run]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { blockReason } = require("./blocklist.js");

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(DIR, "..");
const SRC = path.join(DIR, "installateurs-goedgekeurd.csv");
const REEDS = path.join(DIR, "reeds-benaderd.csv");
const LOG = path.join(DIR, "verzonden-log.json");
const WA = path.join(DIR, "whatsapp-lijst.csv");
const FORM = path.join(DIR, "formulier-lijst.csv");
const TOKEN = path.join(ROOT, ".gmail-token.json");
const DRY = process.argv.includes("--dry-run");

const FROM = "Michael Streur - warmtepomp.ai <partners@warmtepomp.ai>";
const WHATSAPP = "06-13818383";
const BRANDS = ["daikin", "mitsubishi", "bosch", "remeha", "vaillant", "atag", "intergas", "nathan", "itho", "quatt", "tonzon", "feenstra", "eneco", "vattenfall", "essent", "engie"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function body(plaats) {
  return `Geachte heer/mevrouw,

Mijn naam is Michael Streur, oprichter van warmtepomp.ai — een platform dat huiseigenaren onafhankelijk van fabrikanten en merken helpt bij hun keuze voor een warmtepomp. Het platform is net live; ik bouw het rustig en eerlijk op.

Via de site komen aanvragen binnen van huiseigenaren in en rond ${plaats} die concreet op zoek zijn naar een warmtepomp. Ik zoek daarvoor een paar betrouwbare lokale installateurs aan wie ik die aanvragen kan doorgeven.

Hoe ik het bewust klein houd:
- Elke aanvraag gaat naar maximaal 2 à 3 installateurs — geen marktplaats waar tientallen partijen op één lead duiken.
- Een vaste vergoeding per doorgestuurde aanvraag, geen abonnement en geen verplichtingen.
- U bepaalt zelf of een aanvraag bij u past.

Lijkt het u wat om vrijblijvend aanvragen uit ${plaats} te ontvangen? Dan hoor ik graag van u — een kort bericht terug of via WhatsApp op ${WHATSAPP} kan ook.

Met vriendelijke groet,
Michael Streur
https://www.warmtepomp.ai
partners@warmtepomp.ai`;
}
const subjectFor = (plaats) => `Op zoek naar een warmtepomp-installateur in ${plaats}`;

// ── CSV ──
function parseCsv(t) {
  const rows = []; let r = [], f = "", i = 0, q = false; t = t.replace(/^﻿/, "");
  while (i < t.length) { const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; } f += c; i++; continue; }
    if (c === '"') { q = true; i++; continue; }
    if (c === ",") { r.push(f); f = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { r.push(f); rows.push(r); r = []; f = ""; i++; continue; }
    f += c; i++;
  }
  if (f.length || r.length) { r.push(f); rows.push(r); }
  return rows.filter((x) => x.length && !(x.length === 1 && x[0] === ""));
}
const csvEsc = (v) => { v = v == null ? "" : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const norm = (s) => s.toLowerCase().replace(/\b(b\.?v\.?|v\.?o\.?f\.?|n\.?v\.?)\b/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const domainOf = (e) => { const a = (e || "").indexOf("@"); return a < 0 ? "" : e.slice(a + 1).toLowerCase(); };
const host = (u) => !u ? "" : u.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split(/[/?#]/)[0].toLowerCase();

// ── OAuth: vers access_token ──
async function accessToken() {
  const t = JSON.parse(fs.readFileSync(TOKEN, "utf8"));
  const b = new URLSearchParams({ client_id: t.client_id, client_secret: t.client_secret, refresh_token: t.refresh_token, grant_type: "refresh_token" });
  const r = await fetch(t.token_uri, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: b });
  const j = await r.json();
  if (!r.ok || j.error) throw new Error("Token-refresh mislukt: " + JSON.stringify(j));
  return j.access_token;
}

function rawMessage(to, plaats) {
  const bodyB64 = Buffer.from(body(plaats), "utf8").toString("base64").replace(/(.{76})/g, "$1\r\n");
  const msg = [
    `From: ${FROM}`, `To: ${to}`, `Subject: ${subjectFor(plaats)}`,
    `MIME-Version: 1.0`, `Content-Type: text/plain; charset="UTF-8"`, `Content-Transfer-Encoding: base64`,
    ``, bodyB64,
  ].join("\r\n");
  return Buffer.from(msg, "utf8").toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function createDraft(token, to, plaats) {
  const res = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/drafts", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message: { raw: rawMessage(to, plaats) } }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(`Gmail ${res.status}: ${JSON.stringify(j)}`);
  return j.id;
}

async function main() {
  const rows = parseCsv(fs.readFileSync(SRC, "utf8"));
  const H = rows[0].map((h) => h.trim()); const ix = {}; H.forEach((h, i) => (ix[h] = i));
  const recs = rows.slice(1).map((r) => ({ bedrijf: r[ix.bedrijf], plaats: r[ix.plaats], website: r[ix.website], email: r[ix.email], mob: r[ix.mobiel_whatsapp], form: r[ix.contactformulier_url] }));

  // reeds-benaderd
  const rr = parseCsv(fs.readFileSync(REEDS, "utf8"));
  const RE = new Set(), RN = new Set(), RD = new Set();
  for (let i = 1; i < rr.length; i++) { const e = rr[i][0], b = rr[i][1]; if (e) { RE.add(e.toLowerCase()); if (domainOf(e)) RD.add(domainOf(e)); } if (b) RN.add(norm(b)); }

  // verzonden-log
  const log = fs.existsSync(LOG) ? JSON.parse(fs.readFileSync(LOG, "utf8")) : { drafts: [] };
  const loggedEmails = new Set(log.drafts.map((d) => d.email.toLowerCase()));

  const token = DRY ? null : await accessToken();
  const seen = new Set();
  const waRows = [], formRows = [], skipped = [];
  let created = 0;

  for (const r of recs) {
    const h = host(r.website), d = domainOf(r.email), nn = norm(r.bedrijf);
    if (blockReason({ naam: r.bedrijf, email: "" }) || (h && blockReason({ naam: "", email: "_@" + h }))) { skipped.push([r.bedrijf, "blocklist"]); continue; }
    if ((r.email && RE.has(r.email.toLowerCase())) || RN.has(nn) || (h && RD.has(h)) || (d && RD.has(d))) { skipped.push([r.bedrijf, "reeds-benaderd"]); continue; }

    if (r.email) {
      if (BRANDS.some((b) => d.includes(b))) { skipped.push([r.bedrijf, `merk-domein (${d})`]); continue; }
      const key = r.email.toLowerCase();
      if (seen.has(key) || loggedEmails.has(key)) { skipped.push([r.bedrijf, "al verwerkt"]); continue; }
      seen.add(key);
      if (DRY) { console.log(`[dry-run] draft → ${r.bedrijf} <${r.email}> (${r.plaats})`); created++; continue; }
      const id = await createDraft(token, r.email, r.plaats);
      log.drafts.push({ email: key, bedrijf: r.bedrijf, plaats: r.plaats, subject: subjectFor(r.plaats), draftId: id, createdAt: new Date().toISOString() });
      loggedEmails.add(key);
      console.log(`✓ draft ${++created}: ${r.bedrijf} <${r.email}> (${r.plaats}) — id ${id}`);
      await sleep(700);
    } else if (r.mob) {
      let digits = r.mob.replace(/\D/g, "").replace(/^0/, "");
      if (!digits.startsWith("31")) digits = "31" + digits;
      const link = `https://wa.me/${digits}?text=${encodeURIComponent(body(r.plaats))}`;
      waRows.push({ bedrijf: r.bedrijf, plaats: r.plaats, mobiel: r.mob, wa_link: link });
    } else if (r.form) {
      formRows.push({ bedrijf: r.bedrijf, plaats: r.plaats, contactformulier_url: r.form });
    } else skipped.push([r.bedrijf, "geen kanaal"]);
  }

  if (!DRY) {
    fs.writeFileSync(LOG, JSON.stringify(log, null, 2));
    const waH = ["bedrijf", "plaats", "mobiel", "wa_link"];
    fs.writeFileSync(WA, [waH.join(",")].concat(waRows.map((r) => waH.map((k) => csvEsc(r[k])).join(","))).join("\n") + "\n");
    const fH = ["bedrijf", "plaats", "contactformulier_url"];
    fs.writeFileSync(FORM, [fH.join(",")].concat(formRows.map((r) => fH.map((k) => csvEsc(r[k])).join(","))).join("\n") + "\n");
  }

  console.log(`\n=== Resultaat${DRY ? " (dry-run)" : ""} ===`);
  console.log(`Concepten ${DRY ? "te maken" : "aangemaakt"}: ${created}`);
  console.log(`WhatsApp-lijst: ${waRows.length}${DRY ? "" : " → scripts/whatsapp-lijst.csv"}`);
  console.log(`Formulier-lijst: ${formRows.length}${DRY ? "" : " → scripts/formulier-lijst.csv"}`);
  console.log(`Overgeslagen: ${skipped.length}`); skipped.forEach((s) => console.log(`  - ${s[0]} | ${s[1]}`));
  if (!DRY) console.log(`Log: scripts/verzonden-log.json (${log.drafts.length} totaal)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
