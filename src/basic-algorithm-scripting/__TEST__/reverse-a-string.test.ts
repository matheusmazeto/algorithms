import { expect, test } from 'vitest'
import { reverseString } from '../reverse-a-string'

test('Convert Celsius to Fahrenheit', () => {
  expect(reverseString({ str: 'hello' })).toBe('olleh')
  expect(reverseString({ str: 'Howdy' })).toBe('ydwoH')
  expect(reverseString({ str: 'Greetings from Earth' })).toBe(
    'htraE morf sgniteerG'
  )
})
