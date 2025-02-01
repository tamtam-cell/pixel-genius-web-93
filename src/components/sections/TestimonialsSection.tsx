import { AnimatedTestimonialsDemo } from "@/components/blocks/animated-testimonials-demo";

export const TestimonialsSection = () => {
  return (
    <section className="bg-background text-foreground py-0 sm:py-0 md:py-0">
      <div className="mx-auto flex max-w-container flex-col items-center gap-1 text-center sm:gap-4">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            De plus en plus de Satisfaits : L'Art de l'Innovation Raconté par Nos Partenaires
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Rejoignez les entreprises qui construisent déjà leur avenir à nos côtés
          </p>
        </div>
        <AnimatedTestimonialsDemo />
      </div>
    </section>
  );
};