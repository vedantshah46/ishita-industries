import './LogoLoader.css'

function LogoLoader({ size = 96, minHeight = '420px' }) {
  return (
    <div className="ll-wrap" style={{ minHeight }}>
      <img
        src="/ishita-fevicon.png"
        alt=""
        className="ll-logo"
        style={{ width: size, height: size }}
        draggable={false}
      />
      <div className="ll-bar-track">
        <div className="ll-bar-fill" />
      </div>
    </div>
  )
}

export default LogoLoader
