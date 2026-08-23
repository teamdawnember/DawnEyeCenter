import { snellenLines } from '../../../data/site'
import { fontSizePx } from './acuity'

type SnellenChartProps = {
  onPick: (denominator: number) => void
}

export function SnellenChart({ onPick }: SnellenChartProps) {
  return (
    <div className="chart">
      {snellenLines.map((line) => (
        <button
          type="button"
          className="chart-line"
          key={line.denominator}
          onClick={() => onPick(line.denominator)}
        >
          <span className="chart-acuity">20/{line.denominator}</span>
          <span
            className="chart-letters"
            style={{ fontSize: `${fontSizePx(line.denominator)}px` }}
          >
            {line.letters}
          </span>
        </button>
      ))}
    </div>
  )
}
