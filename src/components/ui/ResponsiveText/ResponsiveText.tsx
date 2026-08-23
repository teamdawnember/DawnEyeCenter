import type { ReactNode } from 'react'
import './ResponsiveText.css'

type ResponsiveTextProps = {
  wide: ReactNode
  narrow: ReactNode
}

/**
 * Renders both copies and lets CSS pick one, so the swap happens at paint
 * time — no layout flash on load and no resize listener.
 */
export function ResponsiveText({ wide, narrow }: ResponsiveTextProps) {
  return (
    <>
      <span className="on-wide">{wide}</span>
      <span className="on-narrow">{narrow}</span>
    </>
  )
}
