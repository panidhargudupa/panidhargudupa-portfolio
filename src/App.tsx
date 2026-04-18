import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import Certificate from "./pages/Certificate.tsx";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (  
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/panidhargudupa-portfolio/">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
