import { useQuery } from '@tanstack/react-query'
import { staticProductDetails } from '../data/staticProducts.js'
import { supabase } from '../lib/supabase.js'

async function fetchProduct(slug) {
  const { data, error } = await supabase
    .from('products')
    .select('*, product_specs(*), product_images(*), product_tags(*)')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    const staticData = staticProductDetails[slug]
    if (staticData) return staticData
    throw error || new Error('Product not found')
  }

  const staticFallback = staticProductDetails[slug]
  const hasImages = data.image_url || data.product_images?.length > 0
  if (!hasImages && staticFallback) {
    return {
      ...data,
      image_url:      staticFallback.image_url,
      product_images: staticFallback.product_images ?? [],
    }
  }

  return data
}

export function useProduct(slug) {
  const { data: product = null, isLoading: loading, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
  })

  return { product, loading, error }
}

export default useProduct
