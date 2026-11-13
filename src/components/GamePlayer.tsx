import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const holdTimerRef = useRef<number | null>(null);
  const escapeHeldRef = useRef(false);
  const exitTriggeredRef = useRef(false);

  useEffect(() => {
    const iframeElement = iframeRef.current;
    const startHold = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (escapeHeldRef.current) return;
      escapeHeldRef.current = true;
      exitTriggeredRef.current = false;
      holdTimerRef.current = window.setTimeout(() => {
        exitTriggeredRef.current = true;
        onClose();
      }, 2000);
    };
    const cancelHold = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      escapeHeldRef.current = false;
      if (holdTimerRef.current) window.clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;

      const container = containerRef.current;
      if (!exitTriggeredRef.current && container && !document.fullscreenElement) {
        void container.requestFullscreen().catch(() => undefined);
      }
    };
    const bindIframeKeys = () => {
      try {
        const iframeDocument = iframeRef.current?.contentDocument;
        iframeDocument?.addEventListener("keydown", startHold);
        iframeDocument?.addEventListener("keyup", cancelHold);
      } catch {
        // Cross-origin game frames cannot be observed by the parent page.
      }
    };

    window.addEventListener("keydown", startHold);
    window.addEventListener("keyup", cancelHold);
    iframeElement?.addEventListener("load", bindIframeKeys);
    bindIframeKeys();

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

    requestAnimationFrame(() => containerRef.current?.requestFullscreen().catch(() => undefined));

    return () => {
      intro.removeEventListener("timeupdate", handleIntroTimeUpdate);
      intro.pause();
      window.removeEventListener("keydown", startHold);
      window.removeEventListener("keyup", cancelHold);
      iframeElement?.removeEventListener("load", bindIframeKeys);
      try {
        const iframeDocument = iframeElement?.contentDocument;
        iframeDocument?.removeEventListener("keydown", startHold);
        iframeDocument?.removeEventListener("keyup", cancelHold);
      } catch {
        // Cross-origin game frames cannot be observed by the parent page.
      }
      if (holdTimerRef.current) window.clearTimeout(holdTimerRef.current);
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
        <motion.p
          aria-live="polite"
          className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/75 px-4 py-2 text-sm font-medium text-white shadow-lg"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.86, 1] }}
        >
          Hold ESC for 2s to Exit Game
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default GamePlayer;
