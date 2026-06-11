// Тестовые транзакции BICS: каждая покупка хранит текстовую причину, сумму, BICS-категорию и практический тип расхода
const transactions = [
    {
        title: "Apartment rent", // "Аренда квартиры"
        reason: "Essential basic expense", // "Обязательные базовые расходы"
        category: "Basic",
        amount: 800,
        expenseCategory: "housing"
    },

    {
        title: "JavaScript course", // "Курс по JavaScript"
        reason: "Investment in personal development", // "Вложение в развитие"
        category: "Invest",
        amount: 400,
        expenseCategory: "education"
    },

    {
        title: "Spontaneous food delivery", // "Спонтанная доставка еды"
        reason: "Impulsive and unplanned spending", // "Импульсивные и незапланированные траты"
        category: "Chaos",
        amount: 30,
        expenseCategory: "food"
    },

    {
        title: "Expensive watch", // "Дорогие часы"
        reason: "Purchase for status, image, and self-presentation", // "Покупки для статуса, образа и самопрезентации"
        category: "Signal",
        amount: 5000,
        expenseCategory: "accessories"
    }
];

// Проверяем массив и учимся читать отдельные транзакции через индексы и свойства объекта
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

// Проверяем, что amount хранится как число и может использоваться в расчётах
const firstTwoTotal = firstTransaction.amount + secondTransaction.amount;
console.log(firstTwoTotal);

// Считаем статистику по выбранной BICS-категории и общую сумму всех транзакций
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

// Ищем и считаем сумму по практическому типу расхода, а не по BICS-категории
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

// Считаем сумму по BICS-категории и возвращаем число для дальнейших расчётов
function sumByCategory(transactions, targetCategory) { 
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].category === targetCategory){
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

// Переиспользуем sumByCategory для всех BICS-категорий, считаем проценты и форматируем вывод для console

const basicTotal = sumByCategory(transactions, "Basic");
console.log(basicTotal);

const basicPercentage = calculatePercentage(basicTotal, totalAmount);
console.log("Basic percentage: " + formatPercentage(basicPercentage));

const basicStats = {
    category: "Basic",
    total: basicTotal,
    percentage: basicPercentage
};
console.log(basicStats);

const investTotal = sumByCategory(transactions, "Invest");
console.log(investTotal);

const investPercentage = calculatePercentage(investTotal, totalAmount);
console.log("Invest percentage: " + formatPercentage(investPercentage));

const investStats = {
    category: "Invest",
    total: investTotal,
    percentage: investPercentage
};
console.log(investStats);

const chaosTotal = sumByCategory(transactions, "Chaos");
console.log(chaosTotal);

const chaosPercentage = calculatePercentage(chaosTotal, totalAmount);
console.log("Chaos percentage: " + formatPercentage(chaosPercentage));

const chaosStats = {
    category: "Chaos",
    total: chaosTotal,
    percentage: chaosPercentage
};
console.log(chaosStats);

const signalTotal = sumByCategory(transactions, "Signal");
console.log(signalTotal);

const signalPercentage = calculatePercentage(signalTotal, totalAmount);
console.log("Signal percentage: " + formatPercentage(signalPercentage));

const signalStats = {
    category: "Signal",
    total: signalTotal,
    percentage: signalPercentage
};
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

// Считаем сумму по expenseCategory: это слой "на что ушли деньги", а не BICS-причина покупки
function sumByExpenseCategory(transactions, targetExpenseCategory) {
    let total = 0;
    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].expenseCategory === targetExpenseCategory) {
            total = total + transactions[i].amount;
        }
    }
    return total;
}

// Переиспользуем sumByExpenseCategory для разных типов расходов и готовим данные для будущей структуры расходов
const housingTotal = sumByExpenseCategory(transactions, "housing");
console.log(housingTotal);

const housingPercentage = calculatePercentage(housingTotal, totalAmount);
console.log("Housing percentage: " + formatPercentage(housingPercentage));

const housingStats = {
    expenseCategory: "housing",
    total: housingTotal,
    percentage: housingPercentage
};
console.log(housingStats);

const educationTotal = sumByExpenseCategory(transactions, "education");
console.log(educationTotal);

const educationPercentage = calculatePercentage(educationTotal, totalAmount);
console.log("Education percentage: " + formatPercentage(educationPercentage));

const educationStats = {
    expenseCategory: "education",
    total: educationTotal,
    percentage: educationPercentage
};
console.log(educationStats);

const foodTotal = sumByExpenseCategory(transactions, "food");
console.log(foodTotal);

const foodPercentage = calculatePercentage(foodTotal, totalAmount);
console.log("Food percentage: " + formatPercentage(foodPercentage));

const foodStats = {
    expenseCategory: "food",
    total: foodTotal,
    percentage: foodPercentage
};
console.log(foodStats);

const accessoriesTotal = sumByExpenseCategory(transactions, "accessories");
console.log(accessoriesTotal);

const accessoriesPercentage = calculatePercentage(accessoriesTotal, totalAmount);
console.log("Accessories percentage: " + formatPercentage(accessoriesPercentage));

const accessoriesStats = {
    expenseCategory: "accessories",
    total: accessoriesTotal,
    percentage: accessoriesPercentage
};
console.log(accessoriesStats);

function printExpenseStatsSummary(stats) {
    console.log(stats.expenseCategory + ": " + stats.total + " total, " + formatPercentage(stats.percentage) + " of all spending");
}
printExpenseStatsSummary(housingStats);
printExpenseStatsSummary(educationStats);
printExpenseStatsSummary(foodStats);
printExpenseStatsSummary(accessoriesStats);
