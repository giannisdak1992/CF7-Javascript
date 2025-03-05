const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
]

function doFilter(arr, callback) {
  return arr.filter(callback)
}
const underThirty = doFilter(people, (n) => n.age < 30)
console.log(underThirty)

const doMap = (arr, callback) => {
  return arr.map(callback)
}

const names = doMap(people, (person) => person.name)
console.log(names)
