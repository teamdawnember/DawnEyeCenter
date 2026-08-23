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
          <ResponsiveText
            wide={
              <>
                30+ Years <i>·</i> NABH Accredited <i>·</i> Coimbatore
              </>
            }
            narrow={
              <>
                30+ Years <i>·</i> NABH <i>·</i> Coimbatore
              </>
            }
          />
        </p>

        <h1 className="hero-title">
          See
          <br />
          Beyond
          <span className="hero-period" aria-hidden="true" />
        </h1>

        <p className="hero-lede">
          <ResponsiveText
            wide="Madurai Eye Center combines specialist expertise, advanced diagnostics and three decades of surgical experience across two centres in Coimbatore."
            narrow="Specialist expertise, advanced diagnostics and three decades of surgery. Two centres in Coimbatore."
          />
        </p>

        <div className="hero-cta">
          <Button href="#book">
            <ResponsiveText wide="Book an Appointment" narrow="Book" />
          </Button>
          <Button variant="ghost" href="#specialists">
            <ResponsiveText wide="Find Your Specialist" narrow="Eye check" />
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
