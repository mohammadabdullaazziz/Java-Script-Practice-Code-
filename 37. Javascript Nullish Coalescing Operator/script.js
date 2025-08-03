// Javascript Nullish Coalescing Operator
let user;
let userName = user ?? "Guest";
console.log(userName); // আউটপুট: Guest

let age = 25;
let defaultAge = age ?? 18;
console.log(defaultAge); // আউটপুট: 25

let name = null;
let displayName = name ?? "Anonymous";
console.log(displayName); // আউটপুট: Anonymous




let a = null;
let b = "default";
let result = a ?? b; // result হবে "default"
console.log(result);

let x = 5;
let y = 10;
let result2 = x ?? y; // result2 হবে 5
console.log(result2);

let str = "";
let result3 = str ?? "empty"; // result3 হবে "" (ফাঁকা স্ট্রিং)
console.log(result3);

let num = 0;
let result4 = num ?? 10; // result4 হবে 0
console.log(result4);


