// Standalone scraper: kleine/middelgrote lokale warmtepomp-installateurs in heel
// NL, inclusief plaatsen/dorpen RONDOM de targetsteden (ruimere straal per regio).
//
// Bron: OpenStreetMap via de Overpass API (gratis, geen API-key), zoals laadpaal-ai.
// Verrijking: homepage + /contact (timeout 10s, faalt stil).
// Geen externe dependencies; Node 24 (global fetch + AbortSignal.timeout).
//
// Volledige run:   node scripts/scrape-installateurs.mjs
// Alleen steden:   node scripts/scrape-installateurs.mjs --only=leiden,zwolle --merge
//   (--merge voegt de nieuwe vondsten toe aan de bestaande installateurs.csv,
//    met dezelfde filters/dedup; zonder --merge wordt het bestand overschreven.)
// Output:   scripts/installateurs.csv   (verstuurt niets)

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { blockReason } = require("./blocklist.js");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(__dirname, "installateurs.csv");
const REEDS = path.join(__dirname, "reeds-benaderd.csv");
const UA = "warmtepomp.ai-scraper/1.0 (lokale lead-research; contact info@warmtepomp.ai)";

const NOMINATIM = "https://nominatim.openstreetmap.org/search";
const OVERPASS_ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.openstreetmap.fr/api/interpreter",
];

const LAT_MARGIN = 0.15;
const LON_MARGIN = 0.22;
const NAME_RE = "warmtepomp|verwarming|klimaat|koeltech|installat|loodgiet|duurzaam|verduurz|cv-tech|warmtetech";
const CRAFT_RE = "hvac|plumber|heating_engineer";
const FETCH_CONCURRENCY = 8;
const HEADERS = ["bedrijf", "plaats", "regio", "provincie", "website", "email", "mobiel_whatsapp", "contactformulier_url", "warmtepomp_bevestigd", "ook_actief_in", "outreach_status", "bron"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── lib/cities.ts ────────────────────────────────────────────────────────────
function readCities() {
  const src = fs.readFileSync(path.join(ROOT, "lib", "cities.ts"), "utf8");
  const re = /slug:\s*"([^"]+)",\s*\n\s*name:\s*"([^"]+)",\s*\n\s*province:\s*"([^"]+)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push({ slug: m[1], name: m[2], province: m[3] });
  return out;
}

