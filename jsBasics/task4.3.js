// Task 4.3
// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.

let radius = 5;
let height = 12;
let result = (Math.PI * (radius * radius) * height).toFixed(2);
console.log(`Area of cylinder is: ${result}`);
