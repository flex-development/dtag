/**
 * @file Interfaces - DistTagOptions
 * @module dtag/interfaces/DistTagOptions
 */

/**
 * `dtag` options interface.
 */
export interface DistTagOptions {
  /**
   * Prerelease delimiter.
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
   * Skip the distribution tag lookup process.
   *
   * @default false
   */
  skip?: boolean

  /**
   * Git tag prefix.
   *
   * @default 'v'
   */
  tagPrefix?: string

  /**
   * Package version (with or without `tagPrefix`).
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