// ── CSV ──────────────────────────────────────────────────────────────────────
function parseCsv(text) {
  const rows = []; let row = [], field = "", i = 0, q = false;
  text = text.replace(/^﻿/, "");
  while (i < text.length) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i += 2; continue; } q = false; i++; continue; } field += c; i++; continue; }
    if (c === '"') { q = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
    field += c; i++;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.length && !(r.length === 1 && r[0] === ""));
}
function csvEsc(v) { v = v == null ? "" : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
function writeCsv(rows) {
  fs.writeFileSync(OUT, [HEADERS.join(",")].concat(rows.map((r) => HEADERS.map((h) => csvEsc(r[h])).join(","))).join("\n") + "\n");
}
function readExisting() {
  if (!fs.existsSync(OUT)) return [];
  const rows = parseCsv(fs.readFileSync(OUT, "utf8"));
  if (!rows.length) return [];
  const hdr = rows[0].map((h) => h.trim());
  return rows.slice(1).map((r) => { const o = {}; hdr.forEach((h, i) => (o[h] = r[i] != null ? r[i] : "")); return o; });
}

// ── reeds-benaderd.csv -> uitsluit-sets ──────────────────────────────────────
function readReeds() {
  const emails = new Set(), names = new Set(), domains = new Set();
  if (!fs.existsSync(REEDS)) return { emails, names, domains };
  const rows = parseCsv(fs.readFileSync(REEDS, "utf8"));
  for (let i = 1; i < rows.length; i++) {
    const [email, bedrijf] = rows[i];
    if (email) { emails.add(email.toLowerCase()); const d = domainOf(email); if (d) domains.add(d); }
    if (bedrijf) names.add(normName(bedrijf));
  }
  return { emails, names, domains };
}

// ── helpers ──────────────────────────────────────────────────────────────────
function pick(tags, keys) { for (const k of keys) if (tags[k]) return String(tags[k]).trim(); return ""; }
function websiteHost(url) { return !url ? "" : url.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split(/[/?#]/)[0].trim().toLowerCase(); }
function normName(name) { return name.toLowerCase().replace(/\b(b\.?v\.?|v\.?o\.?f\.?|n\.?v\.?)\b/g, "").replace(/[^a-z0-9]+/g, " ").trim(); }
function domainOf(email) { const at = (email || "").indexOf("@"); return at === -1 ? "" : email.slice(at + 1).toLowerCase(); }
function toUrl(website) { if (!website) return ""; return /^https?:\/\//i.test(website) ? website : "https://" + website; }

async function fetchText(url) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow", signal: AbortSignal.timeout(10000) });
    if (!res.ok) return "";
    const ct = res.headers.get("content-type") || "";
    if (ct && !/text|html|xml/i.test(ct)) return "";
    return await res.text();
  } catch { return ""; }
}

// ── Nominatim + Overpass ─────────────────────────────────────────────────────
async function getBbox(cityName) {
  const url = `${NOMINATIM}?q=${encodeURIComponent(cityName + ", Nederland")}&format=json&limit=1`;
  const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "nl" }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`Nominatim ${res.status}`);
  const data = await res.json();
  if (!data.length) return null;
  const [s, n, w, e] = data[0].boundingbox.map(Number);
  return { s: s - LAT_MARGIN, n: n + LAT_MARGIN, w: w - LON_MARGIN, e: e + LON_MARGIN };
}

async function overpass(bbox) {
  const { s, w, n, e } = bbox;
  const q = `[out:json][timeout:60];
(
  nwr["craft"~"${CRAFT_RE}"](${s},${w},${n},${e});
  nwr["name"~"${NAME_RE}",i](${s},${w},${n},${e});
);
out center tags;`;
  let lastErr;
  for (let round = 0; round < 3; round++) {
    for (const ep of OVERPASS_ENDPOINTS) {
      try {
        const res = await fetch(ep, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": UA },
          body: "data=" + encodeURIComponent(q),
          signal: AbortSignal.timeout(80000),
        });
        if (res.status === 429 || res.status === 504 || res.status === 403) { lastErr = new Error(`${ep} ${res.status}`); await sleep(6000); continue; }
        if (!res.ok) { lastErr = new Error(`${ep} ${res.status}`); continue; }
        return (await res.json()).elements || [];
      } catch (err) { lastErr = err; await sleep(4000); }
    }
  }
  throw lastErr || new Error("Overpass faalde");
}

// ── concurrency pool ─────────────────────────────────────────────────────────
async function pool(items, size, worker) {
  const ret = []; let idx = 0;
  await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
    while (idx < items.length) { const i = idx++; ret[i] = await worker(items[i], i); }
  }));
  return ret;
}

