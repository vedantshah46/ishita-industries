import { useEffect } from 'react'

/**
 * useScrollAnimation
 * -------------------
 * Attaches an IntersectionObserver to a list of element refs.
 * Adds the CSS class `is-visible` to each element the first time
 * it scrolls into the viewport — triggering any CSS transition or
 * animation defined on that element in its own CSS file.
 *
 * This hook is the single source of truth for scroll-reveal logic.
 * Every section that needs scroll animations should use this instead
 * of writing its own IntersectionObserver.
 *
 * --- Usage ---
 *   const animRefs = useRef([])
 *   useScrollAnimation(animRefs)
 *
 *   // Attach to elements:
 *   ref={(el) => (animRefs.current[0] = el)}
 *   ref={(el) => (animRefs.current[index] = el)}
 *
 * --- CSS side ---
 *   .my-element { opacity: 0; transform: translateY(30px); transition: ... }
 *   .my-element.is-visible { opacity: 1; transform: translateY(0); }
 *
 * @param {React.MutableRefObject<HTMLElement[]>} refsArray
 * @param {object} [options]
 * @param {number} [options.threshold=0.1]             - 0–1: how much of the element must be visible
 * @param {string} [options.rootMargin='0px 0px -60px 0px'] - shrinks the viewport trigger zone from the bottom
 */
function useScrollAnimation(
  refsArray,
  // Pass a primitive (e.g. list length) to re-observe when async items arrive.
  // Pass an options object for threshold/rootMargin; omit for defaults.
  triggerOrOptions = {},
) {
  const isOptions = typeof triggerOrOptions === 'object' && triggerOrOptions !== null
  const trigger   = isOptions ? undefined : triggerOrOptions
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px' } =
    isOptions ? triggerOrOptions : {}

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    refsArray.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [trigger]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useScrollAnimation
