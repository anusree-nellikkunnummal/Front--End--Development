// console.log("a");
// // window.alert("its pizza time!");
// let name = "anu";
// let age = 21;
// console.log("Hi ", name, "you are", 21, "years old");
// // document.getElementById("p1").innerHTML = "hello " + name;
// // document.getElementById("p2").innerHTML = "Dare to say " + age;
// // document.getElementById("p3").innerHTML = "Common to " + name;
// document.getElementById("buton1").onclick = function () {
//   username = document.getElementById("text").value;
//   console.log(username);
//   document.getElementById("name").innerHTML = username;
// };
// document.getElementById("b1").onclick = function () {
//   username = document.getElementById("i1").value;
//   console.log(username);
//   document.getElementById("l1").innerHTML = "hello Good morning " + username;
// };
// // age = parseFloat(window.prompt("Enter your age: "));
// // age += 1;
// console.log(age);
// s = "anu";
// console.log(Boolean(s));
// const PI = 3.14;
// let radius;
// let circumference;
// // radius = window.prompt("Enter a radius: ");
// // circumference = 2 * PI * radius;
// // console.log(circumference);
// let x = 5.6;
// let y = 12;
// let z = 10;
// let c;
// c = Math.min(x, z, y);

// console.log(c);
//
// a = window.prompt("enter a length: ");
// b = window.prompt("enter a length: ");
// d = Math.pow(a, 2) + Math.pow(b, 2);
// d = Math.sqrt(d);
// console.log(d);
// document.getElementById("btn1").onclick = function () {
//   a = document.getElementById("text1").value;
// };
// let num;
// var sum;
// num = window.prompt("Enter number of natural nums to find sum: ");
// sum = 0;
// for (var i = 0; i <= num; i++) {
//   sum = sum + i;
// }
// console.log(sum);
// prime num
// function demo() {
//   var isPrime;
//   for (var i = 2; i <= 100; i++) {
//     for (var j = 1; j <= i / 2; j++) {
//       if (i % j == 0) {
//         isPrime = 0;
//         break;
//       }
//     }
//   }
//   if (isPrime == 1) {
//     console.log(i);
//   }
// }
// function demo() {
//   var isPrime;
//   for (var i = 2; i <= 100; i++) {
//     isPrime = 1;
//     for (j = 1; j <= 100; j++) {
//       if (i % j == 0) {
//         isPrime = 0;
//         break;
//       }
//     }
//     if ((isPrime = 1)) {
//       console.log(i);
//     }
//   }
// }
// demo();
// var num;
// function prime(num) {
//   var c;

//   for (var i = 2; i <= num; i++) {
//     for (var j = 1; j <= num; j++) {
//       if (i % 2 == 0 && i != j) {
//         c = 0;
//       } else {
//         c = 1;
//       }
//     }
//     if (c == 1) {
//       console.log(i);
//     }
//   }
// }
// // prime(100);
// //factorial
// var n;
// function fact(n) {
//   if (n < 0) {
//     console.log(-1);
//   } else if (n == 0) {
//     console.log(1);
//   } else {
//     console.log(n * fact(n - 1));
//   }
// }
// fact(10);
var binary = 12;
binary = binary.toString(2);
console.log(binary);
