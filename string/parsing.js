const s = 'Coding Factory'
const start_index = 0
const last_index = 7
const substr = s.substring(start_index, last_index - 1) //0 - 5
console.log(substr)

const mySlice = s.slice(7) // until the end
console.log(mySlice)

const mySlice2 = s.slice(7, 8) //only the 7th
console.log(mySlice2)

const copyStr = s.slice() //copy of a slice
console.log(copyStr)

const mySlice3 = s.slice(-7)
console.log(mySlice3)

const splitted = s.split(' ') //array
console.log(splitted)
