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
  { id: "1", title: "Deltarune", showCardTitle: false, description: "Two worlds, one destiny. Light and dark must align.", category: "adventure", thumbnail_url: "https://art.pixilart.com/5b20349074441ba.png", html_file: "/games/deltarune.html" },
  { id: "2", title: "Backrooms", showCardTitle: false, description: "Horror maze escape.", category: "horror", thumbnail_url: "https://spacewavesgame.io/data/image/game/backrooms.png", html_file: "/games/backrooms.html" },
  { id: "3", title: "Basket Bros.", showCardTitle: false, description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://basketbros-game.github.io/images/logo.png", html_file: "/games/basket-bros.html" },
  { id: "4", title: "Basketball Stars", showCardTitle: false, description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/bc02c9cdfc5b424ddf343b01edf791ce/basketball-stars-logo.png", html_file: "/games/basketball-stars.html" },
  { id: "5", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://play-lh.googleusercontent.com/UuIl7UOtKmAjXGHX7qX_XvEIfE9K85u92a0f0Bf7hxKMpRmLFV6EdOEA_0MrMpToPpzLGaGP9p4neHwhFqts", html_file: "/games/cookie-clicker.html" },
  { id: "6", title: "Crazy Cattle 3D", description: "Tipping cow chaos.", category: "action", thumbnail_url: "https://fnafgames.io/upload/imgs/crazy-cattle-3d.jpg", html_file: "/games/crazy-cattle.html" },
  { id: "7", title: "Death Run 3D", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://geometryvibes.io/upload/imgs/death-run-3d.png", html_file: "/games/death-run-3d.html" },
  { id: "8", title: "Drive Mad", description: "Wacky obstacle driving game.", category: "arcade", thumbnail_url: "https://play-lh.googleusercontent.com/69T5dvUQ9eoR58EteTt4Aqc-aDytLDakTR65drPMEYE-p_qHH_wIpnS1zAaGuq-16UrZb1jjztTeMLCW6oekaw", html_file: "/games/drive-mad.html" },
  { id: "9", title: "Drift Hunters", showCardTitle: false, description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEBWsRNmG6DyZMd2At94gbFdgYbhfe4JKDUJSsDivzQ&s=10", html_file: "/games/drift-hunters.html" },
  { id: "10", title: "Escape Road", showCardTitle: false, description: "Escape police in vehicles.", category: "arcade", thumbnail_url: "https://hotgame.io/_next/image/?url=https%3A%2F%2Fmedia.hotgame.io%2F2026%2F05%2F23005602%2Fescape-road-icon.webp&w=1920&q=75", html_file: "/games/escape-road.html" },
  { id: "11", title: "Doom", showCardTitle: false, description: "First ever fps.", category: "action", thumbnail_url: "https://i1.sndcdn.com/artworks-000135376185-v6pkyb-t500x500.jpg", html_file: "/games/doom.html" },
  { id: "12", title: "Super Mario 64", showCardTitle: false, description: "Open-World Strategy with Bomb-Ombs and Chain-Chomps.", category: "adventure", thumbnail_url: "https://e.snmc.io/lk/o/x/15f80bc5703e1482a05054ae9f9a93cd/5276953", html_file: "/games/sm64.html" },
  { id: "13", title: "FNAF 1", description: "Survive animatronics.", category: "horror", thumbnail_url: "https://preview.redd.it/my-take-on-a-fnaf-1-icon-to-fit-the-next-three-v0-2ehubx31htz51.jpg?width=640&crop=smart&auto=webp&s=69bbc000ba609ad43b6c3c839a5f01686b0d51e6", html_file: "/games/fnaf-1.html" },
  { id: "14", title: "FNAF 2", descript5gfo/MarketingAssets/tiletopia-app-icon-512x512.png", html_file: "/games/tiletopia.html" },
  { id: "41", title: "Tiny Fishing", showCardTitle: false, description: "Catch small trouts or even sharks in this arcade fishing game.", category: "arcade", thumbnail_url: "https://bowlgames.io/data/image/tiny-fishing.png", html_file: "/games/tiny-fishing.html" },
  { id: "42", title: "Ultrakill", showCardTitle: false, description: "Fast combat FPS.", category: "action", thumbnail_url: "https://web-games.io/cache/data/image/game/Ultrakill-f314x314-jpg.webp", html_file: "/games/ultrakill.html" },
  { id: "43", title: "WebFishing", showCardTitle: false, description: "Fishing + chatting multiplayer.", category: "multiplayer", thumbnail_url: "https://cdn2.steamgriddb.com/grid/f85c6e30462acd89648c010d3f6fecb4.jpg", html_file: "/games/webfishing.html" },
  { id: "44", title: "Baseball Bros.", showCardTitle: false, description: "Let's play ball.", category: "strategy", thumbnail_url: "https://doodlebaseball.io/data/image/game/baseball-bros/baseball-bros.jpg", html_file: "/games/baseballbros.html" },
];
