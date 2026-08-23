import { specialists } from '../../../data/site'
import './Specialists.css'

export function Specialists() {
  return (
    <section
      className="specialists"
      id="specialists"
      aria-labelledby="specialists-title"
    >
      <p className="specialists-eyebrow">
        Highly Skilled <i>·</i> Professional <i>·</i> Experienced
      </p>
      <h2 className="specialists-title" id="specialists-title">
        Specialists behind clearer vision.
      </h2>

      <ul className="specialist-grid">
        {specialists.map((doctor) => (
          <li className="specialist" key={doctor.name}>
            <div className="specialist-portrait">
              <span className="specialist-focus">{doctor.focus}</span>
              <img
                src={doctor.image}
                alt={doctor.name}
                width={700}
                height={760}
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* one grid, so the Profile pill can drop below the role
                when the column is too narrow to sit beside the name */}
            <div className="specialist-caption">
              <h3 className="specialist-name">{doctor.name}</h3>
              <p className="specialist-role">{doctor.role}</p>
              <a className="specialist-profile" href="#">
                Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
