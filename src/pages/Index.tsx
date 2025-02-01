import { SplineSceneBasic } from "@/components/blocks/SplineSceneBasic";
import { LimitedOfferSection } from "@/components/blocks/LimitedOfferSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { HeroSection } from "@/components/blocks/HeroSection";
import { BestCreationsSection } from "@/components/blocks/BestCreationsSection";

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
        
        <div className="pb-12">
          <TestimonialsSection />
        </div>

        <BestCreationsSection />

        <div className="w-screen -ml-[calc((100vw-100%)/2)]">
          <SplineSceneBasic />
        </div>

        <TimelineSection />
      </div>
    </div>
  );
};

export default Index;