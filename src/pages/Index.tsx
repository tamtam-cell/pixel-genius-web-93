import { ArrowRight, Clock, Users, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(172800);
  const [remainingSpots, setRemainingSpots] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      toast.error("L'offre spéciale est terminée !");
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const offers = [
    {
      title: "Offre Complète",
      price: 849,
      features: [
        "Design personnalisé",
        "Responsive design",
        "3 pages",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Support 30 jours",
      ],
    },
    {
      title: "Offre Premium",
      price: 1399,
      features: [
        "Tout de l'offre Complète",
        "Jusqu'à 7 pages",
        "Blog intégré",
        "Animations personnalisées",
        "Optimisation SEO avancée",
        "Support 60 jours",
      ],
      isPopular: true,
    },
    {
      title: "Offre Magique",
      price: 1899,
      features: [
        "Tout de l'offre Premium",
        "Pages illimitées",
        "E-commerce intégré",
        "Système de réservation",
        "Optimisation SEO expert",
        "Support 90 jours",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-8 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Créez votre présence numérique du futur
          </h1>
          <p className="text-lg text-purple-200/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            PixelCraftLab transforme vos idées en expériences web révolutionnaires
          </p>
          
          {/* Limited Offer Section */}
          {remainingSpots > 0 && (
            <div className="cyber-border p-6 rounded-xl text-center mb-8 max-w-3xl mx-auto bg-background/40 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
                    Offre Limitée ! Plus que {remainingSpots} places disponibles
                  </h3>
                  <p className="text-purple-200/80 text-sm">
                    Profitez de -20% sur notre offre Premium + consultation stratégique gratuite
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(155,135,245,0.3)]"
                  onClick={() => setRemainingSpots(prev => Math.max(0, prev - 1))}
                >
                  J'en profite
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="cyber-border p-4 rounded-xl card-hover"
              >
                <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
                <div className="text-2xl font-bold mb-3">${offer.price}</div>
                <ul className="text-left space-y-2 text-sm">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Technologies du Futur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Sécurité Quantique",
                description:
                  "Protection de nouvelle génération pour vos données.",
              },
              {
                icon: Users,
                title: "IA Adaptative",
                description:
                  "Expérience utilisateur personnalisée par intelligence artificielle.",
              },
              {
                icon: Clock,
                title: "Performance Optimale",
                description:
                  "Temps de chargement ultra-rapides garantis.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="cyber-border p-6 rounded-xl card-hover"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
