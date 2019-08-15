
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


  let student = {

    firstName: document.getElementById("firstNameIn").value,
    lastName: document.getElementById("lastNameIn").value,
    dateOfBirth: document.getElementById("dobIn").value,
    gender: selectedGender,
    country: document.getElementById("countryIn").value,
    address: document.getElementById("addressIn").value,
    email:document.getElementById("emelIn").value
  }

  let division1 = document.getElementById("resultArea");
  let output = "Name : " + student.firstName + ", "+ student.lastName.toUpperCase() + "<br>" + "Date of Birth : " + student.dateOfBirth + "<br>" +"Gender : " + student.gender + "<br>" + "Country : " + student.country + "<br>" + "Address : " + student.address + "<br>" + "Email : " + student.email;
  division1.innerHTML = output;

}

let submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = enrolStudent;
