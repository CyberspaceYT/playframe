import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps {
  game: Game;
}

const GamePlayer = ({ game }: GamePlayerProps) => {
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [coverComplete, setCoverComplete] = useState(false);
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const revealGame = frameLoaded && coverComplete;

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

    return () => {
      cancelAnimationFrame(fullscreenFrame);
      intro.removeEventListener("timeupdate", handleIntroTimeUpdate);
      intro.pause();
    };
  }, []);

  useEffect(() => {
    if (!revealGame) return;

    setShowShortcutHint(true);
    const hintTimer = window.setTimeout(() => setShowShortcutHint(false), 5000);
    return () => window.clearTimeout(hintTimer);
  }, [revealGame]);

  const handleFrameLoad = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument;
      doc?.documentElement.style.setProperty("background-color", "#000", "important");
      doc?.body?.style.setProperty("background-color", "#000", "important");
    } catch {
      // Cross-origin game frames cannot be styled; the black player background remains visible.
    }
    setFrameLoaded(true);
  }, []);

  const handleShortcutKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.altKey && !event.metaKey) {
      event.preventDefault();
      window.location.assign("https://playframe-launchpad.vercel.app");
    }
  }, []);

  useEffect(() => {
    if (!revealGame) return;

    const iframe = iframeRef.current;
    const attachIframeListener = () => {
      try {
        iframe?.contentWindow?.addEventListener(
          "keydown",
          handleShortcutKeyDown,
          true,
        );
      } catch {
        // Cross-origin game frames cannot be accessed; the parent listener remains active.
      }
    };

    window.addEventListener("keydown", handleShortcutKeyDown, true);
    iframe?.addEventListener("load", attachIframeListener);
    attachIframeListener();

    return () => {
      window.removeEventListener("keydown", handleShortcutKeyDown, true);
      iframe?.removeEventListener("load", attachIframeListener);
      try {
        iframe?.contentWindow?.removeEventListener(
          "keydown",
          handleShortcutKeyDown,
          true,
        );
      } catch {
        // Ignore inaccessible cross-origin game frames during cleanup.
      }
    };
  }, [handleShortcutKeyDown, revealGame]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 h-[100dvh] w-[100vw] overflow-hidden bg-black"
    >
      <motion.iframe
        ref={iframeRef}
        src={game.html_file}
        className="h-full w-full border-0"
        title={game.title}
        allowFullScreen
        onLoad={handleFrameLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: revealGame ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {!revealGame && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: revealGame ? 0 : 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (!coverComplete) setCoverComplete(true);
          }}
        >
          <img
            src="https://i.redd.it/inb7xkog7y131.gif"
            alt=""
            aria-hidden="true"
            className="max-h-[50vh] max-w-[50vw] object-contain"
            draggable={false}
          />
        </motion.div>
      )}

      {showShortcutHint && (
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.12, 0.78, 1] }}
        >
          Press Ctrl+Alt to go to PlayFrame
        </motion.div>
      )}
    </div>
  );
};

export default GamePlayer;
