const splittedArray = (arr, size) => {
  const arrayOfSplitted = []

  for (let i = 0; i < arr.length; i += size) {
    arrayOfSplitted.push(arr.slice(i, i + size))
  }

  return arrayOfSplitted
}

const array = [1, 2, 3, 4, 5, 6]
console.log(splittedArray(array, 3))

const mutualElements = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item))
}

const array1 = [2, 4, 6, 7, 9]
const array2 = [2, 6, 1, 7, 9]
console.log(mutualElements(array1, array2))
