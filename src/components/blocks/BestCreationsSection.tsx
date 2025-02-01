import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function BestCreationsSection() {
  const creations = [
    {
      title: "Restaurant Gastronomique",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
      description: "Une rencontre inoubliable avec un chef étoilé passionné a marqué le début de ce projet unique. Notre équipe a passé une journée entière en cuisine pour s'imprégner de l'atmosphère et comprendre les moindres détails du service. Cette immersion nous a permis de créer une interface où chaque animation reflète la chorégraphie précise des serveurs en salle. Le moment le plus gratifiant ? Voir le chef, initialement sceptique sur le digital, s'émerveiller devant notre configurateur 3D des tables, développé après trois semaines d'itérations intenses. Aujourd'hui, avec 150% d'augmentation des réservations en ligne, c'est toute l'équipe du restaurant qui nous remercie d'avoir su préserver l'âme de leur établissement dans l'univers numérique.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Studio d'Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
      description: "Ce projet est né d'un défi lancé lors d'un café avec le fondateur du studio : 'Faites-moi ressentir l'espace comme si j'y étais'. Notre équipe technique s'est alors lancée dans une aventure Three.js qui nous a tenus en haleine pendant trois mois. Je me souviens encore de cette nuit où notre lead developer a eu l'illumination pour résoudre le problème de performance du rendu 3D temps réel - une solution si élégante qu'elle est aujourd'hui citée dans des conférences tech. La presse spécialisée a salué cette innovation, mais notre plus grande fierté reste ce message d'un client du studio : 'J'ai visité virtuellement ma future maison à 3h du matin, et j'en ai pleuré de joie'. Le trafic organique a bondi de 200%, et le studio nous a naturellement confié le développement de leur application mobile.",
      link: "#",
      type: "vitrine"
    },
    {
      title: "Boutique de Mode",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
      description: "L'histoire de ce projet est celle d'une obsession partagée pour la perfection. Pendant des semaines, notre équipe a transformé son bureau en laboratoire de performance web. Je me rappelle de ces sessions nocturnes où nous débattions passionnément de chaque milliseconde du temps de chargement, chronométrant même nos propres gestes pour comprendre l'expérience utilisateur idéale. L'intégration de l'IA pour les recommandations personnalisées a été notre plus grand défi - nous avons même recruté une experte en psychologie de la mode pour affiner l'algorithme. Le jour du lancement, voir le score Lighthouse atteindre 98/100 a été notre première victoire, mais la vraie récompense fut le message vocal ému de la fondatrice découvrant que ses ventes avaient augmenté de 45% en un mois.",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Artisanat Local",
      image: "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2940&auto=format&fit=crop",
      description: "Né pendant le confinement, ce projet porte en lui une histoire profondément humaine. Tout a commencé par un appel désespéré d'une artisane locale : 'Comment vais-je vendre mes créations maintenant ?'. Cette question a mobilisé notre équipe jour et nuit. Le développement du système de géolocalisation a été un véritable casse-tête, résolu lors d'une session de pair programming mémorable où café et détermination ont fait bon ménage. L'implémentation du chat en temps réel a nécessité deux sprints intenses, mais quel bonheur de voir les premiers messages s'échanger entre artisans et clients ! Aujourd'hui, avec plus de 500 artisans actifs et un triplement des ventes, chaque notification de nouvelle commande nous rappelle pourquoi nous aimons tant notre métier.",
      link: "#",
      type: "ecommerce"
    },
    {
      title: "Formation en Ligne",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      description: "La transformation digitale de cette école centenaire restera l'un de nos projets les plus enrichissants. L'équipe a passé une semaine entière à suivre des cours pour comprendre les subtilités de la pédagogie traditionnelle. Le développement de notre système d'IA adaptatif a été jalonné de moments mémorables, comme cette réunion de 4 heures avec des professeurs où nous avons réinventé la notion même d'apprentissage en ligne. Je me souviens particulièrement de ce professeur sceptique qui, après avoir testé notre prototype, a déclaré : 'C'est la première fois que la technologie me donne envie d'enseigner différemment'. Avec un taux de complétion des cours de 80%, nous avons prouvé que l'éducation en ligne pouvait être aussi engageante qu'en présentiel.",
      link: "#",
      type: "digital"
    },
    {
      title: "Templates Premium",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      description: "Ce projet représentait un défi technique sans précédent dans notre studio. L'histoire a débuté lors d'un hackathon interne où l'idée d'une protection DRM révolutionnaire a germé. Six mois de recherche et développement ont suivi, ponctués de moments d'eurêka et de défis techniques qui semblaient insurmontables. Je me souviens encore de l'excitation dans nos bureaux lorsque nous avons réussi la première intégration Web3 pour la gestion des licences - une première mondiale dans notre secteur. Un de nos développeurs a même rêvé de smart contracts pendant trois nuits consécutives ! Aujourd'hui, avec plus de 10 000 créateurs actifs et un taux de satisfaction de 98%, nous sommes fiers d'avoir créé une plateforme qui protège véritablement le travail des designers. Notre plus grande joie ? Voir nos templates utilisés par des marques internationales et recevoir des messages de créateurs enfin sereins quant à la protection de leur travail.",
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