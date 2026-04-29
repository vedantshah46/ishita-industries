import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

/**
 * Fetch published blog posts from Supabase.
 *
 * @param {{ limit?: number, tag?: string }} options
 * @returns {{ posts: Array, loading: boolean, error: object|null }}
 */
export function useBlogPosts({ limit = 12, tag } = {}) {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (tag) {
      query = query.contains('tags', [tag])
    }

    query.then(({ data, error: fetchError }) => {
if (fetchError) setError(fetchError)
      else setPosts(data ?? [])
      setLoading(false)
    })
  }, [limit, tag])

  return { posts, loading, error }
}


/**
 * Fetch a single blog post by slug.
 *
 * @param {string} slug
 * @returns {{ post: object|null, loading: boolean, error: object|null }}
 */
export function useBlogPost(slug) {
  const [post, setPost]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!slug) return

    supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()
      .then(({ data, error: fetchError }) => {
        if (fetchError) setError(fetchError)
        else setPost(data)
        setLoading(false)
      })
  }, [slug])

  return { post, loading, error }
}
