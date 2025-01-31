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
                {/* Logo Symbol */}
                <div className="relative w-10 h-10 mr-4 transform transition-transform duration-700 group-hover:rotate-180">
                  {/* Inner rotating squares */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-[#9b87f5] rounded-sm rotate-45 transform transition-all duration-700 group-hover:scale-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#9b87f5] to-purple-300 rounded-sm rotate-0 transform transition-all duration-700 group-hover:rotate-90 group-hover:scale-75"></div>
                  {/* Glowing dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#9b87f5] rounded-full animate-pulse delay-150"></div>
                </div>

                {/* Logo Text */}
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl tracking-tight font-extralight text-white transition-all duration-300 group-hover:tracking-wide">
                    pixel
                  </span>
                  <span className="text-3xl tracking-tight font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
                    craft
                  </span>
                  <span className="text-3xl tracking-tight font-extralight text-white transition-all duration-300 group-hover:tracking-wide">
                    lab
                  </span>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute -bottom-1 left-0 w-full h-[2px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* Glowing background effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#9b87f5]/0 via-[#9b87f5]/10 to-[#9b87f5]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
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