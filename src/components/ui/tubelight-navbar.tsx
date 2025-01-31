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
            className={`relative px-3 py-1.5 text-base font-bold transition-all duration-500 hover:scale-110 ${
              isActive 
                ? "text-white [text-shadow:_0_0_20px_rgb(255_255_255),_0_0_40px_rgb(255_255_255),_0_0_60px_rgb(255_255_255)] scale-110" 
                : "text-white [text-shadow:_0_0_20px_rgb(255_255_255),_0_0_40px_rgb(255_255_255),_0_0_60px_rgb(255_255_255)]"
            } flex items-center gap-2`}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.icon && <item.icon size={16} />}
            <span>{item.name}</span>
            {(isActive || isHovered) && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white shadow-[0_0_15px_#FFFFFF,_0_0_30px_#FFFFFF] transform origin-left transition-transform duration-300 ease-out" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}