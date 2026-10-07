import { useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }
const GameCard = ({ game }: GameCardProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  return <Link to={`/game/${game.id}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3348]">
    <div className="game-tile relative aspect-square overflow-hidden rounded-[20%] border border-white/10 bg-[#1d1d1d] shadow-[inset_0_0_0_1px_hsl(var(--foreground)/0.06)] transition-[box-shadow,border-color] duration-300 group-hover:border-white/30 group-hover:shadow-[0_12px_30px_hsl(var(--foreground)/0.2),inset_0_0_0_1px_hsl(var(--foreground)/0.08)]">
      {imageFailed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted px-4 text-center text-xs font-bold uppercase text-muted-foreground">IMAGE COULDNT BE LOADED</div>
      ) : (
        <img src={game.thumbnail_url} alt="" onLoad={() => setImageFailed(false)} onError={() => setImageFailed(true)} className="absolute inset-0 h-full w-full rounded-[22.36%] object-cover opacity-100 transition-[filter] duration-500 group-hover:brightness-110" loading="lazy" decoding="async" aria-hidden="true" />
      )}
      {game.showCardTitle !== false && <div className="absolute inset-x-0 bottom-0 flex min-h-14 items-end justify-center bg-gradient-to-t from-black/55 via-black/20 to-transparent px-3 pb-3 text-center text-[14px] font-bold transition-[padding] duration-300 group-hover:pb-4"><h3 className="max-w-full truncate">{game.title}</h3></div>}
    </div>
  </Link>;
};
export default GameCard;
