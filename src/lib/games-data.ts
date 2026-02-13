export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  embed_url?: string;
  embed_code?: string;
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
  { id: "1", title: "Slope", description: "Roll a ball down a slope and avoid obstacles.", category: "arcade", thumbnail_url: "https://images.dwncdn.net/images/t_app-icon-l/p/35ae8647-5683-4499-9955-52234ac14e09/2062050/7513_4-78266017-logo", embed_url: "https://slope-inf.vercel.app/" },
  { id: "2", title: "2048", description: "Combine tiles to reach 2048.", category: "puzzle", thumbnail_url: "https://play-lh.googleusercontent.com/dKKYSKyl64PFznTRLCVqeXpBnPlOg5pqXOF2KUYY0mTm-bM7lAGsLeOhekJ8FLTrYwo", embed_url: "https://www.mathplayground.com/2048/index.html" },
  { id: "3", title: "Tetris", description: "The classic block-stacking puzzle game.", category: "puzzle", thumbnail_url: "https://play-lh.googleusercontent.com/NRnHPbEC0nFX2ZQAyJnBvmCxv4W9Q_-FyFKlerOt6Ofu_vhS4X4D2rK4MoLFZPnCQHmd=w240-h480-rw", embed_url: "https://react-tetris-ts.sierrao.vercel.app/" },
  { id: "4", title: "Cookie Clicker", description: "Click cookies to build a cookie empire.", category: "arcade", thumbnail_url: "https://play-lh.googleusercontent.com/Z1MOuuiD05ZN5LkVmMEvKF0mqAc-FknaQ2j8s4dZiO-LSPQX4EEA3RVJdlQEtxe96ok", embed_url: "https://cookieclicker-beta.vercel.app/" },
  { id: "5", title: "Moto X3M", description: "Extreme motorcycle stunts and racing.", category: "racing", thumbnail_url: "https://img.utdstc.com/icon/d24/aad/d24aad08f82ff37844908451206fb5351018de4f7afcbc3092b53632f8efec14:200", embed_url: "https://pijgalk.desarrollos-lowcost.com/games/motox3m/" },
  { id: "6", title: "Run 3", description: "Run through space tunnels.", category: "action", thumbnail_url: "https://cdn2.steamgriddb.com/icon_thumb/833cc7b10966fa0202801496bffccb37.png", embed_url: "https://student-desmos.vercel.app/" },
  { id: "7", title: "Subway Surfers", description: "Surf through the subway and dodge trains.", category: "action", thumbnail_url: "https://i.pinimg.com/564x/26/2e/a0/262ea058aba7b39950e4b1c5348be001.jpg", embed_url: "https://files.ufreegame.net/1024/Subway-Surfers-Zurich/" },
  { id: "8", title: "Basketball Stars", description: "1v1 basketball action.", category: "sports", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/bc02c9cdfc5b424ddf343b01edf791ce/basketball-stars.png", embed_url: "https://basketballstarsonline.vercel.app/file/" },
  { id: "9", title: "Paper.io 2", description: "Conquer territory in this .io game.", category: "multiplayer", thumbnail_url: "https://play-lh.googleusercontent.com/SWTpYqsX9RN2YirCDnAjQ8qsbgn4UrHkRRGsjwuASnHMVqssIvWKzq82mP82y_ffBSE=w240-h480-rw", embed_url: "https://parcoil-assets.onrender.com/paperio2/" },
  { id: "10", title: "Chess", description: "Classic chess against AI or friends.", category: "strategy", thumbnail_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpsPXEHUiiyC8E0JJg6o_D6eA1sKiapW2nQ&s", embed_url: "https://www.chesskid.com/play/computer" },
  { id: "11", title: "Temple Run 2", description: "Run, jump, and slide through ancient temples.", category: "action", thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/9/98/Temple_Run_2.png", embed_url: "https://temple-run2.vercel.app/" },
  { id: "12", title: "Crossy Road", description: "Cross busy roads without getting hit.", category: "arcade", thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/7/71/Crossy_Road_icon.jpeg", embed_url: "https://cross-road-eight.vercel.app/" },
  { id: "13", title: "Drift Hunters", description: "Customize cars and drift on tracks.", category: "racing", thumbnail_url: "https://drift-hunters.io/data/image/drift-hunters.png", embed_url: "https://htmlxm.github.io/h/drift-hunters/" },
  { id: "14", title: "Stickman Hook", description: "Swing through levels like Spider-Man.", category: "action", thumbnail_url: "https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl", embed_url: "https://stickman-pi.vercel.app/" },
  { id: "15", title: "Tricksplit (Agar.io)", description: "Grow your cell by consuming others.", category: "multiplayer", thumbnail_url: "https://assets-prd.ignimgs.com/2024/09/22/agario-1726971440487.jpg", embed_url: "https://tricksplit.io/" },
  { id: "16", title: "Death Run 3D", description: "Dodge obstacles in a colorful tunnel.", category: "arcade", thumbnail_url: "https://geometryvibes.io/upload/imgs/death-run-3d.png", embed_url: "https://running-from-social-studies.vercel.app/" },
  { id: "17", title: "Fireboy and Watergirl", description: "Cooperative puzzle platformer.", category: "puzzle", thumbnail_url: "https://thiefpuzzle.io/data/image/game/fireboy-and-watergirl.jpg", embed_url: "https://xlegends.github.io/science/games/fbwg/" },
  { id: "18", title: "Geometry Dash", description: "Jump and fly through rhythmic levels.", category: "action", thumbnail_url: "https://cdn.mobygames.com/covers/7168198-geometry-dash-iphone-front-cover.jpg", embed_url: "https://script.google.com/macros/s/AKfycbydNb9Y8FIM3D0vcweKtYCYbjJcSXghedO6MN0aWbP5qIwamjjSkBDirvuMHR_6sc4/exec" },
  { id: "19", title: "Snake.io", description: "Classic snake game meets .io.", category: "multiplayer", thumbnail_url: "data:image/webp;base64,UklGRmIPAABXRUJQVlA4IFYPAADQYgCdASrkAOQAPp1GnEquLCalKdIbYLATiWIIkCTWbOgjuB/L/Jv3A7f/n+SKSr3oTvPMA/TP/Z/1XsMeaH9kf2593L0+/5r1AP9h1OfoAfsz1sH7pek7//+z51Xdwp5vWg3B859nnbyYQ7WKKIlALPUJWMYBkc2UpOJNyyQPB9GRNVojvktMdW/4T4DthFoxqsP/9S+XZ27P7IUO96aeT4n6eV43zBzccc+qDUeg9P58fBMYXR6N/2iDEmNRwKQ54hykuEXNYbRILjcFDYT1wrYcSQ0GnDiYYpURRBBFfVnUCzRyU0Olo72OKVCMgskrStR2pKkvHPXeH7oeGXrSbPsDXPE++2ZQoPL9J+OXErUWHqSK+zk8bsuf3IJgMxtypBKQWFs291u0VZ0SEsHxucD5cAm2mhD13GMgI5bkZMPTNr51/aJo3Aghap+7cT0cVLOnP0GYRuw/JTT3MVMtjmqZCnixfsN52OQIbUNjcjBhfbCP/Tfq76xynJfGT+ICINW96l/mKcDWUT0FnrWceaHlw9c2gEfZNEfQpTA/85H/+diQgAoFStVSd4r5KqaVpXS1+0MrtgphOFf4OhGoi5txc3x2uE90bMaCy7svgNpUJCBq+x/JBs3pUAEbmUZcLVTmZxRNvV2CDy6vHuEIzbU2+8V87AMdsIpxhacswFAGHZEm8eYjyxqPNBb6iR7LXOXa+qK8SpqIMIEHF4qZavVIU4ia5BIfPVIAfvDJsntOGwbzdpaiUzUHo+Vg2xVoqU9NMuP5IdsAR5wDw0oA1PSY8GNfjaXjFqSTNFkWHW9GWP8iZepv2+EchoQZt1C9C1GCv4Z4tq36AYUmsfIHm1vn3s/mpDB6sODZY3mLZG014TUtjUxhQhO3oQDkq/q2IpPRz1WdeH6RilSaGERD9WbAMvZvJoIyYuvA+dHa/Y7u0KSHRW5KnRQg6DtfTeTFZa7dPS8kwmW/8p+yMq4IVpltcltmkV8Vhz5GWtbRRyz8rCeAup0GsA/92bpZR4OKj4kzdzgmzA5LasAQyIsjBzw7g6IYJ23ttRqzikAAPnWr0l4PP+g1/EkYtG6BPh+hkVqT/ttReAVZcC2b+QiHbC64mgQ9eLbWmRhpPbCIUlPMg2rw8XJjh/qSv+FcuwcdMLq1WYa5oC2NyvZsivT4sj/yS1sO3NxjrKtBVczx/MWvW0C+Rrkt6IWSOtpbANq824go831u+TxvmWk4nDka4YC2IB5NiIBF2BELDUNUxrqKB0fQwglSfqszoO6eb8VNkd0Dn7jnuRRoRJlJ/+YXVVMkjdFltYGojnYvchd09QlJd/ALERXOYM3/u3VwlYgwhm9470pjz8Pk4JL86zZ3JX8oqxjzxl/1kgNGIcrimaLCd2bQlN6yhAEN7Aa4pEoiuvXzNxcxToFVfyF6e2TT0/k/n/huccWbup4WtK+Y+7NKJhOgvUMWmKO9BC7rCQlDbnYDhwTxpStC6CZvCsKDJ/LqKLp7amDX1VWXRxZpWpxzklnMYWiW84iQTg5XeSTnRb3fsPYFWKxeqDf4zd6rUMWAnboYBUKMbVB/QfgbkXHmMtv5d6Ls0OtxVQ2CjT7WUpky47m8LJ1MfpQ+G68wmr5D1M0nbq/Mir1ZnioxwPuDyr/X7o3CYxIn+aOd4cBsNJbiG/ejFcAEIC/r75OsqqXXG8G1w2YestDLBGyszgcEf8+XvznZXRqavZgeLPpj5I9ZXxKapyf+JsJKLtmRP+U8PNqURAoqVRgyzvE2Sw4oJ9TCZ+OOnnIXGXdo0ArorqRaiSq+DX3SwKGQw2/VCqjzKYJ22aJ1RFCjm/bDcS2C6/8SQPdfvb2Z7C4cwSKF0+2ypXSWGjuPK+ZCupqhBJ9DzIUG+fNM5yWqzS7LtPNDNXLDTkQY3RmPMnwjEjELxoZKPrpzMQyBbS2iLqRqVp2BSwB+p/gj0TahYmMT63hS8g34Tqrj3m3T4TYjdYkOHr0bJxLHINnWkaPU8j2aV5LBaFOEHCZNjMgCFT2KZ5x+CJBQ/0p5/8BI5/6IERLmYOKDpBsYfsQkDCaKEOAZZ2pK0f3pVnAAAAAAAAAAA=", embed_url: "https://snake-io.github.io/" },
  { id: "20", title: "Bloons TD 1", description: "Defend your monkey board with strategic towers.", category: "strategy", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b92e2d42ddd56ac985096773c09a0936/bloons-td.png", embed_url: "https://parcoil-assets.onrender.com/bloonstd/" },
  { id: "21", title: "Funny Shooter 2", description: "A goofy gun game with big bosses and little red men.", category: "action", thumbnail_url: "https://funny-shooter-22.github.io/image/cache/catalog/g4ames/funny-800x800.jpg", embed_url: "https://funny-shooter.iwhy.dev/v2/index.html" },
  { id: "22", title: "Pako Highway", description: "An intense car highway game with traffic and procedural generated buildings.", category: "racing", thumbnail_url: "https://cdn.gracza.pl/galeria/gry13/grupy/276001531.jpg", embed_url: "https://pako-highway.vercel.app/" },
  { id: "23", title: "Plants vs. Zombies", description: "A strategical game about plants with abilities fighting zombies.", category: "strategy", thumbnail_url: "https://i.pinimg.com/474x/93/86/7f/93867f5cd62270ad5a191c3856d1ddfd.jpg", embed_url: "https://www.greenfoot.org/scenarios/31337?embed=true" },
  { id: "24", title: "Hollow Knight", description: "Hollow Knight is a critically acclaimed 2017 2D Metroidvania action-adventure game about fighting creatues and more!", category: "adventure", thumbnail_url: "https://f4.bcbits.com/img/a0907743342_16.jpg", embed_url: "https://hollow-knight-19xd.vercel.app/" },
  { id: "25", title: "Chicken CS/War", description: "Chicken CS (or War) is a game about chickens going to war with many different weapons.", category: "adventure", thumbnail_url: "https://imgs.crazygames.com/chicken-cs_1x1/20241014081245/chicken-cs_1x1-cover?format=auto&quality=100&metadata=none&width=1200", embed_url: "/games/chicken-cs.html" },
  { id: "26", title: "Block Blast", description: "Block Blast is a game about matching blocks to knock them out and save space, similar to Tetris.", category: "strategy", thumbnail_url: "https://play-lh.googleusercontent.com/R0qgNDYYHbRhw6JFsdEbDMqONplEvJx0m0W9wzYVvY3eNF1c2rfBWYjQxW0sLEzFe1E=w240-h480-rw", embed_url: "https://block-blasts-online.github.io/reunbozdo/" },
  { id: "27", title: "Drive Mad", description: "Drive mad is a game about driving monster trucks and vehicles on obstacle courses.", category: "racing", thumbnail_url: "https://cdn.aptoide.com/imgs/5/f/4/5f4de2e91b3842f441407860fb437388_icon.png", embed_url: "https://drive-mad-ten.vercel.app/" },
  { id: "28", title: "OvO", description: "OvO is a 2D platformer with many unique features and art style.", category: "adventure", thumbnail_url: "https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg", embed_url: "https://ovo-steel.vercel.app/1.4.4/" },
  { id: "29", title: "Snow Rider 3D", description: "Snow Rider 3D is a festive game about riding a sled while dodging obstacles.", category: "strategy", thumbnail_url: "https://static.keygames.com/2/115102/100968/1024x1024/snow-rider-3d.webp", embed_url: "https://snowrider3-d-silk.vercel.app/" },
  { id: "30", title: "Crazy Cattle 3D", description: "Crazy Cattle 3D is a goofy game about running around as a sheep without being knocked over!", category: "arcade", thumbnail_url: "https://avatars.githubusercontent.com/u/208939724?s=280&v=4", embed_url: "https://v0-merge-split-files.vercel.app/" },
  { id: "31", title: "1v1.lol", description: "1v1.lol is a shooting game with building, AI, and more.", category: "action", thumbnail_url: "https://mathsframe.github.io/alllogo/1v1-lol/logo.png", embed_url: "https://en.riwnlimdshork.dawuiiwauidwahyuiwahuioqwd.site/assets/allgames/1v1.lol-main/1v1.lol/index.html" },
  { id: "32", title: "Tag", description: "Tag is a chill game that allows 2, 3, or 4 players to go against each other in a game of tag.", category: "multiplayer", thumbnail_url: "https://cdn-1.webcatalog.io/catalog/poki-tag/poki-tag-icon-filled-256.png?v=1714780383344", embed_url: "https://tagunblocked.vercel.app/file/" },
  { id: "33", title: "Jetpack Joyride", description: "Jetpack Joyride is a game about a worker that has stolen a jetpack and is causing havoc in the facility.", category: "action", thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/9/90/Jetpack_Joyride_iOS.png", embed_url: "https://n-git-main-dm-me-for-proxs-projects.vercel.app/y/jetpack-joyride/index.html" },
];

// --- NEW INTEGRATION ---
// Function to render either embed_url or embed_code
export function renderGameEmbed(game: Game): string {
  if (game.embed_url && game.embed_url.trim() !== "") {
    return `<iframe src="${game.embed_url}" width="100%" height="600" frameborder="0" allowfullscreen></iframe>`;
  } else if (game.embed_code && game.embed_code.trim() !== "") {
    return game.embed_code;
  } else {
    return `<div style="color:red;">No embed available for ${game.title}</div>`;
  }
}
