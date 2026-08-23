import {
  footerHours,
  footerTagline,
  legalLinks,
  locations,
  socialLinks,
} from '../../../data/site'
import './SiteFooter.css'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          {/*
            The lockup is dark purple artwork, so it needs a light plate to
            sit on rather than being placed straight onto the dark panel.
          */}
          <span className="footer-logo">
            <img
              src="/mec-logo.webp"
              alt="Madurai Eye Center - Precision Eye Care"
              width={434}
              height={58}
            />
          </span>
          <p className="footer-tagline">{footerTagline}</p>
        </div>

        {locations.map((centre) => (
          <div className="footer-col" key={centre.name}>
            <h2>{centre.name}</h2>
            <p>{centre.address}</p>
            <p>
              <a href={`tel:${centre.phone.replace(/\s/g, '')}`}>
                {centre.phone}
              </a>
            </p>
          </div>
        ))}

        <div className="footer-col">
          <h2>Hours</h2>
          {footerHours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className="footer-social">
        <span className="footer-social-label">Follow</span>
        <ul>
          {socialLinks.map((name) => (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-base">
        <p>© {year} Madurai Eye Center</p>
        <ul>
          {legalLinks.map((name) => (
            <li key={name}>
              <a href="#">{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
