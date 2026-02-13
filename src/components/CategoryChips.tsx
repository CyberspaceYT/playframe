import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";
import { useRef, useEffect, useState, useCallback } from "react";
import type { Category } from "@/lib/games-data";

interface CategoryChipsProps {
  categories: Category[];
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

const CategoryChips = ({ categories, activeCategory, onSelect }: CategoryChipsProps) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  const updateIndicator = useCallback(() => {
    const key = activeCategory ?? "__all__";
    const el = buttonRefs.current.get(key);
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
        height: elRect.height,
        opacity: 1,
      });
    }
  }, [activeCategory]);

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  const setRef = (key: string) => (el: HTMLButtonElement | null) => {
    if (el) buttonRefs.current.set(key, el);
  };

  return (
    <div ref={containerRef} className="relative flex flex-wrap gap-2">
      {/* Sliding indicator */}
      <div
        className={cn(
          "absolute top-0 rounded-full transition-all duration-300 ease-out",
          theme === "dark"
            ? "bg-white/15"
            : "bg-gradient-to-r from-amber-400 to-orange-500 shadow-md"
        )}
        style={indicatorStyle}
      />

      <button
        ref={setRef("__all__")}
        onClick={() => onSelect(null)}
        className={cn(
          "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300",
          activeCategory === null
            ? "text-white"
            : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          ref={setRef(cat.slug)}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-all duration-300",
            activeCategory === cat.slug
              ? "text-white"
              : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
