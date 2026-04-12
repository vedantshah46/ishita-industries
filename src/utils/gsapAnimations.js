/**
 * gsapAnimations.js  ·  src/utils/gsapAnimations.js
 * ====================================================
 * Centralised GSAP animation helpers used across sections.
 *
 * HOW TO ADD A NEW ANIMATION:
 *   1. Write a function here that takes a DOM element + options.
 *   2. Each function should return a cleanup callback so callers
 *      can tidy up on component unmount.
 *   3. Use it via the useCurtainReveal hook or directly in a
 *      component's useEffect with gsap.context().
 *
 * ALL functions must handle `null` elements gracefully (React refs
 * can be null on the first render cycle in StrictMode).
 * ====================================================
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


// ── Word-split helpers ────────────────────────────────────────────

/**
 * splitToWords
 * Split an element's text into individually-animatable word spans.
 *
 * DOM output (one span pair per word):
 *   <span class="anim-clip">        ← overflow: hidden container
 *     <span class="anim-word">PRECISION</span>   ← animatable inner
 *   </span>
 *
 * The outer .anim-clip clips the inner span during the translateY
 * animation, creating the classic "curtain rising" text reveal.
 *
 * Returns the inner `.anim-word` elements ready for gsap.to().
 * Safe to call twice — returns existing spans if already split.
 */
export function splitToWords(element) {
  if (!element) return []
  if (element.dataset.wordSplit === 'true') {
    return [...element.querySelectorAll('.anim-word')]
  }

  const text = element.innerText.trim()
  element.dataset.wordSplit = 'true'
  element.dataset.originalText = text

  element.innerHTML = text
    .split(' ')
    .map(
      (word) =>
        `<span class="anim-clip"><span class="anim-word">${word}</span></span>`
    )
    .join(' ')

  return [...element.querySelectorAll('.anim-word')]
}

/**
 * restoreWords
 * Undo splitToWords — puts the original text back.
 * Called in cleanup functions so StrictMode double-mount works cleanly.
 */
export function restoreWords(element) {
  if (!element || element.dataset.wordSplit !== 'true') return
  const original = element.dataset.originalText ?? element.innerText
  element.innerHTML = original
  delete element.dataset.wordSplit
  delete element.dataset.originalText
}


// ── Core animation functions ──────────────────────────────────────

/**
 * curtainReveal
 * -------------
 * Splits a heading into words and reveals them by "rising" up from
 * behind an overflow:hidden clip — one word after another.
 *
 * This is the signature effect on sites like Marco De Luca,
 * Flaire, Amici, and Sarah Louise Kinsella from the reference list.
 *
 * Returns a cleanup function — always call it on component unmount.
 *
 * @param {HTMLElement} element
 * @param {object}      opts
 * @param {number}      [opts.duration=0.9]
 * @param {number}      [opts.stagger=0.07]
 * @param {string}      [opts.ease='power4.out']
 * @param {number}      [opts.delay=0]
 * @param {string}      [opts.start='top 88%'] — ScrollTrigger start
 */
export function curtainReveal(element, opts = {}) {
  if (!element) return () => {}

  const words = splitToWords(element)
  gsap.set(words, { yPercent: 110 })

  const trigger = ScrollTrigger.create({
    trigger: element,
    start: opts.start ?? 'top 88%',
    onEnter: () => {
      gsap.to(words, {
        yPercent: 0,
        duration: opts.duration ?? 0.9,
        stagger:  opts.stagger  ?? 0.07,
        ease:     opts.ease     ?? 'power4.out',
        delay:    opts.delay    ?? 0,
      })
    },
    once: true,
  })

  return () => {
    trigger.kill()
    restoreWords(element)
  }
}


/**
 * parallaxOnScroll
 * ----------------
 * Moves `target` vertically as the user scrolls past `trigger`.
 * Positive `yEnd` → element lags behind (background depth).
 * Negative `yEnd` → element moves faster (foreground pop).
 *
 * The `scrub` value controls how tightly the motion follows scroll
 * (1 = 1s lag, 0 = instant, 2 = very smooth).
 *
 * @param {HTMLElement} trigger  — element that defines the scroll range
 * @param {HTMLElement} target   — element being parallaxed (can be same as trigger)
 * @param {number}      [yEnd=70]
 * @param {number}      [scrub=1.2]
 */
export function parallaxOnScroll(trigger, target, yEnd = 70, scrub = 1.2) {
  if (!trigger || !target) return () => {}

  const tween = gsap.to(target, {
    y: yEnd,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end:   'bottom top',
      scrub,
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    gsap.set(target, { clearProps: 'y' })
  }
}


/**
 * clipRevealFromLeft
 * ------------------
 * Reveals an element by animating clip-path from fully masked
 * (right side hidden) to fully visible — left-to-right curtain.
 *
 * Used on images and image containers. Inspiration: Marie Weber,
 * Roman Salakhov, Studio Pic from the reference list.
 *
 * @param {HTMLElement} element
 * @param {object}      opts
 * @param {number}      [opts.duration=1.2]
 * @param {string}      [opts.ease='power3.inOut']
 * @param {string}      [opts.start='top 82%']
 * @param {number}      [opts.delay=0]
 */
export function clipRevealFromLeft(element, opts = {}) {
  if (!element) return () => {}

  gsap.set(element, { clipPath: 'inset(0 100% 0 0)' })

  const tween = gsap.to(element, {
    clipPath: 'inset(0 0% 0 0)',
    duration: opts.duration ?? 1.2,
    ease:     opts.ease     ?? 'power3.inOut',
    delay:    opts.delay    ?? 0,
    scrollTrigger: {
      trigger: element,
      start:   opts.start ?? 'top 82%',
      once: true,
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    gsap.set(element, { clearProps: 'clipPath' })
  }
}


/**
 * staggerFadeUp
 * -------------
 * Fades + translates an array of elements up with a stagger.
 * More dramatic than CSS transitions: uses scale + y + opacity.
 *
 * @param {HTMLElement[]} elements
 * @param {HTMLElement}   trigger    — scroll trigger reference element
 * @param {object}        opts
 */
export function staggerFadeUp(elements, trigger, opts = {}) {
  if (!elements?.length) return () => {}

  gsap.set(elements, { y: 50, scale: 0.96, opacity: 0 })

  const tween = gsap.to(elements, {
    y:        0,
    scale:    1,
    opacity:  1,
    duration: opts.duration ?? 0.8,
    stagger:  opts.stagger  ?? 0.1,
    ease:     'power3.out',
    scrollTrigger: {
      trigger: trigger ?? elements[0],
      start:   'top 85%',
      once: true,
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    gsap.set(elements, { clearProps: 'all' })
  }
}
