/**
 * The brand mark, animated. Ported from the Logo Mark Focus canvas: the lid
 * opens, the two petals counter-rotate in, the lens and iris pull focus, and
 * the cross snaps in last and keeps a slow scan.
 *
 * Paths and fills are the canvas artwork unchanged; only the animation
 * plumbing moved from inline styles into LogoMark.css.
 */
export function LogoMark() {
  return (
    <svg
      className="mark"
      viewBox="0 0 71.62 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="mark-lid">
        <path
          className="mark-petal-a"
          d="M62.8612 45.7206C62.8612 45.7206 70.2087 2.61454 43.7574 0.165545C17.3057 -2.28345 15.8363 23.1878 17.7957 27.1063C19.7552 31.0252 18.2857 51.5985 62.8612 45.7206Z"
          fill="#E2B6D5"
        />
        <path
          className="mark-petal-b"
          d="M8.71547 12.2794C8.71547 12.2794 1.36804 55.3854 27.8193 57.8344C54.2709 60.2839 55.7404 34.8121 53.781 30.8932C51.8215 26.9747 53.291 6.40145 8.71547 12.2794Z"
          fill="#CE8FBF"
        />
        <g>
          <path
            className="mark-lens"
            d="M0 28.4581C0 28.4581 34.0719 -21.7326 71.4097 28.4581C71.4097 28.4581 34.5068 76.5581 0 28.4581Z"
            fill="#4D2264"
          />
          <path
            className="mark-lens-light"
            d="M23.431 8.93612C23.3759 9.16986 23.3153 9.40222 23.2652 9.63734C23.2087 9.90368 23.1582 10.1705 23.1095 10.4382C23.1678 12.6466 22.7642 14.9344 22.8087 17.1597C22.8524 19.3451 23.0439 21.5117 23.267 23.6829C23.363 24.2757 23.4567 24.8686 23.5628 25.4596C23.7699 26.6113 24.0022 27.7593 24.2585 28.9009C24.754 31.1098 25.3395 33.2993 26.026 35.4567C26.3814 36.5758 26.7649 37.6857 27.1791 38.7841C27.2695 39.0239 27.3724 39.2622 27.4716 39.5019C28.2206 41.0706 29.0109 42.6016 29.9546 44.067C31.0751 45.8065 31.6041 47.7618 31.639 49.7259C53.9504 51.4617 71.6122 28.444 71.6122 28.444C53.6533 4.3031 36.4506 3.38605 23.431 8.93612Z"
            fill="#722B89"
          />
          <path
            className="mark-iris"
            d="M57.2111 27.9175C57.2111 39.7565 47.6139 49.3537 35.7749 49.3537C23.9364 49.3537 14.3392 39.7565 14.3392 27.9175C14.3392 16.079 23.9364 6.48184 35.7749 6.48184C47.6139 6.48184 57.2111 16.079 57.2111 27.9175Z"
            fill="#B767A9"
          />
          <path
            className="mark-iris-light"
            d="M35.769 6.48184C47.6076 6.48184 57.2047 16.0785 57.2047 27.9175C57.2047 39.7561 47.6076 49.3532 35.769 49.3532"
            fill="#CE8FBF"
          />
          <g className="mark-cross">
            <path
              className="mark-cross-scan"
              d="M32.6646 24.7752V17.5141H39.3448V24.7752H46.1178V31.5721H39.3912V38.6798H32.6646V31.5891H25.3452V24.8161L32.6646 24.7752Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
