import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ToolsPage from "./pages/ToolsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PrivacyPage from "./pages/PrivacyPage.tsx";
import LegalPage from "./pages/LegalPage.tsx";
import IMCTool from "./pages/tools/IMCTool.tsx";
import CaloriesTool from "./pages/tools/CaloriesTool.tsx";
import HydrationTool from "./pages/tools/HydrationTool.tsx";
import SleepTool from "./pages/tools/SleepTool.tsx";
import HeartRateTool from "./pages/tools/HeartRateTool.tsx";
import BodyFatTool from "./pages/tools/BodyFatTool.tsx";
import IdealWeightTool from "./pages/tools/IdealWeightTool.tsx";
import ChildBMITool from "./pages/tools/ChildBMITool.tsx";
import BMRTool from "./pages/tools/BMRTool.tsx";
import StressTool from "./pages/tools/StressTool.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/outils" element={<ToolsPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
          <Route path="/mentions-legales" element={<LegalPage />} />
          <Route path="/outil/imc" element={<IMCTool />} />
          <Route path="/outil/calories" element={<CaloriesTool />} />
          <Route path="/outil/hydratation" element={<HydrationTool />} />
          <Route path="/outil/sommeil" element={<SleepTool />} />
          <Route path="/outil/cardiaque" element={<HeartRateTool />} />
          <Route path="/outil/masse-grasse" element={<BodyFatTool />} />
          <Route path="/outil/poids-ideal" element={<IdealWeightTool />} />
          <Route path="/outil/imc-enfant" element={<ChildBMITool />} />
          <Route path="/outil/metabolisme" element={<BMRTool />} />
          <Route path="/outil/stress" element={<StressTool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
