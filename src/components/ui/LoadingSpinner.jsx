import './LoadingSpinner.css'

function LoadingSpinner({ size = 40, text }) {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner" style={{ width: size, height: size }} />
      {text && <p className="loading-spinner-text">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
