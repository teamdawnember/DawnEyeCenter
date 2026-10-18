import { heroStats } from '../../../data/site'
import { Button } from '../../ui/Button'
import { ResponsiveText } from '../../ui/ResponsiveText'
import { EyeVisual } from './EyeVisual'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {/*
            Two spans rather than a <br>: below 820px they stack, above it
            they sit on one line with a separator supplied by CSS. A <br>
            cannot be un-broken without losing the space around it.
          */}
          <span className="eyebrow-text">
            <span className="eyebrow-line">
              <ResponsiveText
                wide={
                  <>
                    Specialist <i>·</i> Eye Care
                  </>
                }
                narrow={
                  <>
                    Specialist Eye Care
                  </>
                }
              />
            </span>
            <span className="eyebrow-line">Two Centres</span>
          </span>
        </p>

        <h1 className="hero-title">
          See
          <br />
          Beyond
          <span className="hero-period" aria-hidden="true" />
        </h1>

        <p className="hero-lede">
          <ResponsiveText
            wide="Dawn Eye Center combines specialist expertise, advanced diagnostics and experienced surgical care across two centres."
            narrow="Specialist expertise, advanced diagnostics and experienced surgical care. Two centres."
          />
        </p>

        <div className="hero-cta">
          <Button href="#book">
            <ResponsiveText wide="Book an Appointment" narrow="Book" />
          </Button>
          <Button variant="ghost" href="#specialists">
            Find Your Specialist
          </Button>
        </div>

        <dl className="hero-stats">
          {heroStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>
                <ResponsiveText
                  wide={stat.label}
                  narrow={stat.short ?? stat.label}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <EyeVisual />
    </section>
  )
}
