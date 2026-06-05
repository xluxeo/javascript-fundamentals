// Aufgabe 1:
const originalArray =  ["Hans", "Peter", 42, "Konsul-Smidt-Str. 24", true, false, 28201];

// Aufgabe 2:
const newArray = [];
newArray.push("Bremen", "0421-123456", "hans@peter.name");
console.log(newArray);

// Aufgabe 3:
const combinedArray = originalArray.concat(newArray);
console.log(combinedArray);

// Aufgabe 4:
const numbers = originalArray.filter(item => typeof item === 'number');
console.log(numbers);

// Aufgabe 5:
const firstNumber = originalArray.find(item => typeof item === 'number');
console.log(firstNumber);

// Aufgabe 6:
const lastNumber = originalArray.findLast(item => typeof item === 'number');
console.log(lastNumber);

// Aufgabe 7:
const doesOnlyContainsStringValues = originalArray.every(item => typeof item === 'string');
console.log(doesOnlyContainsStringValues);

// Aufgabe 8:
const doesContainsNumberValues = originalArray.some(item => typeof item === 'number');
console.log(doesContainsNumberValues);

// Aufgabe 9:
const unorderedArray = [40, 1, 5, 200, -2, 500, 123, -30];
const sortedArray= unorderedArray.sort((a, b) => a - b);
console.log(sortedArray);

// Aufgabe 10:
const reversedArray = sortedArray.reverse();
console.log(reversedArray);

