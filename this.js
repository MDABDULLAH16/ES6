function show() {
  console.log(this);
}
// show();

// const user = {
//   name: "abdullah",
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// user.sayName();

const user = {
  name: "ayesha",
  sayName: () => {
    console.log(name);
  },
};
user.sayName();
