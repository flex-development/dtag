import merge from 'lodash.merge'
import defaults from './config/defaults.config'
import type { DistTagOptions } from './interfaces'

/**
 * @file Main Method
 * @module dtag/main
 */

/**
 * Searches for a [distribution (dist) tag][1] value in `options.version`.
 *
 * The function assumes a project's [dist tag][1] is included in it's version
 * number or release tag (e.g `3.13.98-dev.640` where `dev` is the intended tag,
 * or `foo-package@26.0.0-alpha.1` where `alpha` is the intended tag).
 *
 * Use `options.map` to interpolate tags in cases where the tag found is not the
 * tag intended (e.g: `v3.13.98-rc.640`).
 *
 * [1]: https://docs.npmjs.com/cli/v7/commands/npm-dist-tag
 *
 * @example main({ version: 'v3.13.98-dev.640' }) => 'dev'
 * @example main({ map: { rc: 'next' }, version: 'v3.0.0-rc' }) => 'next'
 * @example main({ tagPrefix: 'foo@', version: 'foo@2.0.0-beta.1' }) => 'beta'
 * @example
 *  main({
 *    map: { rc: 'next' },
 *    tagPrefix: 'foo@',
 *    version: 'foo-pkg@26.0.0-rc.13'
 *  }) => 'beta'
 *
 * @param {DistTagOptions} [options=defaults] - Lookup options
 * @param {Record<string,string>} [options.map={}] - Distribution tag map
 * @param {string} [options.delimiter='-'] - Prerelease delimiter
 * @param {boolean} [options.skip] - Skip distribution tag lookup
 * @param {string} [options.tagPrefix='v'] - Git tag prefix
 * @param {any} [options.version=null] - Package version
 * @return {string | undefined} `prerelease` tag or `undefined`
 */
const main = (options: DistTagOptions = defaults): string | undefined => {
  // Skip distribution tag lookup
  if (options.skip || typeof options.version !== 'string') return undefined

  // Spread options
  const { delimiter, map, tagPrefix, version } = merge({}, defaults, options)

  // Initialize distribution tag
  let tag: string | undefined

  // Remove tagPrefix if included in version
  if (version.startsWith(tagPrefix)) {
    tag = version?.substring(tagPrefix.length, version.length)
  } else tag = version

  // Split at prerelease delimiter
  tag = tag?.split(delimiter)[1] || ''

  // Remove build number if present
  if (tag && tag.includes('.')) tag = tag.split('.')[0]

  // Interpolate tag
  if (map && Object.keys(map).length) tag = map[tag]

  // Return distribution tag or undefined (if empty string)
  return tag.trim() || undefined
}

export default main
