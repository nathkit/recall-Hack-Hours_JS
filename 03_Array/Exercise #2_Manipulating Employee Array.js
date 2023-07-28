// Exercise #2: Manipulating Employee Array
const employees = [
    {
        name: "James",
        age: 40,
        hobbies: ["Football", "Social media"]
    },
    {
        name: "Alex",
        age: 25,
        hobbies: ["Cryptocurrency", "Social media"]
    }
];
// Start coding here
let alex = employees[1].name;
employees[1].hobbies.push("Watching basketball")
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees.reduce((acc, curr) => {
    return acc + curr.age;
}, 0);
console.log(alexAndJamesAge)
const updateEmployees = employees;

updateEmployees.push({
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping", "Reading novels"],
});

updateEmployees.push({
    name: "Kody",
    age: 19,
    hobbies: ["Computer games", "Wakeboard"],
});
console.log(updateEmployees)

updateEmployees.pop()

console.log(updateEmployees)