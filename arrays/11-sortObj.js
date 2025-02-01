const objArray = [
  { id: 1, firstname: 'Bob', age: 23 },
  { id: 1, firstname: 'Alice', age: 40 },
  { id: 1, firstname: 'Costas', age: 20 },
  { id: 1, firstname: 'Costas', age: 18 },
]

//sort by age

objArray.sort((a, b) => {
  return a.age - b.age
})

console.log(objArray)

// Sort by first and age

objArray.sort((a, b) => {
  if (a.firstname === b.firstname) {
    return a.age - b.age
  }

  return a.firstname.localeCompare(b.firstname)
})

console.log(objArray)
