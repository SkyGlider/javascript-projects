function kgToLbs() {
    val = document.getElementById("kgIn").value;

    if (isNaN(val)){
      alert("invalid");
    }
    else {
      lbsOutput.value = (val * 2.20462).toFixed(3);
    }

}

function lbsToKg() {

    val = document.getElementById("lbsIn").value;

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

lbsButton.onclick = kgToLbs;
kgButton.onclick = lbsToKg;
