"use strict";

function daySuffix (day) {

  for (var i = 1; i < 32; i++) {

    if (i == day) {

      if (day == 1 || day == 21 || day == 31) {
        return day + "st";
      }
      else if (day == 2 || day == 22) {
        return day + "nd";
      }
      else if (day == 3 || day == 23){
        return day + "rd";
      }
      else{
        return day + "th";
      }
    }
  }
  return null;
}

for (var i = 1; i < 32; i++) {
  console.log(i + " : " + daySuffix(i));
}

let testArray = ["dog", -1, 100, "d0g"];
for (var i = 0; i < testArray.length; i++) {
  console.log(testArray[i] + " : " + daySuffix(testArray[i]));
}
