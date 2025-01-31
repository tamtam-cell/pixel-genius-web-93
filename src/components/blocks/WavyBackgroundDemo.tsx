"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto pb-40"
      colors={["#9333EA", "#818cf8", "#c084fc", "#e879f9"]}
      waveWidth={150}
      backgroundFill="transparent"
      blur={2}
      waveOpacity={0.8}
    />
  );
}