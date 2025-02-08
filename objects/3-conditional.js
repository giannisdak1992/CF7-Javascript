const book = { author: { first: 'Th.', last: 'Andr' } }

let lastname = book?.author?.last

console.log(lastname)
//if book were null then we get runtime error
