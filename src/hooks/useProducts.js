import { useState, useEffect } from 'react'
import { staticProductDetails } from '../data/staticProducts.js'
import { supabase } from '../lib/supabase.js'

export function useProducts(category, subCategory) {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState(null)

  useEffect(() => {
    let query = supabase
      .from('products')
      .select('*, product_specs(*), product_images(*), product_tags(*)')
      .eq('is_active', true)
      .order('sort_order')

    if (category)    query = query.eq('category', category)
    if (subCategory) query = query.eq('sub_category', subCategory)

    query.then(({ data, error: fetchError }) => {
      if (fetchError) {
        setError(fetchError)
        setProducts([])
      } else if (!data || data.length === 0) {
        setProducts([])
      } else {
        // Fill missing image_url from static fallback
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
  }, [category, subCategory])

  return { products, loading, error }
}

export default useProducts
