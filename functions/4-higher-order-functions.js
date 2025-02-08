// Higher-order functions
// Function factory
// closure
function createMultiplier(multiplier) {
  return function (num) {
    return num + multiplier
  }
}

const createMultiplier2 = (multiplier) => (num) => num * multiplier

const double = createMultiplier(2)
const triple = createMultiplier(3)
console.log(double(5))
