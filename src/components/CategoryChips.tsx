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

    <div
      ref={containerRef}
      className="
      relative flex flex-wrap gap-3
      p-2
      rounded-2xl

      bg-white/10
      backdrop-blur-xl
      border border-white/30

      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >

      {/* Aero sliding glass indicator */}
      <div
        className={cn(
          "absolute top-0 rounded-full transition-all duration-300 ease-out",

          "backdrop-blur-lg",

          "bg-gradient-to-b from-white/70 via-white/30 to-white/10",

          "border border-white/50",

          "shadow-[0_0_10px_rgba(255,255,255,0.7),0_0_25px_rgba(0,140,255,0.5)]"
        )}
        style={indicatorStyle}
      />

      {/* ALL BUTTON */}

      <button
        ref={setRef("__all__")}
        onClick={() => onSelect(null)}
        className={cn(

          "relative z-10",

          "rounded-full px-5 py-2",

          "text-sm font-semibold",

          "transition-all duration-300",

          "backdrop-blur-md",

          "border border-white/40",

          "bg-gradient-to-b from-white/60 to-white/20",

          "shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.25)]",

          "hover:scale-105",

          "hover:shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(0,160,255,0.6)]",

          activeCategory === null
            ? "text-sky-900"
            : "text-white/90"

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

            "relative z-10",

            "rounded-full px-5 py-2",

            "text-sm font-semibold capitalize",

            "transition-all duration-300",

            "backdrop-blur-md",

            "border border-white/40",

            "bg-gradient-to-b from-white/60 to-white/20",

            "shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.25)]",

            "hover:scale-105",

            "hover:shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(0,160,255,0.6)]",

            activeCategory === cat.slug
              ? "text-sky-900"
              : "text-white/90"

          )}
        >
          {cat.name}
        </button>

      ))}

    </div>

  );

};

export default CategoryChips;
