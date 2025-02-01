import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { HeroSection } from "@/components/blocks/HeroSection";
import { AnimatedTestimonialsDemo } from "@/components/blocks/animated-testimonials-demo";
import { SplineSceneBasic } from "@/components/blocks/SplineSceneBasic";
import { CanvasTimeline } from "@/components/blocks/CanvasTimeline";
import { LimitedOfferSection } from "@/components/blocks/LimitedOfferSection";
import { TechnologiesSection } from "@/components/blocks/TechnologiesSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Timeline } from "@/components/ui/timeline";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Index = () => {
  const navigate = useNavigate();
  const [timeLeftComplete, setTimeLeftComplete] = useState(172800); // 48h
  const [timeLeftPremium, setTimeLeftPremium] = useState(259200); // 72h
  const [timeLeftMagic, setTimeLeftMagic] = useState(345600); // 96h
  const [remainingSpots, setRemainingSpots] = useState(5);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftComplete((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
      setTimeLeftPremium((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
      setTimeLeftMagic((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeftComplete === 0 || timeLeftPremium === 0 || timeLeftMagic === 0) {
      toast.error("Une offre spéciale est terminée !");
    }
  }, [timeLeftComplete, timeLeftPremium, timeLeftMagic]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOfferClick = () => {
    console.log("Redirecting to services page...");
    navigate('/services');
  };

  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-muted-foreground text-sm font-normal mb-8">
            Lancement de notre nouvelle plateforme d'innovation numérique et expansion de nos services premium
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Innovation Continue</h4>
              <p className="text-sm text-muted-foreground">Développement de solutions sur mesure</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Excellence Technique</h4>
              <p className="text-sm text-muted-foreground">Adoption des dernières technologies</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-muted-foreground text-sm font-normal mb-8">
            Expansion majeure et reconnaissance internationale
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Croissance Rapide</h4>
              <p className="text-sm text-muted-foreground">Doublement de notre équipe technique</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Lancement de notre plateforme cloud</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-muted-foreground text-sm font-normal mb-8">
            Développement de solutions innovantes et expansion de notre expertise
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Nouveaux Services</h4>
              <p className="text-sm text-muted-foreground">Introduction de l'IA dans nos solutions</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Partenariats</h4>
              <p className="text-sm text-muted-foreground">Collaboration avec des leaders du marché</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-muted-foreground text-sm font-normal mb-8">
            Consolidation de notre expertise et expansion de notre équipe
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Expertise</h4>
              <p className="text-sm text-muted-foreground">Certification de notre équipe</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Croissance</h4>
              <p className="text-sm text-muted-foreground">Ouverture de nouveaux bureaux</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-muted-foreground text-sm font-normal mb-8">
            Fondation de PixelCraftLab et premiers pas dans l'innovation numérique
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Création</h4>
              <p className="text-sm text-muted-foreground">Naissance de notre vision</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Premiers Succès</h4>
              <p className="text-sm text-muted-foreground">Premiers clients satisfaits</p>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative z-[-1] bg-slate-950 w-full h-[85vh]">
        <div className="relative z-10 h-full flex items-center justify-center">
          <HeroSection />
        </div>
      </div>

      <div className="mt-[-8rem]">
        <LimitedOfferSection 
          remainingSpots={remainingSpots}
          onOfferClick={handleOfferClick}
        />

        {/* Pricing Cards with Scroll Animation */}
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
            {[
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
                timeLeft: timeLeftComplete,
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
                timeLeft: timeLeftPremium,
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
                timeLeft: timeLeftMagic,
                gradientColors: ["#0A0A0A", "#4C1D95", "#5B21B6", "#6D28D9"],
              },
            ].map((offer, index) => (
              <div
                key={index}
                className={`cyber-border p-6 rounded-xl card-hover relative transition-all duration-300 flex flex-col justify-between h-full ${
                  offer.isPopular ? 'transform hover:scale-105 shadow-xl' : ''
                }`}
              >
                <AnimatedGradientBackground
                  startingGap={150}
                  Breathing={true}
                  gradientColors={offer.gradientColors}
                  gradientStops={[20, 40, 60, 100]}
                  animationSpeed={0.015}
                  breathingRange={8}
                  containerClassName="opacity-40"
                />
                
                {offer.isPopular && (
                  <div className="absolute -top-2 left-0 right-0 mx-auto w-40 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10 text-center shadow-lg">
                    Plus Populaire
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold">{offer.price}€</span>
                    {offer.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {offer.originalPrice}€
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-center font-medium bg-primary/10 py-2 rounded-md backdrop-blur-sm mb-6">
                    Offre temporaire - Bonus garanti pendant {formatTime(offer.timeLeft)}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-4 relative z-10">
                  {offer.bonus && (
                    <div className="bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
                      <p className="font-semibold text-primary">{offer.bonus}</p>
                    </div>
                  )}

                  {offer.upgrade && (
                    <div className={`text-sm italic ${offer.isPopular ? 'bg-primary/10 p-4 rounded-lg backdrop-blur-sm text-primary font-medium' : 'text-primary/80'}`}>
                      {offer.upgrade}
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setSelectedOffer(offer.title);
                      handleOfferClick();
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md transition-all duration-200 font-medium shadow-[0_0_20px_rgba(155,135,245,0.3)] hover:shadow-[0_0_25px_rgba(155,135,245,0.4)]"
                  >
                    Réserver maintenant
                  </button>

                  <div className="space-y-2">
                    {offer.stock <= 3 && (
                      <p className="text-sm text-center font-medium bg-primary/10 py-2 rounded-md backdrop-blur-sm">
                        Plus que {offer.stock} place{offer.stock > 1 ? 's' : ''} !
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerScroll>

        {/* Testimonials Section */}
        <section className="bg-background text-foreground py-8 sm:py-16 md:py-24">
          <div className="mx-auto flex max-w-container flex-col items-center gap-2 text-center sm:gap-8">
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

        {/* Process Timeline Canvas */}
        <CanvasTimeline />

        <TechnologiesSection />

        {/* Notre Histoire Section */}
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <SplineSceneBasic />
        </div>

        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Index;
