import { useEffect, useState } from 'react'
import { LogoMark } from './LogoMark'
import './SiteLoader.css'

/** How long the curtain holds before it starts leaving. */
const HOLD_MS = 3000
/** Matches the fade in SiteLoader.css. */
const FADE_MS = 450
/** Reduced motion: show the mark, don't sit on it. */
const REDUCED_HOLD_MS = 700

export function SiteLoader() {
  const [leaving, setLeaving] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hold = reduced ? REDUCED_HOLD_MS : HOLD_MS

    const out = window.setTimeout(() => setLeaving(true), hold)
    const off = window.setTimeout(() => setDone(true), hold + FADE_MS)

    // the page behind must not scroll while the curtain is up
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(out)
      window.clearTimeout(off)
      document.body.style.overflow = overflow
    }
  }, [])

  useEffect(() => {
    if (done) document.body.style.overflow = ''
  }, [done])

  if (done) return null

  return (
    <div
      className={`loader${leaving ? ' is-leaving' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Madurai Eye Center"
    >
      <div className="loader-lockup">
        <LogoMark />
        <div className="loader-word">
          <img src="/mec-wordmark.webp" alt="" width={347} height={58} />
          <span className="loader-rule" />
        </div>
      </div>
    </div>
  )
}
