import { Timeline } from "@/components/ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-xl font-light leading-loose tracking-wide mb-16">
            Lancement de notre nouvelle plateforme d'innovation numérique et expansion de nos services premium
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Innovation Continue</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
                Développement de solutions sur mesure
              </p>
            </div>
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Excellence Technique</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
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
          <p className="text-muted-foreground/90 text-xl font-light leading-loose tracking-wide mb-16">
            Expansion majeure et reconnaissance internationale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Croissance Rapide</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
                Doublement de notre équipe technique
              </p>
            </div>
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Innovation</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
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
          <p className="text-muted-foreground/90 text-xl font-light leading-loose tracking-wide mb-16">
            Développement de solutions innovantes et expansion de notre expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Nouveaux Services</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
                Introduction de l'IA dans nos solutions
              </p>
            </div>
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Partenariats</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
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
          <p className="text-muted-foreground/90 text-xl font-light leading-loose tracking-wide mb-16">
            Consolidation de notre expertise et expansion de notre équipe
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Expertise</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
                Certification de notre équipe
              </p>
            </div>
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Croissance</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
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
          <p className="text-muted-foreground/90 text-xl font-light leading-loose tracking-wide mb-16">
            Fondation de PixelCraftLab et premiers pas dans l'innovation numérique
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Création</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
                Naissance de notre vision
              </p>
            </div>
            <div className="cyber-border p-10 rounded-xl backdrop-blur-sm bg-background/20 hover:bg-background/30 transition-all duration-300 shadow-lg">
              <h4 className="text-primary/90 font-sites-web text-2xl font-medium mb-6">Premiers Succès</h4>
              <p className="text-lg text-muted-foreground/90 leading-loose tracking-wide">
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