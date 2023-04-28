import { expect, test } from 'vitest'
import { convertCtoF } from './convert-celsius-to-fahrenheit'

test('Convert Celsius to Fahrenheit', () => {
  expect(convertCtoF({ celsius: -30 })).toBe(-22)
  expect(convertCtoF({ celsius: -10 })).toBe(14)
  expect(convertCtoF({ celsius: 0 })).toBe(32)
  expect(convertCtoF({ celsius: 20 })).toBe(68)
  expect(convertCtoF({ celsius: 30 })).toBe(86)
})
