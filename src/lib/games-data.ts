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
  { id: "19", title: "Snake.io", description: "Classic snake game meets .io.", category: "multiplayer", thumbnail_url: "data:image/webp;base64,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", embed_url: "https://snake-y.vercel.app/" },
  { id: "20", title: "Bloons TD 1", description: "Defend your monkey board with strategic towers.", category: "strategy", thumbnail_url: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b92e2d42ddd56ac985096773c09a0936/bloons-td.png", embed_url: "https://parcoil-assets.onrender.com/bloonstd/" },
  { id: "21", title: "Funny Shooter 2", description: "A goofy gun game with big bosses and little red men.", category: "action", thumbnail_url: "https://funny-shooter-22.github.io/image/cache/catalog/g4ames/funny-800x800.jpg", embed_url: "https://funny-shooter.iwhy.dev/v2/index.html" },
  { id: "22", title: "Pako Highway", description: "An intense car highway game with traffic and procedural generated buildings.", category: "racing", thumbnail_url: "https://cdn.gracza.pl/galeria/gry13/grupy/276001531.jpg", embed_url: "https://pako-highway.vercel.app/" },
  { id: "23", title: "Plants vs. Zombies", description: "A strategical game about plants with abilities fighting zombies.", category: "strategy", thumbnail_url: "https://i.pinimg.com/474x/93/86/7f/93867f5cd62270ad5a191c3856d1ddfd.jpg", embed_url: "https://www.greenfoot.org/scenarios/31337?embed=true" },
  { id: "24", title: "Hollow Knight", description: "Hollow Knight is a critically acclaimed 2017 2D Metroidvania action-adventure game about fighting creatues and more!", category: "adventure", thumbnail_url: "https://f4.bcbits.com/img/a0907743342_16.jpg", embed_url: "https://hollow-knight-19xd.vercel.app/" },
  { id: "25", title: "Chicken CS/War", description: "Chicken CS (or War) is a game about chickens going to war with many different weapons.", category: "adventure", thumbnail_url: "https://imgs.crazygames.com/chicken-cs_1x1/20241014081245/chicken-cs_1x1-cover?format=auto&quality=100&metadata=none&width=1200", embed_code: `<!-- Ultimate Game Stash file--> 
<!-- For the regularly updating doc go to https://docs.google.com/document/d/1_FmH3BlSBQI7FGgAQL59-ZPe8eCxs35wel6JUyVaG8Q/ -->


</script><script>gadgets.Prefs.setMessages_({});gadgets.Prefs.setDefaultPrefs_({});gadgets.io.preloaded_=[];</script><style>html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html,body{height:100%}canvas{display:block}body{margin:0}#unity-container{width:100%;height:100%;position:relative}#unity-canvas{width:100%;height:100%;background:#231F20}#loading-cover{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center}#unity-loading-bar{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center}#unity-logo{text-align:center}#unity-logo img{max-width:80%;max-height:80%}#unity-progress-bar-empty{width:40%;height:24px;margin:10px 20px 20px 10px;text-align:left;border:1px solid white;padding:2px}#unity-progress-bar-full{width:0;height:100%;background:white}.light #unity-progress-bar-empty{border-color:black}.light #unity-progress-bar-full{background:black}.spinner,.spinner:after{border-radius:50%;width:5em;height:5em}.spinner{margin:10px;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,0.2);border-right:1.1em solid rgba(255,255,255,0.2);border-bottom:1.1em solid rgba(255,255,255,0.2);border-left:1.1em solid #ffffff;transform:translateZ(0);animation:spinner-spin 1.1s infinite linear}@keyframes spinner-spin{0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)}}</style><style> body{overflow:hidden;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}</style>
<meta charset="utf-8">
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0, user-scalable=no" name="viewport">


<script>
/* mp-start */

var _params = gadgets.util.getUrlParameters();
if (_params['exp_rpc_js'] != 1) {
  var url = _params['parent'] + '/ig/ifpc_relay';
  gadgets.rpc.setRelayUrl('..', url, true);
}
/* mp-end */
</script><style type="text/css" id="operaUserStyle">
  display:none;
}
.imgb_vis {
  animation: imgb-animation 7s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}</style><meta http-equiv="origin-trial" content="A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="></head><body class="dark" dir="ltr">
<div class="unity-desktop" id="unity-container">
<canvas id="unity-canvas" style="cursor: default;" width="1117" height="926"></canvas>
</div>
<div id="loading-cover" style="display: none;">
<div id="unity-loading-bar">
<div id="unity-progress-bar-empty" style="">
<div id="unity-progress-bar-full" style="width: 100%;"></div>
</div>
<div class="spinner" style="display: none;"></div>
</div>
</div>
<script>
const hideFullScreenButton="";const buildUrl="https://cdn.jsdelivr.net/gh/SternyFahizh/RabbitMQ@cd18b31ab1e3aecd797970d11f94fd4eb921813d/ruby/ch-3";const loaderUrl=buildUrl+"/load.js";const config={dataUrl:buildUrl+"/ce.data.js",frameworkUrl:buildUrl+"/ce.framework.js",codeUrl:buildUrl+"/ce.wasm.js",streamingAssetsUrl:"",};const container=document.querySelector("#unity-container");const canvas=document.querySelector("#unity-canvas");const loadingCover=document.querySelector("#loading-cover");const progressBarEmpty=document.querySelector("#unity-progress-bar-empty");const progressBarFull=document.querySelector("#unity-progress-bar-full");const spinner=document.querySelector('.spinner');const canFullscreen=(function(){for(const key of['exitFullscreen','webkitExitFullscreen','webkitCancelFullScreen','mozCancelFullScreen','msExitFullscreen',]){if(key in document){return true}}return false}());if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){container.className="unity-mobile"}loadingCover.style.display="";canvas.addEventListener("touchstart",()=>{window.focus()});canvas.addEventListener("pointerdown",()=>{window.focus()});let player;let leaderboard;let myGameInstance=null;let payments=null;let promptCanShow=false;let reviewCanShow=false;let initSDK=true;let initGame=true;let photoSizeForInit;let scopesForInit;let nowFullAdOpen=false;let letGameReadyApi=true;let ysdk=null;const script=document.createElement("script");script.src=loaderUrl;script.onload=()=>{createUnityInstance(canvas,config,(progress)=>{spinner.style.display="none";progressBarEmpty.style.display="";progressBarFull.style.width=\`\${100*progress}%\`}).then((unityInstance)=>{myGameInstance=unityInstance;loadingCover.style.display="none"}).catch((message)=>{})};var playerData='noData';var environmentData='null';var cloudSaves='noData';function InitSDK(photoSize,scopes){console.log('Init GAME');initGame=true;photoSizeForInit=photoSize;scopesForInit=scopes;InitPlayer(photoSize,scopes)}
function InitGame(photoSize,scopes,gameReadyApi){console.log('Init GAME');initGame=true;photoSizeForInit=photoSize;scopesForInit=scopes;if(initSDK==true){if(gameReadyApi==true)GameReadyAPI();InitPlayer(photoSize,scopes)}else{InitYandex();setTimeout(function(){if(!initSDK){console.error('CRASH InitYandex');NotAuthorized()}},1000)}if(nowFullAdOpen==true){myGameInstance.SendMessage('YandexGame','OpenFullAd')}} 
function GameReadyAPI(){if(letGameReadyApi){}}function NotAuthorized(){try{console.log('Authorized failed');let authJson={"playerAuth":"rejected","playerName":"unauthorized","playerId":"unauthorized","playerPhoto":"null"};myGameInstance.SendMessage('YandexGame','SetInitializationSDK',JSON.stringify(authJson))}catch(e){console.error('CRASH Not Authorized: ',e.message)}}function InitPlayer(photoSize,_scopes){NotAuthorized();window.focus()}function OpenAuthDialog(photoSize,scopes){try{ysdk.auth.openAuthDialog().then(()=>{InitPlayer(photoSize,scopes)}).catch(()=>{InitSDK(photoSize,scopes)})}catch(e){console.log('CRASH Open Auth Dialog: ',e.message)}}
function FullAdShow(){try{window.ysdk.adv.showFullscreenAdv({callbacks:{onOpen:()=>{console.log('Open Fullscreen Ad');nowFullAdOpen=true;if(initGame===true)myGameInstance.SendMessage('YandexGame','OpenFullAd')},onClose:(wasShown)=>{nowFullAdOpen=false;if(initGame===true){if(wasShown){myGameInstance.SendMessage('YandexGame','CloseFullAd','true')}else{myGameInstance.SendMessage('YandexGame','CloseFullAd','false')}}window.focus()},onError:(error)=>{console.error('Error Fullscreen Ad',error);myGameInstance.SendMessage('YandexGame','ErrorFullAd');window.focus()}}})}catch(e){console.error('CRASH FullAd Show: ',e.message)}}
function RewardedShow(id){try{window.ysdk.adv.showRewardedVideo({callbacks:{onOpen:()=>{console.log('Opened Video Ad. Id: '+id);myGameInstance.SendMessage('YandexGame','OpenVideo')},onClose:()=>{console.log('Closed Video Ad. Id: '+id);myGameInstance.SendMessage('YandexGame','CloseVideo');window.focus()},onRewarded:()=>{console.log('Reward Video Ad. Id: '+id);myGameInstance.SendMessage('YandexGame','RewardVideo',id)},onError:(e)=>{console.error('Error Video Ad. Id: '+id,e);myGameInstance.SendMessage('YandexGame','ErrorVideo')}}})}catch(err){console.error('CRASH Rewarded Video Ad Show: ',err.message)}}
function StickyAdActivity(show){try{ysdk.adv.getBannerAdvStatus().then(({stickyAdvIsShowing,reason})=>{if(stickyAdvIsShowing){if(!show){ysdk.adv.hideBannerAdv()}}else if(reason){console.log('Sticky ad are not shown. Reason:',reason)}else if(show){ysdk.adv.showBannerAdv()}})}catch(e){console.error('CRASH Sticky Activity: ',e.message)}}
function InitPayments(){try{ysdk.getPayments().then(_payments=>{console.log('Purchases are available');payments=_payments}).catch(e=>{console.log('Purchases are not available',e.message)})}catch(e){console.error('CRASH Init Payments: ',e.message)}}
function BuyPayments(id){try{if(payments!=null){payments.purchase(id).then(()=>{console.log('Purchase Success');ConsumePurchase(id);window.focus()}).catch(e=>{console.error('Purchase Failed',e.message);myGameInstance.SendMessage('YandexGame','OnPurchaseFailed',id);window.focus()})}else{console.log('Payments == null')}}catch(e){console.error('CRASH Buy Payments: ',e.message);window.focus()}}
function GetPayments(){try{if(payments!=null){payments.getCatalog().then(products=>{let productID=[];let title=[];let description=[];let imageURI=[];let priceValue=[];let consumed=[];payments.getPurchases().then(purchases=>{for(let i=0;i<products.length;i++){productID[i]=products[i].id;title[i]=products[i].title;description[i]=products[i].description;imageURI[i]=products[i].imageURI;priceValue[i]=products[i].priceValue;consumed[i]=true;for(i2=0;i2<purchases.length;i2++){if(purchases[i2].productID===productID[i]){consumed[i]=false;break}}}let jsonPayments={"id":productID,"title":title,"description":description,"imageURI":imageURI,"priceValue":priceValue,"consumed":consumed};myGameInstance.SendMessage('YandexGame','PaymentsEntries',JSON.stringify(jsonPayments))})})}else{console.log('Get Payments: payments == null')}}catch(e){console.error('CRASH Get Payments: ',e.message)}}
function ConsumePurchase(id){try{if(payments!=null){payments.getPurchases().then(purchases=>{for(i=0;i<purchases.length;i++){if(purchases[i].productID===id){payments.consumePurchase(purchases[i].purchaseToken);myGameInstance.SendMessage('YandexGame','OnPurchaseSuccess',id)}}})}else console.log('Consume purchase: payments null')}catch(e){console.error('CRASH Consume Purchase: ',e.message)}}
function ConsumePurchases(){try{if(payments!=null){payments.getPurchases().then(purchases=>{console.log('Unprocessed purchases: ',purchases.length);for(i=0;i<purchases.length;i++){payments.consumePurchase(purchases[i].purchaseToken);myGameInstance.SendMessage('YandexGame','OnPurchaseSuccess',purchases[i].productID)}})}else console.log('Consume purchases: payments null')}catch(e){console.error('CRASH Consume purchases: ',e.message)}}
function SaveCloud(jsonData,flush){try{player.setData({saves:[jsonData],},flush)}catch(e){console.error('CRASH Save Cloud: ',e.message)}}function LoadCloud(){try{player.getData(["saves"]).then(data=>{if(data.saves){myGameInstance.SendMessage('YandexGame','SetLoadSaves',JSON.stringify(data.saves))}else{myGameInstance.SendMessage('YandexGame','SetLoadSaves',"noData")}}).catch(()=>{console.error('getData Error!');myGameInstance.SendMessage('YandexGame','SetLoadSaves',"noData")})}catch(e){console.error('CRASH Load saves Cloud: ',e.message);myGameInstance.SendMessage('YandexGame','SetLoadSaves',"noData")}}
            function InitLeaderboard() {
                try {
                    ysdk.getLeaderboards().then(_lb => {
                        leaderboard = _lb
                        myGameInstance.SendMessage('YandexGame', 'InitializedLB');
                    });
                } catch (e) {
                    console.error('CRASH Init Leaderboard: ', e.message);
                }
            }
            function SetLeaderboardScores(_name, score) {
                try {
                    ysdk.getLeaderboards()
                        .then(leaderboard => {
                            leaderboard.setLeaderboardScore(_name, score);
                        });
                } catch (e) {
                    console.error('CRASH Set Leader board Scores: ', e.message);
                }
            }
        var environmentData = 'null';
        var playerData = 'noData';
        var paymentsData = 'none';
        var cloudSaves = 'noData';            
function GetLeaderboardScores(nameLB,maxPlayers,quantityTop,quantityAround,photoSize,auth){try{var jsonEntries={technoName:'',isDefault:false,isInvertSortOrder:false,decimalOffset:0,type:''};ysdk.getLeaderboards().then(leaderboard=>leaderboard.getLeaderboardDescription(nameLB)).then(res=>{jsonEntries.technoName=nameLB;jsonEntries.isDefault=res.default;jsonEntries.isInvertSortOrder=res.description.invert_sort_order;jsonEntries.decimalOffset=res.description.score_format.options.decimal_offset;jsonEntries.type=res.description.type;return leaderboard.getLeaderboardEntries(nameLB,{quantityTop:quantityTop,includeUser:auth,quantityAround:quantityAround})}).then(res=>{let jsonPlayers=EntriesLB(res,maxPlayers,photoSize);let combinedJson={...jsonEntries,...jsonPlayers};myGameInstance.SendMessage('YandexGame','LeaderboardEntries',JSON.stringify(combinedJson))}).catch(error=>{console.error(error)})}catch(e){console.error('CRASH Get Leaderboard: ',e.message)}}       
function EntriesLB(res,maxPlayers,photoSize){let LeaderboardEntriesText='';let playersCount;if(res.entries.length<maxPlayers){playersCount=res.entries.length}else{playersCount=maxPlayers}let ranks=new Array(playersCount);let photos=new Array(playersCount);let mames=new Array(playersCount);let scores=new Array(playersCount);let uniqueIDs=new Array(playersCount);for(i=0;i<playersCount;i++){ranks[i]=res.entries[i].rank;scores[i]=res.entries[i].score;uniqueIDs[i]=res.entries[i].player.uniqueID;if(photoSize==='nonePhoto'||res.entries[i].player.scopePermissions.avatar!=="allow"){photos[i]='nonePhoto'}else{photos[i]=res.entries[i].player.getAvatarSrc(photoSize)}if(res.entries[i].player.scopePermissions.public_name!=="allow"){mames[i]="anonymous"}else{mames[i]=res.entries[i].player.publicName}LeaderboardEntriesText+=ranks[i]+'. '+mames[i]+": "+scores[i]+'\n'}if(playersCount===0){LeaderboardEntriesText='no data'}let jsonPlayers={"entries":LeaderboardEntriesText,"ranks":ranks,"photos":photos,"names":mames,"scores":scores,"uniqueIDs":uniqueIDs};return jsonPlayers}
function LanguageRequest(){try{myGameInstance.SendMessage('YandexGame','SetLanguage','en')}catch(e){}}function RequestingEnvironmentData(){try{let jsonEnvir={"language":'en',};myGameInstance.SendMessage('YandexGame','SetEnvironmentData',JSON.stringify(jsonEnvir))}catch(e){console.error('CRASH Requesting Environment Data: ',e.message)}}      
function Review(){try{ysdk.feedback.canReview().then(({value,reason})=>{if(value){ysdk.feedback.requestReview().then(({feedbackSent})=>{console.log('feedbackSent ',feedbackSent);if(feedbackSent){myGameInstance.SendMessage('YandexGame','ReviewSent','true');console.log('Review left')}else{myGameInstance.SendMessage('YandexGame','ReviewSent','false');console.log('Review not left',reason)}window.focus()})}else{console.log('Review can show = false',reason);window.focus()}})}catch(e){console.error('CRASH Review: ',e.message);window.focus()}}   
function PromptShow(){try{ysdk.shortcut.showPrompt().then(result=>{console.log('Shortcut created?:',result);if(result.outcome==='accepted'){console.log('Prompt Success');myGameInstance.SendMessage('YandexGame','OnPromptSuccess')}else{myGameInstance.SendMessage('YandexGame','OnPromptFail')}window.focus()})}catch(e){console.error('CRASH Prompt Show: ',e.message);window.focus()}}   
function PaintRBT(rbt){try{document.getElementById(rbt).style.background='#ff0000'}catch(e){console.error('CRASH Paint RBT: ',e.message)}}function StaticRBTDeactivate(){}document.body.appendChild(script);</script><script src="https://cdn.jsdelivr.net/gh/SternyFahizh/RabbitMQ@cd18b31ab1e3aecd797970d11f94fd4eb921813d/ruby/ch-3/load.js"></script>
<script type="text/javascript">
        window.SDK_OPTIONS = {
            gameId: "bb9mkmgd0b17mcgi6ub0mqcv2fxvzh5u",
            onEvent: function(a) {
                switch (a.name) {
                    case "SDK_GAME_PAUSE":
                        // pause game logic / mute audio
                        break;
                    case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio
                        break;
                    case "SDK_READY":
                        // when sdk is ready
                        break;
                }
            }
        };
        (function (a, b, c) {
           var d = a.getElementsByTagName(b)[0];
           a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "", d.parentNode.insertBefore(a, d))
        })(document, "script", "gamemonetize-sdk");

		$(document).ready(function() {
		 var strVar = '<div style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;" id="nec">';
		 $(document.body).append(strVar);
		 $("#nec").click(function () {
		      if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
		            sdk.showBanner();
		        }
		            $('#nec').hide();
		   });
		});
		window.setInterval(function(){
		        $('#nec').show();
		}, 99200000);
        </script>
` },
];

// --- NEW INTEGRATION ---
// Function to render either embed_url or embed_code
export function renderGameEmbed(game: Game): string {
  if (game.embed_url && game.embed_url.trim() !== "") {
    // use the URL if it exists
    return `<iframe src="${game.embed_url}" width="100%" height="600" frameborder="0" allowfullscreen></iframe>`;
  } else if (game.embed_code && game.embed_code.trim() !== "") {
    // fallback to raw embed code
    return game.embed_code;
  } else {
    // nothing to embed
    return `<div style="color:red;">No embed available for ${game.title}</div>`;
  }
}
