import defaults from './config/defaults.config'
import type { DistTagOptions } from './interfaces'
import type { SemanticVersionTag } from './types'

/**
 * @file Main Method
 * @module dtag/main
 */

/**
 * Searches for a [distribution (dist) tag][1] value in `options.version`.
 *
 * The function assumes a project's [dist tag][1] is included in it's version
 * number  (e.g `3.13.98-dev.640` where `dev` is the intended dist tag value).
 *
 * In cases where the tag found is not the tag intended (e.g: `3.13.98-rc.640`),
 * use `options.map` to interpolate tags.
 *
 * [1]: https://docs.npmjs.com/cli/v7/commands/npm-dist-tag
 *
 * @example main({ version: 'v3.13.98-dev.640' }) => 'dev'
 * @example main({ map: { rc: 'next' } }, { version: 'v3.0.0-rc' }) => 'next'
 * @example main({ tagPrefix: 'foo@', { version: 'foo@2.0.0-beta.1' }) => 'beta'
 *
 * @param {DistTagOptions} [options=defaults] - Lookup options
 * @param {Record<string,string>} [options.map={}] - Distribution tag map
 * @param {boolean} [options.skip] - Skip distribution tag lookup
 * @param {string} [options.tagPrefix='v'] - Git tag prefix
 * @param {SemanticVersionTag} [options.version=null] - Package version
 * @return {string | undefined} `prerelease` tag or `undefined`
 */
const main = (options: DistTagOptions = defaults): string | undefined => {
  // Return undefined if no project version
  if (!options.version) return undefined

  // Spread options
  //

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
