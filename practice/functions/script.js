"use strict";

// Adding two Numbers
const addTwonumbers = (a, b) => a + b;
console.log(addTwonumbers(1, 2));

// difference between function declaration and function expression and Arrow Function

function display() {
  console.log("This is function declaration");
}
display();

const funExpression = function () {
  console.log("This is Function Expression");
};
funExpression();

const arrowFunction = () => {
  console.log("This is arrow Function");
};
arrowFunction();
// Tips : Function expression are not hoisted, so they cannot be called before declaration

// Immedialtely invoked Function Expression
(function () {
  console.log(`This is Immediately Invoked Function Expression`);
})();

// Tips : An IIFE is a function that runs as soon as it is defined.
// Syntax : (function(){})()

// Function to calcuate a square of the value
// 4 * 4 = 16

const squareFunction = (integer) => integer * integer;
console.log(squareFunction(4));

// Default Parametes in a function

const ageCalcutor = (birthYear, currentYear = new Date().getFullYear()) =>
  currentYear - birthYear;

console.log(ageCalcutor(2001));

// EVEN OR ODD

const oddOrEven = (integer) => (integer % 2 === 0 ? "Even" : "odd");
console.log(oddOrEven(2));
console.log(oddOrEven(23));
