// console.log("hello world js");
// document.write("what a beautiful day!");
// console.log(2 + 3);
// document.write("<div><h1>Hello Hello</h1></div>");
// document.write("<p>calm down the </p> <br> <p>here the forest</p>");
// var a = "hello";
// document.write(a + "<br>");
// console.log(typeof a);
// var a = "goodmorning";
// document.write(a + "<br>");
// var number1 = 5;
// var number2 = 9.1;
// console.log(typeof number1);
// console.log(typeof number2);
// var num;
// console.log(typeof num);
// var num = null;
// console.log(typeof num);
// const pi = 3.14;
// console.log(pi);
// // pi = 5.9;
// // console.log(pi);
// console.log(typeof pi);
// function calc() {
//   console.log("hello world");
// }
// calc();
// var a = 2;
// a--;
// console.log(a);
// var b = 5;
// b++;
// console.log(b);
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(2 ** 3);
// console.log(2 ** 2);
// var value = 6;
// var cal = (value += 9);
// console.log(cal);
// var person = (value -= 10);
// console.log(person);
// var m = (value *= 7);
// console.log(m);
// var div = (value /= 2);
// console.log(div);
// var mod = (value %= 6);
// console.log(mod);
// var a = 5;
// var b = "5";
// var c = 9;
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a > c);
// console.log(a < c);
// console.log(a <= b);
// console.log(b >= c);
// var a = 5;
// var b = 10;
// var c = 20;
// console.log(a < b && c > a);
// console.log(a > b || c > b);
// console.log(a != b);

// var a = 0;
// if (a > 0) {
//   console.log("its positive");
// } else if (a < 0) {
//   console.log("its negetive");
// } else {
//   console.log("its zero");
// }
// var p = "C";
// switch (p) {
//   case "A":
//     console.log("Great");
//     break;
//   case "B":
//     console.log("try again");
//     break;
//   case "C":
//     console.log("again failed");
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }
// for (var a = 0; a <= 10; a++) {
//   console.log(a);
// }
// var s = 0;
// while (s <= 9) {
//   console.log(s);
//   s++;
// }
// var d = 0;
// do {
//   console.log(d);
//   d++;
// } while (d <= 15);

// function clac(a, b) {
//   console.log(a + b);
// }
// calc(5, 6);
// function name(name) {
//   console.log(name + " hello");
// }
// name("vicky");
// function number(num) {
//   if (num % 2 == 0) {
//     console.log("its an even number");
//   } else {
//     console.log("its an odd number");
//   }
// }
// number(6);
// number(5);

// var a = 6;
// var b = 7;
// var c = 8;

// if (a > b && a > c) {
//   console.log("a is largest");
// } else if (b > a && b > c) {
//   console.log("b is largest");
// } else {
//   console.log("c is largest");
// }

// var a = 6;

// switch (true) {
//   case a > 0:
//     console.log("its positive");
//     break;
//   case a < 0:
//     console.log("its negetive");
//     break;
//   case a == 0:
//     console.log("its zero");
//     break;
//   default:
//     console.log("nothing to display");
// }
// // simple calculator

// // var a;
// // var b;
// // const c = prompt("enter the operation (either +,-,* or /): ");
// // const a = parseFloat(prompt("Enter a number: "));
// // const b = parseFloat(prompt("Enter second number: "));

// // if (c == "+") {
// //   console.log(a + b);
// // } else if (c == "-") {
// //   console.log(a - b);
// // } else if (c == "*") {
// //   console.log(a * b);
// // } else if (c == "/") {
// //   console.log(a / b);
// // } else {
// //   console.log("wrong");
// // }

// s = "School IId here";
// k = "cat on table";
// console.log(s[0]);
// console.log(s.charAt(2));
// console.log(s.concat(k));
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());
// console.log(k.slice(2, 6));
// var a = -25;

// console.log(Math.sqrt(a));
// console.log(Math.abs(a));
// console.log(Math.min(2, 5, 9, 6, 10));
// console.log(Math.max(2, 5, 9, 6, 10));
// console.log(Math.pow(5, 2));
// var s = 3.7;
// console.log(Math.floor(s));
// console.log(Math.ceil(s));
// console.log(Math.round(s));
// console.log(Math.random(1, 5));
// // task
// console.log(Math.random());
// // sum of natural numbers
// const x = parseFloat(
//   prompt("Enter number of natural numbers whose sum to be find: ")
// );
// for (var i = 0; i <= x; i++) {
//   var sum = 0;
//   sum += i;
// }
// console.log(sum);
// // dom
// // html tag are objects called node, parent child relation, domtree- parent child hirarchy repres
// //1- getelementbyid
// var a;
// a = document.getElementById("h");
// console.log(a);
/*let cm = document.getElementById("heightthere");

function convertion() {
  var feet = cm.value / 30.48;
  console.log(feet);
}
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
/*let l = document.getElementById("label");
let ein = document.getElementById("emailinput");
// FORMAT VALIDATION
function strictValidation() {
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
}*/
/*let a = 20;
let b;
function sum(a, b) {
  console.log(a + b);
}
sum(5, 6);
// animi
let p = function (a, b) {
  mul = a * b;
  return mul;
};
let s = p(11, 22);
console.log(s);
// settimeout function call as aparameter for set timeout
setTimeout(function () {
  console.log(a);
}, 3000);
let constr = new Function("a", "b", "console.log(a + b);");
constr(5, 9);
// self invoking
(function (a, b) {
  console.log(a - b);
})(18, 2);
let sq = 3;
// normal
function squre(a) {
  console.log(Math.pow(a, 2));
}
squre(sq);
// anony
let sqr = function (a) {
  let s = Math.pow(a, 2);
  console.log(s);
};
sqr(5);
// self invoking
(function (a) {
  console.log(Math.pow(a, 2));
})(9);
// contructor
let k = new Function("a", "console.log(Math.pow(a,2));");
k(21);
// string operations
let str = "  he,is,going,to,school   ";
console.log(str.length);
console.log(str.indexOf("is"));
console.log(str.indexOf("Is"));
console.log(str[0]);
console.log(str.replace("is", "j"));
console.log(str.indexOf("is"));
console.log(str.trim());
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split(","));
console.log(str.slice(1, 5));

// array operation
let fruits = ["orange", "apple", "mango", "banana"];
console.log(Array.isArray(fruits));
// filter
let c = fruits.filter(sweet);
console.log(c);
function sweet(a) {
  // return a.startsWith("b");
  return a.endsWith("e");
}
// arrow
// let sum1 = (a, b) => {
//   console.log(a + b);
// };
// sum1(6, 7);
let sum1 = (a, b) => a + b;
sum(10, 9);
// learn
function ppl(a, b) {
  let s = a + "anu";
  let p = b + 6;
  console.log(s + p);
}
ppl("man", 5);
let an = function (a, b) {
  let a1 = a + "orange";
  let b1 = b + a;
  console.log(a1, b1);
};
an("father", 2);
(function (a) {
  console.log(a);
})(2);
let c1 = new Function("a", "b", "console.log(a,b);");
c1(2, 3);
let arr = (a, b) => {
  console.log(a + b);
  console.log(a * b);
};
arr(5, 6);
let ar = (a, b) => console.log(a + b);
ar(7, 2);
function hope() {
  console.log("hope");
}
let hope = function () {
  console.log("hope");
};*/
let hope = new Function("a", "b", "console.log(a+b);");
hope(5, 6);
(function () {
  console.log("list of all things
  
  
  
  
  
  
  
  
  ");
});
