import type { DistTagOptionsDefaults } from '@dtag/interfaces'

/**
 * @file Configuration - Default Options
 * @module dtag/config/defaults
 */

/**
 * @property {DistTagOptionsDefaults} defaults - Default application options
 */
const defaults: DistTagOptionsDefaults = {
  delimiter: '-',
  map: {},
  tagPrefix: 'v',
  version: null
}

export default defaults
