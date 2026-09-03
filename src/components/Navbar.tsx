import { Link } from "react-router-dom";
import { Gamepad2, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps { searchQuery?: string; onSearchChange?: (query: string) => void; showSearch?: boolean; }
export const announcements = ["Welcome to PlayFrame - I ated the burgers - Ryan is a nerd - Jace is a furry femboy - Mason is fake - New Games - Nvm no new games blake ate them - GOGUARDIAN™ IS WATCHING - "];

const Navbar = ({ searchQuery = "", onSearchChange, showSearch = true }: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  return <header className="sticky top-0 z-50">
    <div className="relative flex h-[50px] w-full items-center rounded-b-xl bg-[#2b2b2b] px-5">
      <Link to="/" className="flex items-center gap-2 text-[16px] font-medium text-white"><Gamepad2 className="size-5 text-[#6395EE]" /><span>PlayFrame</span></Link>
      {showSearch && <div className={`absolute left-1/2 flex -translate-x-1/2 items-center transition-all duration-200 ${searchOpen ? "w-52" : "w-[200px]"}`}>
        {searchOpen ? <div className="relative w-full"><Input autoFocus placeholder="Search" value={searchQuery} onChange={(e) => onSearchChange?.(e.target.value)} className="h-[20px] rounded-md border-0 bg-[#929292] px-3 text-center text-[12px] text-white placeholder:text-white" /><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="absolute right-1 top-1/2 -translate-y-1/2 text-white"><X className="size-3" /></button></div> : <button type="button" onClick={() => setSearchOpen(true)} className="h-[20px] w-[200px] rounded-md bg-[#929292] text-[12px] text-white">Search</button>}
      </div>}
    </div>
    <div className="h-[25px] overflow-hidden bg-black text-white"><div className="flex h-full min-w-max items-center whitespace-nowrap animate-marquee px-4 text-[12px] font-medium">{[...announcements, ...announcements].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
  </header>;
};
export default Navbar;
