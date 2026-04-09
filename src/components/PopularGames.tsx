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
    <section className="border-b border-primary/20 py-8 transition-colors duration-500 relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-300/30 to-blue-300/20">
            <TrendingUp className="h-5 w-5 text-primary transition-colors duration-300" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight gradient-text">Popular Games</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {popularGames.map((game, index) => (
            <Link
              key={game.id}
              to={`/play/${game.id}`}
              className="group relative glass-panel flex items-center gap-4 p-4 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative shrink-0 z-10">
                <div className="h-16 w-16 overflow-hidden rounded-lg bg-gradient-to-br from-blue-300/40 to-cyan-300/40 border border-primary/30">
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
                <span className="absolute -left-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-xs font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
              </div>
              <div className="min-w-0 flex-1 relative z-10">
                <h3 className="font-semibold text-sm truncate text-foreground">{game.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground truncate">{game.description}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs capitalize bg-primary/20 text-primary hover:bg-primary/30 border border-primary/40">
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
