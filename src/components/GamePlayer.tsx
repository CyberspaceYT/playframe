import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const wasFullscreen = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
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

    const handleFullscreenChange = () => {
      const fullscreen = Boolean(document.fullscreenElement);
      if (wasFullscreen.current && !fullscreen) onClose();
      wasFullscreen.current = fullscreen;
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    requestAnimationFrame(() => containerRef.current?.requestFullscreen().catch(() => undefined));

    return () => {
      intro.removeEventListener("timeupdate", handleIntroTimeUpdate);
      intro.pause();
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={containerRef}
        className="relative aspect-video w-full max-w-5xl overflow-hidden bg-background"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <iframe ref={iframeRef} src={game.html_file} className="h-full w-full" title={game.title} allowFullScreen />

      </motion.div>
    </motion.div>
  );
};

export default GamePlayer;
