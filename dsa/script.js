"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    straterIndex = 1,
    mainIndex = 0,
    time = "23:00",
    address,
  }) {
    console.log(
      `Order Received....! ${this.starterMenu[straterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// //old way

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// console.log(restaurant.order(0, 0));
// // Nested
// const nested = [1, 2, [3, 4]];
// const [j, , k] = nested;
// console.log(j, k);
// const [q, w, [e, r]] = nested;
// console.log(q, w, e, r);
// // default
// const [l, o, p = 3] = [1, 2];
// console.log(l, o, p);

// // Assignment
// const books = [
//   {
//     title: "Algorithms",
//     author: ["Robert Sedgewick", "Kevin Wayne"],
//     publisher: "Addison-Wesley Professional",
//     publicationDate: "2011-03-24",
//     edition: 4,
//     keywords: [
//       "computer science",
//       "programming",
//       "algorithms",
//       "data structures",
//       "java",
//       "math",
//       "software",
//       "engineering",
//     ],
//     pages: 976,
//     format: "hardcover",
//     ISBN: "9780321573513",
//     language: "English",
//     programmingLanguage: "Java",
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Structure and Interpretation of Computer Programs",
//     author: [
//       "Harold Abelson",
//       "Gerald Jay Sussman",
//       "Julie Sussman (Contributor)",
//     ],
//     publisher: "The MIT Press",
//     publicationDate: "2022-04-12",
//     edition: 2,
//     keywords: [
//       "computer science",
//       "programming",
//       "javascript",
//       "software",
//       "engineering",
//     ],
//     pages: 640,
//     format: "paperback",
//     ISBN: "9780262543231",
//     language: "English",
//     programmingLanguage: "JavaScript",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ["Randal E. Bryant", "David Richard O'Hallaron"],
//     publisher: "Prentice Hall",
//     publicationDate: "2002-01-01",
//     edition: 1,
//     keywords: [
//       "computer science",
//       "computer systems",
//       "programming",
//       "software",
//       "C",
//       "engineering",
//     ],
//     pages: 978,
//     format: "hardcover",
//     ISBN: "9780130340740",
//     language: "English",
//     programmingLanguage: "C",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Operating System Concepts",
//     author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
//     publisher: "John Wiley & Sons",
//     publicationDate: "2004-12-14",
//     edition: 10,
//     keywords: [
//       "computer science",
//       "operating systems",
//       "programming",
//       "software",
//       "C",
//       "Java",
//       "engineering",
//     ],
//     pages: 921,
//     format: "hardcover",
//     ISBN: "9780471694663",
//     language: "English",
//     programmingLanguage: "C, Java",
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: "Engineering Mathematics",
//     author: ["K.A. Stroud", "Dexter J. Booth"],
//     publisher: "Palgrave",
//     publicationDate: "2007-01-01",
//     edition: 14,
//     keywords: ["mathematics", "engineering"],
//     pages: 1288,
//     format: "paperback",
//     ISBN: "9781403942463",
//     language: "English",
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "The Personal MBA: Master the Art of Business",
//     author: "Josh Kaufman",
//     publisher: "Portfolio",
//     publicationDate: "2010-12-30",
//     keywords: ["business"],
//     pages: 416,
//     format: "hardcover",
//     ISBN: "9781591843528",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: "Crafting Interpreters",
//     author: "Robert Nystrom",
//     publisher: "Genever Benning",
//     publicationDate: "2021-07-28",
//     keywords: [
//       "computer science",
//       "compilers",
//       "engineering",
//       "interpreters",
//       "software",
//       "engineering",
//     ],
//     pages: 865,
//     format: "paperback",
//     ISBN: "9780990582939",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: "Deep Work: Rules for Focused Success in a Distracted World",
//     author: "Cal Newport",
//     publisher: "Grand Central Publishing",
//     publicationDate: "2016-01-05",
//     edition: 1,
//     keywords: ["work", "focus", "personal development", "business"],
//     pages: 296,
//     format: "hardcover",
//     ISBN: "9781455586691",
//     language: "English",
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// // const [fristBook, secondBook] = books;
// // console.log(fristBook, secondBook);

// const [, , thirdBook] = books;
// console.log(thirdBook);

// const ratings = [
//   ["rating", 4.19],
//   ["ratingsCount", 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Object Destrucring

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restrauntname,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restrauntname, hours, tags);
// const { menu = [], starterMenu: straters = [] } = restaurant;
// console.log(menu, straters);

// // swap variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects Destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   // time: "22:30",
//   address: "Kent House-No-122",
//   mainIndex: 2,
//   straterIndex: 3,
// });

// Destructing practice
