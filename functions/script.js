"use strict";

//1. DEFAULT PARAMETRS
const booking = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const book = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(book);
  booking.push(book);
};
createBooking("LH123");
createBooking("Air140", 2, 800);

// how passing arguments works: value vs refernece

const flight = "LH123";
const spidey = {
  name: "SpiderMAn",
  passport: 234567890123,
};

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH123";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passenger === 234567890123) {
//     alert(hellheckedIn);
//   } else {
//     alert("No");
//   }
// };

// checkIn(flight, spidey);

// eg

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(spidey);
// checkIn(flight, spidey);

// frist class functions and higher order functions
// higher order = functions that takes another function as input

const oneWord = function (str) {
  return str.replace(/ /g, " ").toLowerCase();
};

const upperWord = function (str) {
  const [fristword, ...other] = str.split(" ");
  return [fristword.toUpperCase(), ...other].join(" ");
};

// Here transformer is a higher order function
const trasformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
};

trasformer("javaScript is best!", upperWord);

trasformer("SPIDERman is best", oneWord);

// functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("hey");

greeterHey("spiderMan");
greet("hello")("spiderman");

const greet1 = (str) => {
  return (str2) => {
    console.log(`${str} ${str2}`);
  };
};

greet1("HEY")("There");

// METHOD IN Functions

const eithad = {
  airline: "Eithad",
  iataCode: "EA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
eithad.book(239, "SPIDERMAN");
eithad.book(124, "Ironman");

console.log(eithad);

const eithadPremium = {
  airline: "Eithad_premium",
  iataCode: "EP",
  bookings: [],
};

const book = eithad.book;

// book(23, "Willams");

// they are call, apply and bind methods

book.call(eithadPremium, 23, "Shiva");
book.call(eithad, 156, "Megashyam");

const delta = {
  airline: "Delta Airlines",
  iatacode: "DA",
  bookings: [],
};

book.call(delta, 234, "Akshay");

// Apply method

const flightData = [456, "Abhinav"];
book.apply(delta, flightData);
// apply method not more useful in modern js
book.call(delta, ...flightData);

// Bind Method

const bookEW = book.bind(eithadPremium);

bookEW(27, "Srinivasulu");

const bookEW23 = book.bind(delta, 23);
bookEW23("revathi");

// with EventListeners

eithad.planes = 300;

eithad.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// In dom this keyword refers to elemnt so we need use bind method
document.querySelector(".buy"),
  addEventListener("click", eithad.buyPlane.bind(eithad));

// eg - partial applicatin

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

// practice

const addT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addT(0.23);
console.log(addVAT2(100));

// IIFE

const runOnce = function () {
  console.log(`this is never run again`);
};

runOnce();

//
(function () {
  console.log("Tis will never run again");
})();
// using arrow function

(() => console.log("Hello This is ARROw Once"))();

// CLOSURES
// basic defiation it gives acces ti variables of its parent element after its execution of parent element is completed
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Parctice

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

// example 2
const boardPassengers = function (n, waitTime) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are noe boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);
  console.log(`will start boarding in ${waitTime} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3);
