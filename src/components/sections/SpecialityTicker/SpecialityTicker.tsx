import { specialities } from '../../../data/site'
import './SpecialityTicker.css'

/** Number of times the list is repeated inside the track. */
const COPIES = 2

export function SpecialityTicker() {
  return (
    <section className="ticker" aria-label="Specialities">
      <div className="ticker-track">
        {/*
          The list is repeated, and the track slides exactly one copy width
          (-50%) before snapping back, so the loop reads as continuous.
          Copies after the first are decorative and hidden from assistive tech.
        */}
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul className="ticker-list" key={copy} aria-hidden={copy > 0}>
            {specialities.map((name) => (
              <li key={name}>
                <span className="ticker-mark" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
