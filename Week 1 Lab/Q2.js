"use strict";

let a = 4;
let b = 20;
let c = 16;

let plus = -b + Math.sqrt( Math.pow(b,2)- 4*a*c );
let minus = -b - Math.sqrt( Math.pow(b,2)- 4*a*c );

let r1 = plus/(2*a);
let r2 = minus/(2*a);

console.log("root 1 = " + r1);
console.log("root 2 = " + r2);
