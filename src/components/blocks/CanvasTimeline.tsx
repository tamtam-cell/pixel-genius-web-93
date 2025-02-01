import { motion } from "framer-motion";
import { Clipboard, Palette, Code, Bug, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface TimelineEntry {
  icon: typeof Clipboard | typeof Palette | typeof Code | typeof Bug | typeof CheckCircle;
  titleKey: string;
  descriptionKey: string;
  contentKey: string;
  highlight?: string;
  image?: string;
}

export function CanvasTimeline() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  const timelineData: TimelineEntry[] = [
    {
      icon: Clipboard,
      titleKey: "timeline.step1.title",
      descriptionKey: "timeline.step1.description",
      contentKey: "timeline.step1.content",
      highlight: "Formulaire intelligent",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop"
    },
    {
      icon: Palette,
      titleKey: "timeline.step2.title",
      descriptionKey: "timeline.step2.description",
      contentKey: "timeline.step2.content",
      highlight: "Design moderne",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      icon: Code,
      titleKey: "timeline.step3.title",
      descriptionKey: "timeline.step3.description",
      contentKey: "timeline.step3.content",
      highlight: "Technologies modernes",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop"
    },
    {
      icon: Bug,
      titleKey: "timeline.step4.title",
      descriptionKey: "timeline.step4.description",
      contentKey: "timeline.step4.content",
      highlight: "Qualité garantie",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
    },
    {
      icon: CheckCircle,
      titleKey: "timeline.step5.title",
      descriptionKey: "timeline.step5.description",
      contentKey: "timeline.step5.content",
      highlight: "Support continu",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(155, 135, 245, 0.15), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div 
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(155, 135, 245, 0.2) 0%, transparent 70%)`,
            }}
          />
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            {t("timeline.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("timeline.subtitle")}
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
                "cyber-border relative group",
                index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0",
                "max-w-3xl w-full"
              )}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(120px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(155, 135, 245, 0.15), transparent 40%)`
                }}
              />
              
              <div className="relative flex flex-col md:flex-row gap-8 p-6 bg-background/40 backdrop-blur-sm rounded-xl">
                {item.image && (
                  <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <motion.img 
                      src={item.image} 
                      alt={t(item.titleKey)}
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
                        {t(item.titleKey)}
                      </motion.h3>
                      <p className="text-muted-foreground">{t(item.descriptionKey)}</p>
                    </div>
                  </div>

                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.4 }}
                  >
                    {t(item.contentKey)}
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