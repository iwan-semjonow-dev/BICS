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

function printStatsSummary({ category, total, percentage }) {
    console.log(category + ": " + total + " total, " + formatPercentage(percentage) + " of all spending");
}

const bicsStatsList = [
    basicStats,
    investStats,
    chaosStats,
    signalStats
];
console.log(bicsStatsList);

for (let i = 0; i < bicsStatsList.length; i++) {
    printStatsSummary(bicsStatsList[i]);
}

const chaosThreshold = 10;
const signalThreshold = 50;

function getCategoryInsight({ category, percentage }, threshold) {
    if (percentage > threshold) {
        return category + " spending is above " + threshold + "%";
    }
    if (percentage === threshold) {
        return category + " spending is exactly " + threshold + "%";
    }
    return category + " spending is under control";
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

function printExpenseStatsSummary({ expenseCategory, total, percentage }) {
    console.log(expenseCategory + ": " + total + " total, " + formatPercentage(percentage) + " of all spending");
}

const expenseStatsList = [
    housingStats,
    educationStats,
    foodStats,
    accessoriesStats
];
console.log(expenseStatsList);

for (let i = 0; i < expenseStatsList.length; i++) {
    printExpenseStatsSummary(expenseStatsList[i]);
}

function getCategoryComparison(
    { category: firstCategory, percentage: firstPercentage },
    { category: secondCategory, percentage: secondPercentage }
) {
    if (firstPercentage > secondPercentage) {
        return firstCategory + " share is higher than " + secondCategory + " share";
    }
    if (firstPercentage === secondPercentage) {
        return firstCategory + " share is equal to " + secondCategory + " share";
    }
    return firstCategory + " share is lower than " + secondCategory + " share";
}
const investChaosComparison = getCategoryComparison(investStats, chaosStats);
console.log(investChaosComparison);
const basicSignalComparison = getCategoryComparison(basicStats, signalStats);
console.log(basicSignalComparison);
const basicBasicComparison = getCategoryComparison(basicStats, basicStats);
console.log(basicBasicComparison);

const investChaosDifference = investStats.percentage - chaosStats.percentage;
console.log("Invest vs Chaos difference: " + formatPercentage(investChaosDifference));

function getInvestChaosShareInsight(percentageDifference) {
    if (percentageDifference > 0) {
        return "Invest share is higher than Chaos by " + formatPercentage(percentageDifference);
    } else if (percentageDifference < 0) {
        return "Chaos share is higher than Invest by " + formatPercentage(Math.abs(percentageDifference));
    } else {
        return "Invest and Chaos shares are equal";
    }
}
const investChaosShareInsight = getInvestChaosShareInsight(investChaosDifference);
console.log(investChaosShareInsight);

const investChaosDifferenceThreshold = 5;
if (Math.abs(investChaosDifference) > investChaosDifferenceThreshold) {
    console.log("Invest and Chaos shares have a noticeable gap");
} else {
    console.log("Invest and Chaos shares are close");
}

if (investChaosDifference < 0 && (Math.abs(investChaosDifference) > investChaosDifferenceThreshold)) {
    console.log("Chaos share is noticeably higher than Invest");
}

const investChaosAmountDifference = investStats.total - chaosStats.total;
console.log("Invest vs Chaos amount difference: " + investChaosAmountDifference);

function getInvestChaosAmountInsight(amountDifference) {
    if (amountDifference > 0) {
        return "Invest total is higher than Chaos by " + Math.abs(amountDifference);
    } else if (amountDifference < 0) {
        return "Chaos total is higher than Invest by " + Math.abs(amountDifference);
    } else {
        return "Invest and Chaos totals are equal";
    }
}
const investChaosAmountInsight = getInvestChaosAmountInsight(investChaosAmountDifference);
console.log(investChaosAmountInsight);

const investChaosAmountDifferenceThreshold = 300;

function getInvestChaosAmountGapInsight(amountDifference, threshold) {
    if (Math.abs(amountDifference) > threshold) {
        return "Invest and Chaos totals have a noticeable amount gap";
    } else {
        return "Invest and Chaos totals are close in amount";
    }
}
const investChaosAmountGapInsight = getInvestChaosAmountGapInsight(investChaosAmountDifference, investChaosAmountDifferenceThreshold);
console.log(investChaosAmountGapInsight);

function findHighestPercentageStats(statsList) {
    let highestStats = statsList[0];

    for (let i = 0; i < statsList.length; i++) {
        if (statsList[i].percentage > highestStats.percentage) {
            highestStats = statsList[i];
        }
    }
    return highestStats;
}

const currentLeader = findHighestPercentageStats(bicsStatsList);
console.log(currentLeader.category + " is the strongest BICS category with " + formatPercentage(currentLeader.percentage));

const otherCategoriesTotal = totalAmount - currentLeader.total;
console.log("Other BICS categories total excluding " + currentLeader.category + ": " + otherCategoriesTotal);

function getLeaderVsOtherCategoriesInsight(leaderStats, otherTotal) {

    if (leaderStats.total > otherTotal) {
        return leaderStats.category + " total is higher than all other BICS categories combined";
    } else if (leaderStats.total === otherTotal) {
        return leaderStats.category + " total is equal to all other BICS categories combined";
    } else {
        return leaderStats.category + " total is lower than all other BICS categories combined";
    }
}
const leaderVsOtherCategoriesInsight = getLeaderVsOtherCategoriesInsight(currentLeader, otherCategoriesTotal);
console.log(leaderVsOtherCategoriesInsight);

function findLowestPercentageStats(statsList) {
    let lowestStats = statsList[0];

    for (let i = 0; i < statsList.length; i++) {
        if (statsList[i].percentage < lowestStats.percentage) {
            lowestStats = statsList[i];
        }
    }
    return lowestStats;
}

const currentWeakest = findLowestPercentageStats(bicsStatsList);
console.log(currentWeakest.category + " is the weakest BICS category with " + formatPercentage(currentWeakest.percentage));

function calculateStatsSpread(highestStats, lowestStats) {
    return highestStats.percentage - lowestStats.percentage;
}

const bicsSpread = calculateStatsSpread(currentLeader, currentWeakest);
console.log("BICS spread is " + formatPercentage(bicsSpread));

const bicsSpreadThreshold = 50;
const bicsSpreadModerateThreshold = 25;

function getSpreadLevel(spread, highThreshold, moderateThreshold) {
    if (spread > highThreshold) {
        return "high";
    } else if (spread > moderateThreshold) {
        return "moderate";
    } else {
        return "balanced";
    }
}

const bicsSpreadLevel = getSpreadLevel(bicsSpread, bicsSpreadThreshold, bicsSpreadModerateThreshold);
console.log("BICS spread level: " + bicsSpreadLevel);

function getBicsSpreadInsight(spreadLevel, leaderStats) {

    if (spreadLevel === "high") {
        return "BICS spending is highly concentrated in " + leaderStats.category + " at " + formatPercentage(leaderStats.percentage);
    } else if (spreadLevel === "moderate") {
        return "BICS spending has moderate concentration in " + leaderStats.category;
    } else {
        return "BICS spending is more balanced";
    }
}
const bicsSpreadInsight = getBicsSpreadInsight(bicsSpreadLevel, currentLeader);
console.log(bicsSpreadInsight);

const currentExpenseLeader = findHighestPercentageStats(expenseStatsList);
console.log(currentExpenseLeader.expenseCategory + " is the largest expense category with " + formatPercentage(currentExpenseLeader.percentage));

const currentExpenseWeakest = findLowestPercentageStats(expenseStatsList);
console.log(currentExpenseWeakest.expenseCategory + " is the smallest expense category with " + formatPercentage(currentExpenseWeakest.percentage));

const expenseSpread = calculateStatsSpread(currentExpenseLeader, currentExpenseWeakest);
console.log("Expense spread is " + formatPercentage(expenseSpread));

const expenseSpreadThreshold = 50;
const expenseSpreadModerateThreshold = 25;

const expenseSpreadLevel = getSpreadLevel(expenseSpread, expenseSpreadThreshold, expenseSpreadModerateThreshold);
console.log("Expense spread level: " + expenseSpreadLevel);

function getExpenseSpreadInsight(spreadLevel, leaderStats) {
    if (spreadLevel === "high") {
        return "Expense spread is highly concentrated in " + leaderStats.expenseCategory + " at " + formatPercentage(leaderStats.percentage);
    } else if (spreadLevel === "moderate") {
        return "Expense spread has moderate concentration in " + leaderStats.expenseCategory;
    } else {
        return "Expense spread is more balanced";
    }
}
const expenseSpreadInsight = getExpenseSpreadInsight(expenseSpreadLevel, currentExpenseLeader);
console.log(expenseSpreadInsight);
