/**
 * @file Lint Staged Configuration
 * @see https://github.com/okonet/lint-staged
 */

module.exports = {
  /**
   * Formatting command rules.
   */
  '*': ['yarn fix:format', 'git add -A'],

  /**
   * Linting command rules.
   */
  [`*.{js,md,ts,tsx}`]: ['yarn fix:style', 'git add -A']
}
