
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            {/* Placeholder routes for remaining pages */}
            <Route path="/subsidiaries" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>Subsidiaries page coming soon</h1></div>} />
            <Route path="/manpower" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>Manpower Solutions page coming soon</h1></div>} />
            <Route path="/careers" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>Careers page coming soon</h1></div>} />
            <Route path="/investor-relations" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>Investor Relations page coming soon</h1></div>} />
            <Route path="/news" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>News & Media page coming soon</h1></div>} />
            <Route path="/products/gallopingpower" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>GallopingPower page coming soon</h1></div>} />
            <Route path="/products/gallopinggear" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>GallopingGear page coming soon</h1></div>} />
            <Route path="/products/tjai-erp" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>TJAI ERP page coming soon</h1></div>} />
            <Route path="/subsidiaries/skillonx" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>SkillonX page coming soon</h1></div>} />
            <Route path="/subsidiaries/webster-labs" element={<div className="min-h-screen bg-black text-white flex items-center justify-center"><h1>Webster Labs page coming soon</h1></div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
