/**
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */

export function findLongestWordLength({ word }: { word: string }): number {
  return Math.max(...word.split(' ').map(word => word.length))
}

findLongestWordLength({ word: 'The quick brown fox jumped over the lazy dog' })
