import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import CategoryChips from "@/components/CategoryChips";
import Footer from "@/components/Footer";
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
        <section className="border-b border-border/50 py-12 transition-colors duration-500">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl transition-colors duration-300">
              Play Games{" "}
              <span className={`bg-clip-text text-transparent transition-all duration-500 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-300 to-white"
                  : "bg-gradient-to-r from-amber-400 to-orange-500"
              }`}>
                Instantly
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Browse and play a huge catalog of games right in your browser — no downloads needed!
            </p>
          </div>
        </section>

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
