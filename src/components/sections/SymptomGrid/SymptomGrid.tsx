import { symptomCards } from '../../../data/site'
import './SymptomGrid.css'

export function SymptomGrid() {
  return (
    <section className="symptoms" aria-labelledby="symptoms-title">
      <div className="symptoms-head">
        <h2 className="symptoms-title" id="symptoms-title">
          What brings you here?
        </h2>
        <p className="symptoms-meta">
          {symptomCards.length.toString().padStart(2, '0')} Starting Points{' '}
          <i>·</i> Symptom Led
        </p>
      </div>

      <ul className="symptom-grid">
        {symptomCards.map((card) => (
          <li className="symptom-card" key={card.index}>
            <a className="symptom-link" href="#">
              <p className="symptom-eyebrow">
                <span className="symptom-index">{card.index}</span>
                <i>·</i>
                {card.category}
              </p>

              <h3 className="symptom-title">{card.title}</h3>
              <p className="symptom-body">{card.body}</p>

              <span className="symptom-cta">{card.cta}</span>

              <img
                className="symptom-image"
                src={card.image}
                alt=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
