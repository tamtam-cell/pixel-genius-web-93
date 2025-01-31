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
            Notre Parcours de Création
          </h2>
          <p className="text-muted-foreground text-lg">
            Une approche étape par étape pour donner vie à votre vision
          </p>
        </div>

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "cyber-border relative",
                index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0",
                "max-w-3xl w-full"
              )}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative flex flex-col md:flex-row gap-8 p-6 bg-background/40 backdrop-blur-sm rounded-xl">
                {item.image && (
                  <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}

                <div className="md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <motion.h3 
                        className="text-2xl font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                  >
                    {item.content}
                  </motion.p>

                  {item.highlight && (
                    <motion.div 
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.5 }}
                    >
                      {item.highlight}
                    </motion.div>
                  )}
                </div>
              </div>

              {index < timelineData.length - 1 && (
                <motion.div 
                  className="absolute left-1/2 bottom-0 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ delay: index * 0.6 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}