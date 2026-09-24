"use client"

import { useEffect, useRef, useState } from "react"
import type { StaticImageData } from "next/image"

type BlogCoverImageProps = {
  src: string | StaticImageData
  alt: string
  className?: string
  loading?: "lazy" | "eager"
}

// Renders nothing when the image fails, so the surrounding frame shows instead of a broken-image icon.
export default function BlogCoverImage({ src, alt, className, loading }: BlogCoverImageProps) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const url = typeof src === "string" ? src : src.src

  // A static-exported image can fail before hydration attaches onError; catch that case too.
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  if (failed) return null

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={imgRef} src={url} alt={alt} className={className} loading={loading} onError={() => setFailed(true)} />
  )
}
