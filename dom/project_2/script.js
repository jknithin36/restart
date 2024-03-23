"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // dont_use dot in classList
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}
// ********* we loop through each of these buttons and attach a click event listener. When clicked, each button calls the openModal function, showing the modal and overlay. *************//

btnCloseModal.addEventListener("click", closeModal);
// we shouls give parathanes here in eventListner for funtction

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  // console.log("A Key is pressed");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
