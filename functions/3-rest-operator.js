function max(...numbers) {
  let maxVal = -Infinity

  for (let n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }

  return maxVal
}

console.log(max(1, 6, 9, 3, 88))

function maxx(...rest) {
  //consumer
  // return rest.reduce((total, num) => total + num, 0)
  return Math.max(...numbers) //here is spread. producer
}

console.log(sum(1, 2, 7, 9, 22))

function greet(message, ...names) {
  console.log(message + ', ' + names.join(', '))
}

greet('Hello', 'Alice', 'Bob', 'Costas')
