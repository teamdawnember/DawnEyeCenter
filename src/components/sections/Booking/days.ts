export type BookingDay = {
  /** Local-date ISO key, e.g. 2026-08-23. */
  iso: string
  weekday: string
  day: string
  month: string
  /** Sundays: shown for context, not bookable. */
  closed: boolean
}

export const DAY_COUNT = 5

/** Built from local parts — toISOString() converts to UTC and can shift the date. */
function isoKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/**
 * A rolling window starting today, so the strip advances by itself: on the
 * 23rd it offers 23–27, on the 24th it offers 24–28. Hours are Mon–Sat, so
 * any Sunday inside the window is rendered but disabled rather than skipped —
 * that keeps the run of dates unbroken and shows visitors why it is missing.
 */
export function nextDays(count = DAY_COUNT, from = new Date()): BookingDay[] {
  return Array.from({ length: count }, (_, offset) => {
    const date = new Date(from)
    date.setHours(0, 0, 0, 0)
    date.setDate(date.getDate() + offset)

    return {
      iso: isoKey(date),
      weekday: date.toLocaleDateString('en-GB', { weekday: 'short' }),
      day: String(date.getDate()).padStart(2, '0'),
      month: date.toLocaleDateString('en-GB', { month: 'short' }),
      closed: date.getDay() === 0,
    }
  })
}

export function formatDay(day: BookingDay) {
  return `${day.weekday} ${day.day} ${day.month}`
}
