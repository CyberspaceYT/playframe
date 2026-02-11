import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/play/${game.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <div className="aspect-square overflow-hidden bg-secondary">
          <img
            src={game.thumbnail_url}
            alt={game.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/400x400/1a1a2e/7c3aed?text=${encodeURIComponent(game.title)}`;
            }}
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-sm truncate">{game.title}</h3>
          <Badge variant="secondary" className="mt-1.5 text-xs capitalize">
            {game.category}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
