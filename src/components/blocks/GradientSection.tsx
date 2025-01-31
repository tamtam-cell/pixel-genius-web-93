"use client";
import React from "react";

export function GradientSection() {
  return (
    <div className="w-full h-[300px] relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(147, 51, 234, 0.3) 0%, rgba(67, 56, 202, 0.1) 100%)",
          filter: "blur(60px)",
          transform: "translateY(-20%)"
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />
    </div>
  );
}