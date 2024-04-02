"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// //2

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = "";
//   movements.forEach((cur, i) => {
//     const type = cur > 0 ? "deposit" : "withdrawal"; // Checking each movement individually
//     const html = `<div class="movements__row">
//     <div class="movements__type movements__type--${type}">${i + 1} ${type} ${
//       type === "deposit" ? "deposit" : "withdrawal"
//     }</div>

//     <div class="movements__value"> ${cur}$</div>
//   </div>`;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };

// // create UserNames

// const createUserName = function (accs) {
//   accs.forEach((acc) => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((i) => i[0])
//       .join("");
//   });

//   // const userLower = user.toLowerCase().split(" ");
//   // console.log(userLower);

//   // const userName = userLower.map((i) => {
//   //   return i[0];
//   // });
//   // const finalUserName = userName.join("");
//   // return finalUserName;
// };

// createUserName(accounts);

// // FINAL BALANCE

// const calcAndPrintBalance = function (acc) {
//   acc.balance = acc.movements.reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);

//   labelBalance.textContent = `${acc.balance} ₹`;
// };

// // calcAndPrintBalance(account1.movements);

// // CALC DISPLAY SUMMARY

// const calcSummary = function (acc) {
//   const incomes = acc.movements
//     .filter((i) => i > 0)
//     .reduce((acc = 0, i) => acc + i);

//   labelSumIn.textContent = `${incomes} $`;

//   const outcome = acc.movements
//     .filter((i) => i < 0)
//     .reduce((acc, i) => acc + i);

//   labelSumOut.textContent = `${Math.abs(outcome)} $`;
//   const intrest = acc.movements
//     .filter((i) => i > 0)
//     .map((deposits) => (deposits * acc.interestRate) / 100)
//     .filter((i) => i >= 1)
//     .reduce((acc = 0, i) => acc + i);

//   labelSumInterest.textContent = `${intrest} $`;
// };

// // calcSummary(account1.movements);
// ///
// //practice without function
// // const user = "Steven Thomas Williams";

// // const userLower = user.toLowerCase().split(" ");
// // console.log(userLower);

// // const userName = userLower.map((i) => {
// //   return i[0];
// // });
// // const finalUserName = userName.join("");
// // console.log(finalUserName);

// // EVENT HANDLERS

// let currentAccount;
// btnLogin.addEventListener("click", function (e) {
//   // prevent form from sumbitting
//   e.preventDefault();
//   currentAccount = accounts.find((acc) => {
//     return acc.username === inputLoginUsername.value;
//   });

//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // DISPALY UI AND WELCOME MESSAGE
//     labelWelcome.textContent = `Welcome Back, ${
//       currentAccount.owner.split(" ")[0]
//     }`;

//     containerApp.style.opacity = 100;

//     // cleaaring input feilds
//     inputLoginUsername.value = inputLoginPin.value = "";
//     // DISPLAY MOVEMENTS
//     displayMovements(currentAccount.movements);
//     // DISPLAY Balance
//     calcAndPrintBalance(currentAccount);
//     // DiSPLAY SUMMARY
//     calcSummary(currentAccount);
//   }
// });

