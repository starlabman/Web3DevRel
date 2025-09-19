declare module 'three' {
  // Minimal surface to satisfy our imports/usages without pulling full types
  export const TextureLoader: any

  // Common types referenced by @react-three/* generics; keep them broad
  export type Mesh = any
  export type Points = any
  export type Group = any
  export type BufferGeometry<T = any, E = any> = any
  export type Material = any
  export type Object3DEventMap = any
  export type BufferGeometryEventMap = any

  const _default: any
  export default _default
}
