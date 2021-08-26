import type { NIL } from '@flex-development/tutils'
import defaults from './config/defaults.config'
import type { DistTagOptions } from './interfaces'
import type { SemanticVersion } from './types'

/**
 * @file Main Method
 * @module dtag/main
 */

/**
 * Generates a [distribution tag][1] value based on `version`.
 *
 * Assuming a project's [distribution tag][1] (dist tag / `prerelease` tag) is
 * indicated in a project version number (e.g `3.13.98-dev.640` where `dev` is
 * the intended dist tag and value), this function returns that value.
 *
 * If `options.prerelease` is a non-empty string, it'll be returned instead.
 *
 * [1]: https://docs.npmjs.com/cli/v7/commands/npm-dist-tag
 *
 * @param {DistTagOptions} [options=defaults] - Application options
 * @param {string} [options.prerelease] - Custom prerelease tag
 * @param {boolean} [options.prereleaseAuto=true] - Disable autogeneration
 * @param {string} [options.tagPrefix='v'] - Git tag prefix
 * @param {SemanticVersion} [version=null] - Project version
 * @return {string | undefined} `prerelease` tag or `undefined`
 */
const main = (
  options: DistTagOptions = defaults,
  version: SemanticVersion | NIL = null
): string | undefined => {
  // Return undefined if no project version
  if (!version) return undefined

  // Spread options
  const { prerelease, prereleaseAuto, tagPrefix } = options

  // Return `prerelease` if autogeneration is disabled or custom value is set
  //

  // Split version at `tagPrefix`
  //

  // Remove build number if present
  //

  // Return `prerelease` tag or undefined (if empty string)
  return undefined
}

export default main
