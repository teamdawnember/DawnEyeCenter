import { useEffect, useState } from 'react'
import { navLinks } from '../../../data/site'
import { useScrollProgress } from '../../../hooks/useScrollProgress'
import { Button } from '../../ui/Button'
import './SiteHeader.css'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Madurai Eye Center - home">
        <img
          className="brand-logo"
          src="/mec-logo.webp"
          alt="Madurai Eye Center - Precision Eye Care"
          width={434}
          height={58}
        />
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

      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav">
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
    </header>
  )
}
