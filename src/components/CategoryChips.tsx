import { cn } from "@/lib/utils";
import { useRef, useEffect, useState, useCallback } from "react";
import { Palette } from "lucide-react";
import type { Category } from "@/lib/games-data";

interface CategoryChipsProps {
  categories: Category[];
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

const CategoryChips = ({ categories, activeCategory, onSelect }: CategoryChipsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [chipColor, setChipColor] = useState("#4f8df7");

  const updateIndicator = useCallback(() => {
    const key = activeCategory ?? "__all__";
    const el = buttonRefs.current.get(key);
    
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      
      setIndicatorStyle({
        left: elRect.left - containerRect.left + containerRef.current.scrollLeft,
        top: elRect.top - containerRect.top,
        width: elRect.width,
        height: elRect.height,
        opacity: 1,
      });
    }
  }, [activeCategory]);

  // Track size/layout changes to keep indicator alignment exact
  useEffect(() => {
    updateIndicator();
    
    window.addEventListener("resize", updateIndicator);
    
    const container = containerRef.current;
    let resizeObserver: ResizeObserver | null = null;
    
    if (container) {
      resizeObserver = new ResizeObserver(() => updateIndicator());
      resizeObserver.observe(container);
    }

    return () => {
      window.removeEventListener("resize", updateIndicator);
      if (resizeObserver && container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [updateIndicator]);

  return (
    <div 
      ref={containerRef} 
      className="relative flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
    >
      {/* Sliding background indicator */}
      <div
        className="pointer-events-none absolute rounded-full shadow-md shadow-primary/20 transition-all duration-300 ease-out"
        style={{
          ...indicatorStyle,
          backgroundImage: `linear-gradient(110deg, ${chipColor}, color-mix(in srgb, ${chipColor} 62%, white))`,
        }}
      />

      {/* All Option */}
      <button
        ref={(el) => {
          if (el) buttonRefs.current.set("__all__", el);
          else buttonRefs.current.delete("__all__");
        }}
        onClick={() => onSelect(null)}
        className={cn(
          "relative z-10 shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 select-none",
          activeCategory === null 
            ? "text-primary-foreground" 
            : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
      >
        All
      </button>

      {/* Category List */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          ref={(el) => {
            if (el) buttonRefs.current.set(cat.slug, el);
            else buttonRefs.current.delete(cat.slug);
          }}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            "relative z-10 shrink-0 rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors duration-300 select-none",
            activeCategory === cat.slug
              ? "text-primary-foreground"
              : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          {cat.name}
        </button>
      ))}

      <label className="relative z-10 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-secondary/70 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" title="Choose chip color">
        <Palette aria-hidden="true" data-icon="inline-start" />
        <span className="sr-only">Choose category chip color</span>
        <input
          type="color"
          value={chipColor}
          onChange={(event) => setChipColor(event.target.value)}
          className="absolute inset-0 cursor-pointer opacity-0"
          aria-label="Choose category chip color"
        />
      </label>
    </div>
  );
};

export default CategoryChips;
