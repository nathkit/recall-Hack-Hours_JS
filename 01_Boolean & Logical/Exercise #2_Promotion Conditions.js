let lastMonthPaidMoreThan4000 = 4001;
let isWeekday = "Friday";
let hasNotBoughtProductFromITCategory = "Yes";
let hasNotAttendedDiscountEvent = "Yes";
let isPlatinum = "No";

let isMondayToFriday = isWeekday === "Monday" || isWeekday === "Tuesday" || isWeekday === "Wednesday" || isWeekday === "Thursday" || isWeekday === "Friday";

let hasPromotion = lastMonthPaidMoreThan4000 > 4000 &&
    isMondayToFriday &&
    hasNotBoughtProductFromITCategory === "Yes" &&
    hasNotAttendedDiscountEvent === "No" ||
    isPlatinum === "Yes";

console.log(hasPromotion);
