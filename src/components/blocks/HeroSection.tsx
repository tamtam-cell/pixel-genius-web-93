"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <div className="relative z-50 flex flex-col items-center px-5">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-white/80 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          <span className="text-2xl md:text-4xl">Imaginez l'Impossible</span>
          <br />
          <span className="text-4xl md:text-7xl">Créons-le Ensemble</span>
        </motion.h1>

        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => navigate('/contact')}
            className="card-hover bg-white text-black px-8 py-3 rounded-md font-medium text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            COMMENCER
          </motion.button>
        </div>
      </div>
    </div>
  );
}