type CentreMapProps = {
  /** Postal address; Google geocodes this to place the pin. */
  query: string
  name: string
}

const ZOOM = 17

/**
 * Google Maps embed.
 *
 * With a Maps Embed API key in VITE_GOOGLE_MAPS_KEY this uses the official
 * endpoint; without one it falls back to the keyless embed, so the map works
 * in development and the key can be added later without a code change.
 *
 * The address is passed through rather than a latitude/longitude pair —
 * Google's geocoder resolves Indian street addresses far more reliably than
 * coordinates we cannot verify.
 */
function embedUrl(query: string) {
  const key = import.meta.env.VITE_GOOGLE_MAPS_KEY

  if (key) {
    const params = new URLSearchParams({ key, q: query, zoom: String(ZOOM) })
    return `https://www.google.com/maps/embed/v1/place?${params}`
  }

  const params = new URLSearchParams({
    q: query,
    z: String(ZOOM),
    hl: 'en',
    output: 'embed',
  })
  return `https://maps.google.com/maps?${params}`
}

export function CentreMap({ query, name }: CentreMapProps) {
  return (
    <iframe
      className="centre-map"
      src={embedUrl(query)}
      title={`Google map showing the ${name} centre`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
