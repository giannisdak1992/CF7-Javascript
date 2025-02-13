const cities = ['Athens', 'London', 'Paris']
cities.push('Berlin')
cities.forEach((city) => console.log(city))

const user = {
  id: 1,
  name: 'Ioannis',
  age: 32,
  city: 'Ioannina',
}

const additionalProperty = {
  sayHello: () => {
    return `Hello ${user.name}`
  },
}

Object.assign(user, additionalProperty)

console.log(user.sayHello())

const PI = 3.14159
const area = (radius) => {
  return PI * Math.pow(radius, 2)
}

console.log(area(5))
