"use strict";

let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let mthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let d  = new Date();

let dayInt = d.getDay();
let datInt = d.getDate();
let mthInt = d.getMonth();
let yInt = d.getFullYear();
let hInt = d.getHours();
let mInt = d.getMinutes();
let sInt= d.getSeconds();

console.log(dayArray[dayInt] + " " + datInt + " " + mthArray[mthInt] +" " + yInt + ", " + hInt + ":" + mInt + ":" + sInt);
