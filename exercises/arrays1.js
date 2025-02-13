const arr = [1, 2, 3, 2, 2, 4, 5, 6]

const noDuplicates = (array) => {
  return array.filter((value, index) => array.indexOf(value) === index)
}

console.log(noDuplicates(arr))

const arr3 = [1, 2, [3, 4, [5, 6]]]

const flatArray = (arr) => {
  return arr.flat(Infinity)
}

console.log(flatArray(arr3))
