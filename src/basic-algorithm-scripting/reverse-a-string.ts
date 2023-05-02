/**
 * Reverse the provided string and return the reversed string.
 * For example, "hello" should become "olleh".
 */

export function reverseString({ str }: { str: string }): string {
  return str.split('').reverse().join('')
}

reverseString({ str: 'hello' })
