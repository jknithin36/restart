"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0);
console.log(0.1 + 0.2);
// CONVERSION
console.log(Number("23"));
console.log(+"23");
//PARSING
console.log(Number.parseInt("30px", 10));
//30
console.log(Number.parseFloat("2.5rem"));
//2.5
console.log(Number.isNaN(23));
console.log(Number.isNaN(+"20X"));
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

// ROUNDING Numbers

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(Math.max(3, 4, 5, 6, 7, 8));
console.log(Math.min(3, 4, 5, 6, 7, 8));
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};

console.log(randomInt(10, 20));

// ROUNDING INTEGERS

console.log(Math.trunc(23.45));
console.log(Math.round(23.9));
console.log(Math.ceil(23.4));
console.log(Math.floor(23.6));
console.log(Math.random(24.9));

// Rounding Decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(2));
console.log(+(3.54).toFixed(0));

// REMAINDER
console.log(5 % 2);
console.log(8 / 3);
console.log(8 % 2);
console.log(9 % 2);

const isEven = (n) => {
  n % 2 === 0 ? console.log("EVEN") : console.log("ODD");
};

isEven(5);

labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
  });
});

// Numeric Seperator

// const diameter = 287,460,000,000;
const diameter = 287_460_000_000;
console.log(diameter);

const transferFee = 15_00;
const trasferFee2 = 1_500;
// const PI = 3._1415;
// const PI = 3.1__415;
//error
const PI = 3.1415;
console.log(PI);
console.log(Number("230000"));
// OK
console.log(Number("23_00"));
// Nan
// BIG INT

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(4567788998764322345668989988n);
console.log(BigInt(1234567890));
// operations
console.log(10000n + 10000n);
// can no mix bigInt with other types of numbers

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(676767676767767676n + " Really Big");
console.log(10n / 3n);
console.log(10 / 3);

// coercion in js
let x = 10;
let y = "20";
const z = x + y;
console.log(typeof z);
// output will be String because when we add integer with string the output will be string it will conact both values instead of adding them

let x1 = "10";
let y2 = 2;
const z1 = x1 * y2;
console.log(z1);
console.log(typeof z1);
// now number

const z3 = y - x;
console.log(typeof z3);
// output will be number

const z4 = y / x;
console.log(typeof z4);
// Create a function that takes an array of numbers as input and returns the largest number in the array.

const largerNumber = function (arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let val = arr[0];
  arr.forEach(function (i) {
    if (i > val) {
      val = i;
    }
  });

  return val;
};

console.log(largerNumber([1, 2, 3, 4]));

// Write a function that takes a string as input and returns the string reversed.

const stringReverse = function (str) {
  const strSplit = str.split("");
  const reverseArray = strSplit.reverse();
  return reverseArray.join("");
};
console.log(stringReverse("Hello"));

const splitA = "hello".split("");
console.log(splitA);
console.log(splitA.at(0));

const anotherOne = (str) => {
  let arr = [];
  const splitArray = str.split("");
  for (const x of splitArray) {
    arr.unshift(x);
  }
  return arr.join("");
};

console.log(anotherOne("Hello"));

// Implement a function that takes an array of strings and returns a new array with the lengths of those strings.

// array of strings ----> new array with lengths

const strlengthOfArray = function (strArr) {
  let arr = [];
  for (const x of strArr) {
    arr.push(x.length);
  }

  return arr;
};

console.log(strlengthOfArray(["Hello", "I", "am", "from", "India"]));

//Create a function that takes an array of numbers and returns the sum of all positive numbers in the array.

// array of numbers ---> sum of all positve numbers

const positveSum = function (arr) {
  const onlyPositive = arr.filter((i) => {
    return i > 0;
  });

  const output = onlyPositive.reduce((acc = 0, i) => {
    return acc + i;
  });

  return output;
};

console.log(positveSum([1, 1, 1, -1]));

// DATES
