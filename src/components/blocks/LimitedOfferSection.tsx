import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { WavyBackground } from "@/components/ui/wavy-background";

interface LimitedOfferSectionProps {
  remainingSpots: number;
  onOfferClick: () => void;
}

export function LimitedOfferSection({ remainingSpots, onOfferClick }: LimitedOfferSectionProps) {
  if (remainingSpots <= 0) return null;

  return (
    <div className="relative h-[200px] mb-8">
      <WavyBackground
        colors={["#9333EA", "#A855F7", "#C084FC", "#E879F9"]}
        waveWidth={50}
        backgroundFill="#0A0A0A"
        blur={5}
        speed="slow"
        waveOpacity={0.3}
        className="absolute inset-0 top-[250px] z-0"
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto">
          <div className="cyber-border card-hover p-6 rounded-xl text-center bg-background/40 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
                  Offre Limitée ! Plus que {remainingSpots} place{remainingSpots > 1 ? 's' : ''} disponibles
                </h3>
                <p className="text-purple-200/80 text-sm">
                  Profitez de -20% sur notre offre Premium + consultation stratégique gratuite
                </p>
              </div>
              <RainbowButton
                onClick={onOfferClick}
                className="inline-flex items-center gap-2"
              >
                J'en profite
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}