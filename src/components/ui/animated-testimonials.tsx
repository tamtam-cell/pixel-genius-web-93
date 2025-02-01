"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedTooltip } from "./animated-tooltip";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  className,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  className?: string;
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  // Convert testimonials to people format for AnimatedTooltip
  const people = testimonials.map((t, index) => ({
    id: index + 1,
    name: t.name,
    designation: t.designation,
    image: t.src
  }));

  useEffect(() => {
    if (autoplay && testimonials.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    if (!testimonials.length) return;
    setDirection(1);
    if (active === testimonials.length - 1) {
      setActive(0);
    } else {
      setActive((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!testimonials.length) return;
    setDirection(-1);
    if (active === 0) {
      setActive(testimonials.length - 1);
    } else {
      setActive((prev) => prev - 1);
    }
  };

  if (!testimonials.length) {
    return null;
  }

  const currentTestimonial = testimonials[active];
  if (!currentTestimonial) {
    return null;
  }

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-8", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-80 w-full z-[1] overflow-hidden rounded-3xl bg-background">
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <img
                  src={currentTestimonial.src}
                  className="object-cover object-center h-full w-full brightness-75"
                  alt={currentTestimonial.name}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4">
            <AnimatedTooltip items={people} />
          </div>
        </div>

        <div className="flex justify-between flex-col py-2">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold text-foreground">
              {currentTestimonial.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial.designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-4">
              {currentTestimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.02,
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrevious}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ChevronLeft className="h-4 w-4 text-secondary-foreground transition group-hover/button:text-primary" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ChevronRight className="h-4 w-4 text-secondary-foreground transition group-hover/button:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};