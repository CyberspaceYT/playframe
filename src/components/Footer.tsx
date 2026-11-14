import PredictiveArc from "@/components/PredictiveArc";

const BRAND_ICON_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cy3BIvTi3DAf0uxoIdf1nHZC7PQBoo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/0 py-8 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex max-w-md flex-col items-center text-center sm:items-start sm:text-left">
          <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start">
            <img src={BRAND_ICON_URL} alt="" className="h-5 w-5 rounded-md object-cover" aria-hidden="true" />
            <span className="font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PlayFrame</span>
          </div>
          <p className="text-xs text-muted-foreground">
            All games are property of their respective owners. PlayFrame does not claim ownership of any game content displayed on this site.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs sm:justify-end">
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKHRMJwcGfsnrGSSKChVCrrcNNdCkWzrBJrkbBfRFKDqPklsVhnrmblFJRQWMPMRjWzHTgV">Contact Us</a>
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://docs.google.com/forms/d/e/1FAIpQLSfdbm3lLLlgaz-dnH4IpFNM4css8vfSuwZ97BLDCDe9HW6TCA/viewform?usp=dialog">Report a Blocked Game</a>
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="https://www.dmca.com/compliance/playframe-five.vercel.app">DMCA Registration</a>
        </nav>
      </div>
      <div aria-hidden="true" className="pointer-events-none mt-6 h-36 w-full overflow-hidden sm:mt-8 sm:h-48">
        <PredictiveArc
          height={192}
          style={{ minWidth: 0, minHeight: 0, width: "100%", height: "100%" }}
          background="#030303"
          baseColor="#3b1515"
          accentColor="#ff4d4d"
          highlight="#ffb3b3"
          density={110}
          dotSize={90}
          speed={65}
          arch={{ peak: 100, falloff: 600, thickness: 206, archHeight: 0 }}
          pointer={{ enabled: false }}
        />
      </div>
    </footer>
  );
};

export default Footer;
