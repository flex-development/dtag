import type { DistTagOptions } from '@dtag/interfaces'
import type { Testcase } from '@tests/utils/types'
import testSubject from '../main'

/**
 * @file Unit Tests - Main Method
 * @module dtag/tests/unit/main
 */

describe('unit:main', () => {
  type Case = Testcase<string | undefined> & { options: DistTagOptions }

  const cases: Case[] = [
    {
      expected: undefined,
      options: { skip: true }
    },
    {
      expected: undefined,
      options: { version: null }
    },
    {
      expected: undefined,
      options: { version: undefined }
    },
    {
      expected: 'dev',
      options: { version: '3.13.98-dev.640' }
    },
    {
      expected: 'next',
      options: { map: { rc: 'next' }, version: 'v3.0.0-rc' }
    },
    {
      expected: 'beta',
      options: { tagPrefix: 'foo-pkg@', version: 'foo-pkg@2.0.0-beta.1' }
    },
    {
      expected: 'next',
      options: {
        map: { rc: 'next' },
        tagPrefix: 'foo-pkg@',
        version: 'foo-pkg@26.0.0-rc.13'
      }
    }
  ]

  it.each<Case>(cases)('should return $expected given $options', testcase => {
    // Arrange
    const { expected, options } = testcase

    // Act + Expect
    expect(testSubject(options)).toBe(expected)
  })
})
