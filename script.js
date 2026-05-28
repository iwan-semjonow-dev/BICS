const transactions = [
    {
        title: "Apartment rent", // "Аренда квартиры"
        reason: "Essential basic expense", // "Обязательные базовые расходы"
        category: "Basic",
        amount: 800
    },

    {
        title: "JavaScript course", // "Курс по JavaScript"
        reason: "Investment in personal development", // "Вложение в развитие"
        category: "Invest",
        amount: 400
    },

    {
        title: "Spontaneous food delivery", // "Спонтанная доставка еды"
        reason: "Impulsive and unplanned spending", // "Импульсивные и незапланированные траты"
        category: "Chaos",
        amount: 30
    },

    {
        title: "Expensive watch", // "Дорогие часы"
        reason: "Purchase for status, image, and self-presentation", // "Покупки для статуса, образа и самопрезентации"
        category: "Signal",
        amount: 5000
    }
];

console.log(transactions);
console.log(transactions.length);

const firstTransaction = transactions[0];
console.log(firstTransaction.title);
console.log(firstTransaction.reason);
console.log(firstTransaction.category);
console.log(firstTransaction.amount);


const secondTransaction = transactions[1];
console.log(secondTransaction.title);
console.log(secondTransaction.category);
console.log(secondTransaction.amount);


const lastTransaction = transactions[transactions.length - 1];
console.log(lastTransaction.category);

const firstTwoTotal = firstTransaction.amount + secondTransaction.amount;
console.log(firstTwoTotal);


const targetCategory = "Basic";
console.log("Searching category: " + targetCategory);

let count = 0;
let totalAmount = 0;
let categoryTotal = 0;

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].category === targetCategory) {
        console.log(transactions[i].title + " - " + transactions[i].category);
        count = count + 1;
        categoryTotal = categoryTotal + transactions[i].amount;
    }

    totalAmount = totalAmount + transactions[i].amount;
}
console.log("Found: " + count);
console.log("Total amount: " + totalAmount);
console.log("Category total: " + categoryTotal);