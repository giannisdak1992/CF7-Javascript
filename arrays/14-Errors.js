// all the errors happen at runtime (unchecked)
// error is an object and error.message & error.trace are properties

const products = []
function insert(arr, product) {
  if (!arr || !product) return 0

  try {
    if (arr.includes(product)) {
      throw new Error('Product Exists')
    }
    products.push(product)
  } catch (error) {
    console.error(error.message, error.trace)
    throw error
  }
}

insert(products, 'Apples')
console.log(products)
insert(products, 'Apples')
