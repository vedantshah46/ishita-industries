import { useState, useEffect } from 'react'
import { Outlet, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import './AdminLayout.css'

function AdminLayout() {
  const [session, setSession]   = useState(null)
  const [checking, setChecking] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setChecking(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  if (checking) {
    return (
      <div className="admin-loading">
        <LoadingSpinner size={48} text="Checking session…" />
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <h2>Ishita Admin</h2>
        </div>

        <nav className="admin-nav">
          <NavLink to="/admin/products" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <span className="admin-nav-icon">📦</span>
            Products
          </NavLink>
          <NavLink to="/admin/blog" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`}>
            <span className="admin-nav-icon">📝</span>
            Blog Posts
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <p className="admin-user-email">{session.user?.email}</p>
          <button className="admin-logout-btn" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
