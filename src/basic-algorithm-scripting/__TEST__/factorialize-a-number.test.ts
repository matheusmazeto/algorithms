import { expect, test } from 'vitest'
import {
  factorialize,
  factorializeTailRecursion,
} from '../factorialize-a-number'

test('Factorialize a Number', () => {
  expect(factorialize({ num: 5 })).toBe(120)
  expect(factorialize({ num: 10 })).toBe(3628800)
  expect(factorialize({ num: 20 })).toBe(2432902008176640000)
})

test('Factorialize a Number - Tail Recursion', () => {
  expect(factorializeTailRecursion({ num: 5 })).toBe(120)
  expect(factorialize({ num: 10 })).toBe(3628800)
  expect(factorialize({ num: 20 })).toBe(2432902008176640000)
})
