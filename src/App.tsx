import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Privacy from "@/pages/Privacy";
import Cookies from "@/pages/Cookies";
import Terms from "@/pages/Terms";
import Contact from "@/pages/Contact";
import PostPurchase from "@/pages/PostPurchase";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/post-purchase" element={<PostPurchase />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;