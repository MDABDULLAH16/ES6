//class deClear
// class Player{}

class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  eat() {
    console.log("every animal eat");
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  meWow() {
    console.log(`${this.name} MeWow MeWow korea`);
  }
}
const cat1 = new Cat("cat", 23);
cat1.meWow();
console.log(cat1);

class Dog extends Animal {
  constructor(name, age, run) {
    super(name, age);
    this.run = run;
  }
  CanRun() {
    console.log(`${this.name} can run ${this.run}`);
  }
}
const dog = new Dog("dog", 12, "fast");
dog.CanRun();
console.log(dog);
