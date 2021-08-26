/**
 * @file Interfaces - DistTagOptions
 * @module dtag/interfaces/DistTagOptions
 */

/**
 * `dtag` options.
 */
export interface DistTagOptions {
  /**
   * Prerelease delimiter (e.g `-` before `alpha` in `foo-pkg@26.0.0-alpha.13`).
   *
   * @default '-'
   */
  delimiter?: string

  /**
   * Distribution (dist) tag map. If a dist tag is found in `version` and `map`
   * is a non-empty object, the tag returned will be plucked from `map`.
   *
   * @default {}
   */
  map?: Record<string, string>

  /**
   * Skip distribution tag lookup.
   */
  skip?: boolean

  /**
   * Git tag prefix.
   *
   * @default 'v'
   */
  tagPrefix?: string

  /**
   * Package version or release tag.
   *
   * @default null
   */
  version?: any
}

/**
 * Default `dtag` options.
 */
export type DistTagOptionsDefaults = {
  delimiter: NonNullable<DistTagOptions['delimiter']>
  map: NonNullable<DistTagOptions['map']>
  tagPrefix: NonNullable<DistTagOptions['tagPrefix']>
  version: DistTagOptions['version']
}
