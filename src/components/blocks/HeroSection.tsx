"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Waves } from "@/components/ui/waves-background";
import { useTheme } from "next-themes";

export function HeroSection() {
  const { theme } = useTheme();

  return (
    <LampContainer>
      <div className="relative w-full h-full min-h-[600px]">
        <Waves
          lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className="absolute inset-0 h-full w-full"
        />
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Imaginez l'Impossible, <br /> Créons-le Ensemble
        </motion.h1>
      </div>
    </LampContainer>
  );
}