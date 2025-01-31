"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <LampContainer>
      <div className="relative w-full h-full pt-24">
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

        <WavyBackground 
          className="w-full"
          containerClassName="h-40 relative"
          colors={["#38bdf8", "#818cf8", "#c084fc"]}
          waveWidth={50}
          backgroundFill="transparent"
          blur={2}
          speed="slow"
          waveOpacity={0.3}
        >
          <div className="flex justify-center">
            <motion.button
              onClick={() => navigate('/contact')}
              className="card-hover bg-white/80 backdrop-blur-sm text-black px-8 py-3 rounded-md font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              COMMENCER
            </motion.button>
          </div>
        </WavyBackground>
      </div>
    </LampContainer>
  );
}