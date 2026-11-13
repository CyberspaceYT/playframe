import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Game } from "@/lib/games-data";

interface GameCardProps { game: Game; }
const GameCard = ({ game }: GameCardProps) => {
  const [imageFailed, setImageFailed] = useState(false);
  const tileRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const tile = tileRef.current;
    if (!tile) return;
    tile.style.setProperty("--tilt-x", `${(0.5 - y) * 22}deg`);
    tile.style.setProperty("--tilt-y", `${(x - 0.5) * 22}deg`);
    tile.style.setProperty("--shine-x", `${x * 100}%`);
    tile.style.setProperty("--shine-y", `${y * 100}%`);
  };

  const resetPointer = () => {
    const tile = tileRef.current;
    tile?.style.setProperty("--tilt-x", "0deg");
    tile?.style.setProperty("--tilt-y", "0deg");
    tile?.style.setProperty("--shine-x", "50%");
    tile?.style.setProperty("--shine-y", "50%");
  };

  return <Link to={`/game/${game.id}`} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} className="group relative z-0 block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3348] hover:z-10">
    <div ref={tileRef} className="game-tile relative aspect-square overflow-hidden rounded-2xl bg-[#1d1d1d] shadow-[0_5px_16px_rgba(0,0,0,0.24)] transition-[transform,box-shadow] duration-300 ease-out group-hover:scale-[1.17] group-hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]" style={{ transform: "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))" }}>
      {imageFailed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted px-4 text-center text-xs font-bold uppercase text-muted-foreground">IMAGE COULDNT BE LOADED</div>
      ) : (
        <img src={game.thumbnail_url} alt="" onLoad={() => setImageFailed(false)} onError={() => setImageFailed(true)} className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-[filter,transform] duration-500 group-hover:scale-110 group-hover:brightness-110" loading="lazy" decoding="async" aria-hidden="true" />
      )}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.16), transparent 48%)" }} />
      {game.showCardTitle !== false && <div className="absolute inset-x-0 bottom-0 flex min-h-14 items-end justify-center bg-gradient-to-t from-black/65 via-black/25 to-transparent px-3 pb-3 text-center text-[14px] font-bold transition-[padding] duration-300 group-hover:pb-4"><h3 className="max-w-full truncate">{game.title}</h3></div>}
    </div>
  </Link>;
};
export default GameCard;
