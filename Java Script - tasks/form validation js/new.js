// function result(a) {
//   document.getElementById("heading").innerHTML = a;
// }
// function operation(c, d) {
//   let answer = c + d;
//   return answer;
// }
// let c = operation(5, 6);
// result(c);

// function result(a) {
//   document.getElementById("heading").innerHTML = a;
// }
// function operation(c, d) {
//   let answer = c + d;
//   result(answer);
// }
// operation(7, 9);
// function result(a) {
//   document.getElementById("heading").innerHTML = a;
// }
// function operation(b, c, callback) {
//   let answer = c + b;
//   callback(answer);
// }
// operation(9, 2, result);
// function print(p) {
//   document.getElementById("heading").innerHTML = p;
// }
// setTimeout(() => {
//   print("go");
// }, 3000);
// await
// promises
/*function result(a) {
  document.getElementById("heading").innerHTML = a;
}
let p = new Promise(function (resolve, reject) {
  let pr = 0;
  if (pr == 0) {
    resolve("keep going");
  } else {
    reject("sorry");
  }
});
p.then(
  function (value) {
    result(value);
  },
  function (error) {
    result(error);
  }
);*/
async function prime() {
  let a = new Promise(function (resolve, reject) {
    resolve("good to go");
  });
  document.getElementById("heading").innerHTML = await a;
}
prime();
