let display = document.getElementById('display')

let buttons = document.getElementsByClassName('button')

let add = (num1, num2) => {
  let sum = num1 + num2
  return sum
}

let subtract = (num1, num2) => {
  let sum = num1 - num2
  return sum
}

let multiply = (num1, num2) => {
  let product = num1 * num2
  return product
}

let divide = (num1, num2) => {
  let quotient = num1 / num2 
  return quotient
}

let exponent = (num1, num2) => {
  let product = num1 ** num2
  return product
}
