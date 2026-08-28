import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Government = lazy(() => import("./pages/Government"));
const Customers = lazy(() => import("./pages/Customers"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Resources = lazy(() => import("./pages/Resources"));
const Api = lazy(() => import("./pages/Api"));
const Support = lazy(() => import("./pages/Support"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const RequestQuota = lazy(() => import("./pages/RequestQuota"));
const Learn = lazy(() => import("./pages/Learn"));
const ClientDashboard = lazy(() => import("./pages/ClientDashboard"));
const LabelerDashboard = lazy(() => import("./pages/LabelerDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      refetchOnWindowFocus: false,
    },
  },
});

function PageLoader() {
  return <div className="min-h-screen bg-background" aria-hidden />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="adara-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/request-quota" element={<RequestQuota />} />
                <Route path="/client-dashboard" element={<ClientDashboard />} />
                <Route path="/labeler-dashboard" element={<LabelerDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
