"use strict";

let r = 2;
let h = 3;

let aleft = Math.PI * Math.pow(r,2);
let aright = Math.PI* r * Math.sqrt( Math.pow(r,2)+Math.pow(h,2));
let a = aleft + aright;

let v = (1/3)* Math.PI * Math.pow(r,2) * h;

console.log("area = " + a);
console.log("volume = "+ v);
