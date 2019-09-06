"use strict";

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
