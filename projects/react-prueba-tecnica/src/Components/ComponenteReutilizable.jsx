import { useCatImage } from '../hooks/useCatImage.js'

export function ComponenteReutilizable() {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return <>{imageUrl && <img src={imageUrl} />}</>
}
