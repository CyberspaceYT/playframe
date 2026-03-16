import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Code, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils"; // Assuming you have the same cn utility

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
    
    if (containerRef.current) {
        if (!activeItem) {
            setIndicatorStyle({ opacity: 0 });
            return;
        }

        const el = buttonRefs.current.get(activeItem.to);
        if (el) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();

          setIndicatorStyle({
            left: elRect.left - containerRect.left,
            width: elRect.width,
            height: elRect.height,
            opacity: 1,
          });
        }
    }
  }, [location.pathname]);

  useEffect(() => {
    updateIndicator();
    // Add resize listener to keep indicator aligned
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-all duration-300 hover:scale-105">
          <div className="p-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md shadow-inner">
            <Gamepad2
                className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(0,140,255,0.8)]"
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PlayFrame
          </span>
        </Link>

        {/* Search - Styled to match input glassmorphism */}
        {showSearch && (
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70 z-10" />
            <Input
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="
                pl-9 
                bg-white/10 border-white/30 backdrop-blur-xl 
                text-white placeholder:text-white/50
                rounded-full
                focus:bg-white/20 focus:ring-0 focus:border-white/50
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                transition-all duration-300
              "
            />
          </div>
        )}

        {/* Chip-style Nav Tray */}
        <nav 
          ref={containerRef} 
          className="
            relative flex items-center gap-2 p-1.5
            rounded-2xl bg-white/5 border border-white/20 
            backdrop-blur-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)]
          "
        >
          {/* Aero sliding glass indicator - EXACT MATCH */}
          <div
            className={cn(
                "absolute top-0 rounded-full transition-all duration-300 ease-out z-0",
                "backdrop-blur-lg",
                "bg-gradient-to-b from-white/70 via-white/30 to-white/10",
                "border border-white/50",
                "shadow-[0_0_10px_rgba(255,255,255,0.7),0_0_25px_rgba(0,140,255,0.5)]"
            )}
            style={indicatorStyle}
          />

          {navItems.map((item) => {
            const active = getActive(item.to);
            return (
              <Link
                key={item.to}
                ref={setRef(item.to)}
                to={item.to}
                className={cn(
                    "relative z-10 flex items-center gap-2 px-5 py-2",
                    "text-sm font-semibold transition-all duration-300",
                    "rounded-full border border-white/40",
                    "bg-gradient-to-b from-white/60 to-white/20",
                    "backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.25)]",
                    "hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.9)]",
                    active ? "text-sky-900" : "text-white/90"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
