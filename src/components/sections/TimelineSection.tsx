import { Timeline } from "@/components/ui/timeline";

export const TimelineSection = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-base font-light leading-relaxed tracking-wide mb-10">
            Lancement de notre nouvelle plateforme d'innovation numérique et expansion de nos services premium
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Innovation Continue</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Développement de solutions sur mesure</p>
            </div>
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Excellence Technique</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Adoption des dernières technologies</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-base font-light leading-relaxed tracking-wide mb-10">
            Expansion majeure et reconnaissance internationale
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Croissance Rapide</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Doublement de notre équipe technique</p>
            </div>
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Innovation</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Lancement de notre plateforme cloud</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-base font-light leading-relaxed tracking-wide mb-10">
            Développement de solutions innovantes et expansion de notre expertise
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Nouveaux Services</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Introduction de l'IA dans nos solutions</p>
            </div>
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Partenariats</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Collaboration avec des leaders du marché</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-base font-light leading-relaxed tracking-wide mb-10">
            Consolidation de notre expertise et expansion de notre équipe
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Expertise</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Certification de notre équipe</p>
            </div>
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Croissance</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Ouverture de nouveaux bureaux</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-muted-foreground/90 text-base font-light leading-relaxed tracking-wide mb-10">
            Fondation de PixelCraftLab et premiers pas dans l'innovation numérique
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Création</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Naissance de notre vision</p>
            </div>
            <div className="cyber-border p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-primary/90 font-sites-web text-lg font-medium mb-3">Premiers Succès</h4>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Premiers clients satisfaits</p>
            </div>
          </div>
        </div>
      ),
    }
  ];

  return <Timeline data={timelineData} />;
};