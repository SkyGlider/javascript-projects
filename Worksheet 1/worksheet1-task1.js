"use strict";

const GPA_LOOKUP = {
    "HD": 4,
    "D": 3.0,
    "C": 2.0,
    "P": 1.0,
    "N": 0.3,
};

let data = [
    {
        semester: 1,
        year: 2018,
        units: [
            {
                code: "ENG1001",
                mark: 82,
                grade: "HD"
            },
            {
                code: "ENG1005",
                mark: 95,
                grade: "HD"
            },
            {
                code: "ENG1060",
                mark: 72,
                grade: "D"
            },
            {
                code: "MAT1830",
                mark: 64,
                grade: "C"
            },
        ]
    },
    {
        semester: 2,
        year: 2018,
        units: [
            {
                code: "ENG1002",
                mark: 98,
                grade: "HD"
            },
            {
                code: "ENG1003",
                mark: 84,
                grade: "HD"
            },
            {
                code: "ENG1021",
                mark: 50,
                grade: "P"
            },
            {
                code: "ENG1051",
                mark: 69,
                grade: "C"
            },
        ]
    },
    {
        semester: 1,
        year: 2019,
        units: [
            {
                code: "ECE2071",
                mark: 79,
                grade: "D"
            },
            {
                code: "ECE2131",
                mark: 74,
                grade: "D"
            },
            {
                code: "ENG2005",
                mark: 73,
                grade: "D"
            },
            {
                code: "ENG2081",
                mark: 86,
                grade: "HD"
            },
        ]
    }
];

var i;
var gradexcp_cum = 0;
var total_cp = 0;
var semCount = 0;
var wamCount = 0;
var wamFinal = 0;

for (i = 0; i<data.length; i++){


  let currentSem = data[i];
  console.log("Semester: " + currentSem.semester + ", " + currentSem.year);

  let unitArray = currentSem.units;
  var j;
  for (j=0; j<unitArray.length; j++){
    console.log(unitArray[j].code + ": " + unitArray[j].mark + " (" + unitArray[j].grade + ")");
    gradexcp_cum += GPA_LOOKUP[unitArray[j].grade] *6;
    total_cp += 6;

    if (i+1 < 3) {
      wamCount += unitArray[j].mark * 6 * 0.5;
    }
    else {
      wamCount += unitArray[j].mark * 6;
    }

  }

  console.log("");
}

console.log("Overall GPA = " + (gradexcp_cum/total_cp).toFixed(2));

if (i+1 < 3) {
  wamFinal = wamCount/(total_cp * 0.5);
}
else {
  wamFinal = (wamCount)/(total_cp-24);
}
console.log("Overall WAM = " +wamFinal);
