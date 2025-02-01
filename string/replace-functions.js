const s = 'Coding Factory'
const s2 = 'CODING FACTORY'
const replaced = s.replace('Coding', 'Code')
const lower = s.toLowerCase()
const upper = s.toUpperCase()

if (s.toUpperCase() === s.toUpperCase()) {
  console.log('Equals')
}

const firstname = 'Alice    '
if (firstname.trim() === 'Alice') {
  //substract voids before and after
  console.log('Equals')
}

console.log('Coding'.repeat(10))

const concat = s + s2 + 'Goodnight!'
const concat2 = s.concat(s2).concat('Bye!')
