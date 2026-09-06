import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  showSearch?: boolean;
}

export const announcements = [
  "Welcome to PlayFrame - I ate the burgers - Ryan is a nerd - Jace is a furry femboy - Mason is fake - New Games - Nvm no new games blake ate them - GOGUARDIAN™ IS WATCHING - ",
];

const Navbar = ({
  searchQuery = "",
  onSearchChange,
  showSearch = true,
}: NavbarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* CSS injection for seamless infinite scrolling loop */}
      <style>{`
        @keyframes marquee-infinite {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-infinite {
          animation: marquee-infinite 60s linear infinite;
        }
      `}</style>

      {/* 1. Scrolling banner at the very top */}
      <div className="h-[25px] overflow-hidden bg-black text-white flex items-center">
        <div className="relative flex w-full overflow-x-hidden whitespace-nowrap text-[12px] font-bold tracking-wide">
          
          {/* Primary text layer */}
          <div className="animate-marquee-infinite flex shrink-0 items-center">
            {announcements.map((item, index) => (
              <span className="mr-2" key={`track-primary-${index}`}>
                {item}
              </span>
            ))}
          </div>

          {/* Identical secondary text layer to catch the end of the loop seamlessly */}
          <div className="animate-marquee-infinite flex shrink-0 items-center" aria-hidden="true">
            {announcements.map((item, index) => (
              <span className="mr-2" key={`track-secondary-${index}`}>
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* 2. Main navbar with matching rounded-b-lg corners */}
      <div className="relative flex h-[50px] w-full items-center rounded-b-lg bg-[#2b2b2b] px-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-[16px] font-bold text-white"
        >
          {/* Custom SVG styled blue to match category chips */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5 text-primary" // Uses your chip theme color (or substitute with text-[#6395EE])
          >
            <line x1="6" x2="10" y1="11" y2="11" />
            <line x1="8" x2="8" y1="9" y2="13" />
            <line x1="15" x2="15.01" y1="12" y2="12" />
            <line x1="18" x2="18.01" y1="10" y2="10" />
            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
          </svg>
          <span>PlayFrame</span>
        </Link>

        {showSearch && (
          <div
            className={`absolute left-1/2 flex -translate-x-1/2 items-center transition-all duration-200 ${
              searchOpen ? "w-52" : "w-[200px]"
            }`}
          >
            {searchOpen ? (
              <div className="relative w-full">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white"
                  aria-hidden="true"
                />
                <Input
                  autoFocus
                  aria-label="Search games"
                  placeholder="Search games"
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  className="h-9 rounded-lg border-0 bg-[#929292] pl-9 pr-9 text-left text-sm font-bold text-white placeholder:text-white"
                />
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="flex h-9 w-[240px] items-center justify-start rounded-lg bg-[#929292] px-3 text-white"
              >
                <Search className="size-4" aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
