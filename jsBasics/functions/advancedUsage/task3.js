function divide(numerator, denominator) {
	if (denominator === 0) {
		throw new Error(`${numerator}/${denominator} = 0.
        Division by zero is not allowed!`);
	} else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error(`${numerator} / ${denominator},
        Both params should have Number type!`);
	}
	return numerator / denominator;
}

console.log(divide(10, 5));

try {
	console.log(divide(10, 0));
} catch (error) {
	console.error(error);
} finally {
	console.log('Робота завершена');
}

try {
	console.log(divide(`a` / 10));
} catch (error) {
	console.error(error);
} finally {
	console.log('Робота завершена');
}

try {
	console.log(divide(10 / 'sd'));
} catch (error) {
	console.error(error);
} finally {
	console.log('Робота завершена');
}
