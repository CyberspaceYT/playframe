import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Maximize2,
  Minimize2,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Game } from "@/lib/games-data";

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

const GamePlayer = ({ game, onClose }: GamePlayerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    requestAnimationFrame(() => containerRef.current?.requestFullscreen().catch(() => undefined));

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };


  return (
    <motion.div
      className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-video bg-[#2A1212] rounded-xl overflow-hidden border-2 border-[#4A1010]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* IFRAME */}
        <iframe
          ref={iframeRef}
          src={game.html_file}
          className="w-full h-full"
          title={game.title}
          allowFullScreen
        />

        {/* CONTROL BAR */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>

          <Button onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* TITLE */}
        <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded">
          <span className="text-white text-sm">{game.title}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GamePlayer;
