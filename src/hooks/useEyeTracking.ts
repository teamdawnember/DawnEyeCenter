import { useEffect, useRef } from 'react'

/** How far the eye has already turned when it reaches full deflection. */
const REACH_FLOOR = 420
/** Fraction of the remaining distance closed each frame — lower is heavier. */
const EASING = 0.075
/** Below this delta the eye is close enough; park the animation loop. */
const SETTLED = 0.0004

const clamp = (n: number) => (n < -1 ? -1 : n > 1 ? 1 : n)

/**
 * Turns an element into a pointer-tracking stage: it publishes the cursor's
 * position as `--px` / `--py` custom properties in the range -1…1, eased
 * toward the target so the eye glides rather than snaps.
 *
 * Skipped for coarse pointers and for readers who prefer reduced motion.
 */
export function useEyeTracking<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia('(pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || still.matches) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let frame = 0

    const tick = () => {
      currentX += (targetX - currentX) * EASING
      currentY += (targetY - currentY) * EASING
      el.style.setProperty('--px', currentX.toFixed(4))
      el.style.setProperty('--py', currentY.toFixed(4))

      const moving =
        Math.abs(targetX - currentX) > SETTLED ||
        Math.abs(targetY - currentY) > SETTLED
      frame = moving ? requestAnimationFrame(tick) : 0
    }

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      const box = el.getBoundingClientRect()
      const reach = Math.max(box.width * 0.85, REACH_FLOOR)
      targetX = clamp((event.clientX - (box.left + box.width / 2)) / reach)
      targetY = clamp((event.clientY - (box.top + box.height / 2)) / reach)
      wake()
    }

    const recenter = () => {
      targetX = 0
      targetY = 0
      wake()
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', recenter)
    window.addEventListener('blur', recenter)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', recenter)
      window.removeEventListener('blur', recenter)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
