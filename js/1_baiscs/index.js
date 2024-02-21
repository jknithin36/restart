// // Hello World

// console.log("Hello World");

// let js = "Amazing";


// // if (js==="Amazing"){
// //   alert("JS IS FUN !");
// // }
// js = "boring";

// if (js==="Amazing"){
//   alert("JS IS FUN !");
// }

// console.log(46+2-5);


// // 1. Values and variables

// let fristName = "Spider";
// console.log(fristName);

// // Example:

// let country = "india";
// let continrnt = "asia";
// let population = "140";

// console.log("Hello!.✌️, You are in " + country + " Which is in " + continrnt + " Continent, With a population of " + population);

// console.log("-------Values and Vailables------End" );

// // 2. Data Types

// console.log(true);
// let jsIsFun = true;
// console.log(jsIsFun);
// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "spiderMan");
// //changing the value datatype
// jsIsFun = "Yes";
// console.log(jsIsFun);
// let year;
// console.log(year);
// console.log(typeof year);
// year=2023;
// console.log(typeof year);
// // there is an buh in typeof null, conosle say it was object
// console.log(typeof null);

// // eg:
// let isIsland = false;
// let language;
// console.log(typeof language);
// console.log(typeof isIsland);
// console.log(typeof continrnt);
// console.log(typeof 2001);


// console.log("-------Data Types End------End" );
// // 3. Var , let, const

// let fristJob = "student";
// const currentJob = "spiderMan";
// console.log(fristJob);
// console.log(currentJob);
// fristJob= "Lazy boy";
// console.log(fristJob);

// // Eg:
// language = "Gigidi-Giganya";
// const birthYear = 2001;
// console.log(language);
// console.log(birthYear);
// console.log("-------var,const,let------End" );

// // 4. Basic Operators

// const now = 2024;
// const agePeter = now - 2001;
// console.log(agePeter);

// console.log(agePeter *2, agePeter/2, agePeter-10, 2**3);

// // To concate Strings using +
// const lastName = "Man";
// console.log(fristName+ " " + lastName);

// //Assignment Operators

// let x = 10 *5;
// x+=10;
// x-=10;
// x++;
// x--;
// // x = x+10;
// console.log(x);

// // compasrison operators

// console.log(agePeter>x);
// console.log(agePeter>=18);
// console.log(now -2001 > now - 2018);

// // Eg:
// console.log("Population: ", population/ 2);
// population++;
// console.log(population);
// console.log(60> population);
// const avgPopulation = 33;
// console.log(population<avgPopulation);
// console.log(country + "is in " + continrnt + ", and its " + population +" million population speak hindi");

// // 5. Operator Precedence

// let a, b;
// a = b= 25 -10-5;
// console.log(a,b);
// const avgAge = (agePeter + x)/2;
// console.log(agePeter, x,avgAge);

// // 6. Template Literals

// const customerName = "Abhi";
// const job = "Doctor";
// const yearOfBirth = 2002;

// console.log(`I'm ${customerName}, and my job is ${job} and my age is ${now - yearOfBirth}`);

// CHAPTER 2 (Decisions)

// 7. If Else

// const age =  15;
// if(age>=18){
// console.log("You can Start Driving ☺️ ")
// }else{
//   console.log(`sorry You have to wait until ${18- age} years`);
// }

// const birthyear = 2001;
// let century;

// if(birthyear<=2000){
//   century = 20;
// }else{
//   century = 21;
// }

// console.log(century);

// 8. Conversion and coericion

// const inputyear = "1999";
// console.log(Number(inputyear) + 18);
// console.log(inputyear);

// console.log(typeof(String(2001)));

// // type coercion

// console.log(`I am ` + 23 + ` years old`);
// console.log("23" - "10" -3);
// console.log("23" + "10" +3);

// let n = "1" + 1; // String
// n-=1; // Number
// console.log(n);

// 9. Truthy and Falsy values

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));

// const money = 0;

// if(money){
//   console.log("Don't spend it all");
// }else{
//   console.log("You should Work");
// }

// let height;

// if(height){
//   console.log("Yah ... it's defined");
// }else{
//   console.log("not defined...");
// }

// 10. Equality Operators

// const ageO = 18;

// if(ageO === 18){
//   console.log("You just became an adult");
//}
// === Strict Equal
// == loose Equal

// console.log("18"== 18);

// const favorite = Number(prompt("What's your favorite number? "));

// console.log(favorite);
// console.group(typeof(favorite));

// if(favorite===23){
//   console.log("Great it's a amazing Number");
// }else{
//   console.log("Sorry");
// }

// 12.Bollean Logic 

// const hasDrivingLicense = true;
// const hasGoodVision = true;

// true && true = true
// console.log(hasDrivingLicense&& hasGoodVision);
// true // false = true
// console.log(hasDrivingLicense||hasGoodVision);
// console.log(!hasDrivingLicense);
// if(hasDrivingLicense&&hasGoodVision){
//   console.log("You are able to drive");
// }else{
//   console.log("SomeOne Else Should Drive");
// }

// const isTired = false;
// console.log(hasDrivingLicense|| hasGoodVision || isTired);
// console.log(hasDrivingLicense&& hasGoodVision &&isTired);

// if(hasDrivingLicense&&hasGoodVision && !isTired){
//   console.log("You are able to drive");
// }else{
//   console.log("SomeOne Else Should Drive");
// }

// 13. Switch Statement

// const value = Number(prompt("Hello..! Welcome to the world of Luck"));

// switch(value){
//   case 10: console.log("You won a lottlety of 200K$");
//   break;
//   case 77: console.log("You won a lottery of 29k$");
//   break;
//   default:
//     console.log("Sorry... better luck next Time....");

// }

// if(value===10){
//   console.log("Yow won a lottery");
// }else if(value=== 77){
//   console.log("you won");
// }else{
//   console.log("sorry");
// }


// 14. Ternary Operator
// const day = "monday";

// const x = day === "monday" ? "Sleep..." : "Work....";
// console.log(x);

// <----BASICS 2--------->

'use strict';

let hasDrivingLicense = false;
const passTest = true;

if(passTest) hasDrivingLicense = true;

if(hasDrivingLicense) console.log("you can drive....");


// 1. Functions

