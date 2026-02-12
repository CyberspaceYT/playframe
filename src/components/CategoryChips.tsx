import { cn } from "@/lib/utils";
import type { Category } from "@/lib/games-data";

interface CategoryChipsProps {
  categories: Category[];
  activeCategory: string | null;
  onSelect: (slug: string | null) => void;
}

const CategoryChips = ({ categories, activeCategory, onSelect }: CategoryChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
          activeCategory === null
            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md"
            : "bg-secondary text-muted-foreground hover:text-foreground"
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.slug)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors",
            activeCategory === cat.slug
              ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
