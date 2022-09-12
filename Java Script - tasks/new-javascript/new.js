// // var a;
// // a = document.getElementById("h");
// // console.log(a);
// // a.innerHTML = "Good morning";
// // a.style.color = "blue";
// // var c;
// // c = document.getElementsByClassName("m");
// // console.log(c);
// // c[2].innerHTML = "logo here";
// // c[1].style.color = "red";
// // var v;
// // v = document.getElementsByTagName("p");
// // console.log(v);
// // v[1].innerHTML = "paragraph starts here";
// // v[2].style.color = "yellow";
// // var p;
// // var k;
// // p = document.getElementsByName("name")[0];
// // k = document.getElementById("h1");
// // function change() {
// //   k.innerHTML = p.value;
// // }
// // // css selectors
// // var l;
// // l = document.querySelectorAll("h1");
// // l[1].innerHTML = "cut it";
// // l[2].style.color = "green";
// // var j;
// // j = document.querySelectorAll(".one");
// // j[0].innerHTML = "people";
// // j[1].style.color = "red";
// // var o;
// // o = document.querySelectorAll("#one");
// // o[0] =
// // var a;
// // a = document.createElement("h1");
// // function create() {
// //   a.innerHTML = "Good day";
// //   document.body.appendChild(a);
// // }
// // function remove() {
// //   a.remove();
// // }
// var a;
// var b;
// var c;
// var answer;
// //   a = document.getElementById("i1").value;
// //   a = Number(a);
// // //   b = document.getElementById("i2").value;
// // //   b = Number(b);
// // //   c = Math.pow(a, 2) + Math.pow(b, 2);
// // //   document.getElementById("l").innerHTML = "answer: " + c;
// // // };
// // document.getElementById("b1").onclick = function () {
// //   a = document.getElementById("i1").value;
// //   b = document.getElementById("i2").value;
// //   c = document.getElementById("i3").value;
// //   if (a > b && a > c) {
// //     answer = a;
// //   } else if (b > c && b > a) {
// //     answer = b;
// //   } else {
// //     answer = c;
// //   }
// //   document.getElementById("l").innerHTML = "greatest amoung three is:" + answer;
// // };
// let a = document.getElementById("heading");
// let b = document.getElementById("input");
// b.addEventListener("click", change_color);
// a.addEventListener("mouseover", moove);
// b.addEventListener("click", thick);
// function change_color() {
//   a.style.color = "orange";
// }
// function moove() {
//   a.style.backgroundColor = "black";
// }
// function thick() {
//   b.style.color = "red";
//   a.style.fontWeight = "bold";
// }
// let c = {
//   one: "i",
//   two: "am",
//   three: "here",
//   four: "hello",
//   five: function () {
//     console.log(this.two);
//   },
// };
// console.log(c);
// console.log(c.three);
// c.five();
// class Can {
//   constructor(name, a, b) {
//     this.name = name;
//     this.a = a;
//     this.b = b;
//   }
//   code() {
//     console.log(this.a);
//   }
// }
// let m = new Can("anu", "loop", "volum");
// m.code();
// class Map{
//   constructor(a, b) {
//     self.a = a;
//     self.b = b;
//   }
// } good(){
//   console.log()
// }
function voice() {
  document.getElementById("par").setAttribute("style", "color:red");
}
function see() {
  document.getElementById("par").setAttribute("style", "color:blue");
}
document.getElementById("par").addEventListener("click", voice);
document.getElementById("par").addEventListener("mouseover", see);
function color() {
  document.getElementById("b1").setAttribute("style", "color:green");
}
function change() {
  document.getElementById("b1").setAttribute("style", "color:orange");
}
