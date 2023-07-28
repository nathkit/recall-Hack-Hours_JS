// Exercise #1: Event Conditions
// Start coding here
const age = 18;
const recode = "yes";
const nation = "German"

let isOver18 = age >= 18;
let hasNoCriminalBlacklist = recode == "yes";
let isThai = nation == "Thai";

let isAllow = isOver18 && hasNoCriminalBlacklist && isThai;

console.log(isAllow);

