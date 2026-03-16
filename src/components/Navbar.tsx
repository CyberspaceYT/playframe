import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Code, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState, useCallback } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { name: "Games", to: "/", icon: <Gamepad2 className="h-4 w-4" /> },
    { name: "Create", to: "/create", icon: <Code className="h-4 w-4" /> },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const getActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/create" && location.pathname === "/create") return true;
    if (path === "/" && location.pathname.startsWith("/play")) return true;
    return false;
  };

  const setRef = (key: string) => (el: HTMLAnchorElement | null) => {
    if (el) buttonRefs.current.set(key, el);
  };

  const updateIndicator = useCallback(() => {
    const activeItem = navItems.find((item) => getActive(item.to));
    if (!activeItem) return setIndicatorStyle({ opacity: 0 });
    const el = buttonRefs.current.get(activeItem.to);
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        height: elRect.height,
        opacity: 1,
      });
    }
  }, [location.pathname]);

  useEffect(() => updateIndicator(), [updateIndicator]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_4px_15px_rgba(0,0,0,0.25)] transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Gamepad2
            className={`h-7 w-7 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-orange-500"
            } drop-shadow-[0_0_6px_rgba(0,180,255,0.6)]`}
          />
          <span
            className="text-xl font-bold tracking-tight text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PlayFrame
          </span>
        </Link>

        {/* Search */}
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

        {/* Chip-style Nav */}
        <div ref={containerRef} className="relative flex items-center gap-2">
          {/* Sliding glass indicator */}
          <div
            className={`absolute top-0 rounded-full transition-all duration-300 ease-out ${
              theme === "dark"
                ? "bg-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                : "bg-white/20 shadow-[0_8px_30px_rgba(255,200,0,0.3)]"
            }`}
            style={indicatorStyle}
          />

          {navItems.map((item) => {
            const active = getActive(item.to);
            return (
              <Link
                key={item.to}
                ref={setRef(item.to)}
                to={item.to}
                className={`relative z-10 flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 backdrop-blur-md ${
                  active
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-400/30"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
