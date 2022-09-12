// let l = document.getElementById("label");
// let ein = document.getElementById("inputid");
// // FORMAT VALIDATION
// function format() {
//   var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})([a-z]{2,3})?$/;
//   if (regexp.test(ein.value)) {
//     l.innerHTML = "valid";
//     l.style.color = "blue";
//     return true;
//   } else {
//     l.innerHTML = "invalid";
//     l.style.color = "red";
//     return false;
//   }
// }

let height = document.getElementById("i1");
let weight = document.getElementById("i2");
let bmi = document.getElementById("l1");
function bmiCalculator() {
  let kg = weight.value;

  let m = height.value;

  let m2 = Math.pow(m, 2);

  let b = kg / m2;
  bmi.innerHTML = b;
}
