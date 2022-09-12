/*function change() {
  a.setAttribute("style", "color:blue");
}
console.log(a);
var b = document.getElementsByClassName("incl");
b[1].innerHTML = "change";
b[1].style.color = "orange";
console.log(b);
var a = document.getElementById("pid");
b[0].addEventListener("onclick", change());
var c = document.getElementsByName("nam")[1];
c.value = "cool name";
var d = document.getElementsByTagName("p");
d[0].innerHTML = "hope you doing good";
var e = document.querySelectorAll(".incl");
e[0].innerHTML = "query";
let g = {
  names: "gothami",
  age: 26,
  color: "red",
  marks: function () {
    console.log(this.age);
  },
};
console.log(g);
console.log(g.names);
g.marks();
class Mak {
  constructor(names, age) {
    this.names = names;
    this.age = age;
  }
  goal() {
    console.log(this.names + "anu");
    console.log(this.age + "201");
  }
}
m = new Mak("apu", 26);
m.goal();
class cap {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  ready() {
    let c = this.a + this.b;

    let d = this.a * this.b;

    console.log(c, d);
  }
}
f = new cap(20, 50);
f.ready();
let o = {
  com: "google",
  mom: "opopop",
  2: "goat",
  fun: function () {},
};
*/
// templates
/*let item = 20;
console.log(`you have ${item} items in your bag`);
if (item > 40) {
  let c = 20;
  console.log(c);
} else {
  var a = 10;
  console.log(a);
}

function access() {
  var j = 100;
  var k = 50;
  console.log(j + k);
}
access();
let array = [7, 8, 5, 2, 3, 4, 5];
// for (num of array) {
//   console.log(num);
// }
// for (let i = 0; i <= array.length - 1; i++) {
//   console.log(array[i]);
// }
// console.log(array.sort().reverse());
// for (i of array) {
//   console.log(i);
// }
console.log(array[1]);
// 2d array
let fruits = ["papaya", "apple", "orange"];
let veg = ["ladies finger", "tomato", "potato", "onion"];
let grocery = [fruits, veg];
console.log(grocery[1][3]);
for (thing of grocery) {
  for (item of thing) {
    console.log(item);
  }
}
let m = 6;
// spread operator
class1 = ["anu", "minu", "gopu", "vichu"];
class2 = ["ama", "hele", "holi"];
let clas = [1, 2, 3, 4, 5];
class1.push(...class2);
console.log(class1);
console.log(...class2);
let max = Math.max(...clas);
console.log(max);
// rest operator
let val1 = 2;
let val2 = 5;
let val3 = 6;
let val4 = 8;
let total = 0;
function sum(...numbers) {
  for (num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(val1, val4, m));
var p = 20;
var q = 6;
var r = 10;
let e = 9;

function sub(...google) {
  total = 0;
  for (g of google) {
    total -= g;
  }
  return total;
}*/
let a1;

let b1;
let a2;
let b2;
function sub(a1, b1) {
  console.log(a1 - b1);
}
function add(a1, b1) {
  console.log(a1 + b1);
}
function operation(a1, b1) {
  console.log(a1);
  add(a1, b1);
  sub(a1, b1);
}
operation(5, 6);
// call back
let p;
let q;
function learn(p, q, callback) {
  let d = p * q;
  callback(d);
}
function show(output) {
  console.log(output);
}
learn(1, 2, show);
let employeeName;
let employeeAge;
function people(employeeName, eployeeAge, employeeLogin) {}
