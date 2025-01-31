"use client";

import * as React from "react";
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
  const location = useLocation();
  const [activeItem, setActiveItem] = React.useState(location.pathname);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  React.useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <nav className="flex items-center gap-4">
      {items.map((item) => {
        const isActive = activeItem === item.path;
        const isHovered = hoveredItem === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-500 hover:text-[#D6BCFA] ${
              isActive ? "text-[#D6BCFA] [text-shadow:_0_0_20px_rgb(214_188_250),_0_0_40px_rgb(214_188_250),_0_0_60px_rgb(214_188_250)]" : "text-white [text-shadow:_0_0_15px_rgb(255_255_255)]"
            } flex items-center gap-2`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.icon && <item.icon size={16} />}
            <span>{item.name}</span>
            {(isActive || isHovered) && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D6BCFA] shadow-[0_0_15px_#D6BCFA,_0_0_30px_#D6BCFA] transform origin-left transition-transform duration-300 ease-out" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}