import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'
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

  const [loading, setLoading]   = useState(isEdit)
  const [saving, setSaving]     = useState(false)
  const [toast, setToast]       = useState(null)
  const [imageFile, setImageFile] = useState(null)

  const [form, setForm] = useState({
    name: '',
    slug: '',
    category: 'precision',
    description: '',
    image_url: '',
    is_active: true,
    sort_order: 0,
  })

  const [specs, setSpecs] = useState([])
  const [tags, setTags]   = useState([])
  const [tagInput, setTagInput] = useState('')

  // Load existing product for editing
  useEffect(() => {
    if (!isEdit) return

    const loadProduct = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*, product_specs(*), product_tags(*)')
        .eq('id', id)
        .single()

      if (error || !data) {
        setToast({ message: 'Product not found', type: 'error' })
        setLoading(false)
        return
      }

      setForm({
        name: data.name || '',
        slug: data.slug || '',
        category: data.category || 'precision',
        description: data.description || '',
        image_url: data.image_url || '',
        is_active: data.is_active ?? true,
        sort_order: data.sort_order ?? 0,
      })
      setSpecs(
        (data.product_specs || [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(s => ({ label: s.label, value: s.value }))
      )
      setTags((data.product_tags || []).map(t => t.tag))
      setLoading(false)
    }

    loadProduct()
  }, [id, isEdit])

  // Auto-generate slug from name
  const handleNameChange = (name) => {
    setForm(prev => ({
      ...prev,
      name,
      slug: isEdit ? prev.slug : slugify(name),
    }))
  }

  // Upload image to Supabase Storage
  const uploadImage = async (file) => {
    const ext = file.name.split('.').pop()
    const path = `products/${crypto.randomUUID()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(path, file)

    if (uploadError) throw uploadError

    const { data } = supabase.storage
      .from('product-images')
      .getPublicUrl(path)

    return data.publicUrl
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)

    try {
      let imageUrl = form.image_url

      // Upload new image if selected
      if (imageFile) {
        imageUrl = await uploadImage(imageFile)
      }

      const productData = {
        name: form.name,
        slug: form.slug,
        category: form.category,
        description: form.description,
        image_url: imageUrl,
        is_active: form.is_active,
        sort_order: parseInt(form.sort_order) || 0,
        updated_at: new Date().toISOString(),
      }

      let productId = id

      if (isEdit) {
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', id)

        if (error) throw error
      } else {
        const { data, error } = await supabase
          .from('products')
          .insert(productData)
          .select('id')
          .single()

        if (error) throw error
        productId = data.id
      }

      // Save specs — delete existing and re-insert
      await supabase.from('product_specs').delete().eq('product_id', productId)
      if (specs.length > 0) {
        const specRows = specs.map((s, i) => ({
          product_id: productId,
          label: s.label,
          value: s.value,
          sort_order: i,
        }))
        const { error: specError } = await supabase.from('product_specs').insert(specRows)
        if (specError) throw specError
      }

      // Save tags — delete existing and re-insert
      await supabase.from('product_tags').delete().eq('product_id', productId)
      if (tags.length > 0) {
        const tagRows = tags.map(tag => ({ product_id: productId, tag }))
        const { error: tagError } = await supabase.from('product_tags').insert(tagRows)
        if (tagError) throw tagError
      }

      setToast({ message: isEdit ? 'Product updated!' : 'Product created!', type: 'success' })
      setTimeout(() => navigate('/admin/products'), 800)
    } catch (err) {
      setToast({ message: err.message, type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  // Spec management
  const addSpec = () => setSpecs(prev => [...prev, { label: '', value: '' }])
  const updateSpec = (i, field, value) => {
    setSpecs(prev => prev.map((s, idx) => idx === i ? { ...s, [field]: value } : s))
  }
  const removeSpec = (i) => setSpecs(prev => prev.filter((_, idx) => idx !== i))

  // Tag management
  const addTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags(prev => [...prev, tagInput.trim()])
      }
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
        {/* Name & Slug */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Name *</label>
            <input
              className="admin-form-input"
              value={form.name}
              onChange={(e) => handleNameChange(e.target.value)}
              required
              placeholder="Brass Turned Component"
            />
          </div>
          <div className="admin-form-group">
            <label className="admin-form-label">Slug</label>
            <input
              className="admin-form-input"
              value={form.slug}
              onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
              placeholder="brass-turned-component"
            />
          </div>
        </div>

        {/* Category & Sort Order */}
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Category *</label>
            <select
              className="admin-form-select"
              value={form.category}
              onChange={(e) => setForm(prev => ({ ...prev, category: e.target.value }))}
            >
              <option value="precision">Precision Machining</option>
              <option value="industrial">Industrial Components</option>
              <option value="extrusion">Extrusion Products</option>
            </select>
          </div>
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

        {/* Description */}
        <div className="admin-form-group">
          <label className="admin-form-label">Description</label>
          <textarea
            className="admin-form-textarea"
            value={form.description}
            onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Detailed product description…"
          />
        </div>

        {/* Main Image */}
        <div className="admin-form-group">
          <label className="admin-form-label">Main Image</label>
          <div className="admin-image-upload" onClick={() => document.getElementById('product-image-input').click()}>
            <input
              id="product-image-input"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            <p className="admin-image-upload-label">
              {imageFile ? imageFile.name : 'Click to upload an image'}
            </p>
          </div>
          {(form.image_url || imageFile) && (
            <div className="admin-image-preview" style={{ marginTop: 12 }}>
              <div className="admin-image-preview-item">
                <img
                  src={imageFile ? URL.createObjectURL(imageFile) : form.image_url}
                  alt="Preview"
                />
              </div>
            </div>
          )}
        </div>

        {/* Active Toggle */}
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

        {/* Specifications */}
        <div className="admin-form-group">
          <label className="admin-form-label">Specifications</label>
          <div className="admin-specs-list">
            {specs.map((spec, i) => (
              <div key={i} className="admin-spec-row">
                <input
                  className="admin-form-input"
                  value={spec.label}
                  onChange={(e) => updateSpec(i, 'label', e.target.value)}
                  placeholder="Label (e.g. Tolerance)"
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

        {/* Tags */}
        <div className="admin-form-group">
          <label className="admin-form-label">Tags / Thread Standards</label>
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
              placeholder="Type and press Enter…"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="admin-form-actions">
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Saving…' : (isEdit ? 'Update Product' : 'Create Product')}
          </button>
          <button type="button" className="admin-btn-secondary" onClick={() => navigate('/admin/products')}>
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

export default AdminProductForm
