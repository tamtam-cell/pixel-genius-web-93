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
              <div className="flex items-center space-x-1">
                <span className="text-3xl font-extrabold bg-gradient-to-r from-white via-[#9b87f5] to-white bg-clip-text text-transparent animate-gradient-x transform transition-all duration-300 group-hover:scale-105 [text-shadow:_2px_2px_4px_rgba(155,135,245,0.3)]">
                  Pixel
                </span>
                <span className="relative text-3xl font-extrabold">
                  <span className="bg-gradient-to-r from-[#9b87f5] via-white to-[#9b87f5] bg-clip-text text-transparent animate-pulse">
                    Craft
                  </span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-75 animate-ping"></span>
                  <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#9b87f5] rounded-full opacity-20 animate-pulse"></span>
                </span>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[#9b87f5] via-white to-[#9b87f5] bg-clip-text text-transparent animate-gradient-x">
                  Lab
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#9b87f5] via-white to-[#9b87f5] opacity-50"></div>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-white via-[#9b87f5] to-white group-hover:w-full transition-all duration-500"></div>
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