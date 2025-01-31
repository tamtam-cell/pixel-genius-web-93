import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items?: NavItem[];
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'À propos', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: FileText }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "flex items-center gap-3 py-1 px-1",
        className
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
              "text-foreground/80 hover:text-primary",
              isActive && "text-primary"
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={18} strokeWidth={2.5} />
            </span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full">
                  <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -bottom-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -bottom-1" />
                  <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm bottom-0 left-2" />
                </div>
              </motion.div>
            )}
          </Link>
        );
      })}
    </div>
  );
}