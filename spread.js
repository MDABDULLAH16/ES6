// use spread operator in js
const numbers = [1, 24, 43];
numbers.push(55);
console.log(...numbers);

// spread and copy without looping
const useSpread = [...numbers, 23, 32];
console.log(useSpread);
