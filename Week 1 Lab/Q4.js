"use strict";

let number1, number2;
// Generate a random number for number1 and number2 each time this code is run
number1 = Math.floor((Math.random() * 10) + 1);
number2 = Math.floor((Math.random() * 10) + 1);
console.log("number1 = " + number1 + " number2 = " + number2);
// TODO: INSERT your code on the next line to swap the values in number1 and number2
let temp = number1;
number1 = number2;
number2 = temp;
console.log("number1 = " + number1 + " number2 = " + number2);
