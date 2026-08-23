import { useEyeTracking } from '../../../hooks/useEyeTracking'
import './EyeVisual.css'

/**
 * The decorative eye. Layer radii, as a fraction of the stage width:
 *
 *   eye disc     0.359   (masked to drop the photo's dark limbal band)
 *   dashed ring  0.400   1.12x eye
 *   halo edge    0.438   1.22x eye
 *   dotted ring  0.480   1.34x eye
 *
 * Everything stays under 0.48 so the dotted ring closes rather than running
 * past the stage box and getting cut by the hero's overflow.
 */
export function EyeVisual() {
  const stageRef = useEyeTracking<HTMLDivElement>()

  return (
    <div className="hero-visual" ref={stageRef} aria-hidden="true">
      {/* drawn over the iris, so its inner edge stays sharp */}
      <div className="limbal" />
      <div className="halo" />
      <div className="ring ring-outer" />
      <div className="ring ring-orbit">
        <span className="ring-node" />
      </div>

      <div className="iris-stage">
        <img className="iris" src="/iris-violet.webp" alt="" />
      </div>

      <span className="scan">
        <span className="scanline" />
      </span>
      <span className="crosshair" />

      <span className="hud hud-left">Iris ø 11.0 mm</span>
      <span className="hud hud-right">12.0 mm scan</span>
    </div>
  )
}
