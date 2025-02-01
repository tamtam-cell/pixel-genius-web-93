import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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

  return (
    <section className="pt-4 relative overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0">
          <canvas
            ref={canvasRef}
            className="h-full w-full"
          />
        </div>

        <div className="relative">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
              Notre Parcours de Création
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground sm:text-xl">
              Découvrez les étapes clés de notre processus créatif et technique
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-container gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Découverte",
                description:
                  "Nous prenons le temps de comprendre vos besoins et objectifs",
              },
              {
                title: "Conception",
                description:
                  "Nous élaborons une solution sur mesure adaptée à vos attentes",
              },
              {
                title: "Développement",
                description:
                  "Nous développons votre projet avec les dernières technologies",
              },
              {
                title: "Livraison",
                description:
                  "Nous vous accompagnons dans la mise en ligne de votre projet",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={cn(
                  "relative flex flex-col items-center gap-4 rounded-lg border p-8 text-center"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};