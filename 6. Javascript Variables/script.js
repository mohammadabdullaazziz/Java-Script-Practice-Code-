জাভাস্ক্রিপ্টে ভেরিয়েবল (Variable) হলো এমন একটি কন্টেইনার বা পাত্র, যেখানে কোনো তথ্য (Data) জমা রাখা যায়। 
যখনই কোডে কোনো মান (যেমন: নাম, সংখ্যা বা রেজাল্ট) বারবার ব্যবহার করার প্রয়োজন হয়, তখন সেটি একটি ভেরিয়েবলে সেভ করে রাখা হয়।
👉 variable = data রাখার বক্স 

জাভাস্ক্রিপ্টে ভেরিয়েবল Case-Sensitive হওয়ার মানে হলো—বড় হাতের অক্ষর (Uppercase) এবং ছোট হাতের অক্ষর (Lowercase) আলাদাভাবে গণ্য হয়। 
অর্থাৎ, name, Name, এবং NAME জাভাস্ক্রিপ্টের কাছে তিনটি সম্পূর্ণ আলাদা ভেরিয়েবল।

Case-Sensitivity-র উদাহরণ

let myname = "Abdullah";
let myName = "Mohammad";
let MYNAME = "Rokshana";
console.log(myname); // আউটপুট: Abdullah
console.log(myName); // আউটপুট: Mohammad
console.log(MYNAME); // আউটপুট: Rokshana


🔸 Variable নাম লেখার নিয়ম (Rules):

অক্ষর, সংখ্যা, $ এবং _ : নাম শুরু হতে পারে অক্ষর (a-z, A-Z), ডলার সাইন ($), অথবা আন্ডারস্কোর (_) দিয়ে।

সংখ্যা দিয়ে শুরু করা নিষেধ: নাম কখনোই কোনো সংখ্যা দিয়ে শুরু হতে পারবে না। (যেমন: 1user ভুল, কিন্তু user1 সঠিক)।

স্পেস থাকা যাবে না: নামের মাঝখানে কোনো স্পেস দেওয়া যাবে না। (যেমন: full name ভুল)।

রিজার্ভড কি-ওয়ার্ড: জাভাস্ক্রিপ্টের নিজস্ব শব্দ যেমন let, var, const, function, if এগুলোকে ভেরিয়েবল হিসেবে ব্যবহার করা যাবে না।


নাম লেখার স্ট্যান্ডার্ড (Naming Conventions)

ক) Camel Case (জাভাস্ক্রিপ্টে সবচেয়ে জনপ্রিয়)
প্রথম শব্দ ছোট হাতের অক্ষরে শুরু হয় এবং পরের প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের হয়।

উদাহরণ: firstName, userEmailAddress, totalPriceAmount.

খ) Snake Case
প্রতিটি শব্দের মাঝে আন্ডারস্কোর (_) ব্যবহার করা হয়।

উদাহরণ: first_name, user_age, total_price.

গ) Pascal Case (সাধারণত Class এর জন্য ব্যবহৃত)
প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের হয়।

উদাহরণ: FirstName, UserAge.

অর্থবহ নাম দেওয়া (Best Practice)
ভেরিয়েবলের নাম এমন হওয়া উচিত যা দেখে বোঝা যায় ভেতরে কী আছে।

খারাপ নাম: let a = 30; (বোঝা যাচ্ছে না ৩০ কী)

ভালো নাম: let userAge = 30;

কনস্ট্যান্ট বা স্থির মানের ক্ষেত্রে
যখন  const দিয়ে এমন কোনো মান  যা কখনোই বদলাবে না (যেমন পাই-এর মান), তখন সব বড় হাতের অক্ষর ব্যবহার করা একটি কনভেনশন।
উদাহরণ: const PI = 3.1416;, const BIRTH_YEAR = 1996;

কিছু valid variable নাম

let name;
let myName;
let my_name;
let $data;
let user1;


জাভাস্ক্রিপ্টে ভেরিয়েবল তৈরি করার জন্য ৩টি কি-ওয়ার্ড আছে \\\\\\\\ JavaScript-এ মূলত ৩ভাবে variable declare করা হয়:

var: ফাংশনাল স্কোপড, এর মান পরিবর্তন করা যায় এবং পুনরায় ডিক্লেয়ার করা যায়।

let: ব্লক স্কোপড, এর মান পরিবর্তন করা যায় কিন্তু পুনরায় ডিক্লেয়ার করা যায় না।

const: ব্লক স্কোপড, এর মান একবার দিলে আর পরিবর্তন বা পুনরায় ডিক্লেয়ার করা যায় না।

১. var (পুরানো পদ্ধতি)

জাভাস্ক্রিপ্টের একদম শুরু থেকে var ব্যবহৃত হয়ে আসছে। তবে আধুনিক জাভাস্ক্রিপ্টে (ES6 এর পর) এর ব্যবহার অনেক কমে গেছে।

Function Scoped: এটি যে ফাংশনের ভেতর লেখা হয়, শুধুমাত্র সেখানেই সীমাবদ্ধ থাকে। কিন্তু লুপ বা ইফ-এলস ব্লকের ভেতর লিখলেও এটি বাইরে থেকে অ্যাক্সেস করা যায়।

Redeclare: একই নামে একাধিকবার ভেরিয়েবল তৈরি করা যায় (যা অনেক সময় কোডে জটিলতা বা ভুল তৈরি করে)।

Hoisting: এটি কোডের শুরুতে চলে যায় (Hoisted), ফলে ভেরিয়েবল ডিক্লেয়ার করার আগেই ব্যবহার করলে undefined দেখায়।

var name = "Abdullah";
var name = "Mohammad"; // কোনো এরর আসবে না, আগের মান বদলে যাবে


let (আধুনিক ও জনপ্রিয়)
    
আধুনিক জাভাস্ক্রিপ্টে কোনো ভেরিয়েবলের মান পরিবর্তনের প্রয়োজন হলে let ব্যবহার করা হয়।

Block Scoped: এটি সেকেন্ড ব্র্যাকেট { } বা ব্লকের বাইরে কাজ করে না (যেমন: loop বা if-else এর ভেতর ডিক্লেয়ার করলে বাইরে পাওয়া যাবে না)।

Cannot Redeclare: একই ব্লকের ভেতর একই নামে দ্বিতীয়বার ভেরিয়েবল তৈরি করা যায় না। তবে মান পরিবর্তন (Reassign) করা যায়।

Hoisting: এটিও হোইস্ট হয়, কিন্তু ডিক্লেয়ার করার আগে ব্যবহার করলে এরর (ReferenceError) দেয়।

let age = 25;
age = 26; // মান পরিবর্তন করা সম্ভব
// let age = 30; // এটি করলে Error আসবে



const (স্থির বা অপরিবর্তনীয়)
যদি আপনি চান যে কোনো ভেরিয়েবলের মান পুরো প্রোগ্রামে কখনোই বদলাবে না, তবে const ব্যবহার করতে হয়।

Constant: এর মান একবার সেট করলে আর পরিবর্তন করা যায় না।

Block Scoped: এটিও let এর মতো ব্লকের ভেতর সীমাবদ্ধ থাকে।

Initialization: const দিয়ে ভেরিয়েবল তৈরি করার সময় অবশ্যই মান দিয়ে দিতে হবে (খালি রাখা যায় না)।

const pi = 3.1416;
// pi = 3.15; // Error: Assignment to constant variable.


var x = 10;
// console.log(x);
x = 20; 
// console.log(x);
x = 50;
console.log(x);

const x = 5;
const y = 6;
const z = x + y;
console.log(z);

let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(z1);

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

01. abdullah_bin_Aziz (Snake Case);

02. abdullahBinAziz (Camale Case);

03. AbdullahBinAziz (Pascal Case);

// again repeat how to declare variable with string number boolean

let name2 = "Abdullah Arman";
// console.log(name);
name2 = "Arman Aziz";
// console.log(name);
name2 = "Rokshana Aziz"
console.log(name2);



var name = "Abdullah Arman";
// document.write(name);
name = "Aziz </br>";
var age = 29;
document.write(name,age);

var name;
var country;
var age;
name = "Mohammad </br>"
country = "Bangladesh </br>"
age = 56;
document.write(name,country,age);
var name,country,age;


var name = "Abdullah ", 
country = "Bangladesh ", 
age = 29;
console.log(name);

// string number boolean typeof operators code

var name = "Abdullah Arman";
var age = 29;
console.log(name,age);

var name = typeof 'Abdullah "Arman';
var age = typeof 29;
console.log(name,age)

var name = typeof "Azziz";
var age = typeof 28;
console.log(name,age);

boolean data type...
// false=0
// true=1

var isSubs = typeof true;
var isPassed = typeof false;
console.log(isSubs,isPassed);

console.log(3>2);
console.log(10<5);
console.log(5<10);

---------------------------------------------------------

let name = "Abdullah";
let address = "Gongachora, Rongpur";
let subject = "Programming";
let grade = "A";

let age = 30;
let height = 5.2;
let cgpa = 3.50;
let accountBalance = 12.25486545;

console.log("-------- Student Output --------\n");

console.log(`My name is: ${name}`);
console.log(`My age is: ${age} years`);
console.log(`My height is: ${height} ft`);
console.log(`My address is: ${address}`);
console.log(`My subject is: ${subject}`);
console.log(`My grade is: ${grade}`);
console.log(`My CGPA is: ${cgpa.toFixed(2)}`);
console.log(`My account balance is: $${accountBalance.toFixed(2)}`);


(Professional) Version — Object ব্যবহার করে 

const student = {
    name: "Abdullah",
    age: 30,
    height: 5.2,
    address: "Gongachora, Rongpur",
    subject: "Programming",
    grade: "A",
    cgpa: 3.50,
    accountBalance: 12.25486545
};

console.log("-------- Student Output --------");
console.log(`My name is: ${student.name}`);
console.log(`My age is: ${student.age}`);
console.log(`My height is: ${student.height} ft`);
console.log(`My address is: ${student.address}`);
console.log(`My subject is: ${student.subject}`);
console.log(`My grade is: ${student.grade}`);
console.log(`My CGPA is: ${student.cgpa.toFixed(2)}`);
console.log(`My account balance is: $${student.accountBalance.toFixed(2)}`);


