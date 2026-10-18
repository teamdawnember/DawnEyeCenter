import { figures } from '../../../data/site'
import './Figures.css'

export function Figures() {
  return (
    <section className="figures" aria-labelledby="figures-title">
      <div className="figures-panel">
        <div className="figures-head">
          <h2 className="figures-title" id="figures-title">
            Seeing what matters.
          </h2>
          <p className="figures-intro">
            A specialist eye centre built around three super specialists and a
            full diagnostic suite.
          </p>
        </div>

        <dl className="figures-list">
          {figures.map((figure) => (
            <div className="figure" key={figure.label}>
              <dt>{figure.value}</dt>
              <dd>{figure.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
