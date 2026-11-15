import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08080A] text-center text-white">
      <style>{`
        @keyframes horizon-pulse {
          0%, 100% { opacity: .78; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1.035); }
        }
      `}</style>

      {/* Sunrise glow and planet edge, kept behind the 404 content. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 32% 20% at 50% 70%, rgba(183,155,250,.34) 0%, rgba(104,72,177,.20) 24%, rgba(58,42,120,.12) 48%, transparent 100%), radial-gradient(ellipse 54% 36% at 50% 72%, rgba(81,51,131,.14), transparent 72%), #08080A",
          }}
        />
        <div
          className="absolute left-1/2 top-[70.5%] h-[1px] w-[min(74vw,900px)] -translate-x-1/2"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(183,155,250,.38) 20%, rgba(255,255,255,.92) 50%, rgba(183,155,250,.38) 80%, transparent)",
            boxShadow: "0 0 12px 3px rgba(183,155,250,.42), 0 0 48px 12px rgba(111,75,180,.30)",
            animation: "horizon-pulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/2 top-[70.5%] h-[72vh] w-[190vw] -translate-x-1/2 rounded-[50%] bg-[#08080A]"
          style={{
            boxShadow: "0 -2px 18px rgba(183,155,250,.28), 0 -10px 70px rgba(95,65,154,.12)",
          }}
        />
      </div>

      <div className="relative z-10 px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-white/70">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
