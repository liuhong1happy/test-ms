import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Router, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import { ASSET_BASE } from "./data/content";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Router base={ASSET_BASE}>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:slug" component={ProductDetail} />
        <Route path="/research" component={Research} />
        <Route path="/research/:slug" component={ResearchDetail} />
        <Route path="/404" component={NotFound} />
      </Router>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
