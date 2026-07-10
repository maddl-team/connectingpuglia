import { Helmet } from 'react-helmet-async'
import { toAbsoluteUrl } from '../lib/seo'

type TwitterMetaProps = {
  title: string
  description: string
  image: string
}

export default function TwitterMeta({ title, description, image }: TwitterMetaProps) {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={toAbsoluteUrl(image)} />
    </Helmet>
  )
}
