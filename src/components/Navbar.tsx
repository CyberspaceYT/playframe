import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Search, Code } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const location = useLocation();
  const isGames = location.pathname === "/" || location.pathname.startsWith("/play") || location.pathname === "/categories";
  const isCreate = location.pathname === "/create";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Gamepad2 className="h-7 w-7 text-orange-500" />
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
              className="pl-9 bg-secondary border-border"
            />
          </div>
        )}

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isGames
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            Games
          </Link>
          <Link
            to="/create"
            className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              isCreate
                ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-sm"
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
