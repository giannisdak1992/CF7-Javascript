const cities = ['Paris', 'London', 'Berlin', 'Athens']

const numbers = [10, 101, 103, 77, 99, 123, 690, 590]

console.log(cities.sort())
console.log(numbers.sort()) //cannot sort numbers

// const sortedArray = numbers.sort((a, b) => {
//   if (a > b) return 1
//   if (a < b) return -1
//   if (a === b) return 0
// })

// console.log(sortedArray)

numbers.sort(function (a, b) {
  return a - b
  // return b - a -> reverse
})

console.log(numbers)

console.log(numbers.reverse()) //descending
