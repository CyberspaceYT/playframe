import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games-data";
import { recordVisit } from "@/lib/visit-tracker";
import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GamePlayer = () => {
  const { id } = useParams();
  const game = games.find((g) => g.id === id);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (id) recordVisit(id);
  }, [id]);

  // Keep state in sync when user presses Esc or browser exits fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!iframeRef.current) return;

    if (!document.fullscreenElement) {
      // Try to fullscreen the iframe directly — most games like this best
      iframeRef.current
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {
          // Fallback: try the container if iframe fullscreen is blocked
          const container = iframeRef.current?.parentElement;
          if (container) {
            container.requestFullscreen().catch(console.warn);
          }
        });
    } else {
      document.exitFullscreen().catch(console.warn);
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
      {/* Only show navbar + header when NOT in fullscreen */}
      {!isFullscreen && (
        <>
          <Navbar showSearch={false} />
          <main className="flex-1">
            <div className="container mx-auto px-4 py-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/">
                      <ArrowLeft className="h-6 w-6" />
                    </Link>
                  </Button>
                  <div>
                    <h1 className="text-2xl font-bold">{game.title}</h1>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFullscreen}
                  title={isFullscreen ? "Exit fullscreen" : "Go fullscreen"}
                >
                  {isFullscreen ? (
                    <Minimize className="h-5 w-5" />
                  ) : (
                    <Maximize className="h-5 w-5" />
                  )}
                </Button>
              </div>

              <div className="overflow-hidden rounded-xl border border-border/40 bg-black shadow-xl">
                <iframe
                  ref={iframeRef}
                  src={game.embed_url}
                  title={game.title}
                  className="h-[75vh] w-full"
                  allow="fullscreen; autoplay; gamepad; accelerometer; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
                />
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}

      {/* Fullscreen version — only iframe + minimal controls */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <iframe
            ref={iframeRef}
            src={game.embed_url}
            title={game.title}
            className="h-full w-full"
            allow="fullscreen; autoplay; gamepad; accelerometer; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox"
          />

          {/* Optional: tiny exit button in corner */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10 bg-black/40 text-white hover:bg-black/70"
            onClick={toggleFullscreen}
          >
            <Minimize className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default GamePlayer;
