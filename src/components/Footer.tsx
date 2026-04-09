import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-panel border-t border-primary/20 m-4 mb-0 rounded-t-2xl rounded-b-none py-8 transition-colors duration-500 relative z-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-300/30 to-blue-300/20">
            <Gamepad2 className="h-5 w-5 text-primary transition-colors duration-300" />
          </div>
          <span className="font-bold text-lg gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>PlayFrame</span>
        </div>
        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
          All games are property of their respective owners. PlayFrame does not claim ownership of any game content displayed on this site.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
