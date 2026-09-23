import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/about" element={<Navigate to="/en/about" replace />} />
            <Route path="/en" element={<Index />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/case/:slug" element={<CaseStudy />} />
            <Route path="/es" element={<Index />} />
            <Route path="/es/about" element={<About />} />
            <Route path="/es/case/:slug" element={<CaseStudy />} />
            <Route path="/pt" element={<Index />} />
            <Route path="/pt/about" element={<About />} />
            <Route path="/pt/case/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
