/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Google Maps Embed API key. Optional — without it the locations section
   * falls back to the keyless embed. See CentreMap.tsx.
   */
  readonly VITE_GOOGLE_MAPS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
