const initial = {
  name: 'Alice',
  age: 30,
  address: { street: 'Patission', num: 76 },
}

const copyInitial = { ...initial } //1. Spreading give a shallow copy
console.log(copyInitial)

const copyInitial2 = Object.assign({}, initial) //2. Object type
console.log(copyInitial2)

const copyInitial3 = JSON.parse(JSON.stringify(initial)) //3. With JSON function --deep copy

const Initial2 = {
  name: 'Alice',
  age: undefined,
  address: { street: 'Patission', num: 76 },
}
console.log(JSON.stringify(Initial2))

const copyInitial4 = structuredClone(initial) //4. deep copy
