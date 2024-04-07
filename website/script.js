"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// btn scroll
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation

// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// Here it 3 loops three times

// with event deligation

//1. add event listner to common parent

//2 . determine what element orginated event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// page navigation

// // select Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector(".header");
// const allSection = document.querySelectorAll(".section");
// console.log(allSection);
// // all gives nodelist
// document.getElementById("section--1");
// const allBtn = document.getElementsByTagName("button");
// console.log(allBtn);
// // It returns a Html Collection
// // it will update automatically
// console.log(document.getElementsByClassName("btn"));

// // Creating And Intersting Elemnts
// // .insertAdjacentHTML;
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = "we use cookies for improved functionality and analytics";
// message.innerHTML = `we use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it</button>`;
// // header.prepend(message);
// header.append(message);
// // if we want both
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Delete Elemnts

// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
//   // old method (we need to select from parent element)
//   // message.parentElement.removeChild(message);
// });
// // styles and attributes and classes

// //1. styles

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
// console.log(message.style.width);
// // it only works foe what we set here

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// // document.documentElement.style.setProperty("--color-primary", "orangered");

// //2. attributes(src, alt,class,id, href,------etc)

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("name", "spiderMan");
// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// // classes

// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toogle();
// // logo.classList.contains();
// //don't use
// // logo.className = "spider";

// // working on project

// // smooth scrooling

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });

//   section1.scrollIntoView({ behavior: "smooth" });
// });

// // Events

// const h1 = document.querySelector("h1");

// // h1.addEventListener("mouseenter", (e) => {
// //   console.log("mouseEntered");
// // });

// const alert1 = function (e) {
//   console.log("You Entered");
// };
// h1.addEventListener("mouseenter", alert1);

// setTimeout(() => h1.removeEventListener("mouseenter", alert1), 3000);
// //old way
// // h1.onmouseenter = (e) => {
// //   console.log("Mouse Entered");
// // };

// // //Bubbling and capturing

// // //rgb(255,255,255)

// // const randomInt = (min, max) =>
// //   Math.floor(Math.random() * (max - min + 1) + min);

// // const randomColor = () =>
// //   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// // document.querySelector(".nav__link").addEventListener("click", function (e) {
// //   this.style.backgroundColor = randomColor();
// //   console.log("Link", e.target);
// //   // stop propagation
// //   // e.stopPropagation();
// // });
// // document.querySelector(".nav__links").addEventListener("click", function (e) {
// //   this.style.backgroundColor = randomColor();
// //   console.log("Container", e.target);
// // });
// // document.querySelector(".nav").addEventListener(
// //   "click",
// //   function (e) {
// //     this.style.backgroundColor = randomColor();
// //     console.log("Nav", e.target);
// //   },
// //   false
// // );
