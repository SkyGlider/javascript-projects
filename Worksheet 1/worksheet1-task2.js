"use strict";

const GPA_LOOKUP = {
    "HD": 4,
    "D": 3.0,
    "C": 2.0,
    "P": 1.0,
    "N": 0.3,
};

let studentList = [
    {
        name: "Oliver",
        results:[
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
         ]
    },
    {
        name: "Jack",
        results :[
            {
                semester: 1,
                year: 2018,
                units: [
                    {
                        code: "ENG1001",
                        mark: 80,
                        grade: "HD"
                    },
                    {
                        code: "ENG1005",
                        mark: 70,
                        grade: "D"
                    },
                    {
                        code: "ENG1060",
                        mark: 60,
                        grade: "C"
                    },
                    {
                        code: "MAT1830",
                        mark: 50,
                        grade: "P"
                    },
                ]
            },
            {
                semester: 2,
                year: 2018,
                units: [
                    {
                        code: "ENG1002",
                        mark: 60,
                        grade: "C"
                    },
                    {
                        code: "ENG1003",
                        mark: 86,
                        grade: "HD"
                    },
                    {
                        code: "ENG1021",
                        mark: 50,
                        grade: "P"
                    },
                    {
                        code: "ENG1051",
                        mark: 55,
                        grade: "P"
                    },
                ]
            },
            {
                semester: 1,
                year: 2019,
                units: [
                    {
                        code: "ECE2071",
                        mark: 72,
                        grade: "D"
                    },
                    {
                        code: "ECE2131",
                        mark: 70,
                        grade: "D"
                    },
                    {
                        code: "ENG2005",
                        mark: 83,
                        grade: "HD"
                    },
                    {
                        code: "ENG2081",
                        mark: 90,
                        grade: "HD"
                    },
                ]
            }
        ]
    },
    {
        name: "Ethan",
        results :[
           {
                semester: 1,
                year: 2019,
                units: [
                    {
                        code: "ECE2071",
                        mark: 50,
                        grade: "P"
                    },
                    {
                        code: "ECE2131",
                        mark: 52,
                        grade: "P"
                    },
                    {
                        code: "ENG2005",
                        mark: 53,
                        grade: "P"
                    },
                    {
                        code: "ENG2081",
                        mark: 56,
                        grade: "P"
                    },
                ]
            }
        ]
    }
];

function getGPA(person){

  var gradexcp = 0;
  var totalcp = 0;

  for (var i = 0; i < person.results.length; i++) {
    let currentSem = person.results[i];

    for (var j = 0; j < currentSem.units.length; j++) {
      gradexcp += GPA_LOOKUP[currentSem.units[j].grade]*6;
      totalcp += 6;

    }
  }

  return (gradexcp/totalcp).toFixed(2)
}

function getWAM(person){

  var wamCount = 0;
  var wamFinal;
  var totalcp = 0;

  for (var i = 0; i < person.results.length; i++) {

    let currentSem = person.results[i];

    for (var j = 0; j < currentSem.units.length; j++) {

      totalcp += 6;

      if (i+1 < 3) {
        wamCount += currentSem.units[j].mark * 6 * 0.5;
      }
      else {
        wamCount += currentSem.units[j].mark * 6;
      }

    }
  }

  if (i+1 < 3) {
    wamFinal = wamCount/(totalcp * 0.5);
  }
  else {
    wamFinal = (wamCount)/(totalcp-24);
  }

  return wamFinal.toFixed(3);
}

for (var i = 0; i < studentList.length; i++) {
  let thisGPA = getGPA(studentList[i]);
  let thisWAM = getWAM(studentList[i]);

  console.log(studentList[i].name);
  console.log("Overall GPA : " + thisGPA);
  console.log("Overall WAM : " + thisWAM);
}
