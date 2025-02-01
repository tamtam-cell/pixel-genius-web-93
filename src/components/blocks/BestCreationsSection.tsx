import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function BestCreationsSection() {
  const creations = [
    {
      title: "Restaurant Gastronomique",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
      description: "Notre équipe a relevé un défi passionnant : traduire l'excellence culinaire en expérience digitale. En collaboration étroite avec le chef étoilé, nous avons développé une interface React/Next.js où chaque animation reflète la précision d'un geste culinaire. L'intégration d'un configurateur 3D pour la disposition des tables a particulièrement séduit le client, augmentant les réservations de 150%. Notre plus grande fierté ? Voir le restaurant afficher complet chaque soir depuis le lancement.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Studio d'Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
      description: "Face au défi de présenter des espaces complexes en 3D, notre équipe a innové en développant une solution Three.js sur-mesure. Un moment clé fut la création d'un système de visite virtuelle temps réel, nécessitant trois mois de R&D intensive. Le résultat ? Une expérience immersive saluée par la presse spécialisée et une augmentation spectaculaire du trafic organique de 200%. Le studio nous a depuis confié la réalisation de leur application mobile.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Boutique de Mode",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
      description: "L'optimisation a été notre obsession sur ce projet e-commerce. Notre équipe a passé d'innombrables nuits à peaufiner chaque milliseconde de chargement, aboutissant à un score Lighthouse de 98/100. L'intégration de notre système IA de recommandation personnalisée fut un véritable défi technique, mais quel succès ! Les ventes ont bondi de 45% dès le premier mois. Notre plus belle récompense ? Le sourire de la fondatrice découvrant les premiers résultats.",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Artisanat Local",
      image: "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2940&auto=format&fit=crop",
      description: "Ce projet né pendant le confinement visait à soutenir les artisans locaux. Notre équipe a développé une marketplace Next.js intégrant un système de géolocalisation complexe. Le plus grand défi ? Implémenter un chat temps réel stable entre artisans et clients, résolu après deux sprints intensifs. Aujourd'hui, la plateforme compte plus de 500 artisans actifs et leurs ventes ont triplé. Une belle histoire de résilience collective !",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Formation en Ligne",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      description: "La transformation d'une école traditionnelle en leader du digital learning fut un projet ambitieux. Notre innovation majeure ? Un système de progression IA analysant le rythme d'apprentissage de chaque étudiant. L'implémentation du streaming adaptatif fut complexe, nécessitant une collaboration étroite avec des experts en pédagogie. Résultat : le taux de complétion des cours a grimpé à 80%, un record dans le secteur. L'école est aujourd'hui citée en exemple dans le monde de l'EdTech.",
      link: "#",
      type: "digital"
    },
    {
      title: "Templates Premium",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      description: "Ce projet représentait un défi technique majeur : créer une marketplace de templates avec prévisualisation instantanée. Notre équipe a développé un système unique de protection DRM, fruit de six mois de recherche. L'intégration Web3 pour la gestion des licences fut une première dans le secteur. Aujourd'hui, avec plus de 10,000 créateurs actifs et un taux de satisfaction de 98%, la plateforme est devenue une référence. Notre fierté ? Voir des designs créés sur notre plateforme utilisés par des marques internationales.",
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
            Découvrez nos réalisations les plus innovantes, où chaque projet raconte une histoire unique d'excellence technique et de créativité
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