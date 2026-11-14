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
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="mailto:contact@playframe.games">Contact Us</a>
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="mailto:contact@playframe.games?subject=Report%20a%20Blocked%20Game">Report a Blocked Game</a>
          <a className="text-muted-foreground transition-colors hover:text-foreground" href="/dmca-validation.html">DMCA Registration</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
