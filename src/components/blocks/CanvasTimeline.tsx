import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";

export const CanvasTimeline = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
    }> = [];

    const createParticle = () => {
      const radius = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dx = (Math.random() - 0.5) * 0.5;
      const dy = (Math.random() - 0.5) * 0.5;
      particles.push({ x, y, radius, dx, dy });
    };

    for (let i = 0; i < 50; i++) {
      createParticle();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const steps = [
    {
      title: "Découverte",
      description: "Nous prenons le temps de comprendre vos besoins et objectifs",
      image: "/discovery.jpg",
    },
    {
      title: "Conception",
      description: "Nous élaborons une solution sur mesure adaptée à vos attentes",
      image: "/design.jpg",
    },
    {
      title: "Développement",
      description: "Nous développons votre projet avec les dernières technologies",
      image: "/development.jpg",
    },
    {
      title: "Livraison",
      description: "Nous vous accompagnons dans la mise en ligne de votre projet",
      image: "/delivery.jpg",
    },
  ];

  return (
    <section className="pt-4 relative overflow-hidden min-h-screen">
      <Spotlight
        className="-top-40 left-0"
        fill="white"
      />
      <div className="relative">
        <div className="absolute inset-0">
          <canvas
            ref={canvasRef}
            className="h-full w-full"
          />
        </div>

        <div className="relative">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight"
            >
              Notre Parcours de Création
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-[600px] text-muted-foreground sm:text-xl"
            >
              Découvrez les étapes clés de notre processus créatif et technique
            </motion.p>
          </div>

          <div className="relative mx-auto mt-16 max-w-container px-4">
            {/* Ligne de connexion */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20" />
            
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={cn(
                  "relative mb-20 flex items-center gap-8",
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                
                {/* Contenu */}
                <div className={cn(
                  "w-1/2",
                  i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                )}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border bg-background/50 backdrop-blur-sm p-6"
                  >
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground mx-auto">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
                    <p className="text-muted-foreground mt-2">{step.description}</p>
                  </motion.div>
                </div>
                
                {/* Espace pour la ligne centrale */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};