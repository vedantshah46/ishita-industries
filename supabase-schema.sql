-- ═══════════════════════════════════════════════════════════════════
-- Ishita Industries — Supabase Schema
-- Run this in the Supabase SQL Editor to set up the database.
-- ═══════════════════════════════════════════════════════════════════

-- ── Products ─────────────────────────────────────────────────────

create table products (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  description text,
  category    text not null,               -- 'precision' | 'industrial' | 'extrusion'
  image_url   text,
  is_active   boolean default true,
  sort_order  integer default 0,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create table product_specs (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid references products(id) on delete cascade,
  label       text not null,
  value       text not null,
  sort_order  integer default 0
);

create table product_images (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid references products(id) on delete cascade,
  image_url   text not null,
  alt_text    text,
  sort_order  integer default 0
);

create table product_tags (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid references products(id) on delete cascade,
  tag         text not null
);


-- ── Blog Posts ───────────────────────────────────────────────────

create table blog_posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  excerpt       text,
  content       text,
  cover_url     text,
  author        text default 'Ishita Industries',
  tags          text[],
  is_published  boolean default false,
  published_at  timestamptz,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);


-- ═══════════════════════════════════════════════════════════════════
-- Table-level grants (required so anon/authenticated roles can access)
-- ═══════════════════════════════════════════════════════════════════

grant select on products        to anon, authenticated;
grant select on product_specs   to anon, authenticated;
grant select on product_images  to anon, authenticated;
grant select on product_tags    to anon, authenticated;
grant select on blog_posts      to anon, authenticated;

grant insert, update, delete on products        to authenticated;
grant insert, update, delete on product_specs   to authenticated;
grant insert, update, delete on product_images  to authenticated;
grant insert, update, delete on product_tags    to authenticated;
grant insert, update, delete on blog_posts      to authenticated;


-- ═══════════════════════════════════════════════════════════════════
-- Row Level Security (RLS)
-- ═══════════════════════════════════════════════════════════════════

-- Products
alter table products enable row level security;

create policy "public read active products"
  on products for select
  using (is_active = true);

create policy "admin full access products"
  on products for all
  using (auth.role() = 'authenticated');

-- Product Specs
alter table product_specs enable row level security;

create policy "public read product specs"
  on product_specs for select
  using (true);

create policy "admin full access product specs"
  on product_specs for all
  using (auth.role() = 'authenticated');

-- Product Images
alter table product_images enable row level security;

create policy "public read product images"
  on product_images for select
  using (true);

create policy "admin full access product images"
  on product_images for all
  using (auth.role() = 'authenticated');

-- Product Tags
alter table product_tags enable row level security;

create policy "public read product tags"
  on product_tags for select
  using (true);

create policy "admin full access product tags"
  on product_tags for all
  using (auth.role() = 'authenticated');

-- Blog Posts
alter table blog_posts enable row level security;

create policy "public read published posts"
  on blog_posts for select
  using (is_published = true);

create policy "admin full access blog"
  on blog_posts for all
  using (auth.role() = 'authenticated');


-- ═══════════════════════════════════════════════════════════════════
-- Storage Buckets
-- ═══════════════════════════════════════════════════════════════════

-- Create buckets
insert into storage.buckets (id, name, public) values ('product-images', 'product-images', true);
insert into storage.buckets (id, name, public) values ('blog-images', 'blog-images', true);

-- Product images: anyone can view, only authenticated users can upload/delete
create policy "public read product images bucket"
  on storage.objects for select
  using (bucket_id = 'product-images');

create policy "admin upload product images"
  on storage.objects for insert
  with check (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "admin update product images"
  on storage.objects for update
  using (bucket_id = 'product-images' and auth.role() = 'authenticated');

create policy "admin delete product images"
  on storage.objects for delete
  using (bucket_id = 'product-images' and auth.role() = 'authenticated');

-- Blog images: anyone can view, only authenticated users can upload/delete
create policy "public read blog images bucket"
  on storage.objects for select
  using (bucket_id = 'blog-images');

create policy "admin upload blog images"
  on storage.objects for insert
  with check (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "admin update blog images"
  on storage.objects for update
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');

create policy "admin delete blog images"
  on storage.objects for delete
  using (bucket_id = 'blog-images' and auth.role() = 'authenticated');
