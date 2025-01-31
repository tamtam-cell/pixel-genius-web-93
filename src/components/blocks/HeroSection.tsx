"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { GooeyText } from "@/components/ui/gooey-text";

export function HeroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked, navigating to /services");
    navigate("/services");
  };

  React.useEffect(() => {
    // Load the Playfair Display font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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
        <motion.div
          className="mt-8 text-center font-medium tracking-tight"
        >
          <span className="text-xl md:text-2xl font-sites-web block mb-4 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            Imaginez l'Impossible
          </span>
          <GooeyText
            texts={["Créons", "Innovons", "Développons", "Grandissons"]}
            morphTime={1}
            cooldownTime={0.5}
            className="font-sites-web font-semibold"
            textClassName="bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent"
          />
          <span className="text-4xl md:text-7xl font-sites-web font-semibold block mt-4 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">
            Ensemble
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <RainbowButton 
            onClick={handleClick}
            className="text-lg tracking-wider"
          >
            COMMENCER
          </RainbowButton>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}