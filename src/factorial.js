// tail recursive, “fast” factorial function
// tried to write it “LISP-y”

// factorial : Int -> Int
const factorial = (n) => _fact(n, 1)

const _fact = (n, a) =>
  n === 1 ?
    a
    : _fact(n - 1, n * a)


console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(10))

module.exports = factorial
