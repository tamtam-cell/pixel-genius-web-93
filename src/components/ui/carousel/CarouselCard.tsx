import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { ProjectDialog } from "./ProjectDialog";
import { useState } from "react";
import { CardType } from "@/types/carousel";

interface CarouselCardProps {
  card: CardType;
  index: number;
}

export function CarouselCard({ card, index }: CarouselCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="relative h-[400px] w-[300px] rounded-xl bg-cover bg-center cursor-pointer group"
        style={{ backgroundImage: `url(${card.image})` }}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 rounded-xl" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: "translateZ(20px)",
          }}
        >
          <span className="inline-block text-white text-xl font-bold px-6 py-3 rounded-xl shadow-lg backdrop-blur-md bg-black/80 border border-white/20 bg-gradient-to-r from-black/90 to-black/80">
            {card.type}
          </span>
        </motion.div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <ProjectDialog project={card} onClose={() => setIsOpen(false)} />
      </Dialog>
    </>
  );
}