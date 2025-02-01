import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export function BestCreationsSection() {
  return (
    <section className="pt-4 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sites-web text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#D6BCFA] tracking-tight leading-tight">
            Nos Meilleures Créations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light tracking-wide">
            Découvrez nos réalisations les plus innovantes, où chaque projet raconte une histoire unique d'excellence technique et de créativité
          </p>
        </div>

        <div className="w-full flex justify-center">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </section>
  );
}