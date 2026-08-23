import { SiteLoader } from './components/layout/SiteLoader'
import { SiteHeader } from './components/layout/SiteHeader'
import { Hero } from './components/sections/Hero'
import { SpecialityTicker } from './components/sections/SpecialityTicker'
import { SymptomGrid } from './components/sections/SymptomGrid'
import { Specialists } from './components/sections/Specialists'
import { Journal } from './components/sections/Journal'
import { Figures } from './components/sections/Figures'
import { VisionTest } from './components/sections/VisionTest'
import { Locations } from './components/sections/Locations'
import { Booking } from './components/sections/Booking'
import { Testimonials } from './components/sections/Testimonials'
import { SiteFooter } from './components/layout/SiteFooter'

export default function App() {
  return (
    <>
      <SiteLoader />
      <SiteHeader />
      <main>
        <Hero />
        <SpecialityTicker />
        <SymptomGrid />
        <Specialists />
        <Journal />
        <Figures />
        <VisionTest />
        <Locations />
        <Booking />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  )
}
