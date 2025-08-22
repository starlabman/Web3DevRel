"use client"

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  threshold?: number
  className?: string
}

export function PerformanceOptimizer({ 
  children, 
  threshold = 0.1,
  className = "" 
}: PerformanceOptimizerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "50px 0px -50px 0px"
  })

  useEffect(() => {
    // Preload critical resources when component comes into view
    if (isInView) {
      // Preload images that might be needed
      const preloadImages = [
        '/kodjo-labore-profile.png',
        '/blockchain-developer-bootcamp.png',
        '/web3-conference-speaking.png'
      ]
      
      preloadImages.forEach(src => {
        const img = new Image()
        img.src = src
      })
    }
  }, [isInView])

  return (
    <div ref={ref} className={className}>
      {isInView ? children : (
        <div className="animate-pulse bg-muted/20 rounded-lg h-64" />
      )}
    </div>
  )
}

export function LazyLoadImage({ 
  src, 
  alt, 
  className = "",
  width = 400,
  height = 300,
  priority = false 
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "100px 0px -100px 0px"
  })

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/placeholder.jpg'
          }}
        />
      ) : (
        <div className="animate-pulse bg-muted/20 rounded-lg w-full h-full" />
      )}
    </div>
  )
}
