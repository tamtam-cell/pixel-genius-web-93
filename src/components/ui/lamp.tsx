"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Vortex } from "@/components/ui/vortex";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-screen -ml-[calc((100vw-100%)/2)] rounded-md z-0",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <Vortex
          backgroundColor="rgb(2, 6, 23)"
          rangeY={800}
          particleCount={500}
          baseHue={220}
        />
      </div>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-10">
        <motion.div
          initial={{ opacity: 0.5, width: "45rem" }}
          whileInView={{ opacity: 1, width: "90rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-[32rem] overflow-visible w-[90rem] bg-gradient-conic from-primary/80 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950/80 h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950/80 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "45rem" }}
          whileInView={{ opacity: 1, width: "90rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-[32rem] w-[90rem] bg-gradient-conic from-transparent via-transparent to-primary/80 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950/80 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950/80 h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-24 scale-x-150 bg-slate-950/50 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-96 w-full bg-transparent opacity-20 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-64 w-[84rem] -translate-y-1/2 rounded-full bg-primary/70 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "24rem" }}
          whileInView={{ width: "48rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-64 w-[48rem] -translate-y-[6rem] rounded-full bg-primary/70 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "45rem" }}
          whileInView={{ width: "90rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[90rem] -translate-y-[7rem] bg-primary/90"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-56 w-full -translate-y-[12.5rem] bg-slate-950/50"></div>
      </div>
      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};