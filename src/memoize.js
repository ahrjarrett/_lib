const memoize (f) => {
  let cache = {}

  return () => {
    const arg_str = JSON.stringify(arguments)
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments)
    return cache[arg_str]
  }
}

module.exports = memoize
