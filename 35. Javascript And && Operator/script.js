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




let hasTicket = true;
let age = 20;
let isSober = true;

if (hasTicket && age >= 18 && isSober) {
    console.log("Welcome to the Concert!");
} else {
    console.log("Sorry, you cannot enter.");
}


let userName = prompt("Enter your name: ");

if (userName) {
    let len = userName.length; 
    if (len >= 8 && len <= 40) {
        console.log("Valid Name");
    } else {
        console.log("Invalid Name! Length must be between 8 and 40.");
    }
} else {
    console.log("You cancelled the your name.");
}

Improved & Cleaner Version------------

let userName = prompt("Enter your user name:");
let password = Number(prompt("Enter your password:"));

let userAccess;

if (userName === "Abdullah" && password === 19971) {
    userAccess = "Admin";
} else {
    userAccess = "Moderator";
}

console.log("You are " + userAccess);

Professional Version-------------
let userName = prompt("Enter your user name:");
let password = prompt("Enter your password:");

if (userName === "Abdullah" && Number(password) === 19971) {
    console.log("You are Admin");
} else {
    console.log("You are Moderator");
}
