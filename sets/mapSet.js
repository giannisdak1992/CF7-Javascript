let bag = new Set()
bag.add('Oranges')
bag.add('Apples')
bag.add('Oranges') //Set does not permit duplicates
bag.delete('Oranges')
bag.add('Honey')

if (bag.has('Apples')) {
  console.log('Has Apples')
}

console.log(`Bag has size: ${bag.size}`)
console.log('Items: ', bag)

let store = [
  { product: 'Apples', city: 'Lamia' },
  { product: 'Oranges', city: 'Athens' },
  { product: 'Milk', city: 'Volos' },
  { product: 'Honey', city: 'Athens' },
]

let cities = ['all', ...new Set(store.map((product) => product.city))]

console.log(cities)

let filtered = cities.filter((city) => city.startsWith('V'))
console.log(filtered)
