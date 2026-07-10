import { LOGO_ALT, LOGO_SRC } from '../lib/brand'

type BrandLogoProps = {
  height?: number
  className?: string
}

export default function BrandLogo({ height = 40, className = '' }: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={668}
      height={373}
      className={`w-auto object-contain ${className}`}
      style={{ height }}
    />
  )
}
