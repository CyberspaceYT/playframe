import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Gamepad2 className="h-5 w-5 text-primary" />
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
