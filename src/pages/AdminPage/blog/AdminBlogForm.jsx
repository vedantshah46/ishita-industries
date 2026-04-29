import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'
import Toast from '../../../components/ui/Toast'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function QuillEditor({ value, onChange }) {
  const containerRef = useRef(null)
  const quillRef = useRef(null)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    if (quillRef.current) return
    const q = new Quill(containerRef.current, {
      theme: 'snow',
      placeholder: 'Write your article here…',
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block'],
          ['link'],
          ['clean'],
        ],
      },
    })
    quillRef.current = q
    q.on('text-change', () => {
      onChangeRef.current(q.root.innerHTML)
    })
  }, [])

  // Sync external value changes (e.g. when editing a loaded post)
  useEffect(() => {
    const q = quillRef.current
    if (!q) return
    // Only overwrite if the current editor HTML differs (avoids cursor jumping)
    if (q.root.innerHTML !== value) {
      q.root.innerHTML = value || ''
    }
  }, [value])

  return <div ref={containerRef} />
}

function AdminBlogForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving]   = useState(false)
  const [toast, setToast]     = useState(null)
  const [coverFile, setCoverFile] = useState(null)

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_url: '',
    author: 'Ishita Industries',
    tags: [],
    is_published: false,
    published_at: '',
  })

  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (!isEdit) return

    const loadPost = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single()

      if (error || !data) {
        setToast({ message: 'Post not found', type: 'error' })
        setLoading(false)
        return
      }

      setForm({
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        cover_url: data.cover_url || '',
        author: data.author || 'Ishita Industries',
        tags: data.tags || [],
        is_published: data.is_published ?? false,
        published_at: data.published_at ? data.published_at.slice(0, 10) : '',
      })
      setLoading(false)
    }

    loadPost()
  }, [id, isEdit])

  const handleTitleChange = (title) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: isEdit ? prev.slug : slugify(title),
    }))
  }

  const uploadCover = async (file) => {
    const ext = file.name.split('.').pop()
    const path = `covers/${crypto.randomUUID()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(path, file)

    if (uploadError) throw uploadError

    const { data } = supabase.storage
      .from('blog-images')
      .getPublicUrl(path)

    return data.publicUrl
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      let coverUrl = form.cover_url

      if (coverFile) {
        coverUrl = await uploadCover(coverFile)
      }

      const postData = {
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        cover_url: coverUrl,
        author: form.author,
        tags: form.tags,
        is_published: form.is_published,
        published_at: form.is_published
          ? (form.published_at ? new Date(form.published_at).toISOString() : new Date().toISOString())
          : null,
        updated_at: new Date().toISOString(),
      }

      if (isEdit) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert(postData)

        if (error) throw error
      }

      setToast({ message: isEdit ? 'Post updated!' : 'Post created!', type: 'success' })
      setTimeout(() => navigate('/admin/blog'), 800)
    } catch (err) {
      setToast({ message: err.message, type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const addTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!form.tags.includes(tagInput.trim())) {
        setForm(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }))
      }
      setTagInput('')
    }
  }

  const removeTag = (tag) => {
    setForm(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }))
  }

  if (loading) return <LoadingSpinner size={48} text="Loading post…" />

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">{isEdit ? 'Edit Post' : 'New Blog Post'}</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        {/* Title & Slug */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Title *</label>
            <input
              className="admin-form-input"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              placeholder="Blog Post Title"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Slug</label>
            <input
              className="admin-form-input"
              value={form.slug}
              onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
              placeholder="blog-post-title"
            />
          </div>
        </div>

        {/* Author & Published Date */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Author</label>
            <input
              className="admin-form-input"
              value={form.author}
              onChange={(e) => setForm(prev => ({ ...prev, author: e.target.value }))}
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Published Date</label>
            <input
              className="admin-form-input"
              type="date"
              value={form.published_at}
              onChange={(e) => setForm(prev => ({ ...prev, published_at: e.target.value }))}
            />
          </div>
        </div>

        {/* Excerpt */}
        <div className="admin-form-group">
          <label className="admin-form-label">Excerpt</label>
          <textarea
            className="admin-form-textarea"
            value={form.excerpt}
            onChange={(e) => setForm(prev => ({ ...prev, excerpt: e.target.value }))}
            placeholder="Short preview text for the blog card…"
            style={{ minHeight: 80 }}
          />
        </div>

        {/* Content */}
        <div className="admin-form-group">
          <label className="admin-form-label">Content</label>
          <div className="admin-quill-wrap">
            <QuillEditor
              value={form.content}
              onChange={(html) => setForm(prev => ({ ...prev, content: html }))}
            />
          </div>
        </div>

        {/* Cover Image */}
        <div className="admin-form-group">
          <label className="admin-form-label">Cover Image</label>
          <div className="admin-image-upload" onClick={() => document.getElementById('cover-image-input').click()}>
            <input
              id="cover-image-input"
              type="file"
              accept="image/*"
              onChange={(e) => setCoverFile(e.target.files[0])}
            />
            <p className="admin-image-upload-label">
              {coverFile ? coverFile.name : 'Click to upload a cover image'}
            </p>
          </div>
          {(form.cover_url || coverFile) && (
            <div className="admin-image-preview" style={{ marginTop: 12 }}>
              <div className="admin-image-preview-item" style={{ width: 160, height: 100 }}>
                <img
                  src={coverFile ? URL.createObjectURL(coverFile) : form.cover_url}
                  alt="Cover preview"
                />
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="admin-form-group">
          <label className="admin-form-label">Tags</label>
          <div className="admin-tags-input">
            {form.tags.map(tag => (
              <span key={tag} className="admin-tag">
                {tag}
                <button type="button" className="admin-tag-remove" onClick={() => removeTag(tag)}>✕</button>
              </span>
            ))}
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              placeholder="Type and press Enter…"
            />
          </div>
        </div>

        {/* Publish Toggle */}
        <div className="admin-form-group">
          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm(prev => ({ ...prev, is_published: e.target.checked }))}
            />
            <span className="admin-toggle-track" />
            <span className="admin-toggle-label">
              {form.is_published ? 'Published — visible on blog' : 'Draft — not visible'}
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Saving…' : (isEdit ? 'Update Post' : 'Create Post')}
          </button>
          <button type="button" className="admin-btn-secondary" onClick={() => navigate('/admin/blog')}>
            Cancel
          </button>
        </div>
      </form>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}

export default AdminBlogForm
