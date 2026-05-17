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
import { games } from "@/lib/games-data";

const queryClient = new QueryClient();

function FullGamePlayer() {
  const { id } = useParams<{ id: string }>();

  const game = games.find((g) => g.id === id);

  if (!game || !game.html_file) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl mb-4">Game not found 😢</h1>
          <p>Game ID: {id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-14 bg-[#1A0808] border-b border-[#4A1010] flex items-center justify-between px-6 z-10">
        <div className="text-white font-semibold">{game.title}</div>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-1.5 text-sm bg-white/10 hover:bg-white/20 rounded-md text-white transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Game */}
      <iframe
        src={game.html_file}
        className="flex-1 w-full border-0"
        title={game.title}
        allowFullScreen
      />
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

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

export default App;
