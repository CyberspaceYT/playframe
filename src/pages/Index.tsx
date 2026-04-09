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
    <div className="flex min-h-screen flex-col relative">
      {/* Decorative floating orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="border-b border-border/30 py-12 transition-colors duration-500">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight transition-colors duration-300 neon-glow">
              Play Games{" "}
              <span className="gradient-text">
                Instantly
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground text-lg">
              Browse and play a huge catalog of games right in your browser — no downloads needed!
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
