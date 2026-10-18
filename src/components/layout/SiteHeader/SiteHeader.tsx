import { useEffect, useRef, useState } from 'react'
import { navLinks } from '../../../data/site'
import { useScrollProgress } from '../../../hooks/useScrollProgress'
import { Button } from '../../ui/Button'
import './SiteHeader.css'

export function SiteHeader() {
  const header = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [panelTop, setPanelTop] = useState(0)
  const progress = useScrollProgress()

  /*
   * Where the panel starts. Measured rather than assumed: the header is
   * sticky but the credential strip above it scrolls away, so the header's
   * bottom edge is --header-h only once the page has moved. Body scroll is
   * locked while the menu is open, so one measurement holds.
   */
  useEffect(() => {
    if (!menuOpen) return

    const measure = () => {
      const box = header.current?.getBoundingClientRect()
      if (box) setPanelTop(box.bottom)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)

    // the panel covers the screen, so the page behind must not scroll with it
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [menuOpen])

  return (
    <>
      <header className="site-header" ref={header}>
      <a className="brand" href="/" aria-label="Dawn Eye Center - home">
        <img className="brand-mark" src="/dawn-mark.png" alt="" width={480} height={300} />
        <span className="brand-logo">Dawn Eye Center</span>
      </a>

      <nav className="site-nav">
        {navLinks.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <Button variant="outline" size="sm" href="#vision">
          Online Eye Check
        </Button>
        <Button size="sm" href="#book">
          Book Appointment
        </Button>
      </div>

      <button
        type="button"
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {/*
        Rendered only while open, so a closed menu never leaves focusable
        links behind an invisible panel.
      */}
      {/*
        Reading progress, sitting on the header's own bottom border. Driven by
        scaleX rather than width so it stays on the compositor.
      */}
      <div
        className="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      </header>

      {/*
        Outside <header> on purpose: the header carries backdrop-filter,
        which makes it the containing block for position:fixed descendants.
        Nested, this panel's insets resolved against the 64px header box and
        it collapsed to nothing.
      */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          style={{ top: `${panelTop}px` }}
        >
          {navLinks.map((link) => (
            <a key={link} href="#" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <div className="mobile-nav-cta">
            <Button href="#book">Book Appointment</Button>
            <Button variant="ghost" href="#vision">
              Online Eye Check
            </Button>
          </div>
        </nav>
      )}
    </>
  )
}
