import { useState } from 'react'
import { locations } from '../../../data/site'
import { Button } from '../../ui/Button'
import { CentreMap } from './CentreMap'
import './Locations.css'

/*
 * Google's documented Maps URLs scheme. Origin is left off so Maps uses the
 * visitor's own location, and on a phone this hands off to the Maps app.
 */
function directionsUrl(address: string) {
  const params = new URLSearchParams({ api: '1', destination: address })
  return `https://www.google.com/maps/dir/?${params}`
}

export function Locations() {
  /*
   * Only used below 900px, where the two cards stack and one is shown at a
   * time. Above that both are visible and the switcher is hidden, which also
   * takes it out of the accessibility tree — hence aria-pressed buttons
   * rather than a tablist, whose semantics would not survive that.
   */
  const [active, setActive] = useState(0)

  return (
    <section className="locations" aria-labelledby="locations-title">
      <div className="locations-head">
        <h2 className="locations-title" id="locations-title">
          Two locations.
          <br />
          One standard of care.
        </h2>
        <p className="locations-meta">
          Every patient gets the same diagnostic workup before a treatment
          decision is made
        </p>
      </div>

      <div className="centre-switch">
        {locations.map((centre, i) => (
          <button
            type="button"
            key={centre.name}
            className={`centre-tab${i === active ? ' is-on' : ''}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {centre.name}
          </button>
        ))}
      </div>

      <ul className="centre-grid">
        {locations.map((centre, i) => (
          <li
            className={`centre${i === active ? ' is-active' : ''}`}
            key={centre.name}
          >
            <div className="centre-head">
              <p className="centre-eyebrow">{centre.eyebrow}</p>
              <p className="centre-coords">PIN {centre.pincode}</p>
            </div>

            <h3 className="centre-name">{centre.name}</h3>

            <CentreMap query={centre.address} name={centre.name} />

            <dl className="centre-facts">
              <div>
                <dt>Address</dt>
                <dd>{centre.address}</dd>
              </div>
              <div>
                <dt>
                  Hours <i>·</i> Phone
                </dt>
                <dd>
                  {centre.hours} <i>·</i>{' '}
                  <a href={`tel:${centre.phone.replace(/\s/g, '')}`}>
                    {centre.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="centre-actions">
              {/* was #centre, which no page answers to */}
              <Button href="#book">Book at this centre</Button>
              <a
                className="centre-directions"
                href={directionsUrl(centre.address)}
                target="_blank"
                rel="noreferrer"
              >
                Directions
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M4 12 12 4M12 4H6.5M12 4v5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">(opens Google Maps)</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
