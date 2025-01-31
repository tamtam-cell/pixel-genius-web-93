import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  path: string;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="flex items-center space-x-4 relative">
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredItem === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-3 py-1.5 text-base transition-all duration-500 hover:scale-110 ${
              isActive 
                ? "text-white" 
                : "text-white"
            }`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span>{item.name}</span>
          </Link>
        );
      })}
      
      {/* Barre qui glisse */}
      <motion.div
        className="absolute bottom-0 h-0.5 bg-primary"
        initial={false}
        animate={{
          width: "30px",
          x: items.findIndex(item => item.path === location.pathname) * (16 + 48) + 33, // Ajustement pour centrer parfaitement
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </nav>
  );
}