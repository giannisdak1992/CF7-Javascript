const arr = [1, 2, 3, 4]
delete arr[0] //not a good method because it creates a sparse array. the first element will be undefined

console.log(arr)

arr.push(5) //alter the same array
arr.push(6, 7)
console.log(arr)
