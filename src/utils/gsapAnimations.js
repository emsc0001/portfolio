import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function scrollTo(target) {
  gsap.to(window, {
    duration: 1,
    scrollTo: target,
    ease: 'power2.inOut',
  })
}

/**
 * Creates a magnetic hover effect for elements.
 * @param {string} selector
 */
export function magneticHoverEffect(selector) {
  const elements = document.querySelectorAll(selector)

  elements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = e.clientX - (left + width / 2)
      const y = e.clientY - (top + height / 2)

      gsap.to(el, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out',
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' })
    })
  })
}

/**
 * Creates a smooth fade transition between pages.
 */
export function pageTransition() {
  gsap.to('body', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      window.location.href = event.target.href
    },
  })
}

/**
 * Applies fade-in animation when a new page loads.
 */
export function fadeInPage() {
  gsap.from('body', { opacity: 0, duration: 1 })
}

/**
 * Adds a smooth parallax effect.
 * @param {string} selector
 */
export function smoothParallax(selector) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.to(el, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })
}

/**
 * Glitch effect on text.
 * @param {string} selector
 */
export function glitchEffect(selector) {
  gsap.to(selector, {
    keyframes: [
      { x: -2, skewX: '10deg', duration: 0.1 },
      { x: 2, skewX: '-10deg', duration: 0.1 },
      { x: 0, skewX: '0deg', duration: 0.1 },
    ],
    repeat: -1,
    repeatDelay: 3,
    ease: 'power2.inOut',
  })
}

export function interactiveGridEffect() {
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    const moveX = (clientX / window.innerWidth - 0.5) * 40
    const moveY = (clientY / window.innerHeight - 0.5) * 40

    gsap.to(document.documentElement, {
      '--bg-x': `${moveX}px`,
      '--bg-y': `${moveY}px`,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}
