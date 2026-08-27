import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Enterprise from "./pages/Enterprise";
import Government from "./pages/Government";
import Customers from "./pages/Customers";
import Documentation from "./pages/Documentation";
import Resources from "./pages/Resources";
import Api from "./pages/Api";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequestQuota from "./pages/RequestQuota";
import Learn from "./pages/Learn";

// Dashboards
import ClientDashboard from "./pages/ClientDashboard";
import LabelerDashboard from "./pages/LabelerDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="adara-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/government" element={<Government />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/api" element={<Api />} />
              <Route path="/support" element={<Support />} />
              <Route path="/learn" element={<Learn />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/request-quota" element={<RequestQuota />} />

              {/* Dashboard Routes */}
              <Route path="/client-dashboard" element={<ClientDashboard />} />
              <Route path="/labeler-dashboard" element={<LabelerDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
