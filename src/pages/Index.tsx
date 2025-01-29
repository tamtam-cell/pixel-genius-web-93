import { ArrowRight, Clock, Users, ShieldCheck, Zap, Code, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

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

  const testimonials = [
    {
      author: {
        name: "Marie Dubois",
        handle: "@marieweb",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "PixelCraftLab a transformé notre présence en ligne. Leur approche innovante et leur expertise technique sont remarquables.",
    },
    {
      author: {
        name: "Thomas Martin",
        handle: "@thomasdev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'intégration de notre site a été parfaite. Nous avons réduit notre temps de développement de 60% grâce à leur solution.",
    },
    {
      author: {
        name: "Sophie Bernard",
        handle: "@sophiedesign",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une agence qui comprend vraiment nos besoins ! La qualité du design et l'attention aux détails sont impressionnantes."
    },
    {
      author: {
        name: "Lucas Petit",
        handle: "@lucasweb",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
      },
      text: "Le support technique est exceptionnel. Réactifs et professionnels, ils ont su répondre à toutes nos attentes.",
    },
    {
      author: {
        name: "Emma Rousseau",
        handle: "@emmatech",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Un partenaire de confiance pour notre transformation digitale. Résultats au-delà de nos espérances.",
    },
    {
      author: {
        name: "Alexandre Durand",
        handle: "@alexdev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Expertise technique impressionnante et vision créative unique. Un véritable atout pour notre entreprise.",
    }
  ];

  return (
    <div className="min-h-screen">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-primary to-purple-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Innovez dans le Numérique, <br /> Créez l'Extraordinaire
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-muted-foreground text-xl"
        >
          Transformons vos visions en expériences web captivantes et innovantes
        </motion.p>
      </LampContainer>

      {/* Limited Offer Section with reduced spacing */}
      <div className="mt-8">
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
      </div>

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

      {/* Testimonials Section */}
      <TestimonialsSection
        title="La confiance de nos clients témoigne de notre excellence"
        description="Rejoignez les entreprises qui construisent déjà leur avenir numérique avec PixelCraftLab"
        testimonials={testimonials}
      />

      {/* Enhanced Features Section */}
      <section className="py-16 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Technologies du Futur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Sécurité Quantique",
                description: "Protection de nouvelle génération pour vos données avec cryptographie avancée.",
              },
              {
                icon: Code,
                title: "Architecture Innovante",
                description: "Solutions techniques modernes et évolutives pour une performance optimale.",
              },
              {
                icon: Database,
                title: "IA & Big Data",
                description: "Exploitation intelligente des données pour des décisions stratégiques.",
              },
              {
                icon: Cloud,
                title: "Cloud Native",
                description: "Infrastructure scalable et résiliente pour votre croissance.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-border p-6 rounded-xl card-hover backdrop-blur-sm"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
