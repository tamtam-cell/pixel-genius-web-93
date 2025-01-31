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
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <span className="text-4xl font-black bg-gradient-to-br from-white via-[#9b87f5] to-purple-300 bg-clip-text text-transparent animate-gradient-x transform transition-all duration-500 group-hover:scale-105 [text-shadow:_4px_4px_8px_rgba(155,135,245,0.4)]">
                    Pixel
                  </span>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></div>
                </div>
                <div className="relative">
                  <span className="text-4xl font-black">
                    <span className="bg-gradient-to-r from-purple-300 via-white to-[#9b87f5] bg-clip-text text-transparent animate-pulse">
                      Craft
                    </span>
                    <span className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full opacity-60 animate-ping"></span>
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#9b87f5] rounded-full opacity-40 animate-pulse"></span>
                  </span>
                </div>
                <div className="relative">
                  <span className="text-4xl font-black bg-gradient-to-bl from-[#9b87f5] via-white to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                    Lab
                  </span>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-0 w-full h-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-white to-[#9b87f5] opacity-60 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-[#9b87f5] to-white w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
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