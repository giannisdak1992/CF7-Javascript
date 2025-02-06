const s = 'Apples,Oranges,Milk'
const items = s.split(',') // split converts s string to array

console.log(items)

const newStr = items.join('|') // converts the array items to string
console.log(newStr)
