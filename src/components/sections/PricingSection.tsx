import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";

interface PricingCardProps {
  title: string;
  price: number;
  originalPrice: number;
  features: string[];
  bonus?: string;
  isPopular?: boolean;
  stock: number;
  timeLeft: number;
  upgrade?: string;
  gradientColors: string[];
  onSelect: (title: string) => void;
}

const PricingCard = ({
  title,
  price,
  originalPrice,
  features,
  bonus,
  isPopular,
  stock,
  timeLeft: initialTimeLeft,
  upgrade,
  gradientColors,
  onSelect,
}: PricingCardProps) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  
  useEffect(() => {
    console.log(`Timer started for ${title} with ${timeLeft} seconds remaining`);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      console.log(`Timer cleanup for ${title}`);
      clearInterval(timer);
    };
  }, [title]);

  const handleClick = () => {
    onSelect(title);
    navigate('/services', { state: { scrollToCards: true } });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // ... keep existing code (rest of the PricingCard component JSX)

  return (
    <div
      className={`cyber-border p-6 rounded-xl card-hover relative transition-all duration-300 flex flex-col justify-between h-full ${
        isPopular ? 'transform hover:scale-105 shadow-xl' : ''
      }`}
    >
      <AnimatedGradientBackground
        startingGap={150}
        Breathing={true}
        gradientColors={gradientColors}
        gradientStops={[20, 40, 60, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        containerClassName="opacity-40"
      />
      
      {isPopular && (
        <div className="absolute -top-2 left-0 right-0 mx-auto w-40 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10 text-center shadow-lg">
          Plus Populaire
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl font-bold">{price}€</span>
          <span className="text-sm text-muted-foreground line-through">
            {originalPrice}€
          </span>
        </div>
        
        <p className="text-sm text-center font-medium bg-primary/10 py-2 rounded-md backdrop-blur-sm mb-6">
          Offre temporaire - Bonus garanti pendant {formatTime(timeLeft)}
        </p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto space-y-4 relative z-10">
        {bonus && (
          <div className="bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
            <p className="font-semibold text-primary">{bonus}</p>
          </div>
        )}

        {upgrade && (
          <div className={`text-sm italic ${isPopular ? 'bg-primary/10 p-4 rounded-lg backdrop-blur-sm text-primary font-medium' : 'text-primary/80'}`}>
            {upgrade}
          </div>
        )}

        <button
          onClick={handleClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md transition-all duration-200 font-medium shadow-[0_0_20px_rgba(155,135,245,0.3)] hover:shadow-[0_0_25px_rgba(155,135,245,0.4)]"
        >
          Réserver maintenant
        </button>

        <div className="space-y-2">
          {stock <= 3 && (
            <p className="text-sm text-center font-medium bg-primary/10 py-2 rounded-md backdrop-blur-sm">
              Plus que {stock} place{stock > 1 ? 's' : ''} Bonus !
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const PricingSection = () => {
  const navigate = useNavigate();
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  const handleOfferClick = () => {
    console.log("Redirecting to services page...");
    navigate('/services', { state: { scrollToCards: true } });
  };

  const pricingData = [
    {
      title: "Offre Complète",
      price: 849,
      originalPrice: 999,
      features: [
        "Design personnalisé",
        "Responsive design",
        "3 pages",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Support 30 jours",
      ],
      bonus: "BONUS : Guide d'optimisation SEO offert (valeur 99€)",
      stock: 3,
      timeLeft: 172800,
      gradientColors: ["#0A0A0A", "#9333EA", "#A855F7", "#C084FC"],
    },
    {
      title: "Offre Premium",
      price: 1399,
      originalPrice: 1699,
      features: [
        "Tout de l'offre Complète",
        "Jusqu'à 7 pages",
        "Blog intégré",
        "Animations personnalisées",
        "Optimisation SEO avancée",
        "Support 60 jours",
      ],
      bonus: "BONUS : Formation maintenance WordPress (valeur 299€)",
      isPopular: true,
      stock: 2,
      timeLeft: 259200,
      upgrade: "Passez à l'offre Magique pour seulement 500€ de plus et obtenez des pages illimitées !",
      gradientColors: ["#0A0A0A", "#6D28D9", "#7C3AED", "#8B5CF6"],
    },
    {
      title: "Offre Magique",
      price: 1899,
      originalPrice: 2499,
      features: [
        "Tout de l'offre Premium",
        "Pages illimitées",
        "E-commerce intégré",
        "Système de réservation",
        "Optimisation SEO expert",
        "Support 90 jours",
      ],
      bonus: "BONUS EXCLUSIF : Audit performance + Plan marketing (valeur 599€)",
      stock: 1,
      timeLeft: 345600,
      gradientColors: ["#0A0A0A", "#4C1D95", "#5B21B6", "#6D28D9"],
    },
  ];

  return (
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-foreground mb-8">
            Nos Offres <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-200">
              Sur Mesure
            </span>
          </h1>
          
          <div className="text-center space-y-8 mb-16">
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-200">
              Pas convaincu? Appellez-nous!
            </p>
            <Link to="/contact">
              <RainbowButton>
                Nous Contacter
              </RainbowButton>
            </Link>
          </div>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
        {pricingData.map((offer, index) => (
          <PricingCard
            key={index}
            {...offer}
            onSelect={(title) => {
              setSelectedOffer(title);
              handleOfferClick();
            }}
          />
        ))}
      </div>
    </ContainerScroll>
  );
};

