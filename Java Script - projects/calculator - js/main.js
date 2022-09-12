// var a;
// var b;
// var c;
// var sum;
// var sub;
// var div;
// var mul;
// var clear;
// document.getElementById("7").onclick = function () {
//   document.getElementById("lab").innerHTML = 7;
// };
// document.getElementById("cl").onclick = function () {
//   document.getElementById("lab").innerHTML = 0;
// };
// document.getElementById("8").onclick = function () {
//   document.getElementById("lab").innerHTML = 8;
// };
// document.getElementById("9").onclick = function () {
//   document.getElementById("lab").innerHTML = 9;
// };
// document.getElementById("1").onclick = function () {
//   document.getElementById("lab").innerHTML = 1;
// };
// document.getElementById("2").onclick = function () {
//   document.getElementById("lab").innerHTML = 2;
// };
// document.getElementById("3").onclick = function () {
//   document.getElementById("lab").innerHTML = 3;
// };
// document.getElementById("4").onclick = function () {
//   document.getElementById("lab").innerHTML = 4;
// };
// document.getElementById("5").onclick = function () {
//   document.getElementById("lab").innerHTML = 5;
// };
// document.getElementById("6").onclick = function () {
//   document.getElementById("lab").innerHTML = 6;
// };
// document.getElementById("add").onclick = function () {
//   document.getElementById("lab").innerHTML = "+";
// };
// document.getElementById("sub").onclick = function () {
//   document.getElementById("lab").innerHTML = "-";
// };
// document.getElementById("div").onclick = function () {
//   document.getElementById("lab").innerHTML = "/";
// };
// document.getElementById("mul").onclick = function () {
//   document.getElementById("lab").innerHTML = "x";
// };
// document.getElementById("eq").onclick = function () {
//   document.getElementById("lab").innerHTML = "=";
// };
// operations

function view(num) {
  document.getElementById("lab").value += num;
}
function clr() {
  document.getElementById("lab").value = "";
}
function operation() {
  let a = document.getElementById("lab").value;
  let b = eval(a);
  document.getElementById("lab").value = b;
}
