/**
  * sum: adds all the values passed as arguments
  */

function sum(numbers) {
  if(numbers.length === 0) {
    return 0
  } else {
    return numbers[0] + sum(numbers.slice(1))
  }
}

console.log(sum([1]))
console.log(sum(1, 2, 3))
console.log(sum())

module.exports = sum
