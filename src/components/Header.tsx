import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, Users, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Notre histoire", path: "/about", icon: Users },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed w-full bg-transparent z-50 border-b border-[#9b87f5]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative group">
              <div className="text-2xl font-bold text-white transform transition-all duration-300 group-hover:scale-105 [text-shadow:_0_0_15px_rgb(155_135_245),_0_0_30px_rgb(155_135_245)]">
                Pixel
                <span className="relative inline-block text-white font-bold [text-shadow:_0_0_15px_rgb(255_255_255),_0_0_30px_rgb(255_255_255)]">
                  Craft
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#9b87f5] rounded-full opacity-75 animate-pulse"></span>
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#9b87f5] rounded-full opacity-20 animate-ping"></span>
                </span>
                <span className="text-[#9b87f5] [text-shadow:_0_0_15px_rgb(155_135_245),_0_0_30px_rgb(155_135_245)]">Lab</span>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-transparent"></div>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavBar items={navItems} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white [text-shadow:_0_0_10px_rgb(255_255_255)]"
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
                className="flex items-center gap-2 nav-link px-4 text-white [text-shadow:_0_0_10px_rgb(255_255_255)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;