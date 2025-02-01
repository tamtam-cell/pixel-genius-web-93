import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function BestCreationsSection() {
  const creations = [
    {
      title: "Restaurant Gastronomique",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
      description: "Une vitrine web exceptionnelle développée avec React et Next.js, intégrant des animations 3D personnalisées et une galerie photo haute performance. Interface primée pour son design innovant et son expérience utilisateur immersive.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Studio d'Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
      description: "Portfolio architectural avant-gardiste utilisant Three.js pour des visualisations 3D interactives. Optimisé SEO avec plus de 200% d'augmentation du trafic organique et intégration CMS headless pour une gestion de contenu fluide.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Boutique de Mode",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
      description: "E-commerce nouvelle génération avec React et Node.js. Performance exceptionnelle (score Lighthouse 98/100), intégration multi-PSP, et système de recommandation IA personnalisé augmentant les ventes de 45%.",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Artisanat Local",
      image: "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2940&auto=format&fit=crop",
      description: "Marketplace innovante développée avec Next.js et Stripe Connect. Système de géolocalisation avancé, chat temps réel entre artisans et clients, et dashboard analytique complet multipliant par 3 les ventes des artisans.",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Formation en Ligne",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      description: "LMS dernière génération avec React et GraphQL. Système de progression IA, streaming vidéo adaptatif, et gamification avancée. Taux de complétion des cours augmenté de 80% grâce à l'expérience utilisateur optimisée.",
      link: "#",
      type: "digital"
    },
    {
      title: "Templates Premium",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      description: "Marketplace digitale exclusive construite avec Next.js et Typescript. Système de prévisualisation en temps réel, protection DRM innovante, et intégration Web3 pour les licences. Plus de 10,000 créateurs satisfaits.",
      link: "#",
      type: "digital"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sites-web text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#D6BCFA] tracking-tight leading-tight">
            Nos Meilleures Créations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light tracking-wide">
            Découvrez nos réalisations les plus innovantes, alliant technologie de pointe et design d'exception
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creations.map((creation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={creation.image}
                      alt={creation.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={creation.link}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Voir le projet
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{creation.title}</h3>
                    <p className="text-muted-foreground">{creation.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}