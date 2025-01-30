"use client";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar = ({ items }: NavBarProps) => {
  const location = useLocation();
  console.log("Current location:", location.pathname);

  return (
    <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
      {items.map((item, idx) => {
        const isActive = location.pathname === item.path;
        console.log(`Link ${item.name} active status:`, isActive);

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium transition-colors",
              "hover:text-white",
              isActive ? "text-white" : "text-neutral-400"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="navbar-active"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <item.icon className="w-4 h-4" />
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};