let rad = 1;
let ratio = 0.5;

do {

  console.log("Radius = " + rad + ", Ratio = " + ratio)
  rad++;
  a = Math.PI * Math.pow(rad,2);
  b = 2 * Math.PI * rad;
  ratio = a/b;
  
} while (ratio < 30);