// ── Verrijking ───────────────────────────────────────────────────────────────
const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const BAD_EMAIL = /(sentry|wixpress|example|godaddy|\.png|\.jpg|\.gif|\.webp)/i;
function extractEmail(html, host) {
  const found = new Set();
  for (const mm of html.matchAll(/mailto:([^"'?>\s]+)/gi)) found.add(decodeURIComponent(mm[1]).toLowerCase());
  for (const mm of html.matchAll(EMAIL_RE)) found.add(mm[0].toLowerCase());
  const base = host.replace(/^.*?([^.]+\.[^.]+)$/, "$1");
  for (const em of found) {
    if (BAD_EMAIL.test(em)) continue;
    const d = domainOf(em);
    if (d === host || d.endsWith("." + base) || d === base) return em;
  }
  return "";
}
function extractMobile(html) {
  const compact = html.replace(/[\s().‑–-]/g, "");
  const m = compact.match(/(?:\+?316|06)\d{8}/);
  return m ? "06" + m[0].replace(/^\+?316|^06/, "") : "";
}
function extractContactForm(html, contactUrl, homeUrl) {
  if (/<form[\s>]/i.test(html)) return contactUrl || homeUrl;
  const m = html.match(/href=["']([^"']*contact[^"']*)["']/i);
  if (m) { try { return new URL(m[1], homeUrl).href; } catch { return ""; } }
  return "";
}
async function enrich(cand) {
  const home = toUrl(cand.website);
  const host = websiteHost(cand.website);
  let base = "";
  try { base = new URL(home).origin; } catch { return null; }
  const homeHtml = await fetchText(home);
  let contactUrl = "", contactHtml = "";
  for (const p of ["/contact", "/contact/", "/contactgegevens", "/over-ons"]) {
    contactHtml = await fetchText(base + p);
    if (contactHtml) { contactUrl = base + p; break; }
  }
  const all = homeHtml + "\n" + contactHtml;
  if (!all.trim()) return null;
  const lower = all.toLowerCase();
  if (!/warmtepomp|hybride/.test(lower)) return null;
  if (/\b(vestigingen|filialen|onze\s+locaties|meerdere\s+locaties)\b/.test(lower)) return null;
  const email = extractEmail(all, host);
  const mobiel = email ? "" : extractMobile(all);
  const form = email || mobiel ? "" : extractContactForm(homeHtml, contactUrl, home);
  if (!email && !mobiel && !form) return null;
  return { email, mobiel, form };
}

// ── OSM-kandidaten verzamelen over een lijst steden ──────────────────────────
async function collectCandidates(cityList, cityOrder) {
  const cands = new Map();
  const domainIndex = new Map();
  for (const city of cityList) {
    const order = cityOrder.get(city.name);
    process.stdout.write(`• ${city.name} … `);
    let bbox;
    try { bbox = await getBbox(city.name); await sleep(1100); }
    catch (err) { console.log(`Nominatim-fout (${err.message})`); continue; }
    if (!bbox) { console.log("geen bbox"); continue; }
    let els;
    try { els = await overpass(bbox); }
    catch (err) { console.log(`Overpass-fout (${err.message})`); continue; }
    let n = 0;
    for (const el of els) {
      const t = el.tags || {};
      const naam = pick(t, ["name", "official_name"]);
      if (!naam) continue;
      const website = pick(t, ["website", "contact:website", "url"]);
      const plaats = pick(t, ["addr:city"]);
      let key = normName(naam);
      const dom = websiteHost(website);
      if (dom && domainIndex.has(dom)) key = domainIndex.get(dom);
      if (!cands.has(key)) cands.set(key, { bedrijf: naam, normName: key, website, plaatsenCity: new Set(), regios: new Map() });
      const c = cands.get(key);
      if (!c.website && website) c.website = website;
      if (dom && !domainIndex.has(dom)) domainIndex.set(dom, key);
      if (plaats) c.plaatsenCity.add(plaats.toLowerCase());
      if (!c.regios.has(city.name)) c.regios.set(city.name, { order, province: city.province, plaats });
      n++;
    }
    console.log(`${n} kandidaat-nodes`);
    await sleep(1500);
  }
  return cands;
}

function preFilter(cands, reeds, placeNames, counters) {
  const survivors = [];
  for (const c of cands.values()) {
    const host = websiteHost(c.website);
    if (blockReason({ naam: c.bedrijf, email: "" }) || (host && blockReason({ naam: "", email: "_@" + host }))) { counters.block++; continue; }
    if (reeds.names.has(c.normName) || (host && reeds.domains.has(host))) { counters.reeds++; continue; }
    const placesInName = [...placeNames].filter((p) => c.normName.includes(p)).length;
    if (c.plaatsenCity.size >= 2 || placesInName > 2) { counters.multi++; continue; }
    if (!c.website) { counters.noSite++; continue; }
    survivors.push(c);
  }
  return survivors;
}

function regiosToRow(c, info) {
  const sorted = [...c.regios.entries()].sort((a, b) => a[1].order - b[1].order);
  const [primName, prim] = sorted[0];
  return {
    bedrijf: c.bedrijf, plaats: prim.plaats || primName, regio: primName, provincie: prim.province,
    website: toUrl(c.website), email: info.email, mobiel_whatsapp: info.mobiel, contactformulier_url: info.form,
    warmtepomp_bevestigd: "ja", ook_actief_in: sorted.slice(1).map(([n]) => n).join("; "),
    outreach_status: "", bron: "OSM/Overpass + website",
  };
}

function summary(rows, label) {
  const withEmail = rows.filter((r) => r.email).length;
  const onlyMobiel = rows.filter((r) => !r.email && r.mobiel_whatsapp).length;
  const onlyForm = rows.filter((r) => !r.email && !r.mobiel_whatsapp && r.contactformulier_url).length;
  const perProv = {};
  for (const r of rows) perProv[r.provincie] = (perProv[r.provincie] || 0) + 1;
  console.log(`\n=== Samenvatting (${label}) ===`);
  console.log(`Totaal:             ${rows.length}`);
  console.log(`Met e-mail:         ${withEmail}`);
  console.log(`Alleen mobiel (WA): ${onlyMobiel}`);
  console.log(`Alleen formulier:   ${onlyForm}`);
  console.log(`\nPer provincie:`);
  for (const p of Object.keys(perProv).sort()) console.log(`  ${p.padEnd(16)} ${perProv[p]}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const cities = readCities();
  const cityOrder = new Map(cities.map((c, i) => [c.name, i]));
  const provinceByName = new Map(cities.map((c) => [c.name, c.province]));
  const reeds = readReeds();
  const placeNames = new Set(cities.map((c) => c.name.toLowerCase()));

  const onlyArg = (process.argv.find((a) => a.startsWith("--only=")) || "").split("=")[1];
  const merge = process.argv.includes("--merge");
  const targetCities = onlyArg ? cities.filter((c) => onlyArg.split(",").map((s) => s.trim()).includes(c.slug)) : cities;

  console.log(`Steden: ${targetCities.map((c) => c.name).join(", ")} (+straal). Bron: OSM/Overpass.\n`);

  const cands = await collectCandidates(targetCities, cityOrder);
  const counters = { block: 0, reeds: 0, multi: 0, noSite: 0 };
  const survivors = preFilter(cands, reeds, placeNames, counters);
  console.log(`\nKandidaten: ${cands.size}. Naar verrijking: ${survivors.length} (blocklist ${counters.block}, reeds-benaderd ${counters.reeds}, multi-vestiging ${counters.multi}, geen website ${counters.noSite}).`);

  let done = 0;
  const enriched = await pool(survivors, FETCH_CONCURRENCY, async (c) => {
    const info = await enrich(c);
    if (++done % 25 === 0) process.stdout.write(`  verrijkt ${done}/${survivors.length}\n`);
    return info ? regiosToRow(c, info) : null;
  });
  const newRows = enriched.filter(Boolean);

  if (!merge) {
    newRows.sort((a, b) => a.provincie.localeCompare(b.provincie) || a.plaats.localeCompare(b.plaats) || a.bedrijf.localeCompare(b.bedrijf));
    writeCsv(newRows);
    summary(newRows, "volledige run");
    console.log(`\nGeschreven naar ${path.relative(ROOT, OUT)}`);
    return;
  }

  // ── Merge in bestaande CSV ──
  const existing = readExisting();
  const byName = new Map(existing.map((r) => [normName(r.bedrijf), r]));
  const byDomain = new Map();
  for (const r of existing) { const d = websiteHost(r.website) || domainOf(r.email); if (d) byDomain.set(d, r); }
  const removed = new Set();
  let added = 0, updated = 0, multiDrop = 0;

  for (const nr of newRows) {
    const nn = normName(nr.bedrijf);
    const dom = websiteHost(nr.website) || domainOf(nr.email);
    const match = byName.get(nn) || (dom ? byDomain.get(dom) : null);
    if (!match) { added++; existing.push(nr); byName.set(nn, nr); if (dom) byDomain.set(dom, nr); continue; }
    // zelfde bedrijf in een andere plaats -> multi-vestiging -> bestaande verwijderen, nieuwe skippen
    if (nr.plaats && match.plaats && nr.plaats.toLowerCase() !== match.plaats.toLowerCase()) { removed.add(match); multiDrop++; continue; }
    // anders: regio toevoegen aan ook_actief_in, primary herberekenen op volgorde
    const regset = new Map();
    const add = (name) => { if (name && cityOrder.has(name)) regset.set(name, { order: cityOrder.get(name), province: provinceByName.get(name) }); };
    add(match.regio);
    match.ook_actief_in.split(";").map((s) => s.trim()).forEach(add);
    add(nr.regio);
    nr.ook_actief_in.split(";").map((s) => s.trim()).forEach(add);
    const sorted = [...regset.entries()].sort((a, b) => a[1].order - b[1].order);
    const [primName, prim] = sorted[0];
    if (primName === nr.regio && primName !== match.regio) match.plaats = nr.plaats || match.plaats; // nieuwe regio wordt primary
    match.regio = primName;
    match.provincie = prim.province;
    match.ook_actief_in = sorted.slice(1).map(([n]) => n).join("; ");
    updated++;
  }

  const final = existing.filter((r) => !removed.has(r));
  final.sort((a, b) => a.provincie.localeCompare(b.provincie) || a.plaats.localeCompare(b.plaats) || a.bedrijf.localeCompare(b.bedrijf));
  writeCsv(final);
  console.log(`\nMerge: ${added} nieuw toegevoegd, ${updated} bestaande bijgewerkt (ook_actief_in), ${multiDrop} verwijderd als multi-vestiging.`);
  summary(final, "na merge");
  console.log(`\nGeschreven naar ${path.relative(ROOT, OUT)}`);
}

main().catch((err) => { console.error(err); process.exit(1); });
