

function submitInfo() {

  let firstName = document.getElementById("firstNameIn").value;
  let lastName = document.getElementById("lastNameIn").value;
  let dob = document.getElementById("dobIn").value;

  if (document.getElementById("maleIn").checked) {
    var gender = "male";
  }
  else if (document.getElementById("femaleIn").checked) {
    var gender = "female";
  }
  else if (document.getElementById("othergenIn").checked){
    var gender = "other";
  }

  let country = document.getElementById("countryIn").value;
  let address = document.getElementById("addressIn").value;
  let email = document.getElementById("emelIn").value;

  let student = {

    stufName: firstName,
    stulName: lastName,
    stuDOB: dob,
    stuGender: gender,
    stuCountry: country,
    stuAddress: address,
    stuEmail:email
  }

  let output = "Name : " + student.stufName + ", "+ student.stulName + "<br>" + "Date of Birth : " + student.stuDOB + "<br>" +"Gender : " + student.stuGender + "<br>" + "Country : " + student.stuCountry + "<br>" + "Address : " + student.stuAddress + "<br>" + "Email : " + student.stuEmail;

  let division1 = document.getElementById("resultArea");
  division1.innerHTML = output;

}

let submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = submitInfo;
