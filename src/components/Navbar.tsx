import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRef, useEffect, useState, useCallback } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const announcements = [
  "NEW DROPS EVERY WEEK",
  "NO DOWNLOADS. JUST PLAY.",
  "FIND YOUR NEXT FAVORITE GAME",
  "PLAYFRAME // MADE FOR PLAYERS",
];

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const location = useLocation();
  const isGames = location.pathname === "/" || location.pathname.startsWith("/play") || location.pathname === "/categories";
  const containerRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const updateIndicator = useCallback(() => {
    const activeEl = gamesRef.current;
    if (activeEl && containerRef.current && isGames) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({ left: elRect.left - containerRect.left, width: elRect.width, height: elRect.height, opacity: 1 });
    } else setIndicatorStyle({ opacity: 0 });
  }, [isGames]);

  useEffect(() => {
    const frame = requestAnimationFrame(updateIndicator);
    window.addEventListener("resize", updateIndicator);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", updateIndicator); };
  }, [updateIndicator]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 shadow-sm backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:-rotate-1 hover:scale-105">
          <Gamepad2 className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-6" />
          <span className="text-xl font-bold tracking-tight">PlayFrame</span>
        </Link>
        {showSearch && (
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search games..." value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} className="border-border/60 bg-secondary/60 pl-9 transition-all duration-300 focus:border-primary/60 focus:bg-background focus:ring-primary/30" />
          </div>
        )}
        <nav ref={containerRef} className="relative flex items-center gap-1">
          <div className="absolute rounded-md bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/25 transition-all duration-300 ease-out" style={indicatorStyle} />
          <Link ref={gamesRef} to="/" className={`relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${isGames ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
            <Gamepad2 className="h-4 w-4" /> Games
          </Link>
        </nav>
      </div>
      <div className="h-[50px] overflow-hidden border-t border-primary/20 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground">
        <div className="flex h-full min-w-max items-center gap-10 whitespace-nowrap animate-marquee px-4 text-xs font-bold tracking-[0.2em]">
          {[...announcements, ...announcements].map((item, index) => <span key={`${item}-${index}`} className="flex items-center gap-10"><span>{item}</span><span className="text-primary-foreground/60">✦</span></span>)}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
