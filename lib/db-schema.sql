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
  status text not null default 'nieuw'
);

create index if not exists leads_created_at_idx on leads (created_at);
create index if not exists leads_matched_at_idx on leads (matched_at);

create table if not exists aardgasvrij_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name_encrypted text not null,
  email_encrypted text not null,
  postcode text not null
);

create index if not exists aardgasvrij_signups_created_at_idx on aardgasvrij_signups (created_at);
