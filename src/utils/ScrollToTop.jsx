import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component resets the scroll position to the top
 * whenever the route (pathname) changes.
 * 
 * It is compatible with Lenis smooth scrolling by using the
 * global window.__lenis instance if available.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll to top on route change
    if (window.__lenis) {
      // Use Lenis's scrollTo method for a clean reset
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native window.scrollTo
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
