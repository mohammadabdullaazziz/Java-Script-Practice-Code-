Ternary Operator হলো জাভাস্ক্রিপ্টে if-else কন্ডিশন লেখার একটি খুব ছোট এবং সহজ পদ্ধতি। একে Conditional Operator-ও বলা হয়। 
এটি মূলত এক লাইনে সিদ্ধান্ত নেওয়ার জন্য ব্যবহার করা হয়।

এর গঠন (Syntax) হলো এরকম:
condition ? expressionIfTrue : expressionIfFalse;

সহজভাবে বললে: শর্ত ? সত্য হলে এটা : মিথ্যা হলে ওটা
let username = prompt("Enter Your Username");
let userAccess;

if (username == "Abdullah") {
    console.log("Admin");
} else {
    console.log("Moderator");
}

userAccess = (username =="Abdullah") ? "Admin" : "Moderator";


let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(number + " is " + result);
// Output: "10 is Even"

let age = 20;
let eligibility = (age >= 18) ? "Can vote" : "Can not vote";

console.log(eligibility); // Output: "Can vote"


let marks = 40;
let result = (marks >= 33) ? "Passed" : "Failed";
console.log(result); // output: Passed


let marks = 40;
let result = (marks >= 50) ? console.log("Passed") : console.log("Failed"); output Failed

let age = 15;
let canVote = (age >= 18) ? "Yes" : "No";

console.log(canVote); // Output: No



let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));

let status = (age >= 18) ? "(Adult)" : "(Child)";

console.log("Hello " + name + "!");
console.log("You are" + status);


let name = prompt("Enter your name: ");
let age = parseFloat(prompt("Enter your age: "));

// টারনারি দিয়ে আউটপুট মেসেজ নির্ধারণ
let message = isNaN(age) 
    ? "Please enter a valid number for age." 
    : `Your name is: ${name}\nYou are: ${age >= 18 ? "Adult" : "Child"}`;

console.log(message);



let name = prompt("Enter your name: ");
let inputAge = prompt("Enter your age: ");
let age = parseFloat(inputAge);

// চেক করা হচ্ছে বয়স কি আসলেই একটি সংখ্যা?
if (isNaN(age)) {
    console.log("Please enter a valid number for age.");
} else {
    console.log(`Your name is: ${name}`); // Template Literal ব্যবহার
    
    // ১৮ বা ২০ এর শর্ত ঠিক করা
    let result = (age >= 18) ? "Adult" : "Child";
    
    console.log(`You are: ${result}`);
}



let name = prompt("Enter your name: ");
let age = parseFloat(prompt("Enter your age: "));

// টারনারি অপারেটর দিয়ে আলাদা console.log ব্যবহার
isNaN(age) 
    ? console.log("Please enter a valid number for age.") 
    : (console.log(`Your name is: ${name}`), 
       console.log(`You are: ${age >= 18 ? "Adult" : "Child"}`));
---------------------------------------------------------------------------------
let userName = prompt("Enter name: ");
let displayName = (userName === "" || userName === null) ? "Guest" : userName;
console.log("Welcome, " + displayName);

এটি মূলত কোনো ইউজারের নাম না থাকলে তাকে ডিফল্টভাবে "Guest" হিসেবে দেখানোর একটি প্রফেশনাল পদ্ধতি।

এখানে চেক করা হচ্ছে—ইউজার কি নাম না লিখে খালি রেখেছে ("") অথবা (||) ইউজার কি ক্যান্সেল ক্লিক করেছে (null)?
যদি ওপরের শর্তটি সত্য হয় (অর্থাৎ ইউজার নাম দেয়নি), তবে displayName এর মান হয়ে যাবে "Guest"।

মিথ্যা হলে (False): : userName

যদি ইউজার তার নাম দেয় (শর্তটি মিথ্যা হয়), তবে ইউজার যা লিখেছে সেটাই displayName এ জমা হবে 

ইউজার যা লিখবে তা userName ভ্যারিয়েবলে জমা হবে।

যদি ইউজার কিছু না লিখে "OK" দেয়, তবে মান হবে একটি খালি স্ট্রিং ""।

যদি ইউজার "Cancel" বাটনে ক্লিক করে, তবে মান হবে null।
-------------------------------------------------------------------------------------------
let userAccess;
let userName = prompt("Enter your name: ");
userAccess = (userName === 'Abdullah') ? "Admin" : "Moderator;
console.log(userAccess);
(userName === "Abdullah") ? console.log("Admin") : Console.log("Moderator");


let userCode = Number(prompt("Enter your 5 digit Code: "));
let firstName = "File Open";
let lastName = "Failed";
let result = (userCode === 12345) ? firstName : lastName;
console.log(result);



let userCode = Number(prompt("Enter your 5 digit code: "));
let fileName = "Secret_File.pdf";

let access = (userCode === 12345) ? "File Open" : "Failed";
let final = `Access: ${access}! 
Your File(${fileName}) Now ${userCode === 12345 ? 'Open Your File' : 'Locked Your File'}`;
console.log(final);


let userAccess;
let username = prompt("Enter Your Username");
let name1 = "Mohammad";
let name2 = "Arman";
// if (username == "password") {
//     console.log(name1);
// } else {
//     console.log(name2);
// }

userAccess = (username =="password") ? "Admin" : "Moderator";
console.log(userAccess);
