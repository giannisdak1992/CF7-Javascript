const students = ['Alice', 'Andreas', 'Bob', 'Costas']

students.forEach((val, _, arr) => {
  //_ ignore index but declare it
  console.log(val, arr)
})

let filtered = students.filter((student) => {
  return student === 'Andreas'
})

console.log(filtered)

let mapped = students.map((student) => 'Student: ' + student) //αντιστοιχίζουμε ένα στοιχείο σε κάποιο άλλο
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0) // total accumulates. total = total + val , second parameter is the initial value. total = 0
console.log(sum)
