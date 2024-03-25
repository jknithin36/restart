"use strict";

// // Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = ` ${fristName} , You are ${age} , born in ${birthYear} `;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const fristName = "IronMan";
//       const str = `Oh You are a millenal, ${fristName}`;
//       console.log(str);
//     }

//     function add(a, b) {
//       return a + b;
//     }

//     output = "New Output";

//     console.log(output);
//   }

//   //console.log(str); // error

//   printAge();
//   return age;
//   // console.log(add(2, 3));
//   // error in strictMode;
// }

// const fristName = "SpiderMan";
// console.log(calcAge(1991));
// //console.log(age);
// //printAge();

// //2 . Hosting

// //- makes Some type of variables acessible in the code before they declared

// const myName = "Spider_Man";
// if (myName === "Spider_Man") {
//   // console.log(`My Name is ${myName} and my job is ${job}`);
//   // ERROR - Uncaught ReferenceError: job is not defined
//   // const job = "SuperHero";
// }

// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "SpiderMan";
// let job = "SuperHero";
// const year = 1997;

// // 3. this Keyword
// // Takes the value of owner of the function
// // But it is not static, it really depends on how the fuction is called

// // Method : this === <object that is calling the method>
// // Simple function call - this is undefined in strict Mode
// // Arrow Functions - this is value of parent function
// // EventListner = DOM Element That the handler is Attached

// //In Global Scope
// console.log(this);

// const calcAge2 = function (year) {
//   console.log(2037 - year);
//   console.log(this);
// };

// calcAge(2001);

// const spider = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);
//   },
// };
// spider.calcAge();
// // WE Will get full object and spider age

// const peter = {
//   year: 2010,
// };

// peter.calcAge = spider.calcAge;
// peter.calcAge();

// // Regular and Arrow functions (this Keword)

// const spiderMan = {
//   fristname: "Spider",
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);

//     // const self = this;

//     // const millinial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // millinial();

//     const millineal = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     millineal();
//   },
//   // greet: () => {
//   //   console.log(`hey.... ${this.fristname}`);
//   // },
//   // undefined
//   greet: function () {
//     console.log(`Hey ${this.fristname}`);
//   },
// };

// spiderMan.calcAge();
// spiderMan.greet();
// // we will get hey undefined because arrow functons take this from its parent element

// const addExrp = function (a, b) {
//   console.log(arguments);
//   // Arguments keyword exists only in regular functions
//   return a + b;
// };

// console.log(addExrp(1, 2));

// var addArow = (a, b) => a + b;

// Primitive vs Objects

let age = 23;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "SpiderMan",
  age: 23,
};

const friend = me;
friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);
// he me age also changes to 27

let lastName = "ironMan";
let oldLastName = lastName;
lastName = "Stark";
console.log(lastName, oldLastName);
// Stark ironMan because each value stroded different address in primitivies

const peter = {
  fristName: "Peter",
  lastName: "Parker",
  age: 23,
};

const newData = peter;
peter.age = 25;

console.log("Old Age", peter);
console.log("New Age", newData);
// but in objects they are stored in same memory heap
// Solution
const peter2 = {
  fristName: "Peter",
  lastName: "Parker",
  age: 23,
  arr: [1, 2],
};

const peterCopy = Object.assign({}, peter2);
peterCopy.age = 43;
peterCopy.arr.push(3);
// In arrays again it will change in both sides
console.log(peterCopy);
console.log(peter2);
