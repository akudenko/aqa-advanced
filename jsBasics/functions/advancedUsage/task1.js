function handleNum(number, handleNum, handleOdd) {
	return number % 2 === 0 ? handleEven() : handleOdd();
}

function handleEven() {
	return 'number is even';
}

function handleOdd() {
	return 'number is odd';
}

console.log(handleNum(2, handleEven, handleOdd));
console.log(handleNum(5, handleEven, handleOdd));
