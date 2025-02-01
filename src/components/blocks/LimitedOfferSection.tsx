import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useLanguage } from "@/contexts/LanguageContext";

interface LimitedOfferSectionProps {
  remainingSpots: number;
  onOfferClick: () => void;
}

export function LimitedOfferSection({ remainingSpots, onOfferClick }: LimitedOfferSectionProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  if (remainingSpots <= 0) return null;

  const handleClick = () => {
    onOfferClick();
    navigate('/services', { state: { scrollToCards: true } });
  };

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
                  {t("offer.limited").replace("{count}", remainingSpots.toString()).replace("{s}", remainingSpots > 1 ? "s" : "")}
                </h3>
                <p className="text-purple-200/80 text-sm">
                  {t("offer.description")}
                </p>
              </div>
              <RainbowButton
                onClick={handleClick}
                className="inline-flex items-center gap-2"
              >
                {t("offer.cta")}
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}