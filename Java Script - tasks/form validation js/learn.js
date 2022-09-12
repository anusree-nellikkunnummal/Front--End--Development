function print(a) {
  document.getElementById("heading").innerHTML = a;
}
// function add(c, b) {
//   return c + b;
// }
// let k = add(2, 3);
// print(k);
// function add1(c, b) {
//   let ans = c + b;
//   print(ans);
// }
// add1(9, 10);
// function add2(c, b, d) {
//   let ans = c + b;
//   d(ans);
// }
// add2(9, 1, print);
setTimeout(() => print("go"), 3000);
let p = new Promise(function (resolve, reject) {
  let m = 0;
  if (m == 0) {
    resolve("good to go");
  } else {
    reject("bad");
  }
});
p.then(
  function (value) {
    print(value);
  },
  function (error) {
    print("error");
  }
);
async function prime() {
  let p = new Promise(function (resolve, reject) {
    resolve("hello");
  });
  dosument.getElementById("heading").innerHTML = await a;
}
