const number = 5;

// for
for(let i = 1; i <= 10; i++){
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`)
}

console.log(`\n`);

// while
const number2 = 7;
let count = 0;

while(count < 10){
    count++;
    let result = number2 * count;
    console.log(`${number2} x ${count} = ${result}`)
}