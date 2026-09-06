export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  embed_url?: string;
  html_file?: string;
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
  { id: "9", name: "Horror", slug: "horror" },
];

export const games: Game[] = [
  { id: "1", title: "Deltarune", description: "Two worlds, one destiny. Light and dark must align.", category: "adventure", thumbnail_url: "https://art.pixilart.com/5b20349074441ba.png", html_file: "/games/deltarune.html" },
  { id: "2", title: "Backrooms", description: "Horror maze escape.", category: "horror", thumbnail_url: "https://fngames.io/data/image/game/backrooms.png", html_file: "/games/backrooms.html" },
  { id: "3", title: "Basket Bros.", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://basketbros-game.github.io/images/logo.png", html_file: "/games/basket-bros.html" },
  { id: "4", title: "Basketball Stars", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/basketball-stars.png", html_file: "/games/basketball-stars.html" },
  { id: "5", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://play-lh.googleusercontent.com/Z1MOuuiD05ZN5LkVmMEvKF0mqAc-Fkna.png", html_file: "/games/cookie-clicker.html" },
  { id: "6", title: "Crazy Cattle 3D", description: "Tipping cow chaos.", category: "action", thumbnail_url: "https://crazy-cattle.co/data/image/game/crazy-cattle/crazy-cattle.jpg", html_file: "/games/crazy-cattle-3d.html" },
  { id: "7", title: "Death Run 3D", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://geometryvibes.io/upload/imgs/death-run-3d.png", html_file: "/games/death-run-3d.html" },
  { id: "8", title: "Drive Mad", description: "Wacky obstacle driving game.", category: "arcade", thumbnail_url: "https://jrdn.calculra.store/assets/images/game/drive-mad.png", html_file: "/games/drive-mad.html" },
  { id: "9", title: "Drift Hunters", description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub501.app51334/icon/drift-hunters.png", html_file: "/games/drift-hunters.html" },
  { id: "10", title: "Escape Road", description: "Escape police in vehicles.", category: "arcade", thumbnail_url: "https://escaperoad.org/data/image/game/escape-road-game.png", html_file: "/games/escape-road.html" },
  { id: "11", title: "Fireboy and Watergirl", description: "Cooperative puzzle platformer.", category: "puzzle", thumbnail_url: "https://thiefpuzzle.io/data/image/game/fireboy-and-watergirl.jpg", html_file: "/games/fireboy-watergirl.html" },
  { id: "12", title: "Five Nights at Epstein's", description: "Horror parody game.", category: "horror", thumbnail_url: "https://topgames.gg/data/image/game/five-nights-at-epsteins.png", html_file: "/games/five-nights-epsteins.html" },
  { id: "13", title: "FNAF 1", description: "Survive animatronics.", category: "horror", thumbnail_url: "https://preview.redd.it/2ehubx31htz51.jpg?width=640&crop=smart&auto=webp&s=d94a00cd1c657e5e03c3.jpg", html_file: "/games/fnaf-1.html" },
  { id: "14", title: "FNAF 2", description: "More animatronic chaos.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKH.png", html_file: "/games/fnaf-2.html" },
  { id: "15", title: "FNAF 3", description: "Springtrap horror.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/A9kng-j9BLaA2dhRGsPExmjy9E4vfG-GHefvmyywT0J67ZEPGONIsFYlIokL.png", html_file: "/games/fnaf-3.html" },
  { id: "16", title: "FNAF 4", description: "Nightmare horror.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/od7MI1uOFMjj2Kvtk4Tc1Rt-YdDFmgLjE33yZlVINjhbj_NZ5ikZGT_YWpCP0.png", html_file: "/games/fnaf-4.html" },
  { id: "17", title: "Friday Night Funkin'", description: "Rhythm battle game.", category: "strategy", thumbnail_url: "https://static.wikia.nocookie.net/logopedia/images/f/fb/Fnf_mobile_icon.png/revision/latest.png", html_file: "/games/friday-night-funkin.html" },
  { id: "18", title: "Fruit Ninja", description: "Slice fruit, avoid bombs.", category: "arcade", thumbnail_url: "https://cdn.jim-nielsen.com/ios/512/fruit-ninja-2020-08-31.png?rf=1024", html_file: "/games/fruit-ninja.html" },
  { id: "19", title: "Geometry Dash", description: "Jump and fly through rhythmic levels.", category: "action", thumbnail_url: "https://cdn.mobygames.com/covers/7168198-geometry-dash-iphone-front-cover.jpg", html_file: "/games/geometry-dash.html" },
  { id: "20", title: "Hypper Sandbox", description: "GMod-style sandbox chaos.", category: "action", thumbnail_url: "https://play-lh.googleusercontent.com/Y1wVN6R2Mocq_Pg1XPRUU-6TotR5AApz1-X6zcRIqzbhN.png", html_file: "/games/hypper-sandbox.html" },
  { id: "21", title: "Level Devil", description: "Tricky platformer.", category: "puzzle", thumbnail_url: "https://spacewavesgame.io/data/image/game/level-devil.jpg", html_file: "/games/level-devil.html" },
  { id: "22", title: "Merge Round Racers", description: "Merge cars and race.", category: "racing", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=auto/merge-round-racers.png", html_file: "/games/merge-round-racers.html" },
  { id: "23", title: "Minecraft 1.8.8", description: "Sandbox cube world.", category: "adventure", thumbnail_url: "https://cdn.worldvectorlogo.com/logos/minecraft-launcher.svg", html_file: "/games/minecraft.html" },
  { id: "24", title: "Moto X3M", description: "Extreme motorcycle stunts and racing.", category: "racing", thumbnail_url: "https://img.utdstc.com/icon/d24/aad/d24aad08f82ff37844908451206fb5351018de4f7.png", html_file: "/games/moto-x3m.html" },
  { id: "25", title: "Pako Highway", description: "Traffic escape driving game.", category: "racing", thumbnail_url: "https://cdn.gracza.pl/galeria/gry13/grupy/276001531.jpg", html_file: "/games/pako-highway.html" },
  { id: "26", title: "Paper.io 2", description: "Conquer territory in this .io game.", category: "multiplayer", thumbnail_url: "https://play-lh.googleusercontent.com/SWTpYqsX9RN2YirCDnAjQ8qsbgn4UrHkRR.png", html_file: "/games/paperio-2.html" },
  { id: "27", title: "Plants vs Zombies", description: "Plants defend against zombies.", category: "strategy", thumbnail_url: "https://m.media-amazon.com/images/I/61Aethog1iL.png", html_file: "/games/plants-vs-zombies.html" },
  { id: "28", title: "PolyTrack", description: "Race down intense tracks full of corners and jumps.", category: "racing", thumbnail_url: "https://imgs.crazygames.com/polytrack_1x1/20260310095956/polytrack_1x1-cover.png", html_file: "/games/polytrack.html" },
  { id: "29", title: "R.E.P.O.", description: "Robots explore dangerous environments.", category: "horror", thumbnail_url: "https://cdn2.steamgriddb.com/icon/9ab33b0ea61bf6155af3e599d105416d/32/256x256.png", html_file: "/games/repo.html" },
  { id: "30", title: "Red Ball 4", description: "Ball platform puzzle game.", category: "puzzle", thumbnail_url: "https://evilgames.eu/img/flash/og-red-ball-4-vol1.png", html_file: "/games/red-ball-4.html" },
  { id: "31", title: "Retro Bowl", description: "Football management + gameplay.", category: "sports", thumbnail_url: "https://pbs.twimg.com/profile_images/1217942835527409665/swRMqEkK_400x400.jpg", html_file: "/games/retro-bowl.html" },
  { id: "32", title: "Run 3", description: "Run through space tunnels.", category: "action", thumbnail_url: "https://cdn2.steamgriddb.com/icon_thumb/833cc7b10966fa0202801496bffccb37.png", html_file: "/games/run-3.html" },
  { id: "33", title: "Slime Rancher", description: "Collect slimes and profit.", category: "adventure", thumbnail_url: "https://assets1.ignimgs.com/2018/08/30/slime-rancher---button-fin-1535671208121.jpg", html_file: "/games/slime-rancher.html" },
  { id: "34", title: "Slope", description: "Roll a ball down a slope and avoid obstacles.", category: "arcade", thumbnail_url: "https://images.dwncdn.net/images/t_app-icon-l/p/35ae8647-5683-4499-9955-8e5a7c8f9e1a.png", html_file: "/games/slope.html" },
  { id: "35", title: "Snow Rider 3D", description: "Ride down a mountain on a sled without smashing into trees and snowmen!", category: "strategy", thumbnail_url: "https://static.keygames.com/2/115102/100968/1024x1024/snow-rider-3d.webp", html_file: "/games/snow-rider-3d.html" },
  { id: "36", title: "Snow Rider 3D (Alt)", description: "Custom sled racing experience.", category: "strategy", thumbnail_url: "https://static.keygames.com/2/115102/100968/1024x1024/snow-rider-3d.webp", html_file: "/games/snow-rider-3d-alt.html" },
  { id: "37", title: "Stickman Hook", description: "Swing through levels like Spider-Man.", category: "action", thumbnail_url: "https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1.png", html_file: "/games/stickman-hook.html" },
  { id: "38", title: "Subway Surfers", description: "Surf through the subway and dodge trains.", category: "action", thumbnail_url: "https://i.pinimg.com/564x/26/2e/a0/262ea058aba7b39950e4b1c5348be001.jpg", html_file: "/games/subway-surfers.html" },
  { id: "39", title: "Baldi's Basics", description: "He hears every door you open.", category: "strategy", thumbnail_url: "https://preview.redd.it/subreddit-pfp-concept-made-by-me-v0-zbmbgi4qeo2e1.png?width=640&crop=smart&auto=webp&s=5841479afea7350ed089c611d63e673c18636f95", html_file: "/games/baldi.html" },
  { id: "40", title: "Temple Run 2", description: "Run, jump, and slide through ancient temples.", category: "action", thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/9/98/Temple_Run_2.png", html_file: "/games/temple-run-2.html" },
  { id: "41", title: "Tiletopia", description: "Place tiles to build islands.", category: "puzzle", thumbnail_url: "https://6nilllqpgkm6o.h5games.usercontent.goog/v/7d3689i7s5gfo/MarketingAssets/tiletopia.png", html_file: "/games/tiletopia.html" },
  { id: "42", title: "Tiny Fishing", description: "Catch small trouts or even sharks in this arcade fishing game.", category: "arcade", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/tiny-fishing.png", html_file: "/games/tiny-fishing.html" },
  { id: "43", title: "Ultrakill", description: "Fast combat FPS.", category: "action", thumbnail_url: "https://assets-prd.ignimgs.com/2022/04/08/ultrakill-1649459578320.jpg", html_file: "/games/ultrakill.html" },
  { id: "44", title: "WebFishing", description: "Fishing + chatting multiplayer.", category: "multiplayer", thumbnail_url: "https://cdn2.steamgriddb.com/grid/f85c6e30462acd89648c010d3f6fecb4.jpg", html_file: "/games/webfishing.html" },
];
