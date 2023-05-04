import { expect, test } from 'vitest'
import { confirmEnding } from '../confirm-the-ending'

test('Confirm the Ending', () => {
  expect(confirmEnding({ str: 'Bastian', target: 'n' })).toBe(true)
  expect(confirmEnding({ str: 'Congratulation', target: 'on' })).toBe(true)
  expect(
    confirmEnding({ str: 'He has to give me a new name', target: 'name' })
  ).toBe(true)
  expect(confirmEnding({ str: 'Connor', target: 'n' })).toBe(false)
  expect(
    confirmEnding({
      str: 'Walking on water and developing software from a specification are easy if both are frozen',
      target: 'specification',
    })
  ).toBe(false)
})
