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
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Gamepad2 className={`h-7 w-7 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-orange-500"}`} />
          <span className="text-xl font-bold tracking-tight transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
              className="pl-9 bg-secondary/50 border-border/50 backdrop-blur-sm transition-all duration-300 focus:bg-secondary/80"
            />
          </div>
        )}

        <nav className="relative flex items-center gap-1">
          {/* Sliding indicator */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-md transition-all duration-300 ease-out ${
              theme === "dark"
                ? "bg-white/15"
                : "bg-gradient-to-r from-amber-400 to-orange-500 shadow-sm"
            }`}
            style={indicatorStyle}
          />
          <Link
            ref={gamesRef}
            to="/"
            className={`relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
              isGames
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>
          <Link
            ref={createRef}
            to="/create"
            className={`relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
              isCreate
                ? theme === "dark" ? "text-white" : "text-white"
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
