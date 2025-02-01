"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { CarouselCard } from "./carousel/CarouselCard"
import { ProjectDialog } from "./carousel/ProjectDialog"
import { portfolioSites } from "@/data/portfolio-sites"
import { CardData } from "@/types/carousel"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

const useMediaQuery = (query: string, defaultValue = false) => {
  const getMatches = (query: string): boolean => {
    if (typeof window === "undefined") return defaultValue
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(() => getMatches(query))

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handleChange = () => setMatches(getMatches(query))
    
    handleChange()
    matchMedia.addEventListener("change", handleChange)
    return () => matchMedia.removeEventListener("change", handleChange)
  }, [query])

  return matches
}

const Carousel = memo(({ handleClick, controls, isCarouselActive }: {
  handleClick: (card: CardData) => void
  controls: any
  isCarouselActive: boolean
}) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800
  const faceCount = portfolioSites.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)
  const rotation = useMotionValue(0)
  const transform = useTransform(
    rotation,
    (value) => `rotate3d(0, 1, 0, ${value}deg)`
  )

  return (
    <div
      className="flex h-full items-center justify-center mt-12"
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
        {portfolioSites.map((card, i) => (
          <CarouselCard
            key={`key-${card.imgUrl}-${i}`}
            card={card}
            index={i}
            faceCount={faceCount}
            faceWidth={faceWidth}
            radius={radius}
            onClick={() => handleClick(card)}
          />
        ))}
      </motion.div>
    </div>
  )
})

export function ThreeDPhotoCarousel() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (card: CardData) => {
    setSelectedCard(card)
    setIsCarouselActive(false)
    controls.stop()
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        <div className="relative h-[500px] w-full">
          <Carousel
            handleClick={handleClick}
            controls={controls}
            isCarouselActive={isCarouselActive}
          />
        </div>
      </AnimatePresence>

      <ProjectDialog
        selectedCard={selectedCard}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedCard(null)
            setIsCarouselActive(true)
          }
        }}
      />
    </motion.div>
  )
}