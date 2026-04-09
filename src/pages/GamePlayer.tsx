import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { games } from "@/lib/games-data";
import { recordVisit } from "@/lib/visit-tracker";
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
    if (id) recordVisit(id);
  }, [id]);
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
      <div className="flex min-h-screen flex-col relative">
        <div className="floating-orb floating-orb-1" />
        <div className="floating-orb floating-orb-2" />
        <Navbar showSearch={false} />
        <div className="flex flex-1 items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold gradient-text">Game Not Found</h1>
            <Link to="/" className="mt-6 inline-block text-primary hover:text-accent transition-colors duration-300 font-medium">
              ← Back to Games
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <Navbar showSearch={false} />
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20 rounded-lg">
                <Link to="/">
                  <ArrowLeft className="h-5 w-5 text-primary" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold gradient-text">{game.title}</h1>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </div>
            </div>
            <Button variant="outline" size="icon" onClick={toggleFullscreen} className="border-primary/40 hover:bg-primary/20 rounded-lg">
              {isFullscreen ? <Minimize className="h-4 w-4 text-primary" /> : <Maximize className="h-4 w-4 text-primary" />}
            </Button>
          </div>
          <div ref={containerRef} className={`overflow-hidden bg-black glass-panel transition-all duration-300 ${isFullscreen ? "" : "rounded-2xl"}`}>
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
