"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <LampContainer>
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center space-y-6"
        >
          <p className="text-2xl md:text-3xl text-white/90">
            Sites web
          </p>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
            Leader du web design
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8"
        >
          <Button
            onClick={() => navigate('/contact')}
            size="lg"
            variant="outline"
            className="text-lg font-normal px-8 py-6 bg-white text-black hover:bg-white/90 transition-colors"
          >
            COMMENCER
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-white/80"
        >
          <span className="text-lg">Templates</span>
          <span className="text-lg">Design intelligent</span>
          <span className="text-lg">Outils créatifs</span>
          <span className="text-lg">SEO et analyse</span>
        </motion.div>
      </div>
    </LampContainer>
  );
}