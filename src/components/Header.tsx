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
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-[#9b87f5]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="flex items-center">
                {/* Logo Symbol */}
                <div className="relative w-12 h-12 mr-4">
                  {/* Main hexagon shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#9b87f5] transform rotate-[30deg] group-hover:rotate-[210deg] transition-all duration-700">
                    <div className="absolute inset-[2px] bg-background">
                      <div className="absolute inset-[2px] bg-gradient-to-tr from-[#9b87f5] to-white transform -rotate-[60deg] group-hover:rotate-[120deg] transition-all duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Inner triangle */}
                  <div className="absolute inset-[4px] bg-gradient-to-br from-[#9b87f5] to-white transform rotate-[30deg] group-hover:rotate-[210deg] transition-all duration-700 clip-triangle">
                    <div className="absolute inset-[2px] bg-background clip-triangle">
                      <div className="absolute inset-[2px] bg-gradient-to-tr from-white to-[#9b87f5] transform -rotate-[60deg] group-hover:rotate-[120deg] transition-all duration-700 clip-triangle"></div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-[#9b87f5] rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-white to-[#9b87f5] rounded-full transform group-hover:scale-150 transition-all duration-700"></div>
                </div>

                {/* Logo Text */}
                <div className="flex items-baseline">
                  <span className="text-2xl font-light tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    nova
                  </span>
                  <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-[#9b87f5] bg-clip-text text-transparent mx-0.5 transition-all duration-300 group-hover:tracking-widest">
                    tech
                  </span>
                  <span className="text-2xl font-light tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    hub
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
          <div className="hidden md:block">
            <NavBar items={navItems} />
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
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;