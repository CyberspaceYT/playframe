import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GamePlayer from "./pages/GamePlayer";
import Categories from "./pages/Categories";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import { useTabVisibility } from "./hooks/useTabVisibility";
import { useState } from "react";
import { useAdminShortcut } from "./hooks/useAdminShortcut";
import { AdminEditorModal } from "./components/AdminEditorModal";

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
          <AdminEditorModal open={adminOpen} onOpenChange={setAdminOpen} onAuthenticated={() => {}} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/play/:id" element={<GamePlayer />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/create" element={<Create />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const App = () => <AppContent />;

export default App;
