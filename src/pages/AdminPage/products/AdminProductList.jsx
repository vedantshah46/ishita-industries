import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'
import ConfirmModal from '../../../components/ui/ConfirmModal'
import Toast from '../../../components/ui/Toast'

function AdminProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading]   = useState(true)
  const [toast, setToast]       = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('category')
      .order('sort_order')

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setProducts(data ?? [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const toggleActive = async (product) => {
    const { error } = await supabase
      .from('products')
      .update({ is_active: !product.is_active })
      .eq('id', product.id)

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setToast({ message: `${product.name} ${product.is_active ? 'hidden' : 'shown'}`, type: 'success' })
      fetchProducts()
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', deleteTarget.id)

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setToast({ message: `"${deleteTarget.name}" deleted`, type: 'success' })
      fetchProducts()
    }
    setDeleteTarget(null)
  }

  if (loading) return <LoadingSpinner size={48} text="Loading products…" />

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Products</h1>
        <Link to="/admin/products/new" className="admin-btn-primary">
          + Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">📦</div>
          <p>No products yet. Add your first product.</p>
          <Link to="/admin/products/new" className="admin-btn-primary">
            + Add Product
          </Link>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className="admin-table-image" />
                  ) : (
                    <div className="admin-table-image" style={{ background: '#222' }} />
                  )}
                </td>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td>
                  <span style={{ textTransform: 'capitalize' }}>{p.category}</span>
                </td>
                <td>
                  <span className={`admin-badge ${p.is_active ? 'active' : 'inactive'}`}>
                    {p.is_active ? 'Active' : 'Hidden'}
                  </span>
                </td>
                <td>{p.sort_order}</td>
                <td>
                  <div className="admin-table-actions">
                    <Link to={`/admin/products/${p.id}`} className="admin-btn-secondary">
                      Edit
                    </Link>
                    <button
                      className="admin-btn-secondary"
                      onClick={() => toggleActive(p)}
                    >
                      {p.is_active ? 'Hide' : 'Show'}
                    </button>
                    <button
                      className="admin-btn-danger"
                      onClick={() => setDeleteTarget(p)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {deleteTarget && (
        <ConfirmModal
          title="Delete Product"
          message={`Are you sure you want to delete "${deleteTarget.name}"? This cannot be undone.`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}

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

export default AdminProductList
