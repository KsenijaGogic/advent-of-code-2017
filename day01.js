'use strict'

// Part 1
// ======

const sumArray = (arrayOfNumbers) => {
  return arrayOfNumbers.reduce((acc, current, i, arr) => {
    return acc + parseInt(current)
  }, 0)
}

const part1 = input => {
  const string = input.toString()
  const numbers = string.split('')
  const lastIndex = numbers.length - 1

  const reducedNumbers = numbers.reduce((acc, current, i, arr) => {
    if (current === arr[i + 1]) {
      acc.push(current)
    }

    return acc
  }, [])

  if (numbers[0] === numbers[lastIndex]) {
    reducedNumbers.push(numbers[0])
  }

  const totalSum = sumArray(reducedNumbers)

  return totalSum
}

// Part 2
// ======

const part2 = input => {
  const string = input.toString()
  const numbers = string.split('')
  const halfwayPoint = numbers.length / 2

  const reducedNumbers = numbers.reduce((acc, current, i, arr) => {
    if (i + 1 <= halfwayPoint) {
      if (current === arr[i + halfwayPoint]) {
        acc.push(current)
      }
    } else {
      if (current === arr[i - halfwayPoint]) {
        acc.push(current)
      }
    }

    return acc
  }, [])
  
  const totalSum = sumArray(reducedNumbers)

  return totalSum
}

module.exports = { part1, part2 }
