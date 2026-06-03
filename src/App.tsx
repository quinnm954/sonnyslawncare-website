import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GtagRouteTracker } from "@/components/GtagRouteTracker";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceAreas from "./pages/ServiceAreas";
import LeeCounty from "./pages/LeeCounty";
import CityPage from "./pages/CityPage";
import LocalLanding from "./pages/LocalLanding";
import ContactPage from "./pages/ContactPage";
import Reviews from "./pages/Reviews";
import ReviewLanding from "./pages/ReviewLanding";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogTag from "./pages/BlogTag";
import NotFound from "./pages/NotFound";
import { captureAttribution } from "@/lib/gtag";

const queryClient = new QueryClient();

if (typeof window !== "undefined") captureAttribution();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GtagRouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceCategory />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/lee-county-fl" element={<LeeCounty />} />
          <Route path="/areas/:city" element={<CityPage />} />
          <Route path="/local/:slug" element={<LocalLanding />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/tag/:tag" element={<BlogTag />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/review" element={<ReviewLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
