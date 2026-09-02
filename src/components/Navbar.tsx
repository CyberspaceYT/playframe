import { Link } from "react-router-dom";
import { Gamepad2, Search, Settings, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface NavbarProps { searchQuery?: string; onSearchChange?: (query: string) => void; showSearch?: boolean; }

// Edit this list in GitHub to customize the scrolling banner.
export const announcements = ["NEW DROPS EVERY WEEK", "NO DOWNLOADS. JUST PLAY.", "FIND YOUR NEXT FAVORITE GAME", "PLAYFRAME // MADE FOR PLAYERS"];
const dipPresets = { "IXL": "https://ixl.com", "Clever": "https://clever.com", "Drive": "https://drive.google.com", "Classroom": "https://classroom.google.com" };

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [dipKey, setDipKey] = useState("F2");
  const [dipTarget, setDipTarget] = useState(dipPresets.IXL);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === dipKey) { event.preventDefault(); window.location.href = dipTarget; } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dipKey, dipTarget]);

  return <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-xl">
    <div className="container mx-auto flex h-16 items-center gap-4 px-4">
      <Link to="/" className="group flex shrink-0 items-center gap-2 transition-transform duration-300 hover:-rotate-1 hover:scale-105"><Gamepad2 className="h-7 w-7 text-[hsl(var(--logo))] transition-transform duration-300 group-hover:rotate-6" /><span className="font-display text-xl font-black tracking-tight">PlayFrame</span></Link>
      <div className="ml-auto flex items-center gap-2">
        {showSearch && <div className={`flex items-center transition-all duration-300 ${searchOpen ? "w-56" : "w-10"}`}><button type="button" aria-label="Toggle search" onClick={() => setSearchOpen(!searchOpen)} className="grid size-10 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"><Search /></button>{searchOpen && <div className="relative ml-2 w-full"><Input autoFocus placeholder="Search games..." value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} className="h-10 border-primary/40 bg-secondary/60" /><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"><X /></button></div>}</div>}
        <div className="relative"><button type="button" aria-label="Settings" onClick={() => setSettingsOpen(!settingsOpen)} className="grid size-10 place-items-center rounded-lg text-muted-foreground transition-all hover:rotate-45 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"><Settings /></button>{settingsOpen && <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-xl"><div className="flex flex-col gap-4"><p className="font-display font-black">Quick settings</p><div className="flex items-center justify-between gap-3"><label htmlFor="dip-key" className="text-sm">Dip Button</label><input id="dip-key" value={dipKey} onChange={(e) => setDipKey(e.target.value || "F2")} className="w-20 rounded-md border border-border bg-background px-2 py-1 text-center text-sm" /></div><select aria-label="Dip destination" value={dipTarget} onChange={(e) => setDipTarget(e.target.value)} className="rounded-md border border-border bg-background px-2 py-2 text-sm">{Object.entries(dipPresets).map(([name, url]) => <option key={name} value={url}>{name} — {url}</option>)}</select></div></div>}</div>
      </div>
    </div>
    <div className="h-[25px] overflow-hidden bg-black text-white"><div className="flex h-full min-w-max items-center gap-10 whitespace-nowrap animate-marquee px-4 text-xs font-bold tracking-[0.2em]">{[...announcements, ...announcements].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
  </header>;
};
export default Navbar;
