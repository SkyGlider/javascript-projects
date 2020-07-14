"use strict";

const GPA_LOOKUP = {
    "HD": 4,
    "D": 3.0,
    "C": 2.0,
    "P": 1.0,
    "N": 0.3,
};


let enrolRecord = [
{
    semester: 1,
    year: 2019,
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
    year: 2019,
    units: [
        {
            code: "ENG1002",
        },
        {
            code: "ENG1003",
        },
        {
            code: "ENG1021",
        },
        {
            code: "ENG1051",
        },
    ]
}
];

let enrolRecord2 = [
{
    semester: 1,
    year: 2019,
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
    year: 2019,
    units: [
        {
            code: "ENG1002",
        },
        {
            code: "ENG1003",
        },
        {
            code: "ENG1021",
        },
        {
            code: "ENG1051",
        },
    ]
}
];

class Student
{
  constructor(studentID, firstName, lastName,dateOfBirth,gender,country,address,eMail,phoneNumber, record)
  {
    this._studentID = studentID;
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth= dateOfBirth;
    this._gender = gender;
    this._country = country;
    this._address = address;
    this._eMail = eMail;
    this._phoneNumber = phoneNumber;
    this._enrolmentRecord = record;
  }

  get studentID()
  {
    return this._studentID;
  }

  set studentID(newID)
  {
    if(newID.length === 8)
    {
      this._studentID = newID;
    }
    else
    {
      alert("Invalid input!");
    }
  }

  get firstName()
  {
    return this._firstName;
  }

  set firstName(newFirstName)
  {
    this._firstName = newFirstName;
  }

  get lastName()
  {
    return this._lastName;
  }

  set lastName(newLastName)
  {
    return this._lastName;
  }

  get dateOfBirth(){
    return this._dateOfBirth;
  }

  set dateOfBirth(newDOB){
    this._dateOfBirth = newDOB;
  }

  get gender(){
    return this._gender;
  }

  set gender(newGender){
    this._gender = newGender;
  }
  get country(){
    return this._country;
  }

  set country(newPlace){
    this._country = newPlace;
  }

  get address(){
    return this._address;
  }

  set address(newPlace){
    this._address = newPlace;
  }
  get eMail(){
    return this._eMail;
  }

  set eMail(newMail){
    this._eMail = newMail;
  }

  get phoneNumber(){
    return this._phoneNumber;
  }

  set phoneNumber(newNumber){
    this._phoneNumber = newNumber;
  }

  get enrolRecord()
  {
    return this._enrolmentRecord;
  }

  set enrolRecord(newRecord)
  {
    this._enrolmentRecord = newRecord;
  }

_calculateGPA()
{
    let totalGradeValue = 0;
    let totalCreditPoint = 0;

    for(let i = 0; i < this._enrolmentRecord.length; i++)
    {
        for(let j = 0; j < this._enrolmentRecord[i].units.length; j++)
        {
            if(this._enrolmentRecord[i].units[j].mark !==undefined)
            {
                totalGradeValue += GPA_LOOKUP[this._enrolmentRecord[i].units[j].grade] * 6;
                totalCreditPoint += 6;
            }
        }

    }

    let GPA = totalGradeValue / totalCreditPoint;

    return GPA.toFixed(2);

}

_calculateWAM()
{
    let firstYearMark = 0;
    let laterYearMark = 0;
    let firstYearCredit = 0;
    let laterYearCredit = 0;

    for(let i = 0; i < this._enrolmentRecord.length; i++)
    {
        for(let j = 0; j < this._enrolmentRecord[i].units.length; j++)
        {
            if(this._enrolmentRecord[i].units[j].mark !==undefined)
            {
                    if(this._enrolmentRecord[i].units[j].code.charAt(3)=== "1")
                    {
                        firstYearMark +=  this._enrolmentRecord[i].units[j].mark * 6 * 0.5;
                        firstYearCredit += 6 * 0.5;
                    }
                    else
                    {
                        laterYearMark +=  this._enrolmentRecord[i].units[j].mark * 6 * 1.0;
                        laterYearCredit += 6 * 1.0;
                    }

            }
        }
    }

    let WAM = (firstYearMark + laterYearMark) / (firstYearCredit + laterYearCredit);

    return WAM.toFixed(3);
}


_searchForUnit(unitCode){

  let unitFoundAtIndex = -1;
  let daResults = this._enrolmentRecord[this._enrolmentRecord.length - 1];

  if (daResults.units.length >= 1){
    unitFoundAtIndex = daResults.units.findIndex(
      function (item){
        return item.code == unitCode;
      }
    );
  }

  return unitFoundAtIndex;
}

_getGradeFromMark(marcus){
  if(isNaN(marcus) || marcus > 100 || marcus < 0){
    return null;
  }
  else if (marcus < 50){
    return "N";
  }
  else if (marcus < 60){
    return "P";
  }
  else if (marcus < 70){
    return "C";
  }
  else if (marcus < 80){
    return "D";
  }
  else {
    return "HD";
  }
}


enrolUnit(unitCode){
  let currentSem = this._enrolmentRecord.length - 1;
  let listOfUnits = this._enrolmentRecord[currentSem].units;
  let numOfUnits = listOfUnits.length;
  let unitEnrolled = this._searchForUnit(unitCode);

  if (unitEnrolled == -1 && numOfUnits < 4){
    let newUnit = { code:unitCode, };
    listOfUnits.push(newUnit);
  }
}

removeUnit(unitCode){
  let currentSem = this._enrolmentRecord.length - 1;
  let location = this._searchForUnit(unitCode);
  if (location != -1){
    this._enrolmentRecord[currentSem].units.splice(location,1);
  }
}

updateMark(unitCode, mark){
  let markValidation = this._getGradeFromMark(mark);
  let location = this._searchForUnit(unitCode);

  if(markValidation != null && location != -1){
    let replacedUnit = {
      code: unitCode,
      mark: mark,
      grade: markValidation
    }
    this._enrolmentRecord[this._enrolmentRecord.length - 1].units[location] = replacedUnit;
  }
}

