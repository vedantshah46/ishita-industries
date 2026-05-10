import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'
import { CATEGORIES } from '../../../data/categories'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'
import Toast from '../../../components/ui/Toast'

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function AdminProductForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)

  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving]   = useState(false)
  const [toast, setToast]     = useState(null)

  const [form, setForm] = useState({
    name: '',
    slug: '',
    category: 'precision',
    sub_category: '',
    description: '',
    image_url: '',
    is_active: true,
    sort_order: 0,
  })

  // Each item: { id?, image_url?, alt_text, sort_order, file?, preview? }
  const [galleryImages, setGalleryImages] = useState([])
  const [specs, setSpecs]     = useState([])
  const [tags, setTags]       = useState([])
  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (!isEdit) return

    const load = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*, product_specs(*), product_images(*), product_tags(*)')
        .eq('id', id)
        .single()

      if (error || !data) {
        setToast({ message: 'Product not found', type: 'error' })
        setLoading(false)
        return
      }

      setForm({
        name:         data.name         || '',
        slug:         data.slug         || '',
        category:     data.category     || 'precision',
        sub_category: data.sub_category || '',
        description:  data.description  || '',
        image_url:    data.image_url    || '',
        is_active:    data.is_active    ?? true,
        sort_order:   data.sort_order   ?? 0,
      })

      setGalleryImages(
        (data.product_images || [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(img => ({
            id:        img.id,
            image_url: img.image_url,
            alt_text:  img.alt_text || '',
            sort_order: img.sort_order,
          }))
      )

      setSpecs(
        (data.product_specs || [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(s => ({ label: s.label, value: s.value }))
      )

      setTags((data.product_tags || []).map(t => t.tag))
      setLoading(false)
    }

    load()
  }, [id, isEdit])

  const handleNameChange = (name) => {
    setForm(prev => ({
      ...prev,
      name,
      slug: isEdit ? prev.slug : slugify(name),
    }))
  }

  const uploadImage = async (file) => {
    const ext  = file.name.split('.').pop()
    const path = `products/${crypto.randomUUID()}.${ext}`
    const { error } = await supabase.storage.from('product-images').upload(path, file)
    if (error) throw error
    return supabase.storage.from('product-images').getPublicUrl(path).data.publicUrl
  }

  // ── Gallery images ──────────────────────────────────────────────
  const handleGalleryFiles = (e) => {
    const files = Array.from(e.target.files)
    const next = files.map((file, i) => ({
      alt_text:   '',
      sort_order: galleryImages.length + i,
      file,
      preview:    URL.createObjectURL(file),
    }))
    setGalleryImages(prev => [...prev, ...next])
    e.target.value = ''
  }

  const updateGalleryAlt = (i, alt_text) => {
    setGalleryImages(prev => prev.map((img, idx) => idx === i ? { ...img, alt_text } : img))
  }

  const removeGalleryImage = (i) => {
    setGalleryImages(prev =>
      prev.filter((_, idx) => idx !== i).map((img, idx) => ({ ...img, sort_order: idx }))
    )
  }

  // ── Submit ──────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      // Upload new files in parallel
      const resolved = await Promise.all(
        galleryImages.map(async (img, i) => {
          const url = img.file ? await uploadImage(img.file) : img.image_url
          return { image_url: url, alt_text: img.alt_text, sort_order: i }
        })
      )

      const primaryUrl = resolved[0]?.image_url || form.image_url

      const productData = {
        name:         form.name,
        slug:         form.slug,
        category:     form.category,
        sub_category: form.sub_category || null,
        description:  form.description,
        image_url:    primaryUrl,
        is_active:    form.is_active,
        sort_order:   parseInt(form.sort_order) || 0,
        updated_at:   new Date().toISOString(),
      }

      let productId = id

      if (isEdit) {
        const { error } = await supabase.from('products').update(productData).eq('id', id)
        if (error) throw error
      } else {
        const { data, error } = await supabase.from('products').insert(productData).select('id').single()
        if (error) throw error
        productId = data.id
      }

      // Gallery images — delete + re-insert
      await supabase.from('product_images').delete().eq('product_id', productId)
      if (resolved.length > 0) {
        const { error } = await supabase.from('product_images').insert(
          resolved.map(img => ({ product_id: productId, ...img }))
        )
        if (error) throw error
      }

      // Specs — delete + re-insert
      await supabase.from('product_specs').delete().eq('product_id', productId)
      if (specs.length > 0) {
        const { error } = await supabase.from('product_specs').insert(
          specs.map((s, i) => ({ product_id: productId, label: s.label, value: s.value, sort_order: i }))
        )
        if (error) throw error
      }

      // Tags — delete + re-insert
      await supabase.from('product_tags').delete().eq('product_id', productId)
      if (tags.length > 0) {
        const { error } = await supabase.from('product_tags').insert(
          tags.map(tag => ({ product_id: productId, tag }))
        )
        if (error) throw error
      }

      setToast({ message: isEdit ? 'Product updated!' : 'Product created!', type: 'success' })
      setTimeout(() => navigate('/admin/products'), 800)
    } catch (err) {
      setToast({ message: err.message, type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  // ── Spec helpers ────────────────────────────────────────────────
  const addSpec    = () => setSpecs(prev => [...prev, { label: '', value: '' }])
  const updateSpec = (i, field, value) =>
    setSpecs(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: value } : s))
  const removeSpec = (i) => setSpecs(prev => prev.filter((_, idx) => idx !== i))

  // ── Tag helpers ─────────────────────────────────────────────────
  const addTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) setTags(prev => [...prev, tagInput.trim()])
      setTagInput('')
    }
  }
  const removeTag = (tag) => setTags(prev => prev.filter(t => t !== tag))

  if (loading) return <LoadingSpinner size={48} text="Loading product…" />

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">{isEdit ? 'Edit Product' : 'New Product'}</h1>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>

        {/* ── Name & Slug ───────────────────────────────────────── */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Name *</label>
            <input
              className="admin-form-input"
              value={form.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              placeholder="Electric Pin"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Slug</label>
            <input
              className="admin-form-input"
              value={form.slug}
              onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
              placeholder="electric-pin"
            />
          </div>
        </div>

        {/* ── Category & Sub-Category ───────────────────────────── */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Category *</label>
            <select
              className="admin-form-select"
              value={form.category}
              onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value, sub_category: '' }))}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Sub-Category *</label>
            <select
              className="admin-form-select"
              value={form.sub_category}
              onChange={(e) => setForm(prev => ({ ...prev, sub_category: e.target.value }))}
              required
            >
              <option value="">— Select sub-category —</option>
              {(CATEGORIES.find(c => c.slug === form.category)?.subcategories || []).map(sub => (
                <option key={sub.slug} value={sub.slug}>{sub.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Sort Order ────────────────────────────────────────── */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Sort Order</label>
            <input
              className="admin-form-input"
              type="number"
              value={form.sort_order}
              onChange={(e) => setForm(prev => ({ ...prev, sort_order: e.target.value }))}
            />
          </div>
        </div>

        {/* ── Description ───────────────────────────────────────── */}
        <div className="admin-form-group">
          <label className="admin-form-label">Description</label>
          <p className="admin-form-hint">Each new line becomes a separate paragraph on the product page.</p>
          <textarea
            className="admin-form-textarea"
            value={form.description}
            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Brass Electrical Pins & Sockets — Established in 1985, Ishita Industries specializes in…"
            rows={6}
          />
        </div>

        {/* ── Gallery Images ────────────────────────────────────── */}
        <div className="admin-form-group">
          <label className="admin-form-label">Gallery Images</label>
          <p className="admin-form-hint">
            The <strong>first image</strong> is used as the main display and listing card image.
            Add up to 4–5 images for the thumbnail gallery shown on the product page.
          </p>

          {galleryImages.length > 0 && (
            <div className="admin-gallery-grid">
              {galleryImages.map((img, i) => (
                <div key={i} className="admin-gallery-item">
                  {i === 0 && <span className="admin-gallery-badge">Main</span>}
                  <img
                    src={img.preview || img.image_url}
                    alt={img.alt_text || `Image ${i + 1}`}
                    className="admin-gallery-thumb"
                  />
                  <input
                    className="admin-form-input admin-gallery-alt"
                    value={img.alt_text}
                    onChange={(e) => updateGalleryAlt(i, e.target.value)}
                    placeholder={`Alt text (e.g. Electric Pin – Side view)`}
                  />
                  <button
                    type="button"
                    className="admin-gallery-remove"
                    onClick={() => removeGalleryImage(i)}
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div
            className="admin-image-upload"
            onClick={() => document.getElementById('gallery-images-input').click()}
          >
            <input
              id="gallery-images-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryFiles}
            />
            <p className="admin-image-upload-label">
              {galleryImages.length === 0 ? 'Click to upload images' : '+ Add more images'}
            </p>
          </div>
        </div>

        {/* ── Active Toggle ─────────────────────────────────────── */}
        <div className="admin-form-group">
          <label className="admin-toggle">
            <input
              type="checkbox"
              checked={form.is_active}
              onChange={(e) => setForm(prev => ({ ...prev, is_active: e.target.checked }))}
            />
            <span className="admin-toggle-track" />
            <span className="admin-toggle-label">
              {form.is_active ? 'Active — visible on public site' : 'Hidden — not visible'}
            </span>
          </label>
        </div>

        {/* ── Specifications ────────────────────────────────────── */}
        <div className="admin-form-group">
          <label className="admin-form-label">Specifications</label>
          <p className="admin-form-hint">
            Shown as cards on the product page. Examples from Electric Pin:
            "Tolerance we Maintain" / "ISO 2768-M" · "Finish We Serve" / "Nickel, Zinc, Tin…"
            · "Size We Handle" / "Circumscribe Diameter 1.5MM to 200MM"
          </p>
          <div className="admin-specs-list">
            {specs.map((spec, i) => (
              <div key={i} className="admin-spec-row">
                <input
                  className="admin-form-input"
                  value={spec.label}
                  onChange={(e) => updateSpec(i, 'label', e.target.value)}
                  placeholder="Label (e.g. Tolerance we Maintain)"
                />
                <input
                  className="admin-form-input"
                  value={spec.value}
                  onChange={(e) => updateSpec(i, 'value', e.target.value)}
                  placeholder="Value (e.g. ISO 2768-M)"
                />
                <button type="button" className="admin-spec-remove" onClick={() => removeSpec(i)}>
                  ✕
                </button>
              </div>
            ))}
          </div>
          <button type="button" className="admin-add-spec-btn" onClick={addSpec}>
            + Add Specification
          </button>
        </div>

        {/* ── Thread Standards (Tags) ───────────────────────────── */}
        <div className="admin-form-group">
          <label className="admin-form-label">Thread Standards</label>
          <p className="admin-form-hint">
            Shown in the "Thread We Serve" section in two columns.
            Type a standard name and press <kbd>Enter</kbd> to add.
            e.g. Metric ISO Thread (M) · BSP · UNC · NPT
          </p>
          <div className="admin-tags-input">
            {tags.map(tag => (
              <span key={tag} className="admin-tag">
                {tag}
                <button type="button" className="admin-tag-remove" onClick={() => removeTag(tag)}>✕</button>
              </span>
            ))}
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
              placeholder="Type thread standard and press Enter…"
            />
          </div>
        </div>

        {/* ── Actions ───────────────────────────────────────────── */}
        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Saving…' : (isEdit ? 'Update Product' : 'Create Product')}
          </button>
          <button type="button" className="admin-btn-secondary" onClick={() => navigate('/admin/products')}>
            Cancel
          </button>
        </div>

      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}

export default AdminProductForm
