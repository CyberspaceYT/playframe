import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import CategoryChips from "@/components/CategoryChips";
import Footer from "@/components/Footer";
import { games, categories } from "@/lib/games-data";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const intro = new Audio("/audio/windows-xp-startup.mp3");
    intro.preload = "auto";
    intro.volume = 0.65;
    const stopBeforeBeep = () => {
      if (Number.isFinite(intro.duration) && intro.duration > 0) {
        intro.currentTime = Math.max(0, intro.duration - 0.42);
      }
      intro.pause();
    };
    intro.addEventListener("timeupdate", () => {
      if (intro.duration - intro.currentTime <= 0.42) stopBeforeBeep();
    });
    void intro.play().catch(() => undefined);

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

  const filteredGames = useMemo(
    () => games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()) && (!activeCategory || game.category === activeCategory)),
    [searchQuery, activeCategory],
  );

  return (
    <div className="min-h-screen bg-[#151515] text-white">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="w-full px-5 pb-16 sm:px-8">
        <section className="mx-auto max-w-[1080px] py-8 sm:py-12">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Welcome to PlayFrame</h1>
          <p className="mt-1 max-w-xs text-sm leading-4 text-white/45">ayo teach me playing<br />games in yo class</p>
        </section>
        <div className="mx-auto max-w-[1080px]"><CategoryChips categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} /></div>
        <section className="game-grid mt-7 w-full">
          {filteredGames.map((game) => <div key={game.id} onClick={() => navigate(`/game/${game.id}`)} className="cursor-pointer"><GameCard game={game} /></div>)}
        </section>
        {filteredGames.length === 0 && <div className="py-20 text-center text-white/50">No games found. Try a different search or category.</div>}
      </main>
      <Footer />
    </div>
  );
};
export default Index;
