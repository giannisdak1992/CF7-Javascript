const keyValPair = (obj, arr) => {
  const keys = Object.keys(obj)

  return arr.reduce((result, currentValue) => {
    if (keys.includes(currentValue)) {
      result[currentValue] = obj[currentValue]
    }
    return result
  }, {})
}

// --------------------------------- //

const obj = { a: 1, b: 2, c: 3 }

const multiplier = (value) => value * 2

const mapObjectValues = (obj, mapping) => {
  return Object.entries(obj).reduce((acc, [keyValPair, value]) => {
    acc[key] = mapping(value)
    return acc
  }, {})
}

const result = mapObjectValues(obj, multiplier)
console.log(result)

// ------------------------------ //

const convertToUppercase = (value) => value.toString().toUpperCase()

const keysToUppercase = (obj, transformFunction) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const newKey = transformFunction(key)
    acc[newKey] = value
    return acc
  }, {})
}
