import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sql } from "@vercel/postgres";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function migrate() {
  const schema = readFileSync(join(__dirname, "../lib/db-schema.sql"), "utf8");
  // Strip volledige commentregels (-- ...) vóór het splitsen, zodat een comment
  // direct boven een statement dat statement niet per ongeluk wegfiltert.
  const zonderComments = schema
    .split("\n")
    .filter((line) => !line.trim().startsWith("--"))
    .join("\n");
  const statements = zonderComments
    .split(";")
    .map((statement) => statement.trim())
    .filter((statement) => statement.length > 0);

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
