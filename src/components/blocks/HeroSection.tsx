"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked - navigating to contact page");
    navigate('/contact');
  };

  return (
    <LampContainer>
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
        Innovez dans le Numérique, <br /> Créez l'Extraordinaire
      </motion.h1>
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 px-8 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg font-medium"
      >
        J'en profite →
      </motion.button>
    </LampContainer>
  );
}