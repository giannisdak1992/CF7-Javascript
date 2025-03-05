const doMap = (arr, callback) => {
  return arr.map(callback)
}

const numbers = [1, 2, 3, 4, -5]

const doubles = doMap(numbers, (n) => 2 * n)
console.log(doubles)

function doFilter(arr, callback) {
  return arr.filter(callback)
}
const evens = doFilter(numbers, (n) => n % 2 === 0)
console.log(evens)

const doSome = (arr, callback) => {
  return arr.some(callback)
}

const atLeastOnePositive = doSome(numbers, (n) => n > 0)

console.log(atLeastOnePositive)

const doEvery = (arr, callback) => {
  return arr.every(callback)
}

const allPositives = doEvery(numbers, (n) => n > 0)

console.log(allPositives)
