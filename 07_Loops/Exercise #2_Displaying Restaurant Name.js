// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
let i = 0;
while (i < restaurants.length) {
    console.log(`Restaurant Name: ${restaurants[i]}`)
    newRestaurants.push(`Restaurant Name: ${restaurants[i]}`)
    i++
}
console.log(newRestaurants);