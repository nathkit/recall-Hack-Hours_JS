const findMinNumber = (a, b) => {
    if (a < b) {
        return a
    } else {
        return findMinNumber(b, a)
    }
}

const minNumber = findMinNumber(10, 20);

console.log(minNumber); // 10