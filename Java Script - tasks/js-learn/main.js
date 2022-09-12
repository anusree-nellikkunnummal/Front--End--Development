let names = ["anu", "appu", "minnu", "binoy"];
let a = names[0];
names[0] = "avantika";
names[4] = "binoy";
names.pop();
names.push("karun");
names.unshift("binoy");
names.shift();
console.log(names);
let p = names.indexOf("binoy");
let k = names.length;
console.log(k);
for (i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
