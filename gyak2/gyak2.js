// Array functions
let customers = [
    {
        name: 'Bozsoky Milán Ferenc',
        time: 1675316861000,
        cost: 2100,
        products: [
            { name: 'Beer', type: 'Drink' },
            { name: 'Beer', type: 'Drink' },
            { name: 'Beer', type: 'Drink' }
        ]
    },
    {
        name: 'Ábrahám Erik',
        time: 1677934024666,
        cost: 3900,
        products: [
            { name: 'Greek salad', type: 'Food' }
        ]
    },
    {
        name: 'Bodri Balázs',
        time: 1677764861000,
        cost: 13500,
        products: [
            { name: 'Bottled water', type: 'Drink' },
            { name: 'Garlic cream-soup', type: 'Food' },
            { name: 'Wine', type: 'Drink' },
            { name: 'Beef stew', type: 'Food' }
        ]
    },
    {
        name: 'Farkas Csobán István',
        time: 1677764861000,
        cost: 5200,
        products: [
            { name: 'Székelygoulash', type: 'Food' }
        ]
    },
    {
        name: 'Frigyes Kristóf',
        time: 1676008061000,
        cost: 16000,
        products: [
            { name: 'Bottled water', type: 'Drink' },
            { name: 'Paella Valenciana', type: 'Food' },
            { name: 'Sangria', type: 'Drink' }
        ]
    },
    {
        name: 'Gortva István',
        time: 1676267261000,
        cost: 15500,
        products: [
            { name: 'Gazpacho', type: 'Food' },
            { name: 'Pike-pearch fried in breadcrumbs', type: 'Food' },
            { name: 'Sangria', type: 'Drink' }
        ]
    }
]

function spentALot(tomb) {
    return tomb.filter((person) => person.cost >= 10000);
}

function customerNames(array) {
    return array.map((p) => p.name);
}

function splitCustomerNames(array) {
    return array.flatMap((szemely) => szemely.name.split(' '))
}

function uniqueSplitCustomerNames(a) {
    return new Set(splitCustomerNames(a));
}

function atAtLeastTwoStuffs(array) {
    return array.every((element) => element.products.length >= 2);
}

function atLeastOneCustomerAteNDishes(array, n) {
    return array.some((element) => element.products.length >= n);
}

function cummulativeCost(array) {
    return array.reduce((partialResult, person) => {
        return partialResult + person.cost;
    }, 0);
}

function cummulativeCostForEach(array) {
    let result = 0;
    array.forEach((elem) => {
        result += elem.cost;
    });
    return result;
}

function customerNamesThatSpentLessThanN(array, spent) {
    return array
        .filter((element) => element.cost < spent)
        .map((customer) => customer.name);
}

function sortCustomers(array) {
    return array.sort((customer1, customer2) => {
        return customer1.name.localeCompare(customer2.name);
    })
}

console.log(
    spentALot(customers),
    customerNames(customers),
    splitCustomerNames(customers),
    uniqueSplitCustomerNames(customers),
    atAtLeastTwoStuffs(customers),
    atLeastOneCustomerAteNDishes(customers, 4),
    atLeastOneCustomerAteNDishes(customers, 10),
    cummulativeCost(customers),
    cummulativeCostForEach(customers),
    customerNamesThatSpentLessThanN(customers, 10000),
    sortCustomers(customers)
)


