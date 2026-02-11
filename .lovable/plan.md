
# PlayFrame — Game Portal Website

## Overview
A clean, modern gaming portal where users can browse and play games directly in the browser via iframe embeds. An admin panel allows you to manage the game catalog without editing code.

---

## Pages & Features

### 1. Home Page
- Hero section with the PlayFrame branding and a brief welcome message
- Search bar to find games by name
- Category filter chips (Action, Puzzle, Sports, Arcade, Racing, Strategy, etc.)
- Responsive game card grid showing game thumbnails, titles, and categories
- Click a card to open the game

### 2. Game Player Page
- Full-screen iframe embed of the selected game
- Game title and description displayed above/below
- Back button to return to the catalog
- Fullscreen toggle button for the iframe

### 3. Categories Page
- Browse all available categories
- Each category shows a count of games and links to a filtered view

### 4. Admin Panel (requires backend)
- Login-protected admin page
- Add new games (title, description, category, thumbnail URL, game embed URL)
- Edit or delete existing games
- Manage categories
- Simple table/list view of all games with quick actions

---

## Design
- Clean, modern dark theme with subtle accents
- Responsive layout — works on desktop, tablet, and mobile
- Card-based game grid with hover effects
- Minimal navigation: logo, search, categories, and an admin link (hidden unless logged in)

## Backend (Lovable Cloud / Supabase)
- **Games table**: stores title, description, category, thumbnail URL, embed URL
- **Categories table**: list of game categories
- **Authentication**: simple admin login to access the management panel
- **RLS policies**: public read access for games, admin-only write access

## Starter Content
- Pre-populated with ~20 popular HTML5 game embed URLs to get started (you can add more via the admin panel)

## Disclaimer
- Footer disclaimer noting all game content belongs to original creators
