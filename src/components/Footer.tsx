import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
      relative
      border-t border-white/30
      bg-white/10
      backdrop-blur-xl
      py-10
      transition-all duration-500
      shadow-[0_-8px_30px_rgba(0,0,0,0.35)]
      "
    >

      {/* Gloss highlight layer */}
      <div className="
        pointer-events-none
        absolute
        top-0
        left-0
        w-full
        h-1/2
        bg-gradient-to-b
        from-white/40
        to-transparent
      " />

      <div className="container mx-auto px-4 text-center relative z-10">

        {/* Logo row */}
        <div className="
        flex items-center justify-center gap-2 mb-4
        transition-all duration-300
        hover:scale-105
        ">

          <Gamepad2
            className="
            h-6 w-6
            text-sky-300
            drop-shadow-[0_0_8px_rgba(0,180,255,0.8)]
            transition-all duration-300
            hover:drop-shadow-[0_0_16px_rgba(0,200,255,1)]
            "
          />

          <span
            className="
            font-semibold
            text-white
            tracking-wide
            drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
            "
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            PlayFrame
          </span>

        </div>

        {/* Footer text */}

        <p className="
        text-xs
        text-white/80
        max-w-md
        mx-auto
        leading-relaxed
        drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]
        ">
          All games are property of their respective owners. PlayFrame does not claim ownership of any game content displayed on this site.
          We are not responsible if you suffer any consequences while using this website. - Cyberspace110
        </p>

      </div>

    </footer>
  );
};

export default Footer;
