function kgToLbs() {
    val = kgInput.value;

    if (isNaN(val)){
      alert("invalid");
    }
    else {
      lbsOutput.value = (val * 2.20462).toFixed(3);
    }

}

function lbsToKg() {

    val = lbsInput.value;

    if (isNaN(val)){
      alert("invalid");
    }
    else {
      kgOutput.value = (val / 2.20462).toFixed(3);
    }
}

let lbsButton = document.getElementById("lbsBtn");
let kgButton = document.getElementById("kgBtn");
let kgOutput = document.getElementById("kgOut");
let lbsOutput = document.getElementById("lbsOut");
let kgInput = document.getElementById("kgIn");
let lbsInput = document.getElementById("lbsIn");

lbsInput.onchange = lbsToKg;
kgInput.onchange = kgToLbs;

kgButton.onmouseup = lbsToKg;
lbsButton.onmousedown = kgToLbs;

//if using onmouseup and onousedown, it may not be a complete click
