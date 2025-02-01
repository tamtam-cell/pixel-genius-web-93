import { Globe, Computer, Smartphone, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TechnologiesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Globe,
      title: t("tech.web.title"),
      description: t("tech.web.desc"),
    },
    {
      icon: Computer,
      title: t("tech.responsive.title"),
      description: t("tech.responsive.desc"),
    },
    {
      icon: Smartphone,
      title: t("tech.mobile.title"),
      description: t("tech.mobile.desc"),
    },
    {
      icon: Users,
      title: t("tech.ux.title"),
      description: t("tech.ux.desc"),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-primary to-purple-200 tracking-tight leading-none">
            <span className="block text-lg text-primary/80 font-normal mb-2">{t("tech.discover")}</span>
            {t("tech.title")}
            <span className="block text-base text-muted-foreground/80 font-normal mt-4 max-w-2xl mx-auto">
              {t("tech.subtitle")}
            </span>
          </h2>
          <div className="absolute -inset-x-20 -top-20 -bottom-20 opacity-50 bg-gradient-to-r from-primary/20 via-purple-500/5 to-primary/20 blur-3xl -z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
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
  );
}