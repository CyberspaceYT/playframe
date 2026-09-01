import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import GamePlayer from "./components/GamePlayer";
import { useTabVisibility } from "./hooks/useTabVisibility";
import { useState, useEffect } from "react";

const originalFavicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230BA3FF'/><path d='M9 13h14v8H9zM7 15v4M25 15v4M13 10v3M19 10v3' stroke='white' stroke-width='2.5' stroke-linecap='round'/><circle cx='13' cy='17' r='1.5' fill='white'/><circle cx='19' cy='17' r='1.5' fill='white'/></svg>";
const awayFavicon = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-drive-color-icon.png";

const FaviconSwitcher = () => {
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) return;
    const update = () => { link.href = document.hidden ? awayFavicon : originalFavicon; };
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return null;
};
import { useAdminShortcut } from "./hooks/useAdminShortcut";
import { AdminEditorModal } from "./components/AdminEditorModal";
import { games } from "@/lib/games-data";
import type { Game } from "@/lib/games-data";

const queryClient = new QueryClient();

const AppContent = () => {
  useTabVisibility();
  const [adminOpen, setAdminOpen] = useState(false);
  useAdminShortcut(() => setAdminOpen(true));

  return (
    <QueryClientProvider client={queryClient}>
      <FaviconSwitcher />
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AdminEditorModal
            open={adminOpen}
            onOpenChange={setAdminOpen}
            onAuthenticated={() => {}}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/create" element={<Create />} />
              <Route path="/game/:id" element={<FullGamePlayer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

function FullGamePlayer() {
  const { id } = useParams<{ id: string }>();

  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl mb-4">Game not found 😢</h1>
          <p className="text-xl">Game ID: {id}</p>
        </div>
      </div>
    );
  }

  return <GamePlayer game={game} onClose={() => window.history.back()} />;
}

const App = () => <AppContent />;
export default App;
