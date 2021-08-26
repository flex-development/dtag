import type { DistTagOptions } from '@dtag/interfaces'
import type { TestcaseCalled } from '@tests/utils/types'
import merge from 'lodash.merge'
import testSubject from '../main'

/**
 * @file Functional Tests - Main Method
 * @module dtag/tests/functional/main
 */

const mockMerge = merge as jest.MockedFunction<typeof merge>

describe('functional:main', () => {
  describe('merges options', () => {
    type Case = TestcaseCalled & { options: DistTagOptions; state: string }

    const cases: Case[] = [
      {
        call: 'not call',
        expected: 0,
        options: { skip: true },
        state: 'options.skip === true'
      },
      {
        call: 'not call',
        expected: 0,
        options: { version: null },
        state: 'options.version === null'
      },
      {
        call: 'not call',
        expected: 0,
        options: { version: undefined },
        state: 'options.version === undefined'
      },
      {
        call: 'call',
        expected: 1,
        options: { version: '2.0.0-beta.1' },
        state: '!options.skip && options.version'
      }
    ]

    it.each<Case>(cases)('should $call merge if $state', testcase => {
      // Arrange
      const { expected, options } = testcase

      // Act
      testSubject(options)

      // Expect
      expect(mockMerge).toBeCalledTimes(expected)
    })
  })
})
