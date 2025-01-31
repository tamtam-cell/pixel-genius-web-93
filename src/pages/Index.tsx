import { ArrowRight, Globe, Computer, Smartphone, Users, Clock, ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { HeroSection } from "@/components/blocks/HeroSection";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import { SplineSceneBasic } from "@/components/blocks/SplineSceneBasic";
import { CanvasTimeline } from "@/components/blocks/CanvasTimeline";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Timeline } from "@/components/ui/timeline";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Index = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(172800);
  const [remainingSpots, setRemainingSpots] = useState(5);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

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
    console.log("Redirecting to services page...");
    navigate('/services');
  };

  const testimonials = [
    {
      author: {
        name: "Marie Dubois",
        handle: "@marie.dubois@techvision.fr",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Je suis impressionnée par l'impact de PixelCraftLab sur notre entreprise. Non seulement nous avons réduit nos coûts de développement de 40%, mais leur approche personnalisée et leur écoute attentive ont vraiment fait la différence. Notre time-to-market s'est accéléré de 60% !",
    },
    {
      author: {
        name: "Thomas Martin",
        handle: "@thomas.martin@innovtech-solutions.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Je cherchais une équipe qui comprenne vraiment nos enjeux techniques. Leur expertise en microservices et CI/CD a dépassé mes attentes - nos cycles de déploiement sont 75% plus rapides maintenant. C'est un vrai plaisir de travailler avec une équipe aussi passionnée.",
    },
    {
      author: {
        name: "Sophie Bernard",
        handle: "@sophie.bernard@ecommerce-leader.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "La transformation de notre plateforme e-commerce était un défi majeur pour nous. L'équipe a su nous accompagner avec patience et expertise. Résultat : +85% de conversion et -50% de taux de rebond. Mais au-delà des chiffres, c'est leur approche humaine qui m'a marquée.",
    },
    {
      author: {
        name: "Lucas Petit",
        handle: "@lucas.petit@fintech-solutions.com",
        avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
      },
      text: "En tant que développeur, je suis particulièrement sensible à la qualité technique. Leur solution API Gateway ne m'a pas déçu : la latence est passée de 200ms à 50ms, et notre capacité de traitement a triplé. Leur équipe est toujours disponible pour échanger et optimiser.",
    },
    {
      author: {
        name: "Emma Richard",
        handle: "@emma.richard@uxdesign.fr",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "La méthodologie structurée et l'expertise technique de PixelCraftLab ont été déterminantes dans le succès de notre projet."
    },
    {
      author: {
        name: "Julie Moreau",
        handle: "@juliemoreau@consulting.com",
        avatar: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une approche consultative qui combine expertise technique et compréhension des objectifs stratégiques.",
    },
    {
      author: {
        name: "Pierre Durand",
        handle: "@pierre.dev@techvision.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'implémentation des solutions techniques avancées a significativement amélioré nos performances digitales.",
    },
    {
      author: {
        name: "Claire Lambert",
        handle: "@clairedesign@creativeagency.com",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique pointue associée à une excellente gestion de projet et une communication transparente.",
    },
    {
      author: {
        name: "Antoine Rousseau",
        handle: "@antoineweb@digitalstrategy.com",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'analyse approfondie de nos besoins a permis une transformation digitale parfaitement alignée avec notre stratégie.",
    },
    {
      author: {
        name: "Sarah Martin",
        handle: "@sarahux@uxdesign.com",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique remarquable combinée à une excellente compréhension des enjeux business.",
    },
    {
      author: {
        name: "Marc Dupont",
        handle: "@marcdev@techvision.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "La mise en place des solutions techniques innovantes a considérablement amélioré notre efficacité opérationnelle.",
    },
    {
      author: {
        name: "Léa Robert",
        handle: "@learobert@designagency.com",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une expertise technique de haut niveau qui a permis une transformation digitale réussie de notre entreprise.",
    },
    {
      author: {
        name: "Nicolas Blanc",
        handle: "@nicoweb@websolutions.com",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'accompagnement stratégique et l'implémentation technique ont dépassé nos objectifs initiaux.",
    },
    {
      author: {
        name: "Camille Duval",
        handle: "@camilledev@techvision.com",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
      },
      text: "Une méthodologie rigoureuse et une expertise technique qui ont permis une transformation digitale efficace.",
    },
    {
      author: {
        name: "Paul Mercier",
        handle: "@paulmercier@consulting.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'alliance parfaite entre expertise technique et vision stratégique pour une transformation digitale réussie.",
    },
    {
      author: {
        name: "Mathieu Dubois",
        handle: "@mathieu.dubois@techstartup.fr",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'expertise technique de l'équipe a permis d'optimiser nos processus de développement de 70%. Un véritable game-changer pour notre startup !",
    },
    {
      author: {
        name: "Charlotte Martin",
        handle: "@charlotte.martin@digitalagency.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "La transformation numérique de notre agence a été un succès total grâce à leur accompagnement stratégique et leur expertise technique pointue.",
    },
    {
      author: {
        name: "Alexandre Leroy",
        handle: "@alex.leroy@innovtech.fr",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'implémentation de leur solution d'IA a augmenté notre productivité de 45%. Un investissement qui a largement dépassé nos attentes.",
    },
    {
      author: {
        name: "Émilie Bernard",
        handle: "@emilie.bernard@webdesign.fr",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Leur approche innovante du design et du développement nous a permis de créer une expérience utilisateur exceptionnelle.",
    },
    {
      author: {
        name: "François Dupont",
        handle: "@francois.dupont@techlead.com",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "La mise en place de leur architecture microservices a réduit nos coûts d'infrastructure de 60%. Une expertise technique remarquable.",
    },
    {
      author: {
        name: "Aurélie Rousseau",
        handle: "@aurelie.rousseau@digital.fr",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
      },
      text: "Leur solution de e-commerce personnalisée a boosté nos ventes en ligne de 85%. Un partenariat qui a transformé notre business.",
    },
    {
      author: {
        name: "Vincent Lambert",
        handle: "@vincent.lambert@devops.fr",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'automatisation de nos processus DevOps a réduit notre time-to-market de 65%. Une expertise technique inégalée.",
    },
    {
      author: {
        name: "Sophie Moreau",
        handle: "@sophie.moreau@uxdesign.com",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
      },
      text: "La refonte UX de notre plateforme a augmenté notre taux de conversion de 40%. Un impact business significatif.",
    },
    {
      author: {
        name: "Laurent Petit",
        handle: "@laurent.petit@startup.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Leur expertise en cloud computing nous a permis de réduire nos coûts d'hébergement de 50%. Une équipe vraiment compétente.",
    },
    {
      author: {
        name: "Marie-Claire Durand",
        handle: "@marieclaire.durand@tech.fr",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "L'intégration de leur solution IoT a révolutionné notre processus de production. Une innovation technique remarquable.",
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
      <HeroSection />
      <div className="mt-[-2rem]">
        {/* Limited Offer Section */}

{/* Limited Offer Section */}
{remainingSpots > 0 && (
  <div className="relative h-[200px] mb-8">
    <WavyBackground
      colors={["#9333EA", "#A855F7", "#C084FC", "#E879F9"]}
      waveWidth={50}
      backgroundFill="#0A0A0A"
      blur={5}
      speed="slow"
      waveOpacity={0.3}
      className="absolute inset-0 -top-[300px] z-0"
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
              onClick={handleOfferClick}
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
)}

        {/* Pricing Cards with Scroll Animation */}
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl font-semibold text-foreground mb-8">
              Nos Offres <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-200">
                Sur Mesure
              </span>
            </h1>
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
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-3xl font-bold">{offer.price}€</span>
                    {offer.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {offer.originalPrice}€
                      </span>
                    )}
                  </div>

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

                    <p className="text-sm text-center font-medium bg-primary/10 py-2 rounded-md backdrop-blur-sm">
                      Offre temporaire - Bonus garanti pendant {formatTime(timeLeft)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContainerScroll>

        {/* Testimonials Section */}
        <TestimonialsSection
          title="Nous donnons vie à de plus en plus de projets"
          description="Découvrez comment notre expertise technique et notre approche stratégique transforment les projets de nos clients"
          testimonials={testimonials}
        />

        {/* Process Timeline Canvas */}
        <CanvasTimeline />

        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative">
              <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-primary to-purple-200 tracking-tight leading-none">
                <span className="block text-lg text-primary/80 font-normal mb-2">Découvrez</span>
                Technologies du Futur
                <span className="block text-base text-muted-foreground/80 font-normal mt-4 max-w-2xl mx-auto">
                  Innovation et Excellence Technique pour votre Succès Digital
                </span>
              </h2>
              <div className="absolute -inset-x-20 -top-20 -bottom-20 opacity-50 bg-gradient-to-r from-primary/20 via-purple-500/5 to-primary/20 blur-3xl -z-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  icon: Globe,
                  title: "Solutions Web",
                  description:
                    "Applications web modernes et performantes.",
                },
                {
                  icon: Computer,
                  title: "Design Responsive",
                  description:
                    "Interfaces adaptatives pour tous les écrans.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile First",
                  description:
                    "Expérience mobile optimisée en priorité.",
                },
                {
                  icon: Users,
                  title: "UX Centrée Utilisateur",
                  description:
                    "Design pensé pour vos utilisateurs.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500 hover:bg-primary/5"
                >
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                    <feature.icon className="relative w-16 h-16 text-primary transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
