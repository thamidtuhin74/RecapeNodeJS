//  const { a, addFn } = require("./file-2");
// const { a: a3, addFn: addFn3 } = require("./file-3");

// import { a, addFn } from "./file-2.mjs";
// import { a } from "./file-2.mjs";
// import addFn from "./file-2.mjs";
import addFn, { a } from "./file-2.mjs";
import { a as a3, addFn as addFn3 } from "./file-3.mjs";

console.log(a);
console.log("sum = " + addFn(56, 45));

console.log(a3);
console.log("sum = " + addFn3(56, 45, 88));
