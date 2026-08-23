/** Schematic of the screen-on-a-table / two-metres setup. */
export function SetupDiagram() {
  return (
    <div className="setup-diagram">
      <p className="setup-diagram-label">Set-up diagram</p>

      <svg viewBox="0 0 400 110" className="setup-diagram-svg" aria-hidden="true">
        {/* screen on a table */}
        <rect
          x="14"
          y="18"
          width="88"
          height="56"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
        <rect
          x="30"
          y="30"
          width="56"
          height="32"
          fill="var(--purple-soft)"
          stroke="var(--purple)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <rect x="34" y="80" width="48" height="4" fill="var(--ink)" />

        {/* distance */}
        <line
          x1="120"
          y1="52"
          x2="352"
          y2="52"
          stroke="var(--purple)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text x="236" y="44" className="setup-diagram-note">
          2.0 m
        </text>
        <text x="236" y="66" className="setup-diagram-sub">
          ≈ 3 long steps
        </text>

        {/* you */}
        <circle
          cx="372"
          cy="34"
          r="9"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
        <line
          x1="372"
          y1="46"
          x2="372"
          y2="82"
          stroke="var(--ink)"
          strokeWidth="1.5"
        />
      </svg>

      <div className="setup-diagram-captions">
        <span>
          Screen on a table
          <br />
          at eye level
        </span>
        <span>You</span>
      </div>
    </div>
  )
}
