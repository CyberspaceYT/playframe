# PlayFrame

A small React + Vite game hub designed to be easy to fork and customize.

## Quick customization

- **Games:** edit `src/lib/games-data.ts` to add, remove, or rename games.
- **Scrolling banner:** edit the `announcements` array at the top of `src/components/Navbar.tsx`.
- **Homepage copy:** edit `src/pages/Index.tsx`.
- **Colors and layout:** edit `src/index.css` and `src/App.css`.
- **Game files:** put HTML game files in `public/games/`, then reference them from `games-data.ts`.

## Run locally

```bash
npm install
npm run dev
```

Keep changes focused: most forks only need to touch `games-data.ts`, `Navbar.tsx`, and the two CSS files.
