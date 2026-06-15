const transactions = [
    {
        title: "Apartment rent",
        reason: "Essential basic expense",
        category: "Basic",
        amount: 800,
        expenseCategory: "housing"
    },

    {
        title: "JavaScript course",
        reason: "Investment in personal development",
        category: "Invest",
        amount: 400,
        expenseCategory: "education"
    },

    {
        title: "Spontaneous food delivery",
        reason: "Impulsive and unplanned spending",
        category: "Chaos",
        amount: 30,
        expenseCategory: "food"
    },

    {
        title: "Expensive watch",
        reason: "Purchase for status, image, and self-presentation",
        category: "Signal",
        amount: 5000,
        expenseCategory: "accessories"
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

console.log(firstTransaction.expenseCategory);
console.log(lastTransaction.expenseCategory);

const targetExpenseCategory = "housing";
console.log("Searching expense category: " + targetExpenseCategory);

let expenseCategoryTotal = 0;

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].expenseCategory === targetExpenseCategory) {
        console.log(transactions[i].title + " - " + transactions[i].expenseCategory);
        expenseCategoryTotal = expenseCategoryTotal + transactions[i].amount;
    }
}
console.log("Expense category total: " + expenseCategoryTotal);

function sumByCategory(transactions, targetCategory) {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].category === targetCategory) {
            total = total + transactions[i].amount;
        }
    }
    return total;
}

function calculatePercentage(categoryTotal, totalAmount) {
    if (totalAmount === 0) {
        return 0;
    }
    return categoryTotal / totalAmount * 100;
}

function formatPercentage(percentage) {
    return percentage.toFixed(2) + "%";
}

const basicTotal = sumByCategory(transactions, "Basic");
console.log(basicTotal);

const basicPercentage = calculatePercentage(basicTotal, totalAmount);
console.log("Basic percentage: " + formatPercentage(basicPercentage));

function createCategoryStats(category, total, percentage) {
    return {
        category,
        total,
        percentage
    };
}
const basicStats = createCategoryStats("Basic", basicTotal, basicPercentage);
console.log(basicStats);

const investTotal = sumByCategory(transactions, "Invest");
console.log(investTotal);

const investPercentage = calculatePercentage(investTotal, totalAmount);
console.log("Invest percentage: " + formatPercentage(investPercentage));

const investStats = createCategoryStats("Invest", investTotal, investPercentage);
console.log(investStats);

const chaosTotal = sumByCategory(transactions, "Chaos");
console.log(chaosTotal);

const chaosPercentage = calculatePercentage(chaosTotal, totalAmount);
console.log("Chaos percentage: " + formatPercentage(chaosPercentage));

const chaosStats = createCategoryStats("Chaos", chaosTotal, chaosPercentage);
console.log(chaosStats);

const signalTotal = sumByCategory(transactions, "Signal");
console.log(signalTotal);

const signalPercentage = calculatePercentage(signalTotal, totalAmount);
console.log("Signal percentage: " + formatPercentage(signalPercentage));

const signalStats = createCategoryStats("Signal", signalTotal, signalPercentage);
console.log(signalStats);

function printStatsSummary(stats) {
    console.log(stats.category + ": " + stats.total + " total, " + formatPercentage(stats.percentage) + " of all spending");
}
printStatsSummary(basicStats);
printStatsSummary(investStats);
printStatsSummary(chaosStats);
printStatsSummary(signalStats);

const chaosThreshold = 10;
const signalThreshold = 50;

function getCategoryInsight(stats, threshold) {
    if (stats.percentage > threshold) {
        return stats.category + " spending is above " + threshold + "%";
    }
    if (stats.percentage === threshold) {
        return stats.category + " spending is exactly " + threshold + "%";
    }
    return stats.category + " spending is under control";
}
const chaosInsight = getCategoryInsight(chaosStats, chaosThreshold);
console.log(chaosInsight);

const signalInsight = getCategoryInsight(signalStats, signalThreshold);
console.log(signalInsight);

function sumByExpenseCategory(transactions, targetExpenseCategory) {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].expenseCategory === targetExpenseCategory) {
            total = total + transactions[i].amount;
        }
    }
    return total;
}

function createExpenseStats(expenseCategory, total, percentage) {
    return {
        expenseCategory,
        total,
        percentage
    };
}
const housingTotal = sumByExpenseCategory(transactions, "housing");
console.log(housingTotal);

const housingPercentage = calculatePercentage(housingTotal, totalAmount);
console.log("Housing percentage: " + formatPercentage(housingPercentage));

const housingStats = createExpenseStats("housing", housingTotal, housingPercentage);
console.log(housingStats);

const educationTotal = sumByExpenseCategory(transactions, "education");
console.log(educationTotal);

const educationPercentage = calculatePercentage(educationTotal, totalAmount);
console.log("Education percentage: " + formatPercentage(educationPercentage));

const educationStats = createExpenseStats("education", educationTotal, educationPercentage);
console.log(educationStats);

const foodTotal = sumByExpenseCategory(transactions, "food");
console.log(foodTotal);

const foodPercentage = calculatePercentage(foodTotal, totalAmount);
console.log("Food percentage: " + formatPercentage(foodPercentage));

const foodStats = createExpenseStats("food", foodTotal, foodPercentage);
console.log(foodStats);

const accessoriesTotal = sumByExpenseCategory(transactions, "accessories");
console.log(accessoriesTotal);

const accessoriesPercentage = calculatePercentage(accessoriesTotal, totalAmount);
console.log("Accessories percentage: " + formatPercentage(accessoriesPercentage));

const accessoriesStats = createExpenseStats("accessories", accessoriesTotal, accessoriesPercentage);
console.log(accessoriesStats);

function printExpenseStatsSummary(stats) {
    console.log(stats.expenseCategory + ": " + stats.total + " total, " + formatPercentage(stats.percentage) + " of all spending");
}
printExpenseStatsSummary(housingStats);
printExpenseStatsSummary(educationStats);
printExpenseStatsSummary(foodStats);
printExpenseStatsSummary(accessoriesStats);

function getCategoryComparison(firstStats, secondStats) {
    if (firstStats.percentage > secondStats.percentage) {
        return firstStats.category + " share is higher than " + secondStats.category + " share";
    }
    if (firstStats.percentage === secondStats.percentage) {
        return firstStats.category + " share is equal to " + secondStats.category + " share";
    }
    return firstStats.category + " share is lower than " + secondStats.category + " share";
}
const investChaosComparison = getCategoryComparison(investStats, chaosStats);
console.log(investChaosComparison);
const basicSignalComparison = getCategoryComparison(basicStats, signalStats);
console.log(basicSignalComparison);
const basicBasicComparison = getCategoryComparison(basicStats, basicStats);
console.log(basicBasicComparison);
