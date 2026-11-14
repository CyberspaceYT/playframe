import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface LaunchRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface GamePlayerProps {
  game: Game;
  launchRect?: LaunchRect | null;
}

const GamePlayer = ({ game, launchRect }: GamePlayerProps) => {
  const [showGame, setShowGame] = useState(false);
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const startRect = launchRect ?? {
    left: window.innerWidth / 2 - 48,
    top: window.innerHeight / 2 - 48,
    width: 96,
    height: 96,
  };

  useEffect(() => {
    const intro = new Audio("/audio/game-boy-advance-sp-intro.mp3");
    intro.preload = "auto";
    intro.volume = 0.65;

    const stopBeforeBeep = () => {
      if (Number.isFinite(intro.duration) && intro.duration > 0) {
        intro.currentTime = Math.max(0, intro.duration - 0.42);
      }
      intro.pause();
    };

    const handleIntroTimeUpdate = () => {
      if (intro.duration - intro.currentTime <= 0.42) {
        stopBeforeBeep();
      }
    };

    intro.addEventListener("timeupdate", handleIntroTimeUpdate);

    void intro.play().catch(() => undefined);

    const fullscreenFrame = requestAnimationFrame(() => {
      void containerRef.current?.requestFullscreen?.().catch(() => undefined);
    });

    const gameTimer = window.setTimeout(() => {
      setShowGame(true);
      setShowShortcutHint(true);
    }, 1000);

    return () => {
      cancelAnimationFrame(fullscreenFrame);
      window.clearTimeout(gameTimer);
      intro.removeEventListener("timeupdate", handleIntroTimeUpdate);
      intro.pause();
    };
  }, []);

  useEffect(() => {
    if (!showGame) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        event.code === "Tab"
      ) {
        event.preventDefault();
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [navigate, showGame]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 h-[100dvh] w-[100vw] overflow-hidden bg-black"
    >
      {!showGame && (
        <motion.img
          src={game.thumbnail_url}
          alt={game.title}
          className="absolute block object-cover"
          style={{
            left: startRect.left,
            top: startRect.top,
            width: startRect.width,
            height: startRect.height,
            borderRadius: 18,
            transformOrigin: "top left",
          }}
          initial={{
            left: startRect.left,
            top: startRect.top,
            width: startRect.width,
            height: startRect.height,
            borderRadius: 18,
            opacity: 1,
          }}
          animate={{
            left: 0,
            top: 0,
            width: "100vw",
            height: "100dvh",
            borderRadius: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}

      {showGame && (
        <>
          <iframe
            src={game.html_file}
            className="h-full w-full border-0"
            title={game.title}
            allowFullScreen
          />
          {showShortcutHint && (
            <motion.div
              className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 5, times: [0, 0.12, 0.78, 1] }}
              onAnimationComplete={() => setShowShortcutHint(false)}
            >
              Press Ctrl+Tab to go Home
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default GamePlayer;
