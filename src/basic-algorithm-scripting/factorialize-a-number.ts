/**
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Only integers greater than or equal to zero will be supplied to the function.
 */

export function factorialize({ num }: { num: number }): number {
  if (num === 0) return 1

  return num * factorialize({ num: num - 1 })
}

export function factorializeTailRecursion({
  num,
  factorial = 1,
}: {
  num: number
  factorial?: number
}): number {
  if (num === 0) return factorial

  return factorializeTailRecursion({ num: num - 1, factorial: factorial * num })
}

factorialize({ num: 5 })
