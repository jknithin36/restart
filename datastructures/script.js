"use strict";

// console.log("hello World");
// console.log(23 == "23");
// console.log(23 === "23");

// Loops in JavaScript

// Loops are used to reprat the Function more times

// Basic Words in loops

/*

1. For Loop   --- for(Intilization, condition, increment/ decrement)
2. While Loop 
3. Continue statement
4. break statement


*/

// for Loop

// if the condition is true then loop works orther wise it terminates

// for (let i = 1; i <= 5; i++) {
//   console.log(`The Number is ${i} `);
// }

// function countSelected(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   const musicTypes = document.selectForm.musicTypes;
//   console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
// });

console.log(`---------Basic For Loop-----------`);
for (let i = 1; i <= 5; i = i + 2) {
  console.log(`The NUmber is ${i}`);
}

console.log(`-----------Continue Statement---------`);

// Continue statement just skips the log and continue to next iterartion

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(`The Number is ${i}`);
}

console.log(`---------Break Statement -----------`);

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(`The Number is ${i}`);
}

// While Loop
console.log(`------While Loop------`);
let i = 1;

while (i <= 5) {
  console.log(`${i}`);
  i++;
}

// for loop with array

console.log(`-----Loops With Array -----`);
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Loops Constructs

// for...of , for.....in

// for in

console.log(`------for...In loop--------`);
const array = [1, 2, 3];

for (const i in array) {
  console.log(array[i]);
}

const characters = ["Fred", "Tom", "Bob"];

for (let i of characters) {
  console.log(i);
}

// Practice For Loop

console.log(`-------Sum of two Arrays------------`);

const firstArray = [2, 2, 2];
const secondArray = [3, 3, 3];

let sum = 0;

for (let i = 0; i < firstArray.length; i++) {
  sum += firstArray[i];
}

console.log(sum);

for (let i = 0; i < secondArray.length; i++) {
  sum += secondArray[i];
}

console.log(sum);

// exercise 2

// even Numbers

console.log(`-----Even Numbers-------`);
for (let i = 0; i <= 22; i += 2) {
  if (i === 0) continue;
  console.log(i);
}

// exercise 3

// Reverse the input

console.log(`-----Reverser the input--------`);

const input = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = input.length - 1; i >= 0; i--) {
  console.log(input[i]);
}
