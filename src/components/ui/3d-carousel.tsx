"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

type SiteType = "E-commerce" | "Vitrine" | "Digital"

interface CardData {
  imgUrl: string;
  type: SiteType;
  story: string;
  title: string;
}

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (card: CardData, index: number) => void
    controls: any
    cards: CardData[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.02)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.02,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`key-${card.imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card, i)}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-12 left-0 right-0 text-center"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(20px)",
                  }}
                >
                  <span className="inline-block text-white text-xl font-bold px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm">
                    {card.type}
                  </span>
                </motion.div>
                <motion.img
                  src={card.imgUrl}
                  alt={`${card.type} - ${card.imgUrl}`}
                  layoutId={`img-${card.imgUrl}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

export function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards: CardData[] = [
    {
      imgUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop",
      type: "E-commerce",
      title: "Le Restaurant Gastronomique en Ligne",
      story: "En tant que lead développeur sur ce projet, j'ai eu le privilège de travailler avec une équipe passionnée pour créer cette plateforme e-commerce unique. Je me souviens encore de notre première réunion avec le chef étoilé, ses yeux brillaient quand il nous parlait de sa vision. Notre designer Sarah a passé des heures à photographier chaque plat sous le meilleur angle, pendant que notre équipe UX peaufinait chaque détail de l'expérience de commande. Ce qui m'a le plus marqué, c'est la joie des premiers clients qui nous ont dit avoir retrouvé l'élégance du restaurant jusque dans leur salon."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
      type: "Vitrine",
      title: "L'Architecte Visionnaire",
      story: "Ce projet a été une véritable aventure créative pour notre équipe. En tant que designer principal, j'ai travaillé main dans la main avec Thomas, notre développeur front-end, pour donner vie à chaque animation. Je me rappelle nos longues sessions de brainstorming, entourés de croquis et de maquettes. Le plus grand défi ? Capturer l'essence de chaque bâtiment tout en gardant une navigation fluide. Quand l'architecte a vu le résultat final, son émotion nous a tous touchés. C'est pour ces moments-là qu'on aime notre métier !"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
      type: "Digital",
      title: "La Formation en Ligne Interactive",
      story: "En tant que spécialiste UX, ce projet de plateforme éducative m'a particulièrement tenu à cœur. Notre équipe a passé des semaines à interviewer des apprenants pour comprendre leurs frustrations avec l'e-learning traditionnel. Je me souviens de Julie, notre développeuse, restant tard le soir pour perfectionner le système de progression personnalisée. Le plus gratifiant ? Recevoir des messages d'étudiants nous disant qu'ils avaient enfin trouvé une façon d'apprendre qui leur correspondait. C'est ça, pour nous, le vrai succès !"
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2940&auto=format&fit=crop",
      type: "E-commerce",
      title: "La Boutique de Mode Éthique",
      story: "Ce projet a vraiment changé ma vision du e-commerce. En tant que chef de projet, j'ai été impressionné par l'engagement de la marque pour la transparence. Notre équipe a créé un véritable parcours de découverte : Maxime, notre développeur, a intégré des vidéos montrant les artisans au travail, pendant que Sophie, notre UX writer, racontait l'histoire de chaque pièce. Les retours des clients nous ont confirmé que nous avions réussi à créer plus qu'une boutique en ligne : une véritable expérience éthique et humaine."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      type: "Vitrine",
      title: "Le Studio de Design Innovant",
      story: "En tant que directeur artistique, ce projet représentait un défi excitant : comment traduire la créativité débordante d'un studio de design en une expérience web cohérente ? Notre équipe a osé sortir des sentiers battus. Je revois encore Lucas, notre développeur créatif, expérimenter pendant des heures pour créer ces interactions uniques. Marie, notre designer UI, a su trouver le parfait équilibre entre originalité et utilisabilité. Le résultat ? Un site qui surprend et inspire, tout comme le studio qu'il représente."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      type: "Digital",
      title: "L'Application de Bien-être Mental",
      story: "Ce projet restera gravé dans ma mémoire. En tant que lead développeur, j'ai collaboré étroitement avec une équipe de psychologues pour créer quelque chose de vraiment significatif. Claire, notre experte en accessibilité, a veillé à ce que l'application soit accueillante pour tous. Le plus touchant ? Les messages des utilisateurs nous racontant comment l'application les aide dans leur quotidien. C'est dans ces moments-là qu'on réalise l'impact réel de notre travail sur la vie des gens."
    }
  ]

  const handleClick = (card: CardData) => {
    setSelectedCard(card);
    setActiveImg(card.imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setSelectedCard(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={selectedCard !== null} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-sites-web bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#D6BCFA]">
              {selectedCard?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {selectedCard?.story}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}
