import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, Mail, Info, FileText, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  {
    label: "Accueil",
    href: "/",
    icon: <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  },
  {
    label: "Services",
    href: "/services",
    icon: <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  },
  {
    label: "À propos",
    href: "/about",
    icon: <Info className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  },
  {
    label: "Mentions légales",
    href: "/terms",
    icon: <FileText className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  },
  {
    label: "Paramètres",
    href: "/settings",
    icon: <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
  }
];

export function AppSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isOpen } = useSidebar();

  if (!isOpen) return null;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.href}
                  >
                    <Link to={item.href} className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
