import { useState, useEffect } from 'react'
import { precisionProducts, industrialProducts, extrusionProducts, staticProducts, staticProductDetails } from '../data/staticProducts.js'
import { supabase } from '../lib/supabase.js'

function getStaticByCategory(category) {
  if (!category) return staticProducts
  if (category === 'precision')  return precisionProducts
  if (category === 'industrial') return industrialProducts
  if (category === 'extrusion')  return extrusionProducts
  return staticProducts.filter(p => p.category === category)
}

/**
 * Fetch products from Supabase. Falls back to static data if Supabase
 * returns empty so the page is never blank.
 *
 * @param {string} [category] — 'precision' | 'industrial' | 'extrusion' | undefined (all)
 * @returns {{ products: Array, loading: boolean, error: object|null }}
 */
export function useProducts(category) {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    let query = supabase
      .from('products')
      .select('*, product_specs(*), product_images(*), product_tags(*)')
      .eq('is_active', true)
      .order('sort_order')

    if (category) {
      query = query.eq('category', category)
    }

    query.then(({ data, error: fetchError }) => {
      if (fetchError) {
        setError(fetchError)
        setProducts(getStaticByCategory(category))
      } else if (!data || data.length === 0) {
        // Nothing in Supabase yet — show static fallback
        setProducts(getStaticByCategory(category))
      } else {
        // For any product missing an image_url, fill it from static fallback
        const merged = data.map(p => {
          if (!p.image_url) {
            const fallback = staticProductDetails[p.slug]
            return fallback ? { ...p, image_url: fallback.image_url } : p
          }
          return p
        })
        setProducts(merged)
      }
      setLoading(false)
    })
  }, [category])

  return { products, loading, error }
}

export default useProducts
