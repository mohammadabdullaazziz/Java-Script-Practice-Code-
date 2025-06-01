<h3>Operator Precedence In Javascript</h3>

let num = 2 + 3; // statement

2 + 3 // complete Expression

// Operator  Precedence
console.log(2 + 3 * 4);  // 14

let num2 = (10 + 5) * 2; // 30
console.log(num2);

let num3 = 10 / 5 * 2; // 4
console.log(num3);

let num4 = 3 * 2 + 4; // 10
console.log(num4);

let num5 = 3 + 2 - 4; // 1 same precedent (left to right)
console.log(num5);

let num6 = 3 * 2 / 3; // 2 same precedent (left to right)
console.log(num6);

let num7 = (3 + 2) * (5 + 2);  // 35
console.log(num7);

let num8 = 3 + 2 * 5 + 2;  // 15
console.log(num8);

let age1 = "20";
let age2 = "30";
// console.log(age); // 2030
let age = +age1 + +age2;
console.log(age); // 50

let x = 10 + 5 * 2; // x = 20 (multiplication before addition)
let y = (10 + 5) * 2; // y = 30 (parentheses first)
let z = 100 / 50 * 3; // z = 6 (division and multiplication have the same precedence, evaluated left-to-right)
let a = 5 * 2 + 10 / 2; // a = 15 (multiplication and division first, then addition)

console.log(3 + 10 * 2); // 23
console.log(3 + (10 * 2)); // 23, because parentheses here are superfluous
console.log((3 + 10) * 2); // 26, because the parentheses change the order

