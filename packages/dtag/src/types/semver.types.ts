/**
 * @file Type Definitions - Semantic Version
 * @module dtag/types/semver
 */

/**
 * Stable semantic version string schema.
 */
export type SemanticVersionStable = `${number}.${number}.${number}`

/**
 * Unstable semantic version string schema.
 */
export type SemanticVersionUnstable =
  `${SemanticVersionStable}-${string}.${number}`

/**
 * Semantic version (stable and unstable) string schema.
 */
export type SemanticVersion = SemanticVersionStable | SemanticVersionUnstable

/**
 * Semantic version (stable and unstable) with tag prefix string schema.
 */
export type SemanticVersionTag = `${string | ''}${SemanticVersion}`
