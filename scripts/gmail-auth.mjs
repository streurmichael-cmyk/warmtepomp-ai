// Eenmalige OAuth-autorisatie voor Gmail (scope ALLEEN gmail.compose).
// Zero-dependency installed-app loopback-flow. Slaat het refresh-token op in
// .gmail-token.json (staat in .gitignore). Verstuurt niets.
//
// Draaien: node scripts/gmail-auth.mjs
//   -> print een autorisatie-URL; open die in de browser, log in als
//      partners@warmtepomp.ai en geef toestemming. Het token wordt opgeslagen.

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CRED = path.join(ROOT, ".gmail-credentials.json");
const TOKEN = path.join(ROOT, ".gmail-token.json");
const SCOPE = "https://www.googleapis.com/auth/gmail.compose";

const raw = JSON.parse(fs.readFileSync(CRED, "utf8"));
const cfg = raw.installed || raw.web;
if (!cfg) { console.error("Onbekend credentials-formaat (geen installed/web)."); process.exit(1); }

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${server.address().port}`);
  const code = url.searchParams.get("code");
  const err = url.searchParams.get("error");
  if (err) { res.end("Autorisatie geweigerd: " + err); console.error("Fout:", err); server.close(); process.exit(1); }
  if (!code) { res.end("Wachten op autorisatie…"); return; }
  try {
    const redirectUri = `http://127.0.0.1:${server.address().port}`;
    const body = new URLSearchParams({
      code, client_id: cfg.client_id, client_secret: cfg.client_secret,
      redirect_uri: redirectUri, grant_type: "authorization_code",
    });
    const r = await fetch(cfg.token_uri, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body });
    const tok = await r.json();
    if (!r.ok || tok.error) throw new Error(JSON.stringify(tok));
    const out = {
      access_token: tok.access_token,
      refresh_token: tok.refresh_token,
      scope: tok.scope,
      token_type: tok.token_type,
      expiry: Date.now() + (tok.expires_in || 3600) * 1000,
      client_id: cfg.client_id,
      client_secret: cfg.client_secret,
      token_uri: cfg.token_uri,
    };
    fs.writeFileSync(TOKEN, JSON.stringify(out, null, 2));
    fs.chmodSync(TOKEN, 0o600);
    res.end("Gelukt! Token opgeslagen. Je kunt dit tabblad sluiten.");
    console.log(`\n✓ Token opgeslagen in .gmail-token.json`);
    console.log(`  refresh_token aanwezig: ${tok.refresh_token ? "ja" : "NEE — herhaal met prompt=consent"}`);
    console.log(`  scope: ${tok.scope}`);
    server.close();
    setTimeout(() => process.exit(0), 200);
  } catch (e) {
    res.end("Fout bij token-uitwisseling: " + e.message);
    console.error("Token-uitwisseling mislukt:", e.message);
    server.close();
    process.exit(1);
  }
});

server.listen(0, "127.0.0.1", () => {
  const port = server.address().port;
  const redirectUri = `http://127.0.0.1:${port}`;
  const authUrl = cfg.auth_uri + "?" + new URLSearchParams({
    client_id: cfg.client_id,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
  }).toString();
  console.log("Open deze URL in de browser (log in als partners@warmtepomp.ai):\n");
  console.log(authUrl + "\n");
  console.log(`(luistert op ${redirectUri} — laat dit script draaien tot je toestemming hebt gegeven)`);
});

// Veiligheids-timeout: stop na 10 minuten als er niets gebeurt.
setTimeout(() => { console.error("Time-out: geen autorisatie binnen 10 minuten."); process.exit(1); }, 600000);
