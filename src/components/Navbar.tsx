import { Link } from "react-router-dom";
import { Gamepad2, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps { searchQuery?: string; onSearchChange?: (query: string) => void; showSearch?: boolean; }

// Edit this list in GitHub to customize the scrolling banner.
export const announcements = ["NEW DROPS EVERY WEEK", "NO DOWNLOADS. JUST PLAY.", "FIND YOUR NEXT FAVORITE GAME", "PLAYFRAME // MADE FOR PLAYERS"];

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-xl">
    <div className="container mx-auto flex h-16 items-center gap-4 px-4">
      <Link to="/" className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:-rotate-1 hover:scale-105"><Gamepad2 className="h-7 w-7 text-[hsl(var(--logo))] transition-transform duration-300 group-hover:rotate-6" /><span className="font-display text-xl font-black tracking-tight">PlayFrame</span></Link>
      <div className="ml-auto flex items-center gap-2">
        {showSearch && <div className={`flex items-center transition-all duration-300 ${searchOpen ? "w-56" : "w-10"}`}><button type="button" aria-label="Toggle search" onClick={() => setSearchOpen(!searchOpen)} className="grid size-10 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"><Search /></button>{searchOpen && <div className="relative ml-2 w-full"><Input autoFocus placeholder="Search games..." value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} className="h-10 border-primary/40 bg-secondary/60" /><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"><X /></button></div>}</div>}
      </div>
    </div>
    <div className="h-[25px] overflow-hidden bg-black text-white"><div className="flex h-full min-w-max items-center gap-10 whitespace-nowrap animate-marquee px-4 text-xs font-bold tracking-[0.2em]">{[...announcements, ...announcements].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
  </header>;
};
export default Navbar;
