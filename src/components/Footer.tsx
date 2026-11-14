
"use client";

import MarbleSprite from "./MarbleSprite";

const BRAND_ICON_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cy3BIvTi3DAf0uxoIdf1nHZC7PQBoo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/0 py-8 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 lg:flex-row">

        {/* LEFT: BRANDING */}
        <div className="flex max-w-md flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-3 flex items-center justify-center gap-2">
            <img
              src={BRAND_ICON_URL}
              alt=""
              className="h-5 w-5 rounded-md object-cover"
              aria-hidden="true"
            />
            <span
              className="font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              PlayFrame
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            All games are property of their respective owners.
            PlayFrame does not claim ownership of any game content
            displayed on this site.
          </p>
        </div>

        {/* CENTER: ANIMATED GLASS SPRITE */}
        <div className="relative h-[180px] w-[180px] shrink-0">
          <MarbleSprite
            face="eyes"
            background="#000000"
            scale={90}
            spriteColor="#1400F6"
            frost={5}
            follow="frame"
            reach={10}
            lean={10}
            blink={10}
            float={15}
          />
        </div>

        {/* RIGHT: NAVIGATION */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs lg:justify-end"
        >
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKHRMJwcGfsnrGSSKChVCrrcNNdCkWzrBJrkbBfRFKDqPklsVhnrmblFJRQWMPMRjWzHTgV"
          >
            Contact Us
          </a>

          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfdbm3lLLlgaz-dnH4IpFNM4css8vfSuwZ97BLDCDe9HW6TCA/viewform?usp=dialog"
          >
            Report a Blocked Game
          </a>

          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://www.dmca.com/compliance/playframe-five.vercel.app"
          >
            DMCA Registration
          </a>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
