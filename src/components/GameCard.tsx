import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/game/${game.id}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
      <div className="game-tile relative aspect-square overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-500 ease-out group-hover:z-10 group-hover:scale-[1.06] group-hover:border-primary/70 group-hover:shadow-[0_0_0_5px_hsl(var(--primary)/0.12),0_18px_45px_hsl(var(--primary)/0.28)]">
        <img src={game.thumbnail_url} alt={game.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x600/6FE3E1/5257E5?text=${encodeURIComponent(game.title)}`; }} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true"><span className="crosshair-mark" /></div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="truncate text-base font-bold drop-shadow-md">{game.title}</h3>
        </div>
      </div>
    </Link>
  );
};
export default GameCard;
