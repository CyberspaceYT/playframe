import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Search, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState, useLayoutEffect } from "react";

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

  const gamesRef = useRef<HTMLAnchorElement>(null);
  const createRef = useRef<HTMLAnchorElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const isGames =
    location.pathname === "/" ||
    location.pathname.startsWith("/play") ||
    location.pathname === "/categories";

  const isCreate = location.pathname === "/create";
  const isDark = theme === "dark";

  const [activeTab, setActiveTab] = useState<"games" | "create" | null>(null);

  // Update active tab when route changes
  useEffect(() => {
    if (isGames) setActiveTab("games");
    else if (isCreate) setActiveTab("create");
    else setActiveTab(null);
  }, [isGames, isCreate]);

  // Measure & position indicator *after* DOM has painted
  useLayoutEffect(() => {
    const updateIndicator = () => {
      const ref = activeTab === "games" ? gamesRef.current : createRef.current;
      const indicator = indicatorRef.current;

      if (!ref || !indicator) {
        indicator.style.opacity = "0";
        return;
      }

      const { offsetLeft, offsetWidth } = ref;

      indicator.style.opacity = "1";
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    };

    // Run once immediately + after resize / font load etc.
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 transition-opacity duration-300 hover:opacity-80"
        >
          <Gamepad2
            className={`h-7 w-7 transition-colors duration-300 ${
              isDark ? "text-white" : "text-orange-500"
            }`}
          />
          <span
            className="text-xl font-bold tracking-tight transition-colors duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PlayFrame
          </span>
        </Link>

        {/* Search */}
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

        {/* Tabs + sliding indicator */}
        <nav className="relative flex items-center gap-1">
          <div
            ref={indicatorRef}
            className={`
              pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 rounded-md
              transition-all duration-400 ease-out
              ${isDark
                ? "bg-white/15 backdrop-blur-sm"
                : "bg-gradient-to-r from-amber-400/90 to-orange-500/90 shadow-sm"
              }
            `}
            style={{
              transform: "translateX(0)",
              width: 0,
              opacity: 0,
            }}
          />

          <Link
            ref={gamesRef}
            to="/"
            className={`
              relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium
              transition-colors duration-300
              ${activeTab === "games"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>

          <Link
            ref={createRef}
            to="/create"
            className={`
              relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium
              transition-colors duration-300
              ${activeTab === "create"
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
              }
            `}
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
