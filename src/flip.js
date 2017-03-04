// SECOND TRY:
const R = require('ramda')

const flip = (fn) => (a) => (b) => {
  // currently flip is broken:
  let args = Array.prototype.slice.call(arguments, 0)
  args[0] = b
  arbs[1] = a
  return fn.apply(this, args)
}

const divide = (a) => (b) => a / b

console.log('this should read 1:\n', flip(divide(1)(2)))

// FIRST TRY:
//const R = require('ramda')
//
//const flip = (f) => (a) => (b) => {
//
//  R.identity(f)
//}
//
//const divide = (a, b) => a / b
//
//const flippedDivide = flip(divide(2, 10))
//
//console.log(flippedDivide)

module.exports = flip
