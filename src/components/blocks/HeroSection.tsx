"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LampContainer className="w-full max-w-7xl mx-auto">
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
          Rêvez l'Impossible, <br /> Créez la Magie
        </motion.h1>
      </LampContainer>
    </div>
  );
}