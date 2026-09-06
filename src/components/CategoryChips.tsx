import { cn } from "@/lib/utils";
import { useRef, useEffect, useState, useCallback } from "react";
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
        className={cn(
          "absolute rounded-full transition-all duration-300 ease-out pointer-events-none",
          "bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20"
        )}
        style={indicatorStyle}
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
    </div>
  );
};

export default CategoryChips;
