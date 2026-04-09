import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";
import { games } from "@/lib/games-data";
import { getTopGames } from "@/lib/visit-tracker";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const PopularGames = () => {
  const [topGames, setTopGames] = useState<{ gameId: string; visits: number }[]>([]);

  useEffect(() => {
    setTopGames(getTopGames(3));
  }, []);

  const popularGames = topGames
    .map((t) => {
      const game = games.find((g) => g.id === t.gameId);
      return game ? { ...game, visits: t.visits } : null;
    })
    .filter(Boolean) as (typeof games[number] & { visits: number })[];

  if (popularGames.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-border/50 py-8 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="mb-5 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary transition-colors duration-300" />
          <h2 className="text-lg font-bold tracking-tight">Popular Games</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {popularGames.map((game, index) => (
            <Link
              key={game.id}
              to={`/play/${game.id}`}
              className="group relative flex items-center gap-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
            >
              <div className="relative shrink-0">
                <div className="h-16 w-16 overflow-hidden rounded-lg bg-secondary">
                  <img
                    src={game.thumbnail_url}
                    alt={game.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/400x400/fff7ed/e97c1a?text=${encodeURIComponent(game.title)}`;
                    }}
                  />
                </div>
                <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm transition-colors duration-300">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm truncate">{game.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground truncate">{game.description}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {game.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {game.visits} {game.visits === 1 ? "play" : "plays"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
