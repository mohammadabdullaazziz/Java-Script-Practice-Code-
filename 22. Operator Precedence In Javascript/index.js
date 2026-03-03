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


let result = 10 + 5 * 2; 
console.log(result); // আউটপুট: 20 (আগে ৫ * ২ = ১০, তারপর ১০ + ১০ = ২০)

let result2 = (10 + 5) * 2;
console.log(result2); // আউটপুট: 30 (আগে ব্র্যাকেটের কাজ ১০+৫ = ১৫, তারপর ১৫ * ২ = ৩০)

let result3 = 5 * 2 ** 3;
console.log(result3); // আউটপুট: 40 (আগে ২ এর পাওয়ার ৩ = ৮, তারপর ৫ * ৮ = ৪০)

যখন && (AND) এবং || (OR) একসাথে ব্যবহার করা হয়, তখন && এর কাজ আগে হয়।

let result4 = true || false && false;
console.log(result4); // আউটপুট: true


let a, b, c;
a = b = c = 5 + 5;
console.log(a, b, c); // আউটপুট: 10 10 10

( )	Parentheses (সবচেয়ে আগে)
  
**	Exponentiation (পাওয়ার)
  
*, /, %	Multiplication, Division, Remainder
  
+, -	Addition, Subtraction
  
<, <=, >, >=	Relational Operators
  
==, ===, !=	Equality
  
&&	Logical AND
`	
=	Assignment (সবচেয়ে শেষে)

জাভাস্ক্রিপ্টে লজিক্যাল অপারেটরগুলোর মধ্যে কাজের একটি নির্দিষ্ট ধারাবাহিকতা বা অগ্রাধিকার (Precedence) আছে। যদি একই লাইনে !, &&, এবং || ব্যবহার করা হয়, তবে তারা নিচের ক্রম অনুযায়ী কাজ করবে:

১. ! (Logical NOT): এর ক্ষমতা সবচেয়ে বেশি। এটি সবার আগে কাজ করে।
২. && (Logical AND): এটি দ্বিতীয় অবস্থানে থাকে।
৩. || (Logical OR): এর ক্ষমতা সবচেয়ে কম। এটি সবার শেষে কাজ করে।

let result = true || false && !false;
console.log(result); // আউটপুট: true

ধাপ ১ (! এর কাজ): প্রথমে !false পরিবর্তিত হয়ে true হবে। এখন কোডটি হলো: true || false && true

ধাপ ২ (&& এর কাজ): এরপর false && true এর কাজ হবে। আমরা জানি AND এর ক্ষেত্রে একটি false থাকলে ফলাফল false হয়। এখন কোডটি হলো: true || false

ধাপ ৩ (|| এর কাজ): সবশেষে OR এর কাজ হবে। true || false এর ফলাফল আসবে true।




 যদি চাওয়া হয় || এর কাজ আগে হোক, তবে Parentheses () বা ব্র্যাকেট ব্যবহার করতে হবে। কারণ ব্র্যাকেটের ক্ষমতা এই সব অপারেটরের চেয়েও বেশি।
 
 let result = (true || false) && !false; 
// এখানে ব্র্যাকেটের কারণে আগে OR এর কাজ হবে, তারপর NOT, এবং শেষে AND।

