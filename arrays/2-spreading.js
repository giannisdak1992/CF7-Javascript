const initial = [1, 2, 3]
const copy = [...initial] //shallow copy bit by bit copy reference
console.log(copy)

const extended = [0, ...initial, 4]
console.log(extended)
const chars = [...'Hello'] //['H','E' etc...]

console.log(chars)
