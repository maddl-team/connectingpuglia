type HeroImageProps = {
  src: string
  alt: string
  objectPosition?: string
}

export default function HeroImage({ src, alt, objectPosition = 'center' }: HeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition }}
      fetchPriority="high"
      decoding="async"
    />
  )
}
