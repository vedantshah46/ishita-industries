-- ═══════════════════════════════════════════════════════════════════
-- Ishita Industries — Seed Data
-- Run this in the Supabase SQL Editor AFTER running supabase-schema.sql
-- NOTE: image_url columns are left empty — upload images via the
--       Admin panel (/admin/products) and update them there.
-- ═══════════════════════════════════════════════════════════════════

-- ── Precision Machining ──────────────────────────────────────────
insert into products (slug, name, category, image_url, is_active, sort_order) values
  ('brass-turned-component',   'Brass Turned Component',   'precision', '', true, 0),
  ('brass-forged-component',   'Brass Forged Component',   'precision', '', true, 1),
  ('brass-milling-component',  'Brass Milling Component',  'precision', '', true, 2),
  ('brass-pressed-component',  'Brass Pressed Component',  'precision', '', true, 3),
  ('brass-stamped-component',  'Brass Stamped Component',  'precision', '', true, 4),
  ('brass-casting-component',  'Brass Casting Component',  'precision', '', true, 5);

-- ── Industrial Components ────────────────────────────────────────
insert into products (slug, name, category, image_url, is_active, sort_order) values
  ('electric',        'Electric',        'industrial', '', true, 0),
  ('automotive',      'Automotive',      'industrial', '', true, 1),
  ('fastner',         'Fastner',         'industrial', '', true, 2),
  ('engineering',     'Engineering',     'industrial', '', true, 3),
  ('cpvc-ppr-inserts','CPVC PPR Inserts','industrial', '', true, 4);

-- ── Extrusion Products ───────────────────────────────────────────
insert into products (slug, name, category, image_url, is_active, sort_order) values
  ('brass-extrusion-rods',       'Brass Extrusion Rods',           'extrusion', '', true, 0),
  ('brass-hollow-rods',          'Brass Hollow Rods',              'extrusion', '', true, 1),
  ('brass-profile-section-rods', 'Brass Profile & Section Rods',   'extrusion', '', true, 2);
