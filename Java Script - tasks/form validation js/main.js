let fname = document.getElementById("nameinput");
let lname = document.getElementById("lastinput");
let birth = document.getElementById("birthinput");
let mail = document.getElementById("mailinput");
let phone = document.getElementById("phoneinput");
let male = document.getElementById("inlineRadio1");
let female = document.getElementById("inlineRadio2");
let adr = document.getElementById("adrinput");
let state = document.getElementById("dropdownMenuButton");
let country = document.getElementById("formControlReadonly");
let checkdefault = document.getElementById("flexCheckDefault");
let checkchecked = document.getElementById("flexCheckChecked");
// lname = document.getElementById("nameinput");
function validate() {
  if (fname.value == "") {
    alert("Enter the name");
    return false;
  }
  if (!isNaN(fname.value)) {
    alert("Name must be in character!");
  }
  if (lname.value == "") {
    alert("Enter the name");
    return false;
  }
  if (!isNaN(lname.value)) {
    alert("Name must be in character!");
  }
  var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
  if (birth.value == null || birth.value == "" || !pattern.test(birth.value)) {
  }
  var at = mail.value.indexOf("@");
  var dot = mail.value.indexOf(".");
  if (at < 1 || dot < at + 2 || dot + 2 >= mail.value.length) {
    alert("not a valid email");
    return false;
  }
  if (phone.value == "") {
    alert("enter phone number");
    return false;
  }
  if (isNaN(phone.value)) {
    alert("Phone number must be in digit");
    return false;
  }
  if (phone.value.length != 10) {
    alert("Enter a 10 digit number");
    return false;
  }
  if (!(male.checked || female.checked)) {
    alert("choose a gender");
    return false;
  }
  if (adr.value == "") {
    alert("Specify the address it can not be empty");
    return false;
  }
  if (state.innerHTML == "SELECT A STATE") {
    alert("select a state");
    return false;
  }

  if (!checkdefault.checked) {
    alert("agree the terms to proceed");
    return false;
  }
  if (!checkchecked.checked) {
    alert("tick the field to proceed");
    return false;
  }
}
