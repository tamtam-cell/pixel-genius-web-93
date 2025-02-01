import { motion } from "framer-motion";
import { CardData } from "@/types/carousel";

interface CarouselCardProps {
  card: CardData;
  index: number;
  faceCount: number;
  faceWidth: number;
  radius: number;
  onClick: () => void;
}

export const CarouselCard = ({ 
  card, 
  index, 
  faceCount, 
  faceWidth, 
  radius, 
  onClick 
}: CarouselCardProps) => {
  return (
    <motion.div
      className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
      style={{
        width: `${faceWidth}px`,
        transform: `rotateY(${
          index * (360 / faceCount)
        }deg) translateZ(${radius}px)`,
      }}
      onClick={onClick}
    >
      <div className="relative">
        <motion.div
          className="absolute -top-12 left-0 right-0 text-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
          }}
        >
          <span className="inline-block text-white text-xl font-bold px-6 py-3 rounded-xl shadow-lg backdrop-blur-md bg-black border border-white/40 shadow-white/10 hover:shadow-white/20 transition-all duration-300">
            {card.type}
          </span>
        </motion.div>
        <motion.img
          src={card.imgUrl}
          alt={`${card.type} - ${card.title}`}
          layoutId={`img-${card.imgUrl}`}
          className="pointer-events-none w-full rounded-xl object-cover aspect-square"
          initial={{ filter: "blur(4px)" }}
          layout="position"
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        />
      </div>
    </motion.div>
  );
};