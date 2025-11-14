-- Ensure the pgcrypto extension exists so we can generate UUIDs if we need to create the table.
create extension if not exists "pgcrypto";

-- Ensure the reads table exists. If the project already has the table this statement is a no-op.
create table if not exists public.reads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete cascade,
  text text,
  status text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

-- Add the text column that will store the generated words for the read session.
alter table if exists public.reads
  add column if not exists text text;

-- Add the status column to track generation progress.
alter table if exists public.reads
  add column if not exists status text;

alter table if exists public.reads
  alter column status set default 'PENDING';

-- Backfill existing rows so that null statuses default to pending.
update public.reads
set status = coalesce(nullif(upper(trim(status)), ''), 'PENDING')
where status is null or trim(status) = '';

-- Enforce a simple status domain. OK indicates success, ERROR indicates failure and
-- PENDING represents an in-flight generation.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'reads_status_check'
  ) then
    alter table public.reads
      add constraint reads_status_check
      check (status is null or upper(status) in ('OK', 'ERROR', 'PENDING'));
  end if;
end $$;

comment on column public.reads.text is 'Text that the user will read out loud.';
comment on column public.reads.status is 'Generation status: OK, ERROR, or PENDING.';
