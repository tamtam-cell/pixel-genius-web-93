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
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="flex items-center">
                <div className="relative flex items-center space-x-1">
                  {/* Logo Symbol */}
                  <div className="w-8 h-8 relative mr-3">
                    <div className="absolute inset-0 bg-white rounded-sm rotate-45 transform transition-transform duration-300 group-hover:rotate-90"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5] to-purple-300 rounded-sm rotate-0 transform transition-transform duration-300 group-hover:rotate-45"></div>
                  </div>
                  
                  {/* Logo Text */}
                  <div className="flex items-baseline space-x-0">
                    <span className="text-2xl tracking-tight font-light text-white">pixel</span>
                    <span className="text-2xl tracking-tight font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">craft</span>
                    <span className="text-2xl tracking-tight font-light text-white">lab</span>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute -bottom-1 left-0 w-full h-[1px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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