// Exercise #3 Checking Plain Object Function
// Start coding here
const isPlainObject = (value) => {
    if (Array.isArray(value) || Object.is(null, value)) {
        return false;
    } else if (Object.is(typeof value, "object")) {
        return true;
    } else {
        return "This is not an object."
    }
}


// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ที่ควรได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false


// console.log(typeof null); 

