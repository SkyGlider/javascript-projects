
let inputWords = [];
let valid = 0;
let invalid = 0;
let totalvalid = 0;
let userInput = prompt("Enter price of next item: ");

while (userInput != "done"){
  inputWords.push(userInput);

  if (isNaN(userInput)){
    invalid++;

  }
  else{
    valid++;
    totalvalid += parseFloat(userInput);
  }

  userInput = prompt("Enter price of next item: ");
}

console.log("Total Entered: " + inputWords.length);
console.log("Total valid entries: " + valid);
console.log("Total price of valid entries: " + totalvalid);
