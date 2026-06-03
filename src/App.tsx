import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GtagRouteTracker } from "@/components/GtagRouteTracker";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import { captureAttribution } from "@/lib/gtag";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesIndex = lazy(() => import("./pages/ServicesIndex"));
const ServiceCategory = lazy(() => import("./pages/ServiceCategory"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const LeeCounty = lazy(() => import("./pages/LeeCounty"));
const CityPage = lazy(() => import("./pages/CityPage"));
const LocalLanding = lazy(() => import("./pages/LocalLanding"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Reviews = lazy(() => import("./pages/Reviews"));
const ReviewLanding = lazy(() => import("./pages/ReviewLanding"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogTag = lazy(() => import("./pages/BlogTag"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

if (typeof window !== "undefined") captureAttribution();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GtagRouteTracker />
        <Suspense fallback={null}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
