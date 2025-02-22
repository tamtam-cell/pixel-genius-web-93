import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function RainbowButton({
  children,
  className,
  asChild = false,
  ...props
}: RainbowButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.12*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 card-hover",
        
        // before styles - centered glow effect with reduced visibility (opacity reduced from 0.4 to 0.25)
        "before:absolute before:top-1/2 before:left-1/2 before:z-0 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-25 before:[filter:blur(calc(0.8*1rem))]",
        
        // light mode colors - enhanced contrast
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.8)_80%,rgba(18,18,19,0.2)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
        // dark mode colors - enhanced contrast
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.8)_80%,rgba(255,255,255,0.2)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
        // default text styles
        "text-lg tracking-wider",
        
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}