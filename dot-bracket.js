const person = {
  name: "rofiq",
  age: 23,
  "address-home": "Dhaka",
  1: 23,
};

const dotAccess = person.name;
console.log(dotAccess);
const bracketAccess = person[1];
console.log(bracketAccess);

const findHome = person["address-home"];
console.log(findHome);

for (const key in person) {
  const value = person[key];
  console.log(key);
}
