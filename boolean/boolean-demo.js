console.log(Boolean(1)) //true
console.log(Boolean(0)) //false
console.log(Boolean('Hello')) //true
console.log(Boolean('')) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean({})) //true
console.log(Boolean([])) //true

while (1) {
  console.log('Hello')
  break
}

do {
  console.log('One iteration')
} while (0)

for (let i = 1; 1; i++) {
  console.log('In for')
  break
}

let num = 10
while (num) {
  //while num > 0
  console.log(num)
  num--
}

// && || !
console.log('Coding' && 7) //truthy && truthy -> if both truthy return the last truthy value -> 7

//truthy && falsy, first falsy -> the first falsy value

console.log(true || 'Default') //First truthy
console.log(false || 'Default') // Default (last falsy if both are false)

const username = '' || 'Default'
let isBtnExists = true
let button = 'Button'
const buttonToShow = isBtnExists && button
