import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import GamePlayer from "./components/GamePlayer";
import { useTabVisibility } from "./hooks/useTabVisibility";
import { useState, useEffect } from "react";

const originalFavicon = "/favicon.svg";
const awayFavicon = "/favicon.svg";

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
          <Analytics />
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
