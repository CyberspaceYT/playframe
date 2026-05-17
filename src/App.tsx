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
import { useTabVisibility } from "./hooks/useTabVisibility";
import { useState } from "react";
import { useAdminShortcut } from "./hooks/useAdminShortcut";
import { AdminEditorModal } from "./components/AdminEditorModal";
import { games } from "@/lib/games-data";

const queryClient = new QueryClient();

const AppContent = () => {
  useTabVisibility();
  const [adminOpen, setAdminOpen] = useState(false);
  useAdminShortcut(() => setAdminOpen(true));

  return (
    <QueryClientProvider client={queryClient}>
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

  if (!game || !game.html_file) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl mb-4">Game not found 😢</h1>
          <p className="text-xl">Game ID: {id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#1A0808] border-b border-[#4A1010] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-white font-bold">{game.title}</h1>
        </div>
        <button
          onClick={() => window.history.back()}
          className="text-white hover:bg-white/10 px-4 py-1 rounded-md transition-colors"
        >
          ← Back to Home
        </button>
      </div>

      {/* Game Iframe */}
      <iframe
        src={game.html_file}
        className="flex-1 w-full border-none"
        title={game.title}
        allowFullScreen
      />
    </div>
  );
}

const App = () => <AppContent />;
export default App;
