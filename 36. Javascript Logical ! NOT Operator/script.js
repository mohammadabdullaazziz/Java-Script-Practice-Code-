// Logical ! NOT Operator
console.log(! true);
console.log(! false);
console.log(! 25 > 22);
console.log(! 25 < 22);


const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false

!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false

// Example 1: Inverting a boolean literal
let isTrue = true;
let isFalse = !isTrue; // isFalse will be false
console.log(isFalse); // Output: false

// Example 2: Inverting a boolean variable
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in."); // This will be executed
} else {
  console.log("Welcome back!");
}

// Example 3: Inverting the result of a comparison
let num1 = 10;
let num2 = 5;
let isNum1NotGreaterThanNum2 = !(num1 > num2); // !(true) which becomes false
console.log(isNum1NotGreaterThanNum2); // Output: false

// Example 4: Using with non-boolean values (truthy/falsy conversion)
// In JavaScript, various values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Falsy values include: false, 0, "", null, undefined, NaN. All other values are truthy.

console.log(!0); // Output: true (0 is falsy, !0 is true)
console.log(!"hello"); // Output: false ("hello" is truthy, !"hello" is false)
console.log(!null); // Output: true (null is falsy, !null is true)
console.log(!undefined); // Output: true (undefined is falsy, !undefined is true)

console.log(!!0); // Output: false (double negation converts to actual boolean value)



// let isLoggedIn = false;

// // "!" মানে হলো "যদি না হয়"
// if (!isLoggedIn) {
//     console.log("দয়া করে আগে লগইন করুন।");
// } else {
//     console.log("স্বাগতম! আপনি ড্যাশবোর্ড দেখতে পারেন।");
// }


// let userName = "";

// if (!userName) {
//     console.log("true");
// } else{
//     console.log("false");
// }

// let score = 100;
// console.log(!!score); // আউটপুট: true (কারণ ১০০ একটি সত্য মান)

// let empty = "";
// console.log(!!empty); // আউটপুট: false (কারণ খালি স্ট্রিং মিথ্যা মান)


let isLightOn = false;
// সুইচ চাপলে মানটি উল্টে যাবে
isLightOn = !isLightOn; 
console.log("Light is: " + (isLightOn ? "ON" : "OFF")); // Output: ON

isLightOn = !isLightOn;
console.log("Light is: " + (isLightOn ? "ON" : "OFF")); // Output: OFF



let cartItems = []; // শপিং কার্ট খালি
if (!cartItems.length) {
    console.log("আপনার কার্টটি খালি! কিছু কেনাকাটা করুন।");
}


let password = "abc123";
let confirmPassword = "abc456";
if (password !== confirmPassword) {
    console.log("পাসওয়ার্ড দুটি মেলেনি! আবার চেষ্টা করুন।");
}



// ডেটা লোড হচ্ছে কি না চেক করা (Loading State)
// ওয়েবসাইটে যখন ডেটা লোড হয়, তখন আমরা একটি স্পিনার (Spinner) দেখাই।

// let isLoading = false;
// let data = "Some secret info";

// if (!isLoading) {
//     console.log("Data loaded: " + data);
// } else {
//     console.log("Loading... Please wait.");
// }

// let age = 20;
// let hasTicket = false;
// let isVIP = true;

// // যদি টিকিট না থাকে ( !hasTicket ) এবং ভিআইপি-ও না হন ( !isVIP )
// if (age >= 18 && (hasTicket || isVIP)) {
//     console.log("Welcome to the club!");
// } else {
//     console.log("Access Denied!");
// }


// !true ➡ false

// !false ➡ true

// !"" (খালি লেখা) ➡ true

// !0 (শূন্য) ➡ true

// !"Hello" (কিছু লেখা থাকলে) ➡ false
