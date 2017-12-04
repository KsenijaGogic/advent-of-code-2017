'use strict'

// Part 1
// ======

// K like didn't wanna waste time w/ fs sorry 
var values = require('./files/day02')

const splitStringIntoArrays = (string) => {
  const newlinePattern = /\n/
  const tabPattern = /\t/
  
  const splitStringIntoRows = values.split(newlinePattern)

  const splitRowsIntoCells = splitStringIntoRows.reduce((acc, current) => {
    acc.push(current.split(tabPattern))
    return acc
  }, [])

  return splitRowsIntoCells
}

const sumValues = (arr) => {
  return arr.reduce((acc, current) => {
    return acc + current
  }, 0)
}

const part1 = input => {
  const rowsWithCells = splitStringIntoArrays(values)
  
  const getDifferencePerRow = rowsWithCells.reduce((acc, current) => {
    let high, low

    for (let i = 0; i < current.length; i += 1) {
      if (i === 0) {
        high = parseInt(current[0])
        low = parseInt(current[0])
      } else {
        high = parseInt(current[i]) > high ? parseInt(current[i]) : high
        low = parseInt(current[i]) < low ? parseInt(current[i]) : low
      }
    }
    
    acc.push(high - low)

    return acc
  }, [])

  const checkSum = sumValues(getDifferencePerRow)

  return checkSum
}

// Part 2
// ======

const part2 = input => {
  const rowsWithCells = splitStringIntoArrays(values)

  // Per row
  const quotientPerRow = rowsWithCells.reduce((acc, current, i) => {
    let quotient = 0

    // Per cell
    for (let cellIndex = 0; cellIndex < current.length; cellIndex += 1) {
      // Iterate over all other cells in order to compare
      for (let compareIndex = 0; compareIndex < current.length; compareIndex += 1) {
        // And unless current cell's index === cell to compare's index (cause x % x = 0)
        if (cellIndex !== compareIndex) {
          // Compare if current / comparer has no remainder (or inverse), and immediately short circuit via return
          if (current[cellIndex] % current[compareIndex] === 0) {
            quotient = current[cellIndex] / current[compareIndex]
            acc.push(quotient)
            return acc            
          } else if (current[compareIndex] % current[cellIndex] === 0) {
            quotient = current[compareIndex] / current[cellIndex]
            acc.push(quotient)
            return acc
          }
        }
      }
    }
  }, [])
  
  const sumQuotients = sumValues(quotientPerRow)

  return sumQuotients
}

module.exports = { part1, part2 }
