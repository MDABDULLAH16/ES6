const numbers = [2, 4, 56, 7, 5, 23];
// doubled with loop
const doubledWithLoop = [];
for (const num of numbers) {
  const result = num * 2;
  doubledWithLoop.push(result);
}
console.log({ doubledWithLoop });

// \\doubled with map
const doubled = numbers.map((num) => num * 2);
console.log({ doubled });

// return array if the condition match filter
const filtered = numbers.filter((num) => num % 2);

console.log({ filtered });
// return the first Element after match the condition
const find = numbers.find((num) => num % 2);
console.log({ find });

// nothing return only testing purpose;
const forEach = numbers.forEach((num) => num * 2);
console.log({ forEach });
