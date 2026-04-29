import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../../lib/supabase'
import LoadingSpinner from '../../../components/ui/LoadingSpinner'
import ConfirmModal from '../../../components/ui/ConfirmModal'
import Toast from '../../../components/ui/Toast'

function AdminBlogList() {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(true)
  const [toast, setToast]     = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const fetchPosts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setPosts(data ?? [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const togglePublish = async (post) => {
    const updates = {
      is_published: !post.is_published,
      published_at: !post.is_published ? new Date().toISOString() : post.published_at,
    }

    const { error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', post.id)

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setToast({
        message: `"${post.title}" ${post.is_published ? 'unpublished' : 'published'}`,
        type: 'success',
      })
      fetchPosts()
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', deleteTarget.id)

    if (error) {
      setToast({ message: error.message, type: 'error' })
    } else {
      setToast({ message: `"${deleteTarget.title}" deleted`, type: 'success' })
      fetchPosts()
    }
    setDeleteTarget(null)
  }

  const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'

  if (loading) return <LoadingSpinner size={48} text="Loading blog posts…" />

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Blog Posts</h1>
        <Link to="/admin/blog/new" className="admin-btn-primary">
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="admin-empty">
          <div className="admin-empty-icon">📝</div>
          <p>No blog posts yet. Write your first article.</p>
          <Link to="/admin/blog/new" className="admin-btn-primary">
            + New Post
          </Link>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Status</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  {post.cover_url ? (
                    <img src={post.cover_url} alt="" className="admin-table-image" />
                  ) : (
                    <div className="admin-table-image" style={{ background: '#222' }} />
                  )}
                </td>
                <td style={{ fontWeight: 600, maxWidth: 320 }}>{post.title}</td>
                <td>
                  <span className={`admin-badge ${post.is_published ? 'published' : 'draft'}`}>
                    {post.is_published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td>{formatDate(post.published_at)}</td>
                <td>
                  <div className="admin-table-actions">
                    <Link to={`/admin/blog/${post.id}`} className="admin-btn-secondary">
                      Edit
                    </Link>
                    <button
                      className="admin-btn-secondary"
                      onClick={() => togglePublish(post)}
                    >
                      {post.is_published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      className="admin-btn-danger"
                      onClick={() => setDeleteTarget(post)}
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
          title="Delete Blog Post"
          message={`Are you sure you want to delete "${deleteTarget.title}"? This cannot be undone.`}
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

export default AdminBlogList
