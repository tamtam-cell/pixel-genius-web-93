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
                  {/* Main shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#9b87f5] rounded-md transform rotate-45 group-hover:rotate-[225deg] transition-all duration-700"></div>
                  
                  {/* Inner shape */}
                  <div className="absolute inset-[3px] bg-background rounded-[4px] transform rotate-45 group-hover:rotate-[225deg] transition-all duration-700">
                    <div className="absolute inset-[3px] bg-gradient-to-tr from-[#9b87f5] to-white rounded-sm transform -rotate-90 group-hover:rotate-90 transition-all duration-700"></div>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#9b87f5] rounded-full"></div>
                </div>

                {/* Logo Text */}
                <div className="flex items-baseline">
                  <span className="text-2xl font-light tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    pixel
                  </span>
                  <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-[#9b87f5] bg-clip-text text-transparent mx-0.5 transition-all duration-300 group-hover:tracking-widest">
                    craft
                  </span>
                  <span className="text-2xl font-light tracking-wider text-white transition-all duration-300 group-hover:tracking-widest">
                    lab
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