import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games-data";
import { useState, useRef, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GamePlayer = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  if (!game) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar showSearch={false} />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Game Not Found</h1>
            <Link to="/" className="mt-4 inline-block text-primary hover:underline">
              ← Back to Games
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar showSearch={false} />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-xl font-bold">{game.title}</h1>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={toggleFullscreen}>
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>

          <div ref={containerRef} className={`overflow-hidden bg-black ${isFullscreen ? "" : "rounded-xl border border-border"}`}>
            <iframe
              ref={iframeRef}
              src={game.embed_url}
              title={game.title}
              className={`w-full ${isFullscreen ? "h-screen" : "h-[70vh]"}`}
              allow="fullscreen; autoplay; gamepad"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GamePlayer;
