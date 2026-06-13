import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sql } from "@vercel/postgres";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function migrate() {
  const schema = readFileSync(join(__dirname, "../lib/db-schema.sql"), "utf8");
  const statements = schema
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0 && !statement.startsWith("--"));

  for (const statement of statements) {
    await sql.query(statement);
    console.log("OK:", statement.split("\n")[0]);
  }

  console.log("Migratie voltooid.");
}

migrate().catch((err) => {
  console.error("Migratie mislukt:", err);
  process.exit(1);
});
