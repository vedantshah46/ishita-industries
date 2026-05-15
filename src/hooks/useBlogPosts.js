import { useQuery } from '@tanstack/react-query'
import { supabase } from '../lib/supabase.js'

async function fetchBlogPosts(limit, tag) {
  let query = supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(limit)

  if (tag) query = query.contains('tags', [tag])

  const { data, error } = await query
  if (error) throw error
  return data ?? []
}

async function fetchBlogPost(slug) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) throw error
  return data
}

export function useBlogPosts({ limit = 12, tag } = {}) {
  const { data: posts = [], isLoading: loading, error } = useQuery({
    queryKey: ['blog_posts', limit, tag ?? null],
    queryFn: () => fetchBlogPosts(limit, tag),
  })

  return { posts, loading, error }
}

export function useBlogPost(slug) {
  const { data: post = null, isLoading: loading, error } = useQuery({
    queryKey: ['blog_post', slug],
    queryFn: () => fetchBlogPost(slug),
    enabled: !!slug,
  })

  return { post, loading, error }
}
