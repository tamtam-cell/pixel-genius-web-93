"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
        <motion.h1
          className="mt-8 bg-gradient-to-br from-white to-white/80 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          <span className="text-xl md:text-2xl font-sites-web">{t("hero.imagine")}</span>
          <br />
          <span className="text-4xl md:text-7xl font-sites-web font-semibold">{t("hero.create")}</span>
        </motion.h1>

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
            {t("hero.cta")}
          </RainbowButton>
        </motion.div>
      </motion.div>
    </LampContainer>
  );
}