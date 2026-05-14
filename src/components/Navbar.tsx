import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Search, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLAnchorElement>(null);
  const createRef = useRef<HTMLAnchorElement>(null);

  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const updateIndicator = useCallback(() => {
    const activeEl = isGames
      ? gamesRef.current
      : isCreate
      ? createRef.current
      : null;

    if (!activeEl || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    setIndicatorStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      height: elRect.height,
      opacity: 1,
    });
  }, [isGames, isCreate]);

  useEffect(() => {
    let raf: number;

    raf = requestAnimationFrame(() => {
      requestAnimationFrame(updateIndicator);
    });

    window.addEventListener("resize", updateIndicator);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring" }}>
            <Gamepad2
              className={`h-7 w-7 ${
                theme === "dark" ? "text-white" : "text-orange-500"
              }`}
            />
          </motion.div>

          <span className="text-xl font-bold tracking-tight">
            PlayFrame
          </span>
        </Link>

        {/* SEARCH */}
        {showSearch && (
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="relative max-w-md flex-1 transition-all duration-300"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-9 bg-secondary/50 border-border/50 transition-all duration-300 focus:shadow-lg focus:scale-[1.01]"
            />
          </motion.div>
        )}

        {/* NAV */}
        <nav ref={containerRef} className="relative flex items-center gap-1">

          {/* INDICATOR */}
          <motion.div
            className={`absolute rounded-md ${
              theme === "dark"
                ? "bg-white/15"
                : "bg-gradient-to-r from-amber-400 to-orange-500"
            }`}
            animate={indicatorStyle}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
            }}
          />

          {/* GAMES */}
          <Link
            ref={gamesRef}
            to="/"
            className={`relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
              isGames
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>

          {/* CREATE */}
          <Link
            ref={createRef}
            to="/create"
            className={`relative z-10 flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
              isCreate
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-4 w-4" />
            Create
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
