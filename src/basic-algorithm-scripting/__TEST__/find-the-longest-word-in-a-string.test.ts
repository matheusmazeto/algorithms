import { expect, test } from 'vitest'
import { findLongestWordLength } from '../find-the-longest-word-in-a-string'

test('Find the Longest Word in a String', () => {
  expect(
    findLongestWordLength({
      word: 'The quick brown fox jumped over the lazy dog',
    })
  ).toBe(6)
  expect(findLongestWordLength({ word: 'May the force be with you' })).toBe(5)
  expect(findLongestWordLength({ word: 'Google do a barrel roll' })).toBe(6)
  expect(
    findLongestWordLength({
      word: 'What is the average airspeed velocity of an unladen swallow',
    })
  ).toBe(8)
  expect(
    findLongestWordLength({
      word: 'What if we try a super-long word such as otorhinolaryngology',
    })
  ).toBe(19)
})
