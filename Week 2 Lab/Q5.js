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
for (i = 0; i<data.length; i++){

  currentSem = data[i];
  console.log("Semester: " + currentSem.semester + ", " + currentSem.year);
  unitArray = currentSem.units;

  var j;
  for (j=0; j<unitArray.length; j++){
    console.log(unitArray[j].code + ": " + unitArray[j].mark + " (" + unitArray[j].grade + ")")
  }

  console.log("");
}
