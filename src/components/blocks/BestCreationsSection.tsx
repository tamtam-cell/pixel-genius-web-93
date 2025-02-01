import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function BestCreationsSection() {
  return (
    <section className="pt-4 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <h2 className="font-sites-web text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#D6BCFA] tracking-tight leading-tight">
            Nos Meilleures Créations
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Découvrez nos réalisations les plus innovantes, où chaque projet raconte une histoire unique d'excellence technique et de créativité
          </p>
        </div>

        <div className="w-full flex justify-center relative
          before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-r before:from-primary/30 before:to-purple-500/30 before:blur-2xl
          hover:before:blur-3xl hover:before:bg-gradient-to-r hover:before:from-primary/50 hover:before:to-purple-500/50 
          transition-all duration-300">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </section>
  );
}