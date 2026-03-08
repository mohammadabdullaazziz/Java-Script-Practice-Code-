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


জাভাস্ক্রিপ্টে Nullish Coalescing Operator (??) হলো একটি বিশেষ লজিক্যাল অপারেটর যা মূলত কোনো ভেরিয়েবলের মান null অথবা undefined কি না তা চেক করার জন্য ব্যবহৃত হয়। 
এটি টারনারি অপারেটর বা || (OR) অপারেটরের চেয়ে অনেক ক্ষেত্রে বেশি নিরাপদ। নিচে বিস্তারিত আলোচনা করা হলো:

১. এটা কীভাবে কাজ করে?
  
এই অপারেটরটি দুটি মান নিয়ে কাজ করে। এর গঠন হলো: value1 ?? value2

যদি value1 এর মান null অথবা undefined হয়, তবে সে ডান পাশের মানটি (value2) নেবে।

যদি value1 অন্য যেকোনো কিছু হয় (এমনকি 0, false, বা ""), তবে সে বাম পাশের মানটিকেই (value1) নেবে।

২. || (OR) অপারেটরের সাথে পার্থক্য কী?
  
অনেকে ডিফল্ট মান সেট করার জন্য || ব্যবহার করেন। কিন্তু সেখানে একটি বড় সমস্যা আছে। জাভাস্ক্রিপ্টে 0, false এবং "" (খালি স্ট্রিং) কে Falsy মান হিসেবে ধরা হয়।


let speed = 0;
// OR অপারেটর ব্যবহার করলে:
let result1 = speed || 10; 
console.log(result1); // আউটপুট আসবে 10 (কারণ 0 কে সে মিথ্যা মনে করে)

// Nullish Coalescing অপারেটর ব্যবহার করলে:
let result2 = speed ?? 10;
console.log(result2); // আউটপুট আসবে 0 (কারণ 0 তো null বা undefined নয়!)

এখানেই ?? এর সার্থকতা। যদি কোনো ইউজার ইনপুট 0 দেয়, তবে || সেটাকে বাতিল করে ডিফল্ট মান দিয়ে দেয়, কিন্তু ?? সেটাকে গ্রহণ করে।

let userName = prompt("Enter name: ");

// ইউজার যদি Cancel দেয় (null), কেবল তখনই "Guest" হবে।
// কিন্তু ইউজার যদি "" (খালি স্ট্রিং) দেয়, তবে সে "" ই দেখাবে।
let displayName = userName ?? "Guest"; 
console.log("Welcome, " + displayName);
