import { AnimatedTestimonialsDemo } from "@/components/blocks/animated-testimonials-demo";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export const TestimonialsSection = () => {
  return (
    <section className="bg-background text-foreground py-0 sm:py-0 md:py-0">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(108, 0, 162)"
        gradientBackgroundEnd="rgb(0, 17, 82)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        className="min-h-screen"
      >
        <div className="relative mx-auto flex max-w-container flex-col items-center gap-1 text-center sm:gap-4 mt-24">
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-white">
              De plus en plus de Satisfaits : L'Art de l'Innovation Raconté par Nos Partenaires
            </h2>
            <p className="text-md max-w-[600px] font-medium text-white/80 sm:text-xl">
              Rejoignez les entreprises qui construisent déjà leur avenir à nos côtés
            </p>
          </div>
          <AnimatedTestimonialsDemo />
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
};