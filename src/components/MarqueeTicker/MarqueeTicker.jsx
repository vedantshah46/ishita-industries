import './MarqueeTicker.css'

/**
 * MarqueeTicker
 * -------------
 * Infinite horizontally-scrolling text strip.
 * No JavaScript — pure CSS animation for zero JS overhead.
 *
 * Two identical copies of `items` are rendered side-by-side.
 * The CSS animation moves them left by exactly 50% (= one copy),
 * then jumps back to 0 — creating a seamless infinite loop.
 *
 * Usage:
 *   <MarqueeTicker
 *     items={['PRECISION ENGINEERING', 'BRASS MANUFACTURING', 'ISO CERTIFIED']}
 *     speed={30}        // seconds for one full loop (higher = slower)
 *     direction="left"  // 'left' | 'right'
 *     variant="dark"    // 'light' | 'dark'
 *   />
 *
 * @param {string[]} items     — array of text strings to display
 * @param {number}   speed     — animation duration in seconds
 * @param {'left'|'right'} direction
 * @param {'light'|'dark'}  variant  — colour scheme
 */
function MarqueeTicker({
  items = [],
  speed = 28,
  direction = 'left',
  variant = 'light',
}) {
  const animStyle = {
    animationDuration: `${speed}s`,
    animationDirection: direction === 'right' ? 'reverse' : 'normal',
  }

  return (
    <div
      className={`marquee-strip marquee-strip--${variant}`}
      aria-hidden="true"  /* purely decorative */
    >
      <div className="marquee-track" style={animStyle}>
        {/* Render items twice — second copy creates the seamless loop */}
        {[0, 1].map((copyIndex) => (
          <span key={copyIndex} className="marquee-copy">
            {items.map((item, i) => (
              <span key={i} className="marquee-item">
                {item}
                <span className="marquee-sep" aria-hidden="true">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeTicker
