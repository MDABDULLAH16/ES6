const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, balance: 1200 },
  { id: 2, name: "Bob", age: 30, isActive: false, balance: 800 },
  { id: 3, name: "Charlie", age: 22, isActive: true, balance: 1500 },
  { id: 4, name: "David", age: 28, isActive: true, balance: 2000 },
  { id: 5, name: "Eva", age: 35, isActive: false, balance: 500 },
];

// 1.Get the first user whose balance is more than 1000.
const balance1000 = users.find((bl) => bl.balance > 1000);
console.log({ balance1000 });

//2.filter → Get all users who are active and older than 25.
const filterResult = users.filter(
  (user) => user.isActive === true && user.age > 25
);
console.log({ filterResult });

//3. map → Create an array of only user names in uppercase.

const mapResult = users.map((user) => user.name.toUpperCase());
console.log(mapResult);

// 4.reduce → Calculate the total balance of all users.
const totalBalance = users.reduce((acc, curr) => acc + curr.balance, 0);
console.log({ totalBalance });

// combine → Find the names of active users whose balance is greater than 1000.

const combine = users
  .filter((user) => user.isActive === true && user.balance > 1000)
  .map((user) => user.name);
console.log({ combine });

// 6.extra challenge → Return an object where keys are user names and values are their balances.

const extraChallenge = users.reduce((acc, currentUser) => {
  acc[currentUser.name] = currentUser.balance;
  return acc;
}, {});
console.log(extraChallenge);
