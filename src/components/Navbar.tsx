import { Link, useLocation, useNavigate } from "react-router-dom";
import { Gamepad2, Search, Code, User, LogOut, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/components/ThemeProvider";
import { useAuth } from "@/contexts/AuthContext";
import { useRef, useEffect, useState } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user, loading, signOut } = useAuth();
  
  const isGames = location.pathname === "/" || location.pathname.startsWith("/play") || location.pathname === "/categories";
  const isCreate = location.pathname === "/create";

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getInitials = (email: string) => {
    return email.charAt(0).toUpperCase();
  };

  const gamesRef = useRef<HTMLAnchorElement>(null);
  const createRef = useRef<HTMLAnchorElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    const activeRef = isGames ? gamesRef.current : isCreate ? createRef.current : null;
    
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
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl transition-colors duration-500">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Gamepad2 className={`h-7 w-7 transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-orange-500"}`} />
          <span className="text-xl font-bold tracking-tight transition-colors duration-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            PlayFrame
          </span>
        </Link>

        {/* Search Bar */}
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

        {/* Navigation with Animated Slider */}
        <nav className="relative flex items-center bg-secondary/20 p-1 rounded-lg">
          {/* Sliding indicator - The "Swipe" element */}
          <div
            className={`absolute h-[calc(100%-8px)] rounded-md shadow-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              theme === "dark"
                ? "bg-white/15"
                : "bg-gradient-to-r from-amber-400 to-orange-500"
            }`}
            style={{
              ...indicatorStyle,
              top: '4px',
              pointerEvents: 'none' // Ensures the indicator doesn't block clicks
            }}
          />

          <Link
            ref={gamesRef}
            to="/"
            className={`relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
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
            className={`relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isCreate
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-4 w-4" />
            Create
          </Link>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-2">
          {loading ? (
            <div className="h-8 w-8 animate-pulse rounded-full bg-secondary" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 border border-border/50">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                      {getInitials(user.email || "U")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col gap-1 p-2">
                  <p className="text-sm font-medium">{user.email}</p>
                  <p className="text-xs text-muted-foreground">Manage your account</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account" className="flex items-center gap-2 cursor-pointer">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleSignOut}
                  className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Sign in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
