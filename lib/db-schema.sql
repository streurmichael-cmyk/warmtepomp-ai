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
  consent_forwarding boolean not null default false,
  consent_at timestamptz,
  consent_disclosure_version text,
  status text not null default 'nieuw'
);

-- ip_hash voor bestaande installaties.
alter table leads add column if not exists ip_hash text;

-- Single-opt-in: de double-opt-in e-mailverificatie is verwijderd. Ruim oude kolommen op.
drop index if exists leads_verify_token_idx;
alter table leads drop column if exists verified;
alter table leads drop column if exists verify_token;

-- Aantoonbare forwarding-toestemming (gezet wanneer de bezoeker "Vraag offertes aan" kiest).
alter table leads add column if not exists consent_forwarding boolean not null default false;
alter table leads add column if not exists consent_at timestamptz;
alter table leads add column if not exists consent_disclosure_version text;

create index if not exists leads_created_at_idx on leads (created_at);
create index if not exists leads_matched_at_idx on leads (matched_at);
create index if not exists leads_ip_hash_idx on leads (ip_hash);

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

-- IndexNow: houdt per blog-slug bij welke "signature" (updatedAt ?? publishedAt)
-- al bij IndexNow is ingediend, zodat de cron alleen nieuwe of gewijzigde posts
-- opnieuw indient (idempotent, geen dubbele indieningen).
create table if not exists indexnow_submissions (
  slug text primary key,
  signature text not null,
  submitted_at timestamptz not null default now()
);
