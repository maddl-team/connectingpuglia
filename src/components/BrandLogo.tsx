import { LOGO_ALT, LOGO_SRC } from '../lib/brand'

type BrandLogoProps = {
  className?: string
}

export default function BrandLogo({ className = 'h-16 w-auto' }: BrandLogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={668}
      height={373}
      className={`object-contain ${className}`}
    />
  )
}
