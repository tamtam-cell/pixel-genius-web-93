import { ArrowRight, Clock, Users, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { HeroSection } from "@/components/blocks/HeroSection";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { Timeline } from "@/components/ui/timeline";

const Index = () => {
  const navigate = useNavigate();
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

  const handleOfferClick = () => {
    console.log("Redirecting to contact page...");
    window.location.href = '/contact';
  };

  const testimonials = [
    {
      author: {
        name: "Marie Dubois",
        handle: "@marieweb",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'expertise technique et l'approche méthodologique de PixelCraftLab ont permis une transformation digitale efficace de notre entreprise.",
    },
    {
      author: {
        name: "Thomas Martin",
        handle: "@thomasdev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Grâce à leur méthodologie agile et leur expertise technique, nous avons optimisé notre processus de développement de 60%.",
    },
    {
      author: {
        name: "Sophie Bernard",
        handle: "@sophiedesign",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une collaboration stratégique qui allie expertise technique et compréhension approfondie des enjeux business."
    },
    {
      author: {
        name: "Lucas Petit",
        handle: "@lucasdev",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'équipe a démontré une maîtrise exceptionnelle des technologies modernes et une vision stratégique claire."
    },
    {
      author: {
        name: "Emma Richard",
        handle: "@emmaux",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "La méthodologie structurée et l'expertise technique de PixelCraftLab ont été déterminantes dans le succès de notre projet."
    },
    {
      author: {
        name: "Julie Moreau",
        handle: "@juliemoreau",
        avatar: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une approche consultative qui combine expertise technique et compréhension des objectifs stratégiques.",
    },
    {
      author: {
        name: "Pierre Durand",
        handle: "@pierredev",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'implémentation des solutions techniques avancées a significativement amélioré nos performances digitales.",
    },
    {
      author: {
        name: "Claire Lambert",
        handle: "@clairedesign",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique pointue associée à une excellente gestion de projet et une communication transparente.",
    },
    {
      author: {
        name: "Antoine Rousseau",
        handle: "@antoineweb",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'analyse approfondie de nos besoins a permis une transformation digitale parfaitement alignée avec notre stratégie.",
    },
    {
      author: {
        name: "Sarah Martin",
        handle: "@sarahux",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique remarquable combinée à une excellente compréhension des enjeux business.",
    },
    {
      author: {
        name: "Marc Dupont",
        handle: "@marcdev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "La mise en place des solutions techniques innovantes a considérablement amélioré notre efficacité opérationnelle.",
    },
    {
      author: {
        name: "Léa Robert",
        handle: "@learobert",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique de haut niveau qui a permis une transformation digitale réussie de notre entreprise.",
    },
    {
      author: {
        name: "Nicolas Blanc",
        handle: "@nicoweb",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'accompagnement stratégique et l'implémentation technique ont dépassé nos objectifs initiaux.",
    },
    {
      author: {
        name: "Camille Duval",
        handle: "@camilledev",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une méthodologie rigoureuse et une expertise technique qui ont permis une transformation digitale efficace.",
    },
    {
      author: {
        name: "Paul Mercier",
        handle: "@paulmercier",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'alliance parfaite entre expertise technique et vision stratégique pour une transformation digitale réussie.",
    }
  ];

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
            Création de PixelCraftLab et premiers succès avec nos clients fondateurs
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Vision Initiale</h4>
              <p className="text-sm text-muted-foreground">Fondation de l'entreprise</p>
            </div>
            <div className="cyber-border p-4 rounded-xl">
              <h4 className="text-primary font-semibold mb-2">Premiers Projets</h4>
              <p className="text-sm text-muted-foreground">Collaborations réussies</p>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Limited Offer Section */}
      {remainingSpots > 0 && (
        <div className="cyber-border card-hover p-6 rounded-xl text-center mb-8 max-w-3xl mx-auto bg-background/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
                Offre Limitée ! Plus que {remainingSpots} places disponibles
              </h3>
              <p className="text-purple-200/80 text-sm">
                Profitez de -20% sur notre offre Premium + consultation stratégique gratuite
              </p>
            </div>
            <button
              onClick={handleOfferClick}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-md transition-all duration-200 font-medium shadow-[0_0_20px_rgba(155,135,245,0.3)] hover:shadow-[0_0_25px_rgba(155,135,245,0.4)]"
            >
              J'en profite
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
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
        ].map((offer, index) => (
          <button
            key={index}
            onClick={handleOfferClick}
            className="cyber-border p-4 rounded-xl card-hover text-left"
          >
            <h3 className="text-xl font-semibold mb-3">{offer.title}</h3>
            <div className="text-2xl font-bold mb-3">${offer.price}</div>
            <ul className="space-y-2 text-sm">
              {offer.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Ils nous font confiance et partagent leur expérience"
        description="Rejoignez les entreprises qui construisent déjà leur avenir numérique avec PixelCraftLab"
        testimonials={testimonials}
      />

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

      <Timeline data={timelineData} />
    </div>
  );
};

export default Index;

