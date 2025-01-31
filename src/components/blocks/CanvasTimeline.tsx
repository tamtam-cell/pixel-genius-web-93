import { motion } from "framer-motion";
import { Clipboard, Palette, Code, Bug, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  icon: typeof Clipboard | typeof Palette | typeof Code | typeof Bug | typeof CheckCircle;
  title: string;
  description: string;
  content: string;
  highlight?: string;
  image?: string;
}

const timelineData: TimelineEntry[] = [
  {
    icon: Clipboard,
    title: "Collecte des Besoins",
    description: "Analyse approfondie de vos besoins",
    content: "Nous commençons par comprendre votre vision et vos objectifs à travers notre formulaire détaillé sur la page Services.",
    highlight: "Formulaire intelligent",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
  },
  {
    icon: Palette,
    title: "Design Personnalisé",
    description: "Création d'une identité unique",
    content: "Nos designers créent une maquette sur mesure qui reflète votre marque et vos valeurs.",
    highlight: "Design moderne",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
  },
  {
    icon: Code,
    title: "Développement Agile",
    description: "Codage et intégration",
    content: "Notre équipe de développeurs transforme la maquette en site web fonctionnel avec les dernières technologies.",
    highlight: "Technologies modernes",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
  },
  {
    icon: Bug,
    title: "Tests & Optimisation",
    description: "Contrôle qualité rigoureux",
    content: "Phase intensive de tests pour garantir performance, sécurité et compatibilité.",
    highlight: "Qualité garantie",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
  },
  {
    icon: CheckCircle,
    title: "Mise en Production",
    description: "Lancement et accompagnement",
    content: "Déploiement de votre site et formation à son utilisation pour une transition en douceur.",
    highlight: "Support continu",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
  }
];

export function CanvasTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Notre Processus de Création
          </h2>
          <p className="text-muted-foreground text-lg">
            De la conception à la réalisation, un parcours d'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "cyber-border card-hover p-6 rounded-xl relative",
                "bg-background/40 backdrop-blur-sm"
              )}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative z-10">
                {item.image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {item.content}
                </p>

                {item.highlight && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {item.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}