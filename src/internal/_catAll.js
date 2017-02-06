module.exports = function _concatAll (box) {
  let results = []
  box.forEach(function(boxInABox) {
    results.push.apply(results, boxInABox)
  }
  return results
}
