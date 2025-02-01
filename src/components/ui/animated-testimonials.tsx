"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedTooltip } from "./animated-tooltip";

const testimonials = [
  {
    name: "Testimonial 1",
    designation: "Designation 1",
    quote: "This is a great product!",
    image: "https://images.unsplash.com/photo-1",
  },
  {
    name: "Testimonial 2",
    designation: "Designation 2",
    quote: "I love using this service!",
    image: "https://images.unsplash.com/photo-2",
  },
  {
    name: "Testimonial 3",
    designation: "Designation 3",
    quote: "Highly recommend to everyone!",
    image: "https://images.unsplash.com/photo-3",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const AnimatedTestimonials = ({
  className,
  autoplay = true,
}: {
  className?: string;
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNext();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const handleNext = () => {
    setDirection(1);
    if (active === testimonials.length - 1) {
      setActive(0);
    } else {
      setActive((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setDirection(-1);
    if (active === 0) {
      setActive(testimonials.length - 1);
    } else {
      setActive((prev) => prev - 1);
    }
  };

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
                  src={testimonials[active].image}
                  className="object-cover object-center h-full w-full brightness-75"
                  alt={testimonials[active].name}
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
              {testimonials[active].name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-4">
              {testimonials[active].quote.split(" ").map((word, index) => (
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
