/**
 * Snellen sizing.
 *
 * A 20/20 optotype subtends 5 arcminutes at the test distance, so its
 * physical height is distance * tan(5'). Every other line scales linearly
 * with its denominator: a 20/200 letter is ten times a 20/20 letter.
 */

export const TEST_DISTANCE_MM = 2000

const ARCMIN_20_20 = 5

/** Height of a 20/20 optotype at the test distance, in millimetres. */
export const MM_PER_20_20 =
  TEST_DISTANCE_MM * Math.tan(((ARCMIN_20_20 / 60) * Math.PI) / 180)

/**
 * The CSS reference pixel is defined as 1/96 inch, so this is the nominal
 * conversion. A browser cannot report a screen's true pixel density, and the
 * chart is sized from this figure rather than measured — which is why the
 * result is a screening estimate and not a measurement.
 */
export const NOMINAL_PX_PER_MM = 96 / 25.4

/**
 * Cap height of the fallback stack as a fraction of font-size. Optotype
 * height is a cap height, so the font-size has to be scaled up by this.
 */
const CAP_HEIGHT_RATIO = 0.72

export function letterHeightMm(denominator: number) {
  return (denominator / 20) * MM_PER_20_20
}

export function fontSizePx(denominator: number) {
  return (letterHeightMm(denominator) * NOMINAL_PX_PER_MM) / CAP_HEIGHT_RATIO
}
