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
            className="card-hover bg-white/80 backdrop-blur-sm text-black px-8 py-3 rounded-md font-medium text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            COMMENCER
          </motion.button>
        </div>

        <div className="mt-8">
          <WavyBackground className="max-w-4xl mx-auto pb-20" waveOpacity={0.3}>
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
              Hero waves are cool
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Leverage the power of canvas to create a beautiful hero section
            </p>
          </WavyBackground>
        </div>
      </div>
    </LampContainer>
  );
}