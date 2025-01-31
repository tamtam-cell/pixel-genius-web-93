import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  icon?: React.ElementType;
}

interface NavBarProps {
  items: NavItem[];
}

export function NavBar({ items }: NavBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="flex items-center space-x-4">
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredItem === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-3 py-1.5 text-base transition-all duration-500 hover:scale-110 ${
              isActive 
                ? "text-white scale-110" 
                : "text-white"
            } flex items-center gap-2`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span>{item.name}</span>
            {(isActive || isHovered) && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white transform origin-left transition-transform duration-300 ease-out" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}