import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Home, Mail, Info, FileText, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";

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