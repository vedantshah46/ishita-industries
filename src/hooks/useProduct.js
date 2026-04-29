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
          setProduct(staticProductDetails[slug] ?? null)
          if (fetchError) setError(fetchError)
        } else {
          setProduct(data)
        }
        setLoading(false)
      })
  }, [slug])

  return { product, loading, error }
}

export default useProduct
