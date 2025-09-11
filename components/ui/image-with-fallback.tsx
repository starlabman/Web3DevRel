"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  fallbackText?: string
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  sizes,
  priority = false,
  fallbackText = "Image non disponible",
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted/20 ${className}`}>
        <div className="text-center">
          <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{fallbackText}</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...(width !== undefined ? { width } : {})}
      {...(height !== undefined ? { height } : {})}
      {...(fill ? { fill } : {})}
      className={className}
      {...(sizes !== undefined ? { sizes } : {})}
      {...(priority ? { priority } : {})}
      onError={() => setHasError(true)}
    />
  )
}
