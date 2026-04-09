import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Search, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isGames = location.pathname === "/" || location.pathname.startsWith("/play") || location.pathname === "/categories";
  const isCreate = location.pathname === "/create";

  const gamesRef = useRef<HTMLAnchorElement>(null);
  const createRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const activeRef = isGames ? gamesRef.current : isCreate ? createRef.current : null;
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [isGames, isCreate]);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-primary/20 m-4 mt-0 rounded-b-2xl rounded-t-none transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5">
          <Gamepad2 className={`h-7 w-7 transition-colors duration-300 ${theme === "dark" ? "text-cyan-300" : "text-blue-500"}`} />
          <span className="text-xl font-bold tracking-tight transition-colors duration-300 gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            PlayFrame
          </span>
        </Link>

        {showSearch && (
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-9 bg-background/40 border-primary/30 backdrop-blur-sm transition-all duration-300 focus:bg-background/60 focus:border-primary/60 rounded-lg"
            />
          </div>
        )}

        <nav className="relative flex items-center gap-1">
          {/* Sliding indicator */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-lg transition-all duration-300 ease-out ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-400/30 to-blue-400/30"
                : "bg-gradient-to-r from-blue-300/40 to-cyan-300/40"
            }`}
            style={indicatorStyle}
          />
          <Link
            ref={gamesRef}
            to="/"
            className={`relative z-10 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
              isGames
                ? "text-white drop-shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>
          <Link
            ref={createRef}
            to="/create"
            className={`relative z-10 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
              isCreate
                ? "text-white drop-shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-4 w-4" />
            Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
