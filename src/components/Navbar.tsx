import { Link } from "react-router-dom";
import { Gamepad2, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps { searchQuery?: string; onSearchChange?: (query: string) => void; showSearch?: boolean; }
export const announcements = ["Welcome to PlayFrame - I ate the burgers - Ryan is a nerd - Jace is a furry femboy - Mason is fake - New Games - Nvm no new games blake ate them - GOGUARDIAN™ IS WATCHING - "];
const announcementTrack = Array.from({ length: 10000 }, (_, index) => `${announcements[0]}${index % 2 ? "" : "  "}`);

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return <header className="sticky top-0 z-50">
    <div className="relative flex h-[50px] w-full items-center rounded-b-xl bg-[#2b2b2b] px-5">
      <Link to="/" className="flex items-center gap-2 text-[16px] font-bold text-white"><Gamepad2 className="size-5 text-[#6395EE]" /><span>PlayFrame</span></Link>
      {showSearch && <div className={`absolute left-1/2 flex -translate-x-1/2 items-center transition-all duration-200 ${searchOpen ? "w-52" : "w-[200px]"}`}>
        {searchOpen ? <div className="relative w-full"><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white" aria-hidden="true" /><Input autoFocus aria-label="Search games" placeholder="Search games" value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} className="h-9 rounded-lg border-0 bg-[#929292] pl-9 pr-9 text-left text-sm font-bold text-white placeholder:text-white" /><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white"><X className="size-4" /></button></div> : <button type="button" aria-label="Open search" onClick={() => setSearchOpen(true)} className="flex h-9 w-[240px] items-center justify-start rounded-lg bg-[#929292] px-3 text-white"><Search className="size-4" aria-hidden="true" /></button>}
      </div>}
    </div>
    <div className="h-[25px] overflow-hidden bg-black text-white"><div className="animate-marquee flex h-full min-w-max items-center whitespace-nowrap px-4 text-[12px] font-bold">{announcementTrack.map((item, index) => <span className="mr-8" key={index}>{item}</span>)}</div></div>
  </header>;
};
export default Navbar;
