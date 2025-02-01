let temp = 0
//null, 0, undefined and "" are falsy
const s = ''

if (temp) {
  console.log('Non-Zero')
} else {
  console.log('Temp is Zero')
}

let str = s ? 'Str is non-empty' : 'Str is empty'
console.log(str)
