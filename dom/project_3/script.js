"use strict";

// Selecting_Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// functionalities
btnRoll.addEventListener("click", () => {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // if 1 switch to next player
  if (dice !== 1) {
    // add dice to curent score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next Player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
