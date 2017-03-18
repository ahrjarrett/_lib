// THIRD TRY
// shouldn't this work?
// Haskell notation should work...need to import CURRYING
// can't even run the tests properly

const flip = f => a => b =>
  f(b, a)

const divide = (a) => (b) => a / b
const flippedDivide = flip(divide)

console.log(divide(1)(2))
console.log(flippedDivide(1)(2))



// SECOND TRY:
//const R = require('ramda')

//const flip = (fn) => (a) => (b) => {
//  // currently flip is broken:
//  let args = Array.prototype.slice.call(arguments, 0)
//  args[0] = b
//  arbs[1] = a
//  return fn.apply(this, args)
//}

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
