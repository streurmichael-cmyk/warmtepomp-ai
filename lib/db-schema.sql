-- Schema voor warmtepomp.ai
-- Uitvoeren met: npm run db:migrate

create extension if not exists pgcrypto;

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  matched_at timestamptz,
  name_encrypted text not null,
  email_encrypted text not null,
  phone_encrypted text,
  postcode text,
  huisnummer text,
  woningtype text,
  advies_type text,
  advies jsonb,
  ip_hash text,
  verified boolean not null default false,
  verify_token text,
  status text not null default 'nieuw'
);

-- ip_hash voor bestaande installaties toevoegen (max. 2 leads per IP).
alter table leads add column if not exists ip_hash text;
-- E-mailverificatie (double opt-in): lead pas geldig na klik op bevestigingslink.
alter table leads add column if not exists verified boolean not null default false;
alter table leads add column if not exists verify_token text;

create index if not exists leads_created_at_idx on leads (created_at);
create index if not exists leads_matched_at_idx on leads (matched_at);
create index if not exists leads_ip_hash_idx on leads (ip_hash);
create index if not exists leads_verify_token_idx on leads (verify_token);

create table if not exists aardgasvrij_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name_encrypted text not null,
  email_encrypted text not null,
  postcode text not null,
  bron text not null default 'aardgasvrij'
);

create index if not exists aardgasvrij_signups_created_at_idx on aardgasvrij_signups (created_at);

-- Bron onderscheidt reguliere aardgasvrij-aanmeldingen van exit-contacten uit de keuzehulp
-- (stadsverwarming/blokverwarming), zodat ze gescheiden blijven van installateur-leads.
alter table aardgasvrij_signups add column if not exists bron text not null default 'aardgasvrij';
