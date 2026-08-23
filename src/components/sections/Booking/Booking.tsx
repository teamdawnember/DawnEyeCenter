import { useId, useMemo, useState } from 'react'
import { bookingReasons, locations, specialists } from '../../../data/site'
import { Button } from '../../ui/Button'
import { formatDay, nextDays } from './days'
import './Booking.css'

export function Booking() {
  const fieldId = useId()
  const [doctor, setDoctor] = useState(0)
  const [centre, setCentre] = useState(0)
  const [reason, setReason] = useState(bookingReasons[0])
  const [sent, setSent] = useState(false)

  // recomputed once per mount; the window only moves at midnight
  const days = useMemo(() => nextDays(), [])
  const [picked, setPicked] = useState(
    () => days.find((entry) => !entry.closed)?.iso ?? days[0].iso,
  )

  const chosen = specialists[doctor]
  const chosenCentre = locations[centre]
  const chosenDay = days.find((entry) => entry.iso === picked) ?? days[0]

  // No booking endpoint yet — this only advances the UI.
  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="booking" aria-labelledby="booking-title" id="book">
      <div className="booking-head">
        <h2 className="booking-title" id="booking-title">
          Your clearest vision starts here.
        </h2>
        <p className="booking-meta">
          Booking <i>·</i> We call back within one working hour
        </p>
      </div>

      <div className="booking-body">
        {/* ------------------------------------------------- chosen doctor */}
        <aside className="booking-aside">
          <div className="booking-portrait">
            <img
              src={chosen.image}
              alt={chosen.name}
              width={700}
              height={760}
            />
          </div>
          {/* one wrapper, so the tablet layout is portrait | identity */}
          <div className="booking-ident">
            <p className="booking-focus">{chosen.focus}</p>
            <h3 className="booking-doctor">{chosen.name}</h3>
            <p className="booking-role">{chosen.role}</p>
            <p className="booking-selection">
              Selected: {formatDay(chosenDay)} <i>·</i> {chosenCentre.name}
            </p>
          </div>
        </aside>

        {/* --------------------------------------------------------- form */}
        <form className="booking-form" onSubmit={submit}>
          <fieldset className="booking-field">
            <legend>
              01 <i>·</i> Specialist
            </legend>
            <div className="booking-options is-doctors">
              {specialists.map((person, i) => (
                <button
                  type="button"
                  key={person.name}
                  className={`booking-chip${i === doctor ? ' is-on' : ''}`}
                  aria-pressed={i === doctor}
                  onClick={() => setDoctor(i)}
                >
                  <span className="booking-chip-name">{person.short}</span>
                  <span className="booking-chip-focus">{person.focus}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="booking-row">
            <fieldset className="booking-field">
              <legend>
                02 <i>·</i> Centre
              </legend>
              <div className="booking-options">
                {locations.map((place, i) => (
                  <button
                    type="button"
                    key={place.name}
                    className={`booking-chip${i === centre ? ' is-on' : ''}`}
                    aria-pressed={i === centre}
                    onClick={() => setCentre(i)}
                  >
                    {place.name}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="booking-field">
              <label className="booking-legend" htmlFor={`${fieldId}-reason`}>
                03 <i>·</i> Reason
              </label>
              <select
                id={`${fieldId}-reason`}
                className="booking-select"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
              >
                {bookingReasons.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <fieldset className="booking-field">
            <legend>
              04 <i>·</i> Date
            </legend>
            <div className="booking-options is-days">
              {days.map((entry) => (
                <button
                  type="button"
                  key={entry.iso}
                  className={`booking-chip${
                    entry.iso === picked ? ' is-on' : ''
                  }`}
                  aria-pressed={entry.iso === picked}
                  disabled={entry.closed}
                  title={entry.closed ? 'Closed on Sundays' : undefined}
                  onClick={() => setPicked(entry.iso)}
                >
                  <span className="booking-chip-day">
                    {entry.day} {entry.month}
                  </span>
                  <span className="booking-chip-focus">
                    {entry.closed ? 'Closed' : entry.weekday}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="booking-inputs">
            <label className="booking-input">
              <span>Full name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label className="booking-input">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91"
                required
                inputMode="tel"
              />
            </label>
            <label className="booking-input">
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" />
            </label>
          </div>

          <div className="booking-foot">
            <p className="booking-note" role="status">
              {sent
                ? `Thanks - we have your request for ${formatDay(chosenDay)} at ${chosenCentre.name}. We will call to confirm within one working hour.`
                : `We will call to confirm within one working hour. ${locations
                    .map((place) => `${place.name} ${place.phone}`)
                    .join(' · ')}.`}
            </p>
            <Button type="submit">Confirm Appointment</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
