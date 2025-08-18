const { a, addFn } = require("./file-2");
const { a: a3, addFn: addFn3 } = require("./file-3");

console.log(a);
console.log("sum = " + addFn(56, 45));

console.log(a3);
console.log("sum = " + addFn3(56, 45, 85));
