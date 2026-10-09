const BRAND_ICON_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cy3BIvTi3DAf0uxoIdf1nHZC7PQBoo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/0 backdrop-blur-sm py-8 transition-colors duration-500">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <img src={BRAND_ICON_URL} alt="" className="h-5 w-5 rounded-md object-cover invert dark:invert-0" aria-hidden="true" />
          <span className="font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PlayFrame</span>
        </div>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          All games are property of their respective owners. PlayFrame does not claim ownership of any game content displayed on this site.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
