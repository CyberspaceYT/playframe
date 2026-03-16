import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Code, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({
  searchQuery = "",
  onSearchChange,
  showSearch = true,
}: NavbarProps) => {
  const location = useLocation();
  const { theme } = useTheme();

  const isGames =
    location.pathname === "/" ||
    location.pathname.startsWith("/play") ||
    location.pathname === "/categories";
  const isCreate = location.pathname === "/create";

  const gamesRef = useRef<HTMLAnchorElement>(null);
  const createRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  useEffect(() => {
    const activeRef = isGames
      ? gamesRef.current
      : isCreate
      ? createRef.current
      : null;
    if (activeRef) {
      setIndicatorStyle({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [isGames, isCreate]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/10 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <Gamepad2
            className={`h-7 w-7 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-orange-500"
            } drop-shadow-[0_0_6px_rgba(0,180,255,0.6)]`}
          />
          <span
            className="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PlayFrame
          </span>
        </Link>

        {/* Search Bar */}
        {showSearch && (
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
            <Input
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-9 bg-white/20 border-white/30 backdrop-blur-md focus:bg-white/30 text-white transition-all duration-300"
            />
          </div>
        )}

        {/* Navigation */}
        <nav className="relative flex items-center bg-white/20 p-1 rounded-lg backdrop-blur-md">
          {/* Sliding Indicator */}
          <div
            className={`absolute h-[calc(100%-8px)] rounded-md shadow-[0_0_8px_rgba(0,180,255,0.6)] transition-all duration-300 ease-in-out bg-gradient-to-r from-amber-400 to-orange-500`}
            style={{
              ...indicatorStyle,
              top: "4px",
              pointerEvents: "none",
            }}
          />

          <Link
            ref={gamesRef}
            to="/"
            className={`relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isGames
                ? "text-white drop-shadow-[0_0_6px_rgba(0,180,255,0.8)]"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>

          <Link
            ref={createRef}
            to="/create"
            className={`relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isCreate
                ? "text-white drop-shadow-[0_0_6px_rgba(0,180,255,0.8)]"
                : "text-white/70 hover:text-white"
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
