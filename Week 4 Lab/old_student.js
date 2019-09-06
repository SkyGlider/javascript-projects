class Student{

  constructor(studentID,firstName,lastName,dateOfBirth,gender,country,address,eMail,phoneNumber,enrolmentRecord){
    this._studentID = studentID;
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth= dateOfBirth;
    this._gender = gender;
    this._country = country;
    this._address = address;
    this._eMail = eMail;
    this._phoneNumber = phoneNumber;
    this._enrolmentRecord = enrolmentRecord;
  }

  get studentID(){
    return this._studentID;
  }

  set studentID(newID){
    if(newID.length === 8){
      this._studentID = newID;
    }
  }

  get firstName(){
    return this._firstName;
  }

  set firstName(newFirst){
    this._firstName = newFirst;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(newLast){
    this._lastName = newLast;
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

  getunitGrade(l){
    return this._enrolmentRecord[l-1].units[0].grade;

  }

  searchForUnit(unitCode){
    let daResults = this._enrolmentRecord;
    for (let x in daResults) {
      let currentSem = daResults[x];
      for (let y in currentSem.units){
        if (unitCode == currentSem.units[y].code){
            return{
              semIndex: x,
              unitIndex: y
            };
        }
      }
    }
    return null;
  }

  getGradeFromMark(marcus){
    if(isNaN(marcus) || marcus >= 100 || marcus < 0){
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
    let unitEnrolled = this.searchForUnit(unitCode);

    if (unitEnrolled == null && numOfUnits < 4){
      let newUnit = { code:unitCode };
      listOfUnits.push(newUnit);
    }
  }

  removeUnit(unitCode){
    let currentSem = this._enrolmentRecord.length - 1;
    let location = this.searchForUnit(unitCode);
    if (location != null && location.semIndex == currentSem){
      this._enrolmentRecord[currentSem].units.splice(location.unitIndex,1);
    }
  }

  updateMark(unitCode, mark){
    let markValidation = this.getGradeFromMark(mark);
    let location = this.searchForUnit(unitCode);

    if(markValidation != null && location != null){

      let replacedUnit = {
        code: unitCode,
        mark: mark,
        grade: markValidation
      }
      this._enrolmentRecord[location.semIndex].units[location.unitIndex] = replacedUnit;
    }
  }

  toString(){
    return "<br/> Name: " + this._firstName + " " + this._lastName.toUpperCase() +
    "<br/> Student ID: " + this._studentID +
    "<br/> Email: " + this._eMail +
    "<br/> Phone Number: " + this._phoneNumber ;
  }

}

let newResult= [
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

let student1 = new Student("30010056","Don Randike Sajeev Nallaperuma Abeywickrama","Jayathilake","1999","Sri Lanka","Isuruburu","male","@.com","999",newResult);
let mymarks = student1.getGradeFromMark(69);
student1.enrolUnit("ENG1051");
student1.removeUnit("ENG1021");
student1.updateMark("ENG1002",69);
student1.studentID = "12345876";
student1.lastName = "Jayathilake";
document.getElementById("outputRefArea").innerHTML = student1;
