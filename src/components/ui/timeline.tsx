"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface TimelineProps {
  data: {
    title: string;
    content: React.ReactNode;
  }[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="w-full font-sans md:px-10 -mt-37"
      ref={containerRef}
    >
      {data.map((item, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <div className="mt-2">{item.content}</div>
        </motion.div>
      ))}
    </div>
  );
};
