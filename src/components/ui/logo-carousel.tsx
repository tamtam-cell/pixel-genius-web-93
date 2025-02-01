import React, { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const LogoCarousel = ({ columnCount = 2, logos }: LogoCarouselProps) => {
  const [currentLogos, setCurrentLogos] = useState(logos)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos(shuffleArray(logos))
    }, 3000)

    return () => clearInterval(interval)
  }, [logos])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <AnimatePresence>
        {currentLogos.map((logo) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center"
          >
            <logo.img className="w-20 h-20 object-contain" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export { LogoCarousel }