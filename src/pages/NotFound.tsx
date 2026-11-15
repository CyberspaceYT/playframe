import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "70%");
  };

  return (
    <main
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08080A] text-center text-white"
    >
      <style>{`
        @keyframes horizon-pulse {
          0%, 100% { opacity: .78; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1.035); }
        }
      `}</style>

      {/* The sunrise brightens and follows the pointer while the scene is hovered. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-[filter] duration-700 group-hover:brightness-125"
          style={{
            background:
              "radial-gradient(ellipse 32% 20% at 50% 70%, rgba(183,155,250,.34) 0%, rgba(104,72,177,.20) 24%, rgba(58,42,120,.12) 48%, transparent 100%), radial-gradient(ellipse 54% 36% at 50% 72%, rgba(81,51,131,.14), transparent 72%), #08080A",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 30% 25% at var(--pointer-x, 50%) var(--pointer-y, 70%), rgba(183,155,250,.24), rgba(111,75,180,.12) 35%, transparent 72%)",
          }}
        />
        <div
          className="absolute left-1/2 top-[70.5%] h-[1px] w-[min(74vw,900px)] -translate-x-1/2 transition-[filter,height] duration-500 group-hover:h-[2px] group-hover:brightness-150"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(183,155,250,.38) 20%, rgba(255,255,255,.92) 50%, rgba(183,155,250,.38) 80%, transparent)",
            boxShadow: "0 0 12px 3px rgba(183,155,250,.42), 0 0 48px 12px rgba(111,75,180,.30)",
            animation: "horizon-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 top-[70.5%] h-[72vh] w-[190vw] -translate-x-1/2 rounded-[50%] bg-[#08080A] transition-[box-shadow] duration-500 group-hover:shadow-[0_-4px_28px_rgba(183,155,250,0.42),0_-12px_90px_rgba(95,65,154,0.22)]"
          style={{
            boxShadow: "0 -2px 18px rgba(183,155,250,.28), 0 -10px 70px rgba(95,65,154,.12)",
          }}
        />
      </div>

      <div className="relative z-10 px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-white/70">Page was eaten by a Black Hole</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
