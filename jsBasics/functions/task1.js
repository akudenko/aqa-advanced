// function declaration

function calculateAreaOfRectangle(width, height) {
  return width * height;
}

const rectangleArea = function (width, height) {
  return width * height;
};

const secondRectangleArea = (width, height) => width * height;

console.log(`Calculated area of triangle via declared function is: ${calculateAreaOfRectangle(5, 10)}`);
console.log(`Calculated area of triangle via function expression is: ${rectangleArea(5, 10)}`);
console.log(`Calculated area of triangle via arrow function is: ${secondRectangleArea(5, 10)}`);