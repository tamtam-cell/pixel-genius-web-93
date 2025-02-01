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
      story: "Notre équipe a eu le plaisir de créer cette plateforme e-commerce pour un restaurant gastronomique prestigieux. Le défi était de transmettre l'élégance et le raffinement de l'établissement à travers une expérience d'achat en ligne. Nos designers ont travaillé en étroite collaboration avec les chefs pour capturer l'essence de chaque plat dans une présentation visuelle impeccable. L'interface intuitive permet aux clients de commander facilement leurs plats préférés pour une livraison à domicile."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
      type: "Vitrine",
      title: "L'Architecte Visionnaire",
      story: "Ce site vitrine représente la vision créative d'un cabinet d'architecture moderne. Notre équipe de développement a créé une expérience immersive où chaque scroll révèle de nouveaux aspects des projets architecturaux. Les animations fluides et la navigation intuitive permettent aux visiteurs de découvrir le portfolio de manière organique. Un véritable défi technique qui a permis de mettre en valeur des années de créations architecturales exceptionnelles."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop",
      type: "Digital",
      title: "La Formation en Ligne Interactive",
      story: "Cette plateforme de formation digitale a été un projet passionnant pour notre équipe. Nous avons développé un système d'apprentissage interactif qui s'adapte au rythme de chaque utilisateur. Les cours vidéo, les quiz interactifs et le suivi de progression ont été intégrés de manière fluide. Notre équipe UX a particulièrement travaillé sur l'engagement des utilisateurs pour maintenir leur motivation tout au long du parcours d'apprentissage."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?q=80&w=2940&auto=format&fit=crop",
      type: "E-commerce",
      title: "La Boutique de Mode Éthique",
      story: "Ce projet e-commerce pour une marque de mode éthique a été un véritable défi créatif. Notre équipe a développé une expérience d'achat qui met en avant l'engagement écologique de la marque. Chaque produit raconte son histoire, de sa conception à sa fabrication responsable. L'interface épurée et les animations subtiles guident naturellement les utilisateurs vers une expérience d'achat consciente et réfléchie."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop",
      type: "Vitrine",
      title: "Le Studio de Design Innovant",
      story: "Pour ce studio de design, nous avons créé un site vitrine qui reflète leur approche créative unique. L'interface minimaliste met en valeur leurs projets tout en intégrant des interactions subtiles qui surprennent et engagent les visiteurs. Notre équipe de développement a particulièrement travaillé sur la performance et l'optimisation pour garantir une expérience fluide sur tous les appareils."
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      type: "Digital",
      title: "L'Application de Bien-être Mental",
      story: "Cette application de bien-être mental a été un projet très enrichissant. Notre équipe a collaboré avec des psychologues pour créer une expérience numérique apaisante et thérapeutique. Les animations douces, les transitions fluides et l'interface intuitive ont été conçues pour réduire l'anxiété des utilisateurs. Un bel exemple de technologie mise au service du bien-être humain."
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