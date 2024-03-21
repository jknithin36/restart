"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number 🎉";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;

// initializing a random number between 1 to 20
let number = Math.trunc(Math.random() * 20) + 1;
// intializing score to 20
let score = 20;
// initializing highScore to 0
let highScore = 0;

// selecting check class and adding eventListerner click event
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);
  if (!guess) {
    document.querySelector(".message").textContent = "something went wrong 🚫";
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;

    document.querySelector(".message").textContent =
      "Congrats you gussed the correct Number 🎉";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // High Score Logic
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High ...!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game ...!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "you enterd number lesser than secret number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game ...!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
