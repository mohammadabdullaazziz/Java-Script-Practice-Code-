// Logical && AND Operator
let num1 = 50;
let num2 = 30;
let num3 = 20;
console.log(num1 > num2 && num2 > num3);

let a = 5;
let b = 10;
let c = 15;

// All conditions are true
if (a < b && b < c && a < c) {
  console.log("Conditions met."); // Output: Conditions met.
}


let age = 25;
let hasLicense = true;

// Both conditions are true
if (age >= 18 && hasLicense) {
  console.log("Eligible to drive."); // Output: Eligible to drive.
}

let score = 70;
let passedExam = false;

// One condition is false
if (score > 60 && passedExam) {
  console.log("Passed the course."); // This line will not execute
} else {
  console.log("Did not pass the course."); // Output: Did not pass the course.
}


// Returns the first falsy value encountered
console.log(0 && "hello"); // Output: 0
console.log(null && 123); // Output: null
console.log(undefined && true); // Output: undefined
console.log("" && "world"); // Output: ""

// Returns the last truthy value if all are truthy
console.log("apple" && "banana"); // Output: banana
console.log(10 && 20); // Output: 20

const a1 = 3;
const b2 = -2;

console.log(a1 > 0 && b2 > 0);
// Expected output: false
