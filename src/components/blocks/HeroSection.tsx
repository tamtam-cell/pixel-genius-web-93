"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <LampContainer>
      <div className="relative w-full h-full">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          <span className="text-2xl md:text-4xl">Imaginez l'Impossible</span>
          <br />
          <span className="text-4xl md:text-7xl">Créons-le Ensemble</span>
        </motion.h1>

        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate('/contact')}
            className="relative px-8 py-3 rounded-md font-medium text-lg bg-primary/20 text-white backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            COMMENCER
          </motion.button>
        </div>
      </div>
    </LampContainer>
  );
}