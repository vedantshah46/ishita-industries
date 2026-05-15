import { useQuery } from '@tanstack/react-query'
import { staticProductDetails } from '../data/staticProducts.js'
import { supabase } from '../lib/supabase.js'

async function fetchProducts(category, subCategory) {
  let query = supabase
    .from('products')
    .select('*, product_specs(*), product_images(*), product_tags(*)')
    .eq('is_active', true)
    .order('sort_order')

  if (category)    query = query.eq('category', category)
  if (subCategory) query = query.eq('sub_category', subCategory)

  const { data, error } = await query
  if (error) throw error

  if (!data || data.length === 0) return []

  return data.map(p => {
    if (!p.image_url) {
      const fallback = staticProductDetails[p.slug]
      return fallback ? { ...p, image_url: fallback.image_url } : p
    }
    return p
  })
}

export function useProducts(category, subCategory) {
  const { data: products = [], isLoading: loading, error } = useQuery({
    queryKey: ['products', category ?? null, subCategory ?? null],
    queryFn: () => fetchProducts(category, subCategory),
  })

  return { products, loading, error }
}

export default useProducts
