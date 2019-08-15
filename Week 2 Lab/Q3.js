"use strict";

let rad = 1;
let a = Math.PI * Math.pow(rad,2);
let b = 2 * Math.PI * rad;
let ratio = a/b;

do {

  console.log("Radius = " + rad + ", Ratio = " + ratio)
  rad++;
  let a = Math.PI * Math.pow(rad,2);
  let b = 2 * Math.PI * rad;
  ratio = a/b;

} while (ratio < 30);