// // TRANSFERING AMOUNTS

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAccount = accounts.find(function (acc) {
//     return acc.userName === inputTransferTo.value;
//   });

//   inputTransferAmount.value = inputTransferTo.value = "";
//   if (
//     amount > 0 &&
//     currentAccount.balance >= amount &&
//     receiverAccount?.userName !== currentAccount.userName
//   ) {
//     currentAccount.movements.push(-amount);
//     receiverAccount.movements.push(amount);
//     //updateUI
//     // updateUI(currentAccount);
//   }
// });
// /////////////////////////////////////////////////
// // LECTUREs

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// // slice
// let arr = ["a", "b", "c", "d", "e"];
// //doesnot mutate
// // returns a new array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE
// //mutate
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// //mutate
// const arr2 = ["a", "b", "c", "d", "e"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// // we can use spreadoperator to concat the arrays

// // JOIN
// console.log(letters.join(" - "));

// //at method

// const arr3 = [12.56, 78];
// console.log(arr3[0]);
// console.log(arr.at(0));

// console.log(arr3[arr.length - 1]);
// console.log(arr3.slice(-1));
// console.log(arr3.at(-1));

// // it also works on strings
// const spiderMan = "HELLo";
// console.log(spiderMan.at(0));

// // FOR EACH LOOP
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // recap of forof
// // for (const movement of movements1) {
// for (const [i, val] of movements1.entries()) {
//   if (val > 0) {
//     console.log(`you deposited ${val}`);
//   } else {
//     console.log(`you deposited ${val}}`);
//   }
// }

// // Current Element values, index, array
// movements1.forEach((i, index, arr) => {
//   console.log(i, index + 1, arr);
// });
// // continue and break dont work on foreach loop

// // on MAPS ON SETS

// currencies.forEach(function (i, key, map) {
//   console.log(i, key, map);
// });

// const currenicesUnique = new Set(["USD", "INR", "CAD", "EUR", "INR", "USD"]);

// currenicesUnique.forEach((val, key, map) => {
//   console.log(`${key}: ${val}`, map);
// });
// //forEACH for sets dont value key value it is just for convention

// // MAP METHOD

// const eurToUsd = 1.1;
// const movementsUSD = movements1.map((cur) => {
//   return cur * eurToUsd;
// });
// console.log(movements1);
// console.log(movementsUSD);

// const arr4 = [];

// for (const val of movements1) {
//   const element = val * 1.1;
//   arr4.push(element);
// }

// console.log(arr4);

// // Three parameters of map indes
// const map1 = movements1.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `positive`;
//   } else {
//     return `negative`;
//   }
// });
// console.log(map1);

// // filter Array

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposits);

// const withdrawls = movements.filter((i) => i < 0);
// console.log(withdrawls);

// // reduce
// // it will combine all aray values and gt the single value
// const addmovements = movements.reduce((accumulator = 0, i) => {
//   console.log(`ACCUMULATOR : ${accumulator} , currentValue : ${i}

//   = ${accumulator} + ${i}`);
//   return accumulator + i;
// });

// console.log(addmovements);

// // MAX VALUE PF ARRAY

// const maxValue = movements.reduce((acc = movements[0], i) => {
//   if (acc > i) {
//     return acc;
//   } else {
//     return i;
//   }
// });
// console.log(`The MAX VALUE is ${maxValue}`);

// // CHAINING METHODS
// //PIPELIE OF METHODS
// const total = movements
//   .filter((i) => {
//     return i > 0;
//   })
//   .map((i) => i * eurToUsd)
//   .reduce((acc = 0, i) => acc + i);
// console.log(Math.trunc(total));

// // find method
// // it will not return a new array, it will only one condition occurence element
// const findArray = movements.find(function (mov) {
//   return mov < 0;
// });
// console.log(findArray);
// console.log(accounts);

// const egObj = accounts.find((acc) => {
//   return acc.owner === "Jessica Davis";
// });
// console.log(egObj);
// // some and every methods
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

// //2.
// const anyDeposits1 = movements.every((mov) => {
//   return mov > 0;
// });
// console.log(anyDeposits);

// // seperate callBack
// const depsoit = (mov) => mov > 0;
// console.log(movements.some(depsoit));

// // FLAT AND FLAT MAP METHOD
// const arr7 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr7.flat());
// const arrDeep = [
//   [1, [2, 3]],
//   [4, [5, 6]],
//   [[7, 8], 9],
// ];

// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// const all = accountMovements.flat();

// flatMap - combination of both map and flat

// 1.flat

const nestedArrayO = [1, 2, 3, 4, 5, 6, [7, 8, 9], [10, 11], [12]];
console.log(nestedArrayO);
console.log(nestedArrayO.flat());

// Points to be noted :
// It unpacks nested array into single array but only with default depth 1
const nestedDeepArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  [7, 8, 9],
  [10, 11],
  [12, [13, [14]]],
];

console.log(nestedArrayO);
console.log(nestedDeepArray.flat());
// solution
console.log(nestedDeepArray.flat(3));

//2. flatMap

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArray = nestedArray.flatMap((innerArray) =>
  innerArray.map((num) => num * 2)
);

console.log(flattenedArray);

const numbers = [2, 3, 4, 1, 7, 9, 5];
console.log(numbers.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.sort((a, b) => {});
