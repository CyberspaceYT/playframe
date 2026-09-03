import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }
const GameCard = ({ game }: GameCardProps) => <Link to={`/game/${game.id}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3348]">
  <div className="game-tile relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#1d1d1d] transition-transform duration-200 group-hover:scale-[1.025]">
    <img src={game.thumbnail_url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-300 group-hover:scale-105" loading="lazy" aria-hidden="true" />
    <div className="absolute inset-0 flex items-end p-2 text-[14px] font-medium text-white"><h3 className="truncate">{game.title}</h3></div>
  </div>
</Link>;
export default GameCard;
