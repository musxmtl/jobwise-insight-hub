import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import JobTracking from "./pages/JobTracking";
import Analytics from "./pages/Analytics";
import AICounselor from "./pages/AICounselor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-job-background">
            <AppSidebar />
            <main className="flex-1 p-8">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/job-tracking" element={<JobTracking />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/ai-counselor" element={<AICounselor />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;