-- ============================================================
--  CP AMMAN ISSUE TRACKER v3 — Supabase Setup
--  Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- Drop old tables if upgrading
drop table if exists issues;
drop table if exists users;

-- 1. USERS TABLE
create table users (
  id         bigint generated always as identity primary key,
  username   text unique not null,
  password   text not null,
  role       text not null,   -- 'management' or 'department'
  dept       text,
  name_en    text,
  name_ar    text
);

-- 2. ISSUES TABLE (v3 — multiple photos, RBAC, notifications)
create table issues (
  id                   uuid default gen_random_uuid() primary key,
  title                text,
  location             text,
  priority             text default 'medium',
  status               text default 'open',
  comment              text,
  eta_from             date,
  eta_to               date,
  assigned_depts       text[],
  photo_urls           text[],              -- multiple photos
  resolution_photo_urls text[],             -- multiple resolution photos
  dept_note            text,
  mgmt_note            text,
  reported_by          text,               -- username
  reported_by_dept     text,               -- dept of reporter (null = management)
  reported_by_role     text,               -- 'management' or 'department'
  updated_by           text,
  created_at           timestamptz default now(),
  updated_at           timestamptz default now()
);

-- 3. NOTIFICATIONS TABLE
create table notifications (
  id         bigint generated always as identity primary key,
  issue_id   uuid references issues(id) on delete cascade,
  type       text,   -- 'new_issue' | 'status_update'
  message    text,
  created_at timestamptz default now(),
  seen_by    text[]  default '{}'
);

-- 4. Disable RLS
alter table users        disable row level security;
alter table issues       disable row level security;
alter table notifications disable row level security;

-- 5. DEFAULT USERS
insert into users (username, password, role, dept, name_en, name_ar) values
  ('management',   'cp.mgmt2024',  'management', null,           'Management',         'الإدارة'),
  ('engineering',  'eng2024',      'department', 'Engineering',  'Engineering',        'الهندسة'),
  ('housekeeping', 'hk2024',       'department', 'Housekeeping', 'Housekeeping',       'التدبير المنزلي'),
  ('frontoffice',  'fo2024',       'department', 'Front Office', 'Front Office',       'الاستقبال'),
  ('fnb',          'fnb2024',      'department', 'F&B',          'Food & Beverage',    'الأغذية والمشروبات'),
  ('security',     'sec2024',      'department', 'Security',     'Security',           'الأمن')
on conflict (username) do nothing;

-- ⚠️ CHANGE ALL PASSWORDS AFTER FIRST LOGIN
