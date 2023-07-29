// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber;
let min;
// Start coding here
// function #1
const findMinNumber = (arr, n) => {
    if (n < 1) {
        return min
    } else {
        if (!min || min > arr[n - 1]) {
            min = arr[n - 1]
        }
        console.log(min)
        return findMinNumber(arr, n - 1)
    }
}
// function #2
// const findMinNumber = (arr, n) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (!min || min > arr[i]) {
//             min = arr[i]
//         }
//         console.log(min)
//     }

//     return min;
// }

minNumber = findMinNumber(numbers, numbers.length)

console.log(minNumber);