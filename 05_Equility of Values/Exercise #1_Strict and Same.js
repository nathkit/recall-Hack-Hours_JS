// Exercise #1 Strict and Same
// Start coding here
console.log(Object.is(10, 20)); // f
console.log(Object.is(0, -0)); // f
console.log(Object.is(NaN, 100)); // f
console.log(Object.is("one", "two")); // f
console.log(Object.is({ name: "John", age: 30 }, { name: "John", age: 30 })); // f
console.log(Object.is(null, undefined)); // f

console.log(10 === 20); // f
console.log(3.14 !== 3.14); // f
console.log("TechUp" !== "TechUp"); // f
console.log(NaN === NaN);  // f
console.log(0 !== -0); // f

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
console.log(objectA === objectB); // f

// Exercise #2 Loose Equality
// Start coding here
console.log(0 == false); // t
console.log(null == undefined); // f
