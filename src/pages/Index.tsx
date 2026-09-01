import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import CategoryChips from "@/components/CategoryChips";
import Footer from "@/components/Footer";
import PopularGames from "@/components/PopularGames";
import { games, categories } from "@/lib/games-data";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let typed = "";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.length !== 1) return;
      typed = `${typed}${event.key.toUpperCase()}`.slice(-2);
      if (typed === "XP") {
        const audio = new Audio("/audio/erro.mp3");
        audio.volume = 0.7;
        void audio.play().catch(() => undefined);
        typed = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredGames = useMemo(() => games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()) && (!activeCategory || game.category === activeCategory)), [searchQuery, activeCategory]);

  return <div className="flex min-h-screen flex-col">
    <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
    <main className="flex-1">
      <section className="border-b border-border/50 py-12 transition-colors duration-500"><div className="container mx-auto px-4 text-center"><h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Play Games <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Instantly</span></h1><p className="mx-auto mt-3 max-w-lg text-muted-foreground">Browse and play a huge catalog of games right in your browser — no downloads needed!</p></div></section>
      <PopularGames />
      <section className="container mx-auto px-4 py-8"><CategoryChips categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} /><div className="game-grid mt-6">{filteredGames.map((game) => <div key={game.id} onClick={() => navigate(`/game/${game.id}`)} className="cursor-pointer"><GameCard game={game} /></div>)}</div>{filteredGames.length === 0 && <div className="py-20 text-center text-muted-foreground">No games found. Try a different search or category.</div>}</section>
    </main>
    <Footer />
  </div>;
};
export default Index;
