const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0,
	negativeCount = 0,
	zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < 0) {
		negativeCount++;
	} else if (numbers[i] === 0) {
		zeroCount++;
	} else {
		positiveCount++;
	}
}

console.log(negativeCount);
console.log(positiveCount);
console.log(zeroCount);
