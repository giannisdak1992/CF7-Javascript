const arr = [1, 2, 3, 4, 5, 6, 7, 8]

//Delete
const arr2 = arr.splice(0, 4) //from index 0 delete 4 elements and return it to arr2

console.log(arr2)
console.log(arr)

//Insert

arr.splice(0, 0, 10) // to index 0 , delete 0 elements and add 10 (shift all elements to left)
console.log(arr)

//Update
arr.splice(0, 1, 11)
console.log(arr)
