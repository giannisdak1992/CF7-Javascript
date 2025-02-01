let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 / 3.3)
let fixedDiv = (num1 / num2).toFixed(1) //one decimal point
//for each primitive, Javascript has a wrapper class. Method toFixed promote primitives to their wrapper classes

let intResult = Math.floor(num1 / num2) //round it to the lowest limit
let upperInt = Math.ceil(num1 / num2) //round it to the highest limit
let roundResult = Math.round(num1 / num2) // round up for .5 and up, rounds down otherwise

let modResult = num1 % num2 //JS & Java remaining part of a division (Το modulo διατηρεί το πρόσημο του Διαιρετέου)

console.log(
  divResult,
  expr,
  fixedDiv,
  intResult,
  upperInt,
  roundResult,
  modResult
)
