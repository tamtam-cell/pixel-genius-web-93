"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineProps {
  data: Array<{
    title: string;
    content: React.ReactNode;
  }>;
}

export const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (containerRef.current) {
      const updateHeight = () => {
        const containerHeight = containerRef.current?.offsetHeight || 0;
        document.documentElement.style.setProperty(
          "--timeline-height",
          `${containerHeight}px`
        );
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  return (
    <div
      className="w-screen -ml-[calc((100vw-100%)/2)] font-sans md:px-10 -mt-20 bg-black/[0.96]"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-48 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <span className="text-xl font-bold">{item.title}</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "pl-20 md:pl-40 relative pb-10",
                index === data.length - 1 ? "" : "border-l border-white/10"
              )}
            >
              <div className="relative">{item.content}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};