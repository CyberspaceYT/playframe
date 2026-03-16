import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import CategoryChips from "@/components/CategoryChips";
import Footer from "@/components/Footer";
import PopularGames from "@/components/PopularGames";
import { useTheme } from "@/components/ThemeProvider";
import { games, categories } from "@/lib/games-data";

const Index = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !activeCategory || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">

        {/* Hero */}
        <section className="relative border-b border-border/50 py-12 transition-colors duration-500 overflow-hidden">

          {/* Grid background */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative container mx-auto px-4 text-center">

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl transition-colors duration-300">
              PLAYFRAME
            </h1>

            <div className="mt-4 inline-block border-4 border-black bg-red-400 px-6 py-3 text-2xl font-extrabold shadow-[6px_6px_0_black] sm:text-3xl">
              PLAY GAMES ANYWHERE
            </div>

            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Browse hundreds of browser games and play instantly. No downloads, no installs, just click and play.
            </p>

          </div>
        </section>

        {/* Popular Games */}
        <PopularGames />

        {/* Games */}
        <section className="container mx-auto px-4 py-8">
          <CategoryChips
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No games found. Try a different search or category.
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
