// Exercise #5: Orders Analysis
// Start coding here
let orders = [
    {
        id: 1,
        customerName: "Brenn Hugk",
        productName: "Chocolate - Milk, Callets",
        productPrice: 94690,
        productQuantity: 35,
        creditCardType: "solo",
    },
    {
        id: 2,
        customerName: "Celia Dary",
        productName: "Bread - Pumpernickle, Rounds",
        productPrice: 10746,
        productQuantity: 87,
        creditCardType: "jcb",
    },
    {
        id: 3,
        customerName: "Toinette Blindermann",
        productName: "Bar - Granola Trail Mix Fruit Nut",
        productPrice: 94191,
        productQuantity: 31,
        creditCardType: "switch",
    },
    {
        id: 4,
        customerName: "Anjela Joannet",
        productName: "Cheese - Parmesan Cubes",
        productPrice: 5131,
        productQuantity: 96,
        creditCardType: "diners-club-carte-blanche",
    },
    {
        id: 5,
        customerName: "Kennith Bussons",
        productName: "Wine - White, Pinot Grigio",
        productPrice: 94432,
        productQuantity: 75,
        creditCardType: "jcb",
    },
    {
        id: 6,
        customerName: "Birdie Shepland",
        productName: "Tomato Paste",
        productPrice: 5845,
        productQuantity: 65,
        creditCardType: "visa-electron",
    },
    {
        id: 7,
        customerName: "Willyt Helks",
        productName: "Asparagus - Green, Fresh",
        productPrice: 89253,
        productQuantity: 26,
        creditCardType: "laser",
    },
    {
        id: 8,
        customerName: "Bill Champion",
        productName: "Wine - Red, Harrow Estates, Cab",
        productPrice: 922100,
        productQuantity: 40,
        creditCardType: "china-unionpay",
    },
    {
        id: 9,
        customerName: "Cris Druce",
        productName: "Bar Mix - Lemon",
        productPrice: 83104,
        productQuantity: 6,
        creditCardType: "jcb",
    },
    {
        id: 10,
        customerName: "Darnell O'Currine",
        productName: "Lime Cordial - Roses",
        productPrice: 99041,
        productQuantity: 75,
        creditCardType: "visa-electron",
    },
];

let maxOrderPrice;
const maxPrice = (arr) => {
    let id = "";
    let maxPrice;
    for (let i = 0; i < arr.length; i++) {
        if (!maxPrice || maxPrice < (arr[i]["productPrice"] * arr[i].productQuantity)) {
            maxPrice = arr[i].productPrice * arr[i].productQuantity
            id = arr[i].id
        }
    }
    return `Order id: ${id}, Total price: ${maxPrice}`
}

console.log(maxPrice(orders))

const findCustomerTotalPrice = (customerName) => {
    let totalPrice = 0;
    for (let obj of orders) {
        if (customerName === obj.customerName) {
            totalPrice = obj.productPrice * obj.productQuantity
            return `Total price is ${totalPrice}`
        }
    }
}

console.log(findCustomerTotalPrice("Birdie Shepland"))

const findCustomerPayByJCB = (arrOrder) => {
    const jcbOrders = [];
    for (let obj of arrOrder) {
        if (obj.creditCardType === "jcb") {
            jcbOrders.push(obj)
        }
    }
    return jcbOrders;
}

console.log(findCustomerPayByJCB(orders))

const findTotalOrderPrices = (arrOrder) => {
    let totalPrice = 0;
    for (let obj of arrOrder) {
        totalPrice += obj.productPrice * obj.productQuantity
    }
    return `Total: ${totalPrice}`
}

console.log(findTotalOrderPrices(orders))

const findTotalPrice = orders.reduce((acc, curr) => {
    return acc + (curr.productPrice * curr.productQuantity)
}, 0)

console.log("Total: ", findTotalPrice)
