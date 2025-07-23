"use client"

import { useState, useEffect } from "react"
import { ImageIcon } from "lucide-react"

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackText?: string
}

export function SafeImage({ src, alt, width, height, className, fallbackText }: SafeImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState<string>("")

  useEffect(() => {
    // Reset states when src changes
    setImageError(false)
    setIsLoading(true)

    // Create a new image element to test loading
    const img = new Image()

    img.onload = () => {
      setImageSrc(src)
      setIsLoading(false)
      setImageError(false)
    }

    img.onerror = () => {
      console.warn(`Failed to load image: ${src}`)
      setImageError(true)
      setIsLoading(false)
      // Try fallback to placeholder
      setImageSrc("/placeholder.png")
    }

    // Set crossOrigin to avoid CORS issues
    img.crossOrigin = "anonymous"
    img.src = src || "/placeholder.png"

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  if (imageError && !imageSrc) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300`}
        style={{ width: width || "100%", height: height || "200px" }}
      >
        <div className="text-center p-4">
          <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">{fallbackText || alt}</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-100 animate-pulse`}
        style={{ width: width || "100%", height: height || "200px" }}
      >
        <div className="text-center">
          <div className="h-8 w-8 bg-gray-300 rounded mx-auto mb-2"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={imageSrc || "/placeholder.png"}
      alt={alt}
      className={className}
      style={{ width: width || "100%", height: height || "200px", objectFit: "cover" }}
      onError={() => {
        setImageError(true)
        setImageSrc("")
      }}
    />
  )
}
