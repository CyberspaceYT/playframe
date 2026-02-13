import { Link } from "react-router-dom";
import { Gamepad2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
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
            to="/categories"
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Categories
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
