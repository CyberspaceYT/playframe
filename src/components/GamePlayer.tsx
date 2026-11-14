import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps {
  game: Game;
}

const GamePlayer = ({ game }: GamePlayerProps) => {
  const [showGame, setShowGame] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intro = new Audio("/audio/game-boy-advance-sp-intro.mp3");
    intro.preload = "auto";
    intro.volume = 0.65;

    const stopBeforeBeep = () => {
      if (Number.isFinite(intro.duration) && intro.duration > 0)
        intro.currentTime = Math.max(0, intro.duration - 0.42);
      intro.pause();
    };

    const handleIntroTimeUpdate = () => {
      if (intro.duration - intro.currentTime <= 0.42) stopBeforeBeep();
    };

    intro.addEventListener("timeupdate", handleIntroTimeUpdate);
    void intro.play().catch(() => undefined);

    // Request fullscreen as soon as the player opens so the browser still has
    // the navigation's user activation; the game itself appears after the launch animation.
    const fullscreenFrame = requestAnimationFrame(() => {
      void containerRef.current?.requestFullscreen?.().catch(() => undefined);
    });
    const gameTimer = window.setTimeout(() => setShowGame(true), 1000);

    return () => {
      cancelAnimationFrame(fullscreenFrame);
      window.clearTimeout(gameTimer);
      intro.removeEventListener("timeupdate", handleIntroTimeUpdate);
      intro.pause();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-black"
    >
      {showGame ? (
        <iframe
          src={game.html_file}
          className="h-full w-full border-0"
          title={game.title}
          allowFullScreen
        />
      ) : (
        <motion.img
          src={game.thumbnail_url}
          alt={game.title}
          className="absolute max-w-none object-cover"
          initial={{ width: 96, height: 96, borderRadius: 24 }}
          animate={{ width: "100vw", height: "100dvh", borderRadius: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
};

export default GamePlayer;
