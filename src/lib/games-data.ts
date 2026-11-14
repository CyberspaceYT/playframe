export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  embed_url?: string;
  html_file?: string;
  showCardTitle?: boolean;
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
  { id: "1", title: "Deltarune", showCardTitle: false, description: "Two worlds, one destiny. Light and dark must align.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Deltarune", html_file: "/games/deltarune.html" },
  { id: "2", title: "Backrooms", showCardTitle: false, description: "Horror maze escape.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Backrooms", html_file: "/games/backrooms.html" },
  { id: "3", title: "Basket Bros.", showCardTitle: false, description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Basket+Bros", html_file: "/games/basket-bros.html" },
  { id: "4", title: "Basketball Stars", showCardTitle: false, description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Basketball+Stars", html_file: "/games/basketball-stars.html" },
  { id: "5", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Cookie+Clicker", html_file: "/games/cookie-clicker.html" },
  { id: "6", title: "Crazy Cattle 3D", description: "Tipping cow chaos.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Crazy+Cattle+3D", html_file: "/games/crazy-cattle.html" },
  { id: "7", title: "Death Run 3D", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Death+Run+3D", html_file: "/games/death-run-3d.html" },
  { id: "8", title: "Drive Mad", description: "Wacky obstacle driving game.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Drive+Mad", html_file: "/games/drive-mad.html" },
  { id: "9", title: "Drift Hunters", showCardTitle: false, description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Drift+Hunters", html_file: "/games/drift-hunters.html" },
  { id: "10", title: "Escape Road", showCardTitle: false, description: "Escape police in vehicles.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Escape+Road", html_file: "/games/escape-road.html" },
  { id: "11", title: "Doom", showCardTitle: false, description: "First ever fps.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Doom", html_file: "/games/doom.html" },
  { id: "12", title: "Super Mario 64", showCardTitle: false, description: "Open-world strategy with bomb-ombs and chain-chomps.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Super+Mario+64", html_file: "/games/sm64.html" },
  { id: "13", title: "FNAF 1", description: "Survive animatronics.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=FNAF+1", html_file: "/games/fnaf-1.html" },
  { id: "14", title: "FNAF 2", description: "More animatronic chaos.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=FNAF+2", html_file: "/games/fnaf-2.html" },
  { id: "15", title: "FNAF 3", description: "Springtrap horror.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=FNAF+3", html_file: "/games/fnaf-3.html" },
  { id: "16", title: "FNAF 4", description: "Nightmare horror.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=FNAF+4", html_file: "/games/fnaf-4.html" },
  { id: "17", title: "Granny", description: "Granny's house, I don't want to stay! I just want to go home, I don't want to be here!", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Granny", html_file: "/games/granny.html" },
  { id: "18", title: "Fork N' Sausage", description: "Get to the fork.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Fork+N%27+Sausage", html_file: "/games/forknsausage.html" },
  { id: "19", title: "Geometry Dash", description: "Jump and fly through rhythmic levels.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Geometry+Dash", html_file: "/games/geometry-dash.html" },
  { id: "20", title: "Hypper Sandbox", description: "GMod-style sandbox chaos.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Hypper+Sandbox", html_file: "/games/hypper-sandbox.html" },
  { id: "21", title: "Level Devil", showCardTitle: true, description: "Tricky platformer.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Level+Devil", html_file: "/games/level-devil.html" },
  { id: "22", title: "Merge Round Racers", showCardTitle: false, description: "Merge cars and race.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Merge+Round+Racers", html_file: "/games/merge-round-racers.html" },
  { id: "23", title: "Minecraft 1.7.3 Beta", description: "Sandbox cube world.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Minecraft+1.7.3+Beta", html_file: "/games/minecraft.html" },
  { id: "24", title: "Moto X3M", showCardTitle: false, description: "Extreme motorcycle stunts and racing.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Moto+X3M", html_file: "/games/moto-x3m.html" },
  { id: "25", title: "Pizza Tower", showCardTitle: false, description: "Papyrus burnt the water.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Pizza+Tower", html_file: "/games/pizzatower.html" },
  { id: "26", title: "Paper.io 2", description: "Conquer territory in this .io game.", category: "multiplayer", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Paper.io+2", html_file: "/games/paper-io-2.html" },
  { id: "27", title: "Plants vs Zombies", description: "Plants defend against zombies.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Plants+vs+Zombies", html_file: "/games/plants-vs-zombies.html" },
  { id: "28", title: "PolyTrack", description: "Race down intense tracks full of corners and jumps.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=PolyTrack", html_file: "/games/polytrack.html" },
  { id: "29", title: "Rocket Goal", showCardTitle: false, description: "Christiano Ronaldo Sui.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Rocket+Goal", html_file: "/games/rocketgoal.html" },
  { id: "30", title: "Red Ball 4", description: "Ball platform puzzle game.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Red+Ball+4", html_file: "/games/red-ball-4.html" },
  { id: "31", title: "Retro Bowl", description: "Football team management and gameplay.", category: "sports", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Retro+Bowl", html_file: "/games/retro-bowl.html" },
  { id: "32", title: "Run 3", description: "Run through space tunnels.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Run+3", html_file: "/games/run-3.html" },
  { id: "33", title: "Slime Rancher", showCardTitle: false, description: "Collect slimes and profit.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Slime+Rancher", html_file: "/games/slime-rancher.html" },
  { id: "34", title: "Slope", showCardTitle: false, description: "Roll a ball down a slope and avoid obstacles.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Slope", html_file: "/games/slope.html" },
  { id: "35", title: "Snow Rider 3D", showCardTitle: false, description: "A one-horse open sleigh.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Snow+Rider+3D", html_file: "/games/snow-rider-3d.html" },
  { id: "36", title: "Stickman Hook", description: "Swing through levels like Spider-Man.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Stickman+Hook", html_file: "/games/stickman-hook.html" },
  { id: "37", title: "Subway Surfers", description: "Surf through the subway and dodge trains.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Subway+Surfers", html_file: "/games/subway-surfers.html" },
  { id: "38", title: "Baldi's Basics", description: "He hears every door you open.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Baldi%27s+Basics", html_file: "/games/baldi.html" },
  { id: "39", title: "Temple Run 2", description: "Run, jump, and slide through ancient temples.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Temple+Run+2", html_file: "/games/temple-run-2.html" },
  { id: "40", title: "Tiletopia", description: "Place tiles to build islands.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Tiletopia", html_file: "/games/tiletopia.html" },
  { id: "41", title: "Tiny Fishing", showCardTitle: false, description: "Catch small trouts or even sharks in this arcade fishing game.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Tiny+Fishing", html_file: "/games/tiny-fishing.html" },
  { id: "42", title: "Ultrakill", showCardTitle: false, description: "Fast combat FPS.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Ultrakill", html_file: "/games/ultrakill.html" },
  { id: "43", title: "WebFishing", showCardTitle: false, description: "Fishing + chatting multiplayer.", category: "multiplayer", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=WebFishing", html_file: "/games/webfishing.html" },
  { id: "44", title: "Baseball Bros.", showCardTitle: false, description: "Let's play ball.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Baseball+Bros", html_file: "/games/baseballbros.html" },
  { id: "45", title: "Block Blast", showCardTitle: true, description: "Blast blocks.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Block+Blast", html_file: "/games/block-blast.html" },
  { id: "46", title: "Arthur's Nightmare", showCardTitle: true, description: "He's a knitter.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Arthur%27s+Nightmare", html_file: "/games/arthurs-nightmare.html" },
  { id: "47", title: "Drift Boss", showCardTitle: false, description: "Skrrt.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Drift+Boss", html_file: "/games/drift-boss.html" },
  { id: "48", title: "Happy Wheels", showCardTitle: false, description: "R.I.P. Adobe Flash 2006-2020", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Happy+Wheels", html_file: "/games/happywheels.html" },
  { id: "49", title: "60 Seconds! Reatomized", description: "A tense survival run in a bunker after the world ends.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=60+Seconds!+Reatomized", html_file: "/games/60 Seconds! Reatomized.html" },
  { id: "50", title: "Bendy and the Ink Machine", description: "A nightmare in ink with puzzles, horror, and pursuit.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Bendy+and+the+Ink+Machine", html_file: "/games/Bendy and the Ink Machine.html" },
  { id: "51", title: "Bloxorz", description: "Stack blocks and drop them into the exit.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Bloxorz", html_file: "/games/Bloxorz.html" },
  { id: "52", title: "Buckshot Roulette", description: "A deadly card game of luck, risk, and regret.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Buckshot+Roulette", html_file: "/games/Buckshot Roulette.html" },
  { id: "53", title: "Cuphead", description: "A hand-drawn boss rush filled with challenge and charm.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Cuphead", html_file: "/games/Cuphead.html" },
  { id: "54", title: "Five Nights at Freddy's: Into the Pit", description: "A tense night of animatronics and deepening dread.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Five+Nights+at+Freddy%27s%3A+Into+the+Pit", html_file: "/games/Five Nights at Freddy's_ Into The Pit.html" },
  { id: "55", title: "Friday Night Funkin'", description: "Battle through rhythm charts with sharp timing.", category: "music", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Friday+Night+Funkin%27", html_file: "/games/Friday Night Funkin.html" },
  { id: "56", title: "Gorilla Tag", description: "Chase and evade in a parkour-style tag match.", category: "multiplayer", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Gorilla+Tag", html_file: "/games/Gorilla Tag.html" },
  { id: "57", title: "Grand Theft Auto 3", description: "A classic open-world crime adventure.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Grand+Theft+Auto+3", html_file: "/games/Grand Theft Auto 3.html" },
  { id: "58", title: "Hollow Knight", description: "Explore a beautiful ruined kingdom and survive its mysteries.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Hollow+Knight", html_file: "/games/Hollow Knight.html" },
  { id: "59", title: "Hollow Knight: Silksong", description: "A hopeful but dangerous journey through a forgotten world.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Hollow+Knight%3A+Silksong", html_file: "/games/Hollow Knight_ Silksong.html" },
  { id: "60", title: "Jetpack Joyride", description: "Fly, dodge, and collect coins in a fast arcade escape.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Jetpack+Joyride", html_file: "/games/Jetpack Joyride.html" },
  { id: "61", title: "R.E.P.O.", description: "Extraction is never easy when the odds are stacked against you.", category: "multiplayer", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=R.E.P.O.", html_file: "/games/R.E.P.O.html" },
  { id: "62", title: "Raft", description: "Survive the sea and build your floating home.", category: "survival", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Raft", html_file: "/games/Raft.html" },
  { id: "63", title: "Slowroads", description: "Cruise a peaceful, endless highway of curiosity.", category: "arcade", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Slowroads", html_file: "/games/Slowroads.html" },
  { id: "64", title: "Stick With It", description: "Stay in control and survive the chaos.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Stick+With+It", html_file: "/games/Stick With It.html" },
  { id: "65", title: "Superhot", description: "Time slows to a crawl in stylish action encounters.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Superhot", html_file: "/games/Superhot.html" },
  { id: "66", title: "Survival Race", description: "Race, dodge, and survive the course.", category: "racing", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Survival+Race", html_file: "/games/Survival Race.html" },
  { id: "67", title: "Tattletail", description: "A spooky toy with a very bad idea of playtime.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Tattletail", html_file: "/games/Tattletail.html" },
  { id: "68", title: "Terraria", description: "Build, mine, fight, and explore a massive sandbox world.", category: "adventure", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Terraria", html_file: "/games/Terraria.html" },
  { id: "69", title: "The Man In The Window", description: "Watch the house, stay calm, and avoid being seen.", category: "horror", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=The+Man+In+The+Window", html_file: "/games/The Man In The Window.html" },
  { id: "70", title: "Totally Accurate Battle Simulator (TABS)", description: "Watch chaos unfold as absurd armies clash.", category: "strategy", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=TABS", html_file: "/games/Totally Accurate Battle Simulator (TABS).html" },
  { id: "71", title: "Untitled Goose Game", description: "Cause harmless havoc as the most annoying goose on the block.", category: "puzzle", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Untitled+Goose+Game", html_file: "/games/Untitled Goose Game.html" },
  { id: "72", title: "Funny Shooter 2", description: "Fast, frantic shooting action with silly energy.", category: "action", thumbnail_url: "https://placehold.co/600x400/111827/ffffff?text=Funny+Shooter+2", html_file: "/games/funny-shooter-2.html" },
];
