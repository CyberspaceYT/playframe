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
  { id: "1", title: "Slope", description: "Roll a ball down a slope and avoid obstacles.", category: "arcade", thumbnail_url: "https://images.dwncdn.net/images/t_app-icon-l/p/35ae8647-5683-4499-9955-52234ac14e09/2062050/7513_4-78266017-logo", html_file: "/slope.html" },
  { id: "2", title: "PolyTrack", description: "Race down intense tracks full of corners and jumps.", category: "racing", thumbnail_url: "https://imgs.crazygames.com/polytrack_1x1/20260310095956/polytrack_1x1-cover?format=auto&quality=70&metadata=none", html_file: "/polytrack.html" },
  { id: "3", title: "Snow Rider 3D", description: "Ride down a mountain on a sled without smashing into trees and snowmen!", category: "strategy", thumbnail_url: "https://static.keygames.com/2/115102/100968/1024x1024/snow-rider-3d.webp", html_file: "/snow-rider-3d.html" },
  { id: "4", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://play-lh.googleusercontent.com/Z1MOuuiD05ZN5LkVmMEvKF0mqAc-FknaQ2j8s4dZiO-LSPQX4EEA3RVJdlQEtxe96ok", html_file: "/cookie-clicker.html" },
  { id: "5", title: "Moto X3M", description: "Extreme motorcycle stunts and racing.", category: "racing", thumbnail_url: "https://img.utdstc.com/icon/d24/aad/d24aad08f82ff37844908451206fb5351018de4f7afcbc3092b53632f8efec14:200", html_file: "/moto-x3m.html" },
  { id: "6", title: "Run 3", description: "Run through space tunnels.", category: "action", thumbnail_url: "https://cdn2.steamgriddb.com/icon_thumb/833cc7b10966fa0202801496bffccb37.png", html_file: "/run-3.html" },
  { id: "7", title: "Subway Surfers", description: "Surf through the subway and dodge trains.", category: "action", thumbnail_url: "https://i.pinimg.com/564x/26/2e/a0/262ea058aba7b39950e4b1c5348be001.jpg", html_file: "/subway-surfers.html" },
  { id: "8", title: "Basketball Stars", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/bc02c9cdfc5b424ddf343b01edf791ce/basketball-stars.png", html_file: "/basketball-stars.html" },
  { id: "9", title: "Paper.io 2", description: "Conquer territory in this .io game.", category: "multiplayer", thumbnail_url: "https://play-lh.googleusercontent.com/SWTpYqsX9RN2YirCDnAjQ8qsbgn4UrHkRRGsjwuASnHMVqssIvWKzq82mP82y_ffBSE=w240-h480-rw", html_file: "/paper-io-2.html" },
  { id: "10", title: "Tiny Fishing", description: "Catch small trouts or even sharks in this arcade fishing game.", category: "arcade", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/c8cb366d52fc2a67fb313c344efdbc9e/tiny-fishing.png", html_file: "/tiny-fishing.html" },
  { id: "11", title: "Temple Run 2", description: "Run, jump, and slide through ancient temples.", category: "action", thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/9/98/Temple_Run_2.png", html_file: "/temple-run-2.html" },
  { id: "12", title: "Basket Bros.", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://basketbros-game.github.io/images/logo.png", html_file: "/basket-bros.html" },
  { id: "13", title: "Drift Hunters", description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub501.app51334/icon/drift-hunters.png", html_file: "/drift-hunters.html" },
  { id: "14", title: "Stickman Hook", description: "Swing through levels like Spider-Man.", category: "action", thumbnail_url: "https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl", html_file: "/stickman-hook.html" },
  { id: "15", title: "Agar.io", description: "Grow your cell by consuming others.", category: "multiplayer", thumbnail_url: "https://assets-prd.ignimgs.com/2024/09/22/agario-1726971440487.jpg", html_file: "/tricksplit.html" },
  { id: "16", title: "Death Run 3D", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://geometryvibes.io/upload/imgs/death-run-3d.png", html_file: "/death-run-3d.html" },
  { id: "17", title: "Fireboy and Watergirl", description: "Cooperative puzzle platformer.", category: "puzzle", thumbnail_url: "https://thiefpuzzle.io/data/image/game/fireboy-and-watergirl.jpg", html_file: "/fireboy-watergirl.html" },
  { id: "18", title: "Geometry Dash", description: "Jump and fly through rhythmic levels.", category: "action", thumbnail_url: "https://cdn.mobygames.com/covers/7168198-geometry-dash-iphone-front-cover.jpg", html_file: "/geometry-dash.html" },
  { id: "19", title: "Slither.io", description: "Classic snake game meets multiplayer.", category: "multiplayer", thumbnail_url: "https://pbs.twimg.com/profile_images/1854966120509267968/gUTLTAMd_400x400.jpg", html_file: "/snake-io.html" },
  { id: "20", title: "Tiletopia", description: "Place tiles to build islands.", category: "puzzle", thumbnail_url: "https://6nilllqpgkm6o.h5games.usercontent.goog/v/7d3689i7s5gfo/MarketingAssets/tiletopia-app-icon-512x512.png", html_file: "/tiletopia.html" },
  { id: "21", title: "Funny Shooter 2", description: "Goofy shooter with big bosses.", category: "action", thumbnail_url: "https://funny-shooter-22.github.io/image/cache/catalog/g4ames/funny-800x800.jpg", html_file: "/funny-shooter-2.html" },
  { id: "22", title: "Pako Highway", description: "Traffic escape driving game.", category: "racing", thumbnail_url: "https://cdn.gracza.pl/galeria/gry13/grupy/276001531.jpg", html_file: "/pako-highway.html" },
  { id: "23", title: "Plants vs Zombies", description: "Plants defend against zombies.", category: "strategy", thumbnail_url: "https://m.media-amazon.com/images/I/61Aethog1iL.png", html_file: "/plants-vs-zombies.html" },
  { id: "24", title: "R.E.P.O.", description: "Robots explore dangerous environments.", category: "horror", thumbnail_url: "https://cdn2.steamgriddb.com/icon/9ab33b0ea61bf6155af3e599d105416d/32/256x256.png", html_file: "/repo.html" },
  { id: "25", title: "Snow Rider 3D (Alt)", description: "Custom sled racing experience.", category: "strategy", thumbnail_url: "https://static.keygames.com/2/115102/100968/1024x1024/snow-rider-3d.webp", html_file: "/snow-rider-3d-2.html" },
  { id: "26", title: "Hypper Sandbox", description: "GMod-style sandbox chaos.", category: "action", thumbnail_url: "https://play-lh.googleusercontent.com/Y1wVN6R2Mocq_Pg1XPRUU-6TotR5AApz1-X6zcRIqzbhNuYDjNWqGua20T9oHb8C_g", html_file: "/hypper-sandbox.html" },
  { id: "27", title: "Escape Road", description: "Escape police in vehicles.", category: "arcade", thumbnail_url: "https://escaperoad.org/data/image/game/escape-road-game.png", html_file: "/escape-road.html" },
  { id: "28", title: "Drive Mad", description: "Wacky obstacle driving game.", category: "arcade", thumbnail_url: "https://jrdn.calculra.store/assets/images/game/drive-mad.png", html_file: "/drive-mad.html" },
  { id: "29", title: "Tag", description: "Multiplayer tag game.", category: "multiplayer", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/32d2b1401c7a86c61fae5afeed977b37/tag.png", html_file: "/tag.html" },
  { id: "30", title: "WebFishing", description: "Fishing + chatting multiplayer.", category: "multiplayer", thumbnail_url: "https://cdn2.steamgriddb.com/grid/f85c6e30462acd89648c010d3f6fecb4.jpg", html_file: "/webfishing.html" },
  { id: "31", title: "Merge Round Racers", description: "Merge cars and race.", category: "racing", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/95591e5bccd80fec43b4f7ae5b9a40c1/merge-round-racers.png", html_file: "/merge-round-racers.html" },
  { id: "32", title: "Retro Bowl", description: "Football management + gameplay.", category: "sports", thumbnail_url: "https://pbs.twimg.com/profile_images/1217942835527409665/swRMqEkK_400x400.jpg", html_file: "/retro-bowl.html" },
  { id: "33", title: "Friday Night Funkin'", description: "Rhythm battle game.", category: "strategy", thumbnail_url: "https://static.wikia.nocookie.net/logopedia/images/f/fb/Fnf_mobile_icon.png/revision/latest/scale-to-width-down/250?cb=20251119182321", html_file: "/friday-night-funkin.html" },
  { id: "34", title: "Minecraft 1.8.8", description: "Sandbox cube world.", category: "adventure", thumbnail_url: "https://cdn.worldvectorlogo.com/logos/minecraft-launcher.svg", html_file: "/minecraft.html" },
  { id: "35", title: "Level Devil", description: "Tricky platformer.", category: "puzzle", thumbnail_url: "https://spacewavesgame.io/data/image/game/level-devil.jpg", html_file: "/level-devil.html" },
  { id: "36", title: "Feeding a Black Hole", description: "Grow a black hole by feeding it.", category: "arcade", thumbnail_url: "https://labubuclicker.org/data/image/a-game-about-feeding-a-black-hole.jpg", html_file: "/blackhole.html" },
  { id: "37", title: "Fruit Ninja", description: "Slice fruit, avoid bombs.", category: "arcade", thumbnail_url: "https://cdn.jim-nielsen.com/ios/512/fruit-ninja-2020-08-31.png?rf=1024", html_file: "/fruit-ninja.html" },
  { id: "38", title: "Five Nights at Epstein's", description: "Horror parody game.", category: "horror", thumbnail_url: "https://topgames.gg/data/image/game/five-nights-at-epsteins.png", html_file: "/fnae.html" },
  { id: "39", title: "Ultrakill", description: "Fast combat FPS.", category: "action", thumbnail_url: "https://assets-prd.ignimgs.com/2022/04/08/ultrakill-1649459578320.jpg", html_file: "/ultrakill.html" },
  { id: "40", title: "Red Ball 4", description: "Ball platform puzzle game.", category: "puzzle", thumbnail_url: "https://evilgames.eu/img/flash/og-red-ball-4-vol1.png", html_file: "/red-ball-4.html" },
  { id: "41", title: "Kart Bros.", description: "Kart racing chaos.", category: "racing", thumbnail_url: "https://geodashlite.io/data/image/game/kart-bros.jpg", html_file: "/kart-bros.html" },
  { id: "42", title: "Backrooms", description: "Horror maze escape.", category: "horror", thumbnail_url: "https://fngames.io/data/image/game/backrooms.png", html_file: "/backrooms.html" },
  { id: "43", title: "FNAF 1", description: "Survive animatronics.", category: "horror", thumbnail_url: "https://preview.redd.it/2ehubx31htz51.jpg?width=640&crop=smart&auto=webp&s=d94a00cd1c657e5e03c3a5ac103309e03e311b1d", html_file: "/fnaf-1.html" },
  { id: "44", title: "FNAF 2", description: "More animatronic chaos.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/GYcyLlHWoZumcal0WmDJJo2rCFyl3Y0mwXm0zaD-C9gC0PJGQMhzOKHfDUVlqSDlag=w480-h960-rw", html_file: "/fnaf-2.html" },
  { id: "45", title: "FNAF 3", description: "Springtrap horror.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/A9kng-j9BLaA2dhRGsPExmjy9E4vfG-GHefvmyywT0J67ZEPGONIsFYlIokL5EUNfiHF=w480-h960-rw", html_file: "/fnaf-3.html" },
  { id: "46", title: "FNAF 4", description: "Nightmare horror.", category: "horror", thumbnail_url: "https://play-lh.googleusercontent.com/od7MI1uOFMjj2Kvtk4Tc1Rt-YdDFmgLjE33yZlVINjhbj_NZ5ikZGT_YWpCP0LAGMg=w480-h960-rw", html_file: "/fnaf-4.html" },
  { id: "47", title: "Slime Rancher", description: "Collect slimes and profit.", category: "adventure", thumbnail_url: "https://assets1.ignimgs.com/2018/08/30/slime-rancher---button-fin-1535671208121.jpg", html_file: "/slime-rancher.html" },
  { id: "48", title: "Crazy Cattle 3D", description: "Tipping cow chaos.", category: "action", thumbnail_url: "https://crazy-cattle.co/data/image/game/crazy-cattle/crazy-cattle.jpg", html_file: "/crazy-cattle.html" },
  { id: "49", title: "BitLife", description: "Life simulator.", category: "strategy", thumbnail_url: "https://play-lh.googleusercontent.com/fUM-UyywXxjC8soxAZdIlxJrlRRXmql8wkE426SHzft4lJycSKVd2jCYQQX1BEG9Xw", html_file: "/bitlife.html" },
];