 printRecord(){
   let output="";
   output += "<h3>Student Name:</h3> " + this._firstName + ", " + this._lastName.toUpperCase()+ "<br>";
   output += "<small><b>Date Of Birth</b>:  " + this._dateOfBirth + "</small><br>";
   output += "<b>Gender</b>: " + this._gender + "<br>";
   output += "<b>Country</b>: " + this.country + "<br>";
   output += "<b>Address</b>: " + this.address + "<br>";
   output += "<b>Email</b>: " + this._eMail;

   return output;
 }

 printStudentRecord()
{
    let output = "<h2>Student Enrolment Record</h2>";
    output += "<b>Student</b>: " + this._firstName + ", " + this._lastName.toUpperCase() + "(" + this._studentID + ")";

    //<h3>Semester: 1, 2019</h3>
    //<b>ENG1001</b>: 82 (HD)

    for(let i = 0; i < this._enrolmentRecord.length; i++ )
    {
        output += "<h3>Semester: " + this._enrolmentRecord[i].semester + ", " + this._enrolmentRecord[i].year + "</h3>"

        for(let j = 0; j < this._enrolmentRecord[i].units.length; j++)
        {
            if(this._enrolmentRecord[i].units[j].mark===undefined)
            {
                output += "<b>" + this._enrolmentRecord[i].units[j].code + "</b><br> ";
            }
            else
            {
                output += "<b>" + this._enrolmentRecord[i].units[j].code + "</b>: " + this._enrolmentRecord[i].units[j].mark + "(" + this._enrolmentRecord[i].units[j].grade + ")<br>";
            }

        }

    }
     //<b>Current GPA</b>: 3.25
    //<b>Current WAM</b>: 78.250
    output += "<br>";
    output += "<b>Current GPA</b>: " + this._calculateGPA() + "<br>";
    output += "<b>Current WAM</b>: " + this._calculateWAM() + "<br>";

    return output;

}

  toString()
  {
    let output = this._firstName + ", " + this._lastName.toUpperCase() + " ( ID: " + this._studentID + ", Phone: " + this._phoneNumber + ", Email: " + this._eMail+ ")" + "<br>";
    return output;
  }
}

function enrolStudent() {

  let selectedGender = null;

  if (document.getElementById("maleIn").checked) {
    selectedGender = "Male";
  }
  else if (document.getElementById("femaleIn").checked) {
    selectedGender = "Female";
  }
  else if (document.getElementById("othergenIn").checked){
    selectedGender = "Other";
  }

  let d = new Date();
  let newRecord = [
    {
      semester: 1,
      year: d.getFullYear(),
      units: []
    }];

  let tempDate = new Date(document.getElementById("dobIn").value);
  let bMonth = parseInt(tempDate.getMonth()+1);
  if (bMonth <10){
    bMonth = "0"+bMonth;
  }
  let bDate = tempDate.getDate();
  if (bDate < 10){
    bDate = "0"+ bDate;
  }
  let birthDate = bDate +"/" + bMonth + "/"+ tempDate.getFullYear();

  let student = {
    studentID: document.getElementById("idIn").value,
    firstName: document.getElementById("firstNameIn").value,
    lastName: document.getElementById("lastNameIn").value,
    dateOfBirth: birthDate,
    gender: selectedGender,
    country: document.getElementById("countryIn").value,
    address: document.getElementById("addressIn").value,
    phoneNumber: document.getElementById("phoneIn").value,
    email:document.getElementById("emelIn").value
  };

  let newStudent = new Student(student.studentID,student.firstName,student.lastName,student.dateOfBirth,student.country,student.address,student.gender,student.email,student.phoneNumber,newRecord);

  let division1 = document.getElementById("resultArea");
  division1.innerHTML = newStudent.printRecord();

}

let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = enrolStudent;
