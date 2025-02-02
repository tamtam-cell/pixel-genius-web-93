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

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full bg-background border-r">
      {children}
    </div>
  );
}

export function SidebarContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full py-4">
      {children}
    </div>
  );
}

export function SidebarGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-2">
      {children}
    </div>
  );
}

export function SidebarGroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 px-4 text-lg font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function SidebarGroupContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      {children}
    </div>
  );
}

export function SidebarMenu({ children }: { children: React.ReactNode }) {
  return (
    <nav className="space-y-1">
      {children}
    </nav>
  );
}

export function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1">
      {children}
    </div>
  );
}

export function SidebarMenuButton({ 
  children,
  asChild,
  isActive
}: { 
  children: React.ReactNode;
  asChild?: boolean;
  isActive?: boolean;
}) {
  const className = cn(
    "flex items-center w-full gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
    isActive 
      ? "bg-accent text-accent-foreground" 
      : "hover:bg-accent hover:text-accent-foreground",
  );

  if (asChild) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
}