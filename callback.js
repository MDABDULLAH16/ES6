// A function you give to another function to do something;

//Simply : A function inside another function;

function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the function we passed
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Abdullah", sayBye);
