-- Profiles table (auto-created on signup via trigger)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- Game visits table (stores per-user visit counts for each game)
create table if not exists public.game_visits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  game_id text not null,
  visit_count int default 1,
  last_visited_at timestamptz default now(),
  unique(user_id, game_id)
);

alter table public.game_visits enable row level security;

create policy "game_visits_select_own" on public.game_visits for select using (auth.uid() = user_id);
create policy "game_visits_insert_own" on public.game_visits for insert with check (auth.uid() = user_id);
create policy "game_visits_update_own" on public.game_visits for update using (auth.uid() = user_id);
create policy "game_visits_delete_own" on public.game_visits for delete using (auth.uid() = user_id);
