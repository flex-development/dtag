const merge = require('lodash').merge
const rootConfig = require('../../.eslintrc')

/**
 * @file ESLint Configuration
 * @see https://eslint.org/docs/user-guide/configuring
 */

const RULES_SPELLCHECKER = rootConfig.rules['spellcheck/spell-checker']

module.exports = merge(rootConfig, {
  parserOptions: {
    project: ['./tsconfig.json']
  },
  overrides: rootConfig.overrides.concat([
    {
      files: ['**/*.ts'],
      rules: {
        'spellcheck/spell-checker': [
          RULES_SPELLCHECKER[0],
          {
            ...RULES_SPELLCHECKER[1],
            skipWords: RULES_SPELLCHECKER[1].skipWords.concat([
              'autogeneration',
              'semver'
            ])
          }
        ]
      }
    }
  ])
})
