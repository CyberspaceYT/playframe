import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/play/${game.id}`} className="group block">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-300/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.45),0_0_20px_rgba(0,170,255,0.35)]"
      >
        {/* Aero gloss layer */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent" />

        {/* Thumbnail */}
        <div className="aspect-square overflow-hidden bg-white/20">
          <img
            src={game.thumbnail_url}
            alt={game.title}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/400x400/fff7ed/e97c1a?text=${encodeURIComponent(
                game.title
              )}`;
            }}
          />
        </div>

        {/* Content */}
        <div className="p-3 relative z-10">
          <h3 className="font-semibold text-sm truncate text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            {game.title}
          </h3>

          <Badge
            variant="secondary"
            className="mt-1.5 text-xs capitalize bg-white/70 text-sky-900 border border-white/60 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.3)]"
          >
            {game.category}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
