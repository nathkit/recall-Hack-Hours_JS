// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
// Start coding here
let newStr = ""
const reversing = (str, n) => {
    if (n < 1) {
        return newStr
    } else {
        newStr += str[n - 1];
        return reversing(str, n - 1);
    }
}

const reversing1 = (str) => {
    let reversedStr = ""
    for (let char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}

// reversedCompanyName = reversing(companyName, companyName.length)
reversedCompanyName = reversing1(companyName)

console.log(reversedCompanyName); 