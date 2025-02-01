import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function BestCreationsSection() {
  const creations = [
    {
      title: "E-commerce Luxe",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2940&auto=format&fit=crop",
      description: "Boutique en ligne haut de gamme",
      link: "#"
    },
    {
      title: "Portfolio Créatif",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2940&auto=format&fit=crop",
      description: "Site vitrine pour artiste",
      link: "#"
    },
    {
      title: "Application SaaS",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2815&auto=format&fit=crop",
      description: "Dashboard analytics",
      link: "#"
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
            Découvrez quelques-unes de nos réalisations les plus remarquables
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