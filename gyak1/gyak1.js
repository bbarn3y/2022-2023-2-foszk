console.log('Hello class!');

let name = 'Barna';
console.log('Hello \'' + name + '\'');
console.log("Hello '" + name + "'")
console.log(`Hello ${name}!`)

name = 5;

console.log('5', 5, 3.2, name, [1,3,5], { name: 'Barna', age: 31 });

// Single comment
/**
 * This
 * is
 * a
 * longer
 * comment
 */

console.log(1 + 3, 3 - 2, 3 * 3, 2**5, 4 / 2, 3 % 2);

function isSmall(number) {
    if (number >= 0 && number <= 10) {
        return true;
    } else {
        return false;
    }
}

console.log(isSmall(11), isSmall(5));

function isSmall2(number) {
    return (number >= 0 && number <= 10) ? true : false;
}

console.log(isSmall2(11), isSmall2(5));

function isSmall3(number) {
    return (number >= 0 && number <= 10);
}

console.log(isSmall3(11), isSmall3(5));

const tomb = [1, -2, 5, 12, 20, 31, 41];

function getEvenNumbers(tomb) {
    let result = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            result.push(tomb[i]);
        }
    }
    return result;
}

console.log(getEvenNumbers(tomb));

function getEvenNumbers2(tomb) {
    let result = [];
    for (const element of tomb) {
        if (element % 2 === 0) {
            result.push(element);
        }
    }
    return result;
}

console.log(getEvenNumbers2(tomb));

const evenNumbers = tomb.filter((element) => element % 2 === 0);
console.log(evenNumbers)
