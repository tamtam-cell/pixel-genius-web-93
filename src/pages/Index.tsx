import { SplineSceneBasic } from "@/components/blocks/SplineSceneBasic";
import { CanvasTimeline } from "@/components/blocks/CanvasTimeline";
import { LimitedOfferSection } from "@/components/blocks/LimitedOfferSection";
import { TechnologiesSection } from "@/components/blocks/TechnologiesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { HeroSection } from "@/components/blocks/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative bg-slate-950 w-screen h-[85vh] overflow-hidden -ml-[calc((100vw-100%)/2)]">
        <div className="relative h-full flex items-center justify-center">
          <HeroSection />
        </div>
      </div>

      <div className="mt-[-8rem]">
        <LimitedOfferSection 
          remainingSpots={5}
          onOfferClick={() => console.log("Offer clicked")}
        />
        
        <PricingSection />
        
        <TestimonialsSection />

        <CanvasTimeline />

        <TechnologiesSection />

        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <SplineSceneBasic />
        </div>

        <TimelineSection />
      </div>
    </div>
  );
};

export default Index;