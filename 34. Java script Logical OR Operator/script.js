// Logical || OR Operator
JavaScript-এ || (OR) অপারেটর হলো একটি লজিক্যাল অপারেটর (Logical Operator) যা দুটি শর্তের মধ্যে যেকোনো একটি সত্য (true) হলেই true ফলাফল দেয়। 
এটি শুধুমাত্র তখনই false রিটার্ন করে যখন উভয় পাশের শর্তই মিথ্যা (false) হয়। এটি সাধারণত কন্ডিশনাল স্টেটমেন্ট বা ভ্যালু অ্যাসাইনমেন্টে ব্যবহৃত হয়।

যদি সব শর্ত বা মান false (বা Falsy) হয়, তবে || অপারেটর সবার শেষের মানটি রিটার্ন করে।
let result = false || 0 || "" || null || undefined;
console.log(result); 
// আউটপুট হবে: undefined
প্রথম মান false (মিথ্যা), তাই পরেরটায় যায়।
দ্বিতীয় মান 0 (মিথ্যা/Falsy), তাই পরেরটায় যায়।
তৃতীয় মান "" (খালি স্ট্রিং, Falsy), তাই পরেরটায় যায়।
চতুর্থ মান null (Falsy), তাই পরেরটায় যায়।
শেষ মান undefined — এরপর আর কিছু নেই, তাই এটিই রিটার্ন করে।


এটি অনেক সময় ডিফল্ট মান (default value) সেট করতে ব্যবহৃত হয়, যেমন:
const name = userInput || "Guest";

একটি ওয়েবসাইটে ঢুকতে চান। হয় Email থাকতে হবে অথবা Phone Number থাকতে হবে।
let hasEmail = true;
let hasPhone = false;

if (hasEmail || hasPhone) {
  console.log("আপনি লগইন করতে পারবেন।");
} else {
  console.log("লগইন করতে পারবেন না।");
}

|| অপারেটর বাম থেকে ডানে কাজ করে। যদি সে প্রথম মানটিই true পায়, তবে সে পরের মানটি আর চেক করে না এবং সাথে সাথেই রেজাল্ট দিয়ে দেয়।

// Example 1: Basic boolean evaluation
console.log(true || false); // Output: true (true is truthy)
console.log(false || true); // Output: true (true is truthy)
console.log(false || false); // Output: false (both are falsy, returns the last falsy value)
true || true ➡️ true
true || false ➡️ true
false || true ➡️ true
false || false ➡️ false

// Example 2: Short-circuiting with truthy values
let result1 = "Hello" || "World";
console.log(result1); // Output: "Hello" ("Hello" is truthy, "World" is not evaluated)

let result2 = 0 || 5;
console.log(result2); // Output: 5 (0 is falsy, 5 is truthy)

// Example 3: Handling falsy values
let result3 = "" || null;
console.log(result3); // Output: null (both are falsy, returns the last falsy value)

let result4 = undefined || 0;
console.log(result4); // Output: 0 (both are falsy, returns the last falsy value)

// Example 4: Using with variables and conditions
let age = 16;
let hasGuardian = true;

if (age >= 18 || hasGuardian) {
  console.log("Allowed to enter."); // Output: Allowed to enter. (hasGuardian is true)
} else {
  console.log("Not allowed to enter.");
}

true || true; // || t returns true
false || true; // || t returns true
true || false; // || f returns true
false || 3 === 4; // || f returns false
"Cat" || "Dog"; // || t returns "Cat"
false || "Cat"; // || t returns "Cat"
"Cat" || false; // || f returns "Cat"
"" || false; // || f returns false
false || ""; // || f returns ""
false || varObject; // || object returns varObject

console.log(true || false);
console.log(false || false);
console.log(1 || 0);
console.log(1 || 2);
console.log("1" || true);
console.log("0" || true);

let num1 = 50;
let num2 = 30;
let num3 = 20;
console.log(num1 > num2 || num3 < num1);


const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true

    let firstName = "Abdullah";
    let lastName = "Aziz";
    if ( (firstName == "Arman") || (lastName == "Aziz") ) {
        console.log("output true");
    }

অনেক সময় কোনো ভেরিয়েবলে মান না থাকলে ব্যাকআপ হিসেবে এটি ব্যবহার করা হয়:
// let name = "";
// let userName = name || "Guest";

// console.log(userName); // Guest
// 👉 কারণ empty string "" false হিসেবে গণ্য হয়, তাই "Guest" assign হয়েছে।



// let age = parseInt(prompt("Enter your age:"));
// let hasID = prompt("Do you have voter ID? (yes/no)");

// if (age >= 18 || hasID === "yes") {
//     console.log("You can vote.");
// } else {
//     console.log("You cannot vote.");
// }

------------------------------------------------------------------------
// let name = prompt("Enter your name:");

// let userName = name || "Guest";

// console.log("Welcome " + userName);
// 👉 কিছু না লিখে Enter চাপলে output হবে:
// Welcome Guest

let userName = prompt("Enter name: ");

// এখানে || অপারেটর ম্যাজিকের মতো কাজ করবে
let displayName = userName || "Guest";

console.log("Welcome, " + displayName);
জাভাস্ক্রিপ্টে || অপারেটর তার বাম পাশের মানটি চেক করে। যদি বাম পাশের মানটি "Falsy" হয়, তবে সে ডান পাশের মানটি গ্রহণ করে।

জাভাস্ক্রিপ্টে Falsy মানগুলো হলো:
"" (খালি স্ট্রিং)
null
undefined
0
false
NaN
"Abdullah" একটি Truthy মান। তাই || অপারেটর ডান পাশে আর তাকাবেই না, সরাসরি "Abdullah" কে displayName-এ বসিয়ে দেবে।
ইউজার কিছুই লিখলো না (খালি স্ট্রিং "") 
  "" একটি Falsy মান। তাই জাভাস্ক্রিপ্ট বাম পাশ বাদ দিয়ে ডান পাশের "Guest" কে গ্রহণ করবে।
আউটপুট: Welcome, Guest
ইউজার 'Cancel' ক্লিক করলো (null)
null একটি Falsy মান। এক্ষেত্রেও জাভাস্ক্রিপ্ট ডান পাশের "Guest" কেই বেছে নেবে।
আউটপুট: Welcome, Guest


// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));

// if (num1 > 0 || num2 > 0) {
//     console.log("At least one number is positive.");
// } else {
//     console.log("Both numbers are zero or negative.");
// }
// 👉 যেকোনো একটা positive হলেই condition true হবে।

// let role = prompt("Enter your role (admin/moderator/user):");

// if (role === "admin" || role === "moderator") {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied");
// }
// 👉 admin বা moderator লিখলেই Access পাবে।


let userName = prompt("Enter name: ");
console.log(typeof userName);
// let userBlank = userName || "blank user"
// if (userBlank == "blank user") {
//   console.log("User is Blank");
// } else{
//   console.log("Your user name is " + userName);
// }
let userBlank = (userName === "" || userName === null) ? "Guest" : userName;
console.log("Welcome, " + displayName);


let userName = "";  // "Abdullah"
if (userName == "" || userName == null) {
    console.log("User name Required");
} else {
    console.log("Your name is " + userName);
}


