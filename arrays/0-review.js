const cities = ['Athens', 'Paris', 'Toronto']

//Add - Modifies the array
cities.push('London')

let city = cities[0]
console.log(city)

cities[1] = 'London'

cities.forEach((c) => console.log(c))

cities.sort()

cities.sort((a, b) => a.localeCompare(b, 'en')) //ascending
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b, 'en')) //shallow copy
// cities.sort((a, b) => b.localeCompare(a))

//Copy deep Copy
const citiesCopy1 = JSON.parse(JSON.stringify(cities)) //JSON stringify convert a JSON to strings. then parse convert the string to JS Object

const cities2 = structuredClone(cities) //gets a JS object and creates a deep copy

//Shallow copies --Spread operator
const cities3 = [...cities]
const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)
