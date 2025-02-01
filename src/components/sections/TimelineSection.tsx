import { Timeline } from "@/components/ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-lg font-light leading-loose tracking-wide mb-12">
            Lancement de notre nouvelle plateforme d'innovation numérique et expansion de nos services premium
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Innovation Continue</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Développement de solutions sur mesure
              </p>
            </div>
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Excellence Technique</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Adoption des dernières technologies
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-lg font-light leading-loose tracking-wide mb-12">
            Expansion majeure et reconnaissance internationale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Croissance Rapide</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Doublement de notre équipe technique
              </p>
            </div>
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Innovation</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Lancement de notre plateforme cloud
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-lg font-light leading-loose tracking-wide mb-12">
            Développement de solutions innovantes et expansion de notre expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Nouveaux Services</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Introduction de l'IA dans nos solutions
              </p>
            </div>
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Partenariats</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Collaboration avec des leaders du marché
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-lg font-light leading-loose tracking-wide mb-12">
            Consolidation de notre expertise et expansion de notre équipe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Expertise</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Certification de notre équipe
              </p>
            </div>
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Croissance</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Ouverture de nouveaux bureaux
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-lg font-light leading-loose tracking-wide mb-12">
            Fondation de PixelCraftLab et premiers pas dans l'innovation numérique
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Création</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Naissance de notre vision
              </p>
            </div>
            <div className="cyber-border p-8 rounded-xl backdrop-blur-sm bg-background/30 hover:bg-background/40 transition-all duration-300">
              <h4 className="text-primary/90 font-sites-web text-xl font-medium mb-4">Premiers Succès</h4>
              <p className="text-base text-muted-foreground/90 leading-relaxed tracking-wide">
                Premiers clients satisfaits
              </p>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return <Timeline data={timelineData} />;
};