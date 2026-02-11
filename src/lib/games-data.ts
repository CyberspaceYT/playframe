export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  embed_url: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  { id: "1", name: "Action", slug: "action" },
  { id: "2", name: "Puzzle", slug: "puzzle" },
  { id: "3", name: "Arcade", slug: "arcade" },
  { id: "4", name: "Racing", slug: "racing" },
  { id: "5", name: "Sports", slug: "sports" },
  { id: "6", name: "Strategy", slug: "strategy" },
  { id: "7", name: "Adventure", slug: "adventure" },
  { id: "8", name: "Multiplayer", slug: "multiplayer" },
];

export const games: Game[] = [
  { id: "1", title: "Slope", description: "Roll a ball down a slope and avoid obstacles.", category: "arcade", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/94945631804ade3568c3d49f45862ab3.png", embed_url: "https://slope-game.github.io/" },
  { id: "2", title: "2048", description: "Combine tiles to reach 2048.", category: "puzzle", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/4b47bdd126d02607b149fdd6fe44faae.png", embed_url: "https://play2048.co/" },
  { id: "3", title: "Tetris", description: "The classic block-stacking puzzle game.", category: "puzzle", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/a2f71428-3b7a-4dd6-b813-19bed9e9adab.png", embed_url: "https://tetris.com/play-tetris" },
  { id: "4", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f99c530b-dd7c-4f83-b0f7-91490cf7a519.png", embed_url: "https://orteil.dashnet.org/cookieclicker/" },
  { id: "5", title: "Moto X3M", description: "Extreme motorcycle stunts and racing.", category: "racing", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/8728343a7f53efab791c308e68bab498.png", embed_url: "https://poki.com/en/g/moto-x3m" },
  { id: "6", title: "Run 3", description: "Run through space tunnels.", category: "action", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/d98d524bd6203a9b5dca35fe46a16fa6.png", embed_url: "https://run3.io/" },
  { id: "7", title: "Subway Surfers", description: "Surf through the subway and dodge trains.", category: "action", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/eab5a5c8-5be0-4856-a498-a665be3e30c6.png", embed_url: "https://poki.com/en/g/subway-surfers" },
  { id: "8", title: "Basketball Stars", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/610e9aa0-af88-428f-84a3-cffb1e753e11.png", embed_url: "https://poki.com/en/g/basketball-stars" },
  { id: "9", title: "Paper.io 2", description: "Conquer territory in this .io game.", category: "multiplayer", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/0e981814-3be4-4b4b-bbf5-61dbaa3def33.png", embed_url: "https://paper-io.com/" },
  { id: "10", title: "Chess", description: "Classic chess against AI or friends.", category: "strategy", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/chess.png", embed_url: "https://www.chess.com/play/computer" },
  { id: "11", title: "Temple Run 2", description: "Run, jump, and slide through ancient temples.", category: "action", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/1c34bc56-2e01-49c8-8ca9-c9ea8c30f380.png", embed_url: "https://poki.com/en/g/temple-run-2" },
  { id: "12", title: "Crossy Road", description: "Cross busy roads without getting hit.", category: "arcade", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/crossy-road.png", embed_url: "https://poki.com/en/g/crossy-road" },
  { id: "13", title: "Drift Hunters", description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/1b2ee6d2-1a9c-4bc3-8b7d-bf3e3a080b50.png", embed_url: "https://poki.com/en/g/drift-hunters" },
  { id: "14", title: "Stickman Hook", description: "Swing through levels like Spider-Man.", category: "action", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/5a57d7c4-9c44-4e04-b0f7-dd2fc8db2de6.png", embed_url: "https://poki.com/en/g/stickman-hook" },
  { id: "15", title: "Agar.io", description: "Grow your cell by consuming others.", category: "multiplayer", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/agario.png", embed_url: "https://agar.io/" },
  { id: "16", title: "Tunnel Rush", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/tunnel-rush.png", embed_url: "https://tunnelrush.github.io/" },
  { id: "17", title: "Fireboy and Watergirl", description: "Cooperative puzzle platformer.", category: "puzzle", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/fireboy-watergirl.png", embed_url: "https://poki.com/en/g/fireboy-and-watergirl-in-the-forest-temple" },
  { id: "18", title: "Geometry Dash", description: "Jump and fly through rhythmic levels.", category: "action", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/geometry-dash.png", embed_url: "https://geometrydashgame.io/" },
  { id: "19", title: "Snake.io", description: "Classic snake game meets .io.", category: "multiplayer", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/snake-io.png", embed_url: "https://poki.com/en/g/snake-io" },
  { id: "20", title: "Tower Defense", description: "Defend your base with strategic towers.", category: "strategy", thumbnail_url: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/tower-defense.png", embed_url: "https://poki.com/en/g/tower-defense" },
];
