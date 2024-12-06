const firstArray = [1, 2, 3, 4, 5];
const mutatedArray = [];

for (let i = 0; i < firstArray.length; i++) {
	mutatedArray.push(firstArray[i] * i);
}
console.log(mutatedArray);
