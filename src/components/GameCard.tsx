import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }
type ImageTone = "light" | "dark" | "mixed";

const GameCard = ({ game }: GameCardProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [tone, setTone] = useState<ImageTone>("dark");

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    const inspect = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        context.drawImage(image, 0, 0, 32, 32);
        const pixels = context.getImageData(0, 0, 32, 32).data;
        let total = 0;
        let light = 0;
        let dark = 0;
        for (let i = 0; i < pixels.length; i += 16) {
          const luminance = (pixels[i] * 0.2126 + pixels[i + 1] * 0.7152 + pixels[i + 2] * 0.0722) / 255;
          total += luminance;
          if (luminance > 0.72) light += 1;
          if (luminance < 0.28) dark += 1;
        }
        const average = total / (pixels.length / 16);
        setTone(light > 0.3 && dark > 0.3 ? "mixed" : average >= 0.55 ? "light" : "dark");
      } catch {
        setTone("dark");
      }
    };
    if (image.complete) inspect();
    else image.addEventListener("load", inspect);
    return () => image.removeEventListener("load", inspect);
  }, [game.thumbnail_url]);

  const labelClass = tone === "light" ? "text-black" : tone === "mixed" ? "text-white text-stroke" : "text-white";
  return <Link to={`/game/${game.id}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3348]">
    <div className="game-tile relative aspect-square overflow-hidden rounded-[20%] border border-white/10 bg-[#1d1d1d] shadow-[inset_0_0_0_1px_hsl(var(--foreground)/0.06)] transition-[box-shadow,border-color] duration-300 group-hover:border-white/30 group-hover:shadow-[0_12px_30px_hsl(var(--foreground)/0.2),inset_0_0_0_1px_hsl(var(--foreground)/0.08)]">
      <img ref={imageRef} src={game.thumbnail_url} alt="" className="absolute inset-0 h-full w-full rounded-[22.36%] object-cover opacity-100 transition-[filter] duration-500 group-hover:brightness-110" loading="eager" fetchPriority="high" aria-hidden="true" crossOrigin="anonymous" />
      {game.showCardTitle !== false && <div className="absolute inset-x-0 bottom-0 flex min-h-14 items-end justify-center bg-gradient-to-t from-black/55 via-black/20 to-transparent px-3 pb-3 text-center text-[14px] font-bold transition-[padding] duration-300 group-hover:pb-4"><h3 className={`max-w-full truncate ${labelClass}`}>{game.title}</h3></div>}
    </div>
  </Link>;
};
export default GameCard;
