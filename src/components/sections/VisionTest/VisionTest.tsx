import { useRef, useState } from 'react'
import { visionSetupSteps } from '../../../data/site'
import { Button } from '../../ui/Button'
import { SetupDiagram } from './SetupDiagram'
import { SnellenChart } from './SnellenChart'
import { TEST_DISTANCE_MM } from './acuity'
import './VisionTest.css'

const DISTANCE_M = TEST_DISTANCE_MM / 1000

type Eye = 'right' | 'left'

export function VisionTest() {
  const panel = useRef<HTMLDivElement>(null)
  const [eye, setEye] = useState<Eye>('right')
  const [result, setResult] = useState<number | null>(null)
  const [floor, setFloor] = useState<number>()

  const covered = eye === 'right' ? 'left' : 'right'

  /*
   * The result is ~450px shorter than the chart, so swapping them collapses
   * the section and everything below it jumps up the page. Measure the panel
   * before the swap and hold it at that height. Returning to the chart is
   * safe to leave locked — the chart is taller, so min-height does nothing.
   */
  const pick = (denominator: number) => {
    setFloor(panel.current?.offsetHeight)
    setResult(denominator)
  }

  const testOtherEye = () => {
    setEye(covered)
    setResult(null)
  }

  return (
    <section className="vision" id="vision" aria-labelledby="vision-title">
      <div className="vision-head">
        <h2 className="vision-title" id="vision-title">
          How clear is your vision?
        </h2>
        <p className="vision-meta">
          Screening tool <i>·</i> 90 seconds <i>·</i> Not a diagnosis
        </p>
      </div>

      <div className="vision-body">
        {/* ------------------------------------------------ instructions */}
        <div className="vision-guide">
          <p className="vision-intro">
            A Snellen chart measures how much detail your eye can resolve at a
            set distance. This one is drawn for two metres about three long
            steps back from your screen. It assumes a standard screen density,
            so treat the result as indicative.
          </p>

          <SetupDiagram />

          <ol className="vision-steps">
            {visionSetupSteps.map((text, i) => (
              <li key={text}>
                <span className="vision-step-index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* --------------------------------------------------- the panel */}
        <div
          className="vision-panel"
          ref={panel}
          style={floor ? { minHeight: `${floor}px` } : undefined}
        >
          <div className="vision-panel-head">
            <span className="vision-stage">
              {result === null ? 'Acuity test' : 'Result'}
            </span>
            <span className="vision-count">{eye} eye</span>
          </div>
          <div className="vision-rule" />

          {result === null ? (
            <div className="vision-stage-body">
              <p className="vision-prompt">
                Stand {DISTANCE_M} m back. Cover your {covered} eye. Click the
                smallest line you can read.
              </p>

              <SnellenChart onPick={pick} />

              <p className="vision-foot">
                Click a line <i>·</i> then repeat for the other eye
              </p>
            </div>
          ) : (
            <div className="vision-stage-body is-centred">
              <p className="vision-result-label">
                Screening estimate <i>·</i> {eye} eye
              </p>
              <p className="vision-result-value">20/{result}</p>
              <p className="vision-note vision-result-copy">
                This is a screening estimate, not a diagnosis. Bring it with you
                a specialist will confirm it with a refraction and a full
                workup.
              </p>
              <div className="vision-actions is-inline">
                <Button href="#book">Book with a specialist</Button>
                <Button variant="ghost" onClick={testOtherEye}>
                  Test the other eye
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
