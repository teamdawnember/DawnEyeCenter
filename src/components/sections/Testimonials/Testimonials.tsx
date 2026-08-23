import { testimonials } from '../../../data/site'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="voices" aria-labelledby="voices-title">
      <div className="voices-head">
        <h2 className="voices-title" id="voices-title">
          In their words.
        </h2>
        <p className="voices-meta">
          Patient stories <i>·</i> Google reviews
        </p>
      </div>

      <ul className="voice-grid">
        {testimonials.map((item) => (
          <li className="voice" key={item.name}>
            <figure>
              <span className="voice-mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="voice-quote">{item.quote}</blockquote>
              <figcaption className="voice-by">
                <span className="voice-name">{item.name}</span>
                <span className="voice-context">{item.context}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
