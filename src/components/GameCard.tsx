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
        style={{
          borderRadius: "1rem",
          backdropFilter: "blur(12px) saturate(180%)",
          background: "rgba(255, 255, 255, 0.08)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          transition: "transform 300ms ease, box-shadow 300ms ease",
          overflow: "hidden",
          position: "relative",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        className="card group-hover:[transform:translateY(-4px)] group-hover:[box-shadow:0_12px_25px_rgba(0,0,0,0.25)]"
      >
        {/* Thumbnail */}
        <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: "rgba(255, 255, 255, 0.08)" }}>
          <img
            src={game.thumbnail_url}
            alt={game.title}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "transform 300ms ease, filter 300ms ease",
              willChange: "transform, filter",
            }}
            className="group-hover:[transform:scale(1.1)] group-hover:[filter:brightness(1.1)]"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/400x400/fff7ed/e97c1a?text=${encodeURIComponent(
                game.title
              )}`;
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "0.75rem", position: "relative", zIndex: 10 }}>
          <h3
            style={{
              fontWeight: 600,
              fontSize: "0.875rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "rgba(255, 255, 255, 0.9)",
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            {game.title}
          </h3>
          <Badge
            variant="secondary"
            style={{
              marginTop: "0.375rem",
              fontSize: "0.75rem",
              textTransform: "capitalize",
              background: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px) saturate(180%)",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
              transition: "color 200ms ease",
            }}
          >
            {game.category}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
