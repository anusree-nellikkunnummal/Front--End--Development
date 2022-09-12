/*var a = document.querySelector("#one");
function change() {
  a.innerHTML = "<p>goodmorning all and welcome to the show</p>";
}
var b = document.getElementById("two");
function hide() {
  b.setAttribute("hidden", "true");
}
function show() {
  b.removeAttribute("hidden", "true");
}
var i = document.getElementById("img");
function over() {
  i.removeAttribute("src", "eravikulam.jpg");
  i.setAttribute("src", "beach.webp");
}
function back() {
  i.removeAttribute("src", "beach.webp");
  i.setAttribute("src", "eravikulam.jpg");
}*/
// basic validation
// let ein = document.getElementById("emailinput");
// let pin = document.getElementById("passwordinput");
// let lin = document.getElementById("login");
// let a = document.getElementById("d1");
// let b = document.getElementById("d2");

// function valid() {
//   if (ein.value == "" || pin.value == "") {
//     alert("the field can not be empty!");
//     return false;
//   } else {
//     alert("validation is done");
//     return true;
//   }
// }
// // customize validation
// function conditionValid() {
//   if (ein.value == "") {
//     alert("email can not be empty");
//     return false;
//   } else if (pin.value == "") {
//     alert("password field must be filled");
//     return false;
//   } else if (pin.value.length <= 5) {
//     alert("password is too short");
//     b.style.border = "3px solid red";
//     return false;
//   } else if (pin.value.length > 10) {
//     alert("too long");
//   } else if (pin.value.toUpperCase() == "true") {
//     alert("uppercase not accepted");
//   } else {
//     return true;
//   }
// }
// function special() {
//   if (ein.value.trim() == "" || pin.value.trim() == "") {
//     alert("please enter a valid id and password");
//     return false;
//   }
// }
let l = document.getElementById("label");
let ein = document.getElementById("emailinput");
// FORMAT VALIDATION
function format() {
  var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
  if (regexp.test(ein.value)) {
    l.innerHTML = "valid";
    l.style.color = "yellow";
    return true;
  } else {
    l.innerHTML = "invalid";
    l.style.color = "red";
    return false;
  }
}
