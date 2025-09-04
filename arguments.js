function sum(a, b) {
  console.log(a, b);
  console.log(arguments);
  const makeArray = [...arguments];
  console.log(makeArray);
  //now you can mapping / filtering and other activity;
  //it will be able on normal function;
}
sum(1, 2, 3, 4, 54);
