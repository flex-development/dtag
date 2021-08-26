import dtag from '@flex-development/dtag'

/**
 * @file Examples - Lookup Monorepo
 * @module dtag/docs/examples/lookup-monorepo
 */

const tagPrefix: string = 'foo@'

dtag({ tagPrefix, version: 'foo@2.0.0-beta.1' }) // => 'beta'
dtag({
  map: { rc: 'next' },
  tagPrefix,
  version: 'foo-pkg@26.0.0-rc.13'
}) // => 'beta'
