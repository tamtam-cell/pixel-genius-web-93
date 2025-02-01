import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Briefcase, Mail, Globe } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { GooeyText } from "@/components/ui/gooey-text";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), path: "/", icon: Home },
    { name: t("nav.services"), path: "/services", icon: Briefcase },
    { name: t("nav.about"), path: "/about", icon: Users },
    { name: t("nav.contact"), path: "/contact", icon: Mail },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const announcementTexts = [
    "OFFRES LIMITEES",
    "DU A NOTRE",
    "TOUT NOUVEAU",
    "LANCEMENT SUR",
    "LE MARCHE",
    "FRANCAIS",
    "PROFITEZ EN!"
  ];

  return (
    <header className="fixed w-screen left-0 top-0 bg-background/80 backdrop-blur-sm z-[999] border-b border-[#9b87f5]/20">
      <div className="max-w-[1920px] w-full mx-auto px-8">
        <div className="h-12 overflow-hidden flex items-center">
          <GooeyText
            texts={announcementTexts}
            morphTime={0.4}
            cooldownTime={0.4}
            className="w-full"
            textClassName="text-sm md:text-base font-bold text-primary"
          />
        </div>
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="flex items-center">
                {/* Logo créé en CSS */}
                <div className="relative w-16 h-16 mr-4 flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-gradient-to-br from-primary via-purple-500 to-primary/80 rounded-lg transform rotate-45 animate-pulse"></div>
                  <div className="absolute w-8 h-8 bg-background rounded-md transform rotate-45"></div>
                  <div className="absolute w-6 h-6 bg-gradient-to-r from-primary to-purple-500 rounded-sm transform -rotate-45"></div>
                </div>

                {/* Logo Text */}
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    PIXEL
                  </span>
                  <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-[#9b87f5] bg-clip-text text-transparent mx-0.5 transition-all duration-300 group-hover:tracking-widest">
                    CRAFT
                  </span>
                  <span className="text-2xl font-bold tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    LAB
                  </span>
                </div>
              </div>
              
              {/* Hover line effect */}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavBar items={navItems} />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-4"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2">{language.toUpperCase()}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 nav-link px-4 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 nav-link px-4 text-white w-full"
            >
              <Globe size={16} />
              <span>{language === 'fr' ? 'English' : 'Français'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;