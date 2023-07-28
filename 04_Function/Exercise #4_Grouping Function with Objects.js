const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a + b,
    multiply: (a, b) => { return a * b },
    devide: (a, b) => a / b
}

let resultAdd = calculator.add(10, 20)
let resultDivide = calculator.devide(3000, 10)

console.log(resultDivide)