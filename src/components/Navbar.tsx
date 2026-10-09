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
  "NEW GAMES!!! Added Granny, Baldi's Basics, and Deltarune! - Blake Sux - Mason is fake - funky ehh - what is happening to fgteev duddy man - ayo we on tiktok now @Cyberspace1104 - cheddar + barbecue wavy sour cream and onion = cheddar + barbecue wavy 3 layer dip stack - supercalifragilisticexpialidociously getting pneumenoultramicroscopicsilicovolcanoconiosis - an intercontinental ballistic missile is 500mi away from your current location - oracle is watching - matt digby the goat unlike the movie hes in - disney and pixar sux now unlike back in 2006 when the best movie of all time released - release the baby - surronster crash full vid - GoGuardian Successfully Connected to Active Device - ayo teach they playing games in yo class - ",
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
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cy3BIvTi3DAf0uxoIdf1nHZC7PQBoo.png"
            alt=""
            className="size-5 rounded-md object-cover invert dark:invert-0"
            aria-hidden="true"
          />
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
