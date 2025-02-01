const arr = [1, 2, 3, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// const element = 2

// let index = arr.reduce((ind, el, i) => {
//   if (el === element) ind.push(i)
//   return ind
// }, [])

// console.log(index)

const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if (v === val) {
      indexes.push(index)
    }
  })

  return indexes
}

console.log(getIndexes(arr, 2))
