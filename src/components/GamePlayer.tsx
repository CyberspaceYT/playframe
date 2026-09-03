import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps { game: Game; onClose: () => void; }

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.repeat) return;
      event.preventDefault();
      if (document.fullscreenElement) void document.exitFullscreen();
      onClose();
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => containerRef.current?.requestFullscreen().catch(() => undefined));
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-background p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div ref={containerRef} className="relative aspect-video w-full max-w-5xl overflow-hidden bg-background" initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 20 }}>
      <iframe ref={iframeRef} src={game.html_file} className="h-full w-full" title={game.title} allowFullScreen />
      {isFullscreen && showHint && <motion.p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white drop-shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 1.8, repeat: 5 }}>Hold ESC for 3s to Exit Game</motion.p>}
    </motion.div>
  </motion.div>;
};
export default GamePlayer;
