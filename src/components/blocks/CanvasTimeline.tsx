import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineEntry {
  title: string;
  description: string;
  date: string;
  icon: string;
  content?: string;
}

interface CanvasTimelineProps {
  data: TimelineEntry[];
}

export function CanvasTimeline({ data }: CanvasTimelineProps) {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary">
          Notre Processus de Création
        </h2>
        
        <div className="grid gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="cyber-border card-hover p-8 rounded-xl bg-background/40 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                    {item.content && (
                      <p className="mt-2 text-sm text-primary/80">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Connector Line (except for last item) */}
                {index < data.length - 1 && (
                  <div className="absolute left-[2rem] md:left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}