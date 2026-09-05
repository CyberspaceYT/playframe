import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }
const GameCard = ({ game }: GameCardProps) => <Link to={`/game/${game.id}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3348]">
  <div className="game-tile relative aspect-square overflow-hidden rounded-[22.36%] border border-white/10 bg-[#1d1d1d] shadow-[inset_0_0_0_1px_hsl(var(--foreground)/0.06)] transition-[box-shadow,border-color] duration-300 group-hover:border-white/30 group-hover:shadow-[0_12px_30px_hsl(var(--foreground)/0.2),inset_0_0_0_1px_hsl(var(--foreground)/0.08)]">
    <img src={game.thumbnail_url} alt="" className="absolute inset-0 h-full w-full rounded-[22.36%] object-cover opacity-100 transition-[filter] duration-500 group-hover:brightness-110" loading="lazy" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 flex min-h-14 items-end justify-center bg-gradient-to-t from-black/55 via-black/20 to-transparent px-3 pb-3 text-center text-[14px] font-semibold text-white mix-blend-normal transition-[padding] duration-300 group-hover:pb-4"><h3 className="max-w-full truncate mix-blend-difference">{game.title}</h3></div>
  </div>
</Link>;
export default GameCard;
