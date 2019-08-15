let output = "";
let number1,number2;

number1 = 4;
number2 = 5;

if (number1 === number2)
{
  output += "The two numbers are equal.";
}

else if (number1 > number2)
{
  output += number1 + " is bigger than " + number2;
}

else
{
  output += number2 + " is bigger than " + number1;
}

console.log(output);
