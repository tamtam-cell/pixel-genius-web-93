"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked, navigating to /services");
    navigate("/services");
  };

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex flex-col items-center justify-center"
      >
        <motion.h1
          className="mt-8 bg-gradient-to-br from-white to-white/80 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          <span className="text-2xl md:text-4xl">Imaginez l'Impossible</span>
          <br />
          <span className="text-4xl md:text-7xl">Créons-le Ensemble</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 relative z-10"
        >
          <div className="absolute inset-0 -top-40 -bottom-40 z-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-b from-primary/50 to-primary/5 blur-3xl opacity-50 rounded-full" />
          </div>
          <RainbowButton 
            onClick={handleClick}
            className="text-lg tracking-wider relative z-10"
          >
            COMMENCER
          </RainbowButton>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}