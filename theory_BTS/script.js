"use strict";

// Scoping in Practice
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = ` ${fristName} , You are ${age} , born in ${birthYear} `;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const fristName = "IronMan";
      const str = `Oh You are a millenal, ${fristName}`;
      console.log(str);
    }

    function add(a, b) {
      return a + b;
    }

    output = "New Output";

    console.log(output);
  }

  //console.log(str); // error

  printAge();
  return age;
  // console.log(add(2, 3));
  // error in strictMode;
}

const fristName = "SpiderMan";
console.log(calcAge(1991));
//console.log(age);
//printAge();

//2 . Hosting

//- makes Some type of variables acessible in the code before they declared
