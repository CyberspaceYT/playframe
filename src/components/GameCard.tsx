import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/play/${game.id}`} className="group block">
      <div className="glass-panel overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:-translate-y-2 group relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none rounded-2xl" />
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-blue-300/40 to-cyan-300/40">
          <img
            src={game.thumbnail_url}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/400x400/e0f7ff/0d47a1?text=${encodeURIComponent(game.title)}`;
            }}
          />
        </div>
        <div className="p-4 relative z-10">
          <h3 className="font-semibold text-sm truncate text-foreground">{game.title}</h3>
          <Badge variant="secondary" className="mt-2 text-xs capitalize bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40">
            {game.category}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
