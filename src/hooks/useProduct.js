import { useState, useEffect } from 'react'
import { staticProductDetails } from '../data/staticProducts.js'
import { supabase } from '../lib/supabase.js'

/**
 * Fetch a single product by slug (specs, images, tags included).
 * Falls back to staticProductDetails[slug] when Supabase returns nothing.
 *
 * @param {string} slug
 * @returns {{ product: object|null, loading: boolean, error: object|null }}
 */
export function useProduct(slug) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!slug) return

    supabase
      .from('products')
      .select('*, product_specs(*), product_images(*), product_tags(*)')
      .eq('slug', slug)
      .single()
      .then(({ data, error: fetchError }) => {
        if (fetchError || !data) {
          // Fall back to static data
          const staticData = staticProductDetails[slug]
          if (staticData) {
            setProduct(staticData)
            setError(null) // Suppress error if we have static fallback
          } else {
            setProduct(null)
            setError(fetchError || new Error('Product not found'))
          }
        } else {
          // If Supabase record has no images at all, fill them from static fallback
          const staticFallback = staticProductDetails[slug]
          const hasImages = data.image_url || data.product_images?.length > 0
          if (!hasImages && staticFallback) {
            data = {
              ...data,
              image_url:      staticFallback.image_url,
              product_images: staticFallback.product_images ?? [],
            }
          }
          setProduct(data)
          setError(null)
        }
        setLoading(false)
      })
  }, [slug])

  return { product, loading, error }
}

export default useProduct
