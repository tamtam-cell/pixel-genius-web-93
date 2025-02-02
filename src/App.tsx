import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppSidebar } from "@/components/AppSidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SidebarProvider>
          <div className="min-h-screen bg-background font-sans antialiased w-full">
            <Header />
            <div className="flex">
              <AppSidebar />
              <main className="flex-1">
                <SidebarTrigger className="fixed top-20 left-4 z-50" />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
            </div>
            <Footer />
          </div>
          <Toaster />
        </SidebarProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;