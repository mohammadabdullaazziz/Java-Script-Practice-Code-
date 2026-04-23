JavaScript-এ Nullish Coalescing Operator (??) একটি অত্যন্ত দরকারী অপারেটর।
এটি মূলত কোনো ভেরিয়েবলের মান যদি null বা undefined হয়, তবে একটি ডিফল্ট (Default) মান সেট করার জন্য ব্যবহার করা হয়।

"যদি বাম পাশের মানটি নেই (null/undefined) হয়, তবে ডান পাশের মানটি নাও।"
let result = value1 ?? value2;
এখানে যদি value1 এর মান null অথবা undefined হয়, তবে result এর মান হবে value2। অন্যথায়, result এর মান value1-ই থাকবে।

let username = null;
let displayName = username ?? "Guest User";
console.log(displayName); // আউটপুট আসবে: Guest User

যদি ইউজার নাম দিতো:
let username = "Abdullah";
let displayName = username ?? "Guest User";

console.log(displayName); // আউটপুট আসবে: Abdullah


Logical OR (||): এটি বাম পাশের মানটি Falsy (যেমন: 0, "", false, null, undefined) হলেই ডান পাশের মানটি নেয়।

Nullish Coalescing (??): এটি শুধুমাত্র null এবং undefined হলেই ডান পাশের মানটি নেয়। 0 বা খালি স্ট্রিং ("") কে এটি বৈধ মান হিসেবে গণ্য করে।

let score = 0;

let result1 = score || 10; // এখানে ০ কে "মিথ্যা" বা Falsy ধরে ১০ আউটপুট দেবে
let result2 = score ?? 10; // এখানে ০ কে একটি "ভ্যালিড ভ্যালু" হিসেবে ধরে ০-ই আউটপুট দেবে

console.log(result1); // Output: 10
console.log(result2); // Output: 0



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


// let myName = "Abdullah"; //console.log("Defined")  or myName; console.log("Undefined");
// if (myName !== undefined && myName !== null) {
//    console.log("Defined")
// } else {
//    console.log("Undefined");
// }


// let test;
// let myName = "Abdullah";  //myName; or null -------Bye

// if (myName !== undefined && myName !== null) {
//     test = "Hello"
// } else {
//     test = "Bye";
// }
// console.log(test);
// test = (myName !== undefined && myName !== null) ? console.log("Hello") : console.log("Bye");



let test;
let myName = "Abdullah";  //myName; or null -------Bye

test = (myName ?? "Bye");
test = (console.log(myName) ?? console.log("Bye"));


টারনারি অপারেটরের ক্ষেত্রে (? :)
test = (myName !== undefined && myName !== null) ? console.log("Hello") : console.log("Bye");

এখানে টারনারি অপারেটর কোনো মান (Value) তুলনা করছে না, সে একটি শর্ত (Condition) চেক করছে।
লজিক: শর্ত যদি সত্য হয়, তবে সে পাশের পুরো "অ্যাকশন" বা কোডটি রান করবে।
যেহেতু myName নাল বা আনডিফাইন্ড নয়, তাই সে সরাসরি console.log("Hello") ফাংশনটিকে কল করে দিচ্ছে। 
এখানে console.log কী রিটার্ন করলো তা টারনারি অপারেটরের দেখার বিষয় নয়। সে শুধু কমান্ডটা পালন করছে।

Nullish Coalescing এর ক্ষেত্রে (??)
test = (console.log(myName) ?? console.log("Bye"));
এখানেই আসল প্যাঁচ! ?? অপারেটর টারনারি অপারেটরের মতো শুধু শর্ত দেখে না, সে দেখে বাম পাশের মানটি (Value) আসলে কী?
১. ?? অপারেটর আগে বাম পাশের console.log(myName) অংশটি চালিয়ে দেয় (যাতে সে এর থেকে কোনো মান পায়)। এর ফলে স্ক্রিনে "Abdullah" ছাপা হয়।
২. কিন্তু console.log ফাংশনটি কাজ শেষ করার পর ফলাফল হিসেবে ফেরত দেয় undefined।
৩. এখন ?? এর কাছে বাম পাশের মানটি হয়ে গেল undefined।
৪. আমরা জানি ?? এর ধর্ম হলো—বামে undefined বা null থাকলে সে ডান পাশের দিকে যাবেই।
৫. তাই সে বাধ্য হয়ে ডান পাশের console.log("Bye") অংশটিও চালিয়ে দেয়।



let userName = null; // হয়তো ডাটাবেস থেকে নাম পাওয়া যায়নি
let displayName = userName ?? "Anonymous User";

console.log(displayName); 
// আউটপুট: Anonymous User



let score = 0;

let finalScore1 = score || 10; // এখানে ভুল হবে
let finalScore2 = score ?? 10; // এখানে সঠিক হবে

console.log(finalScore1); // আউটপুট: 10 (ভুল, কারণ স্কোর ছিল ০)
console.log(finalScore2); // আউটপুট: 0 (সঠিক, কারণ ০ একটি ভ্যালিড স্কোর)


let userSettings = {
    darkMode: false
};

// ইউজার ডার্ক মোড বন্ধ রেখেছে (false)
let isDark = userSettings.darkMode ?? true; 

console.log(isDark); 
// আউটপুট: false (কারণ false কোনো null বা undefined নয়)




let test;
let myName = '';  

test = (myName ?? "Bye");
console.log(test);
myName = '' মানে তো খালি, তাহলে "Bye" কেন দেখাচ্ছে না? এর কারণ হলো জাভাস্ক্রিপ্টে "খালি স্ট্রিং ('')" এবং "Null/Undefined" এক জিনিস নয়।

কেন ব্ল্যাঙ্ক স্ট্রিং দেখাচ্ছে?
?? অপারেটরটি খুব জেদি। সে শুধুমাত্র দুটি জিনিস খুঁজলে তবেই ডান পাশের "Bye" তে যাবে:
যদি মানটি হয় null
অথবা যদি মানটি হয় undefined

myName = '' (একটি খালি স্ট্রিং)। জাভাস্ক্রিপ্টের কাছে এটি একটি বৈধ স্ট্রিং (Valid Value)। 
এটি নালও নয়, আনডিফাইন্ডও নয়। তাই ?? অপারেটর মনে করে: "আরে, বাম পাশে তো একটা স্ট্রিং আছেই (ভলে সেটি খালি হোক), তাহলে আর কষ্ট করে ডানে যাওয়ার দরকার কী?"
সেজন্য সে '' কেই test এর ভেতর পাঠিয়ে দেয়।



let myName = '';  
let test = (myName || "Bye"); // এখানে || ব্যবহার করা হয়েছে
console.log(test); 
// আউটপুট আসবে: Bye
|| (OR): সে দেখে মানটি "মিথ্যা" (Falsy) কি না। জাভাস্ক্রিপ্টে '' (খালি স্ট্রিং), 0, false—সবই মিথ্যা। তাই সে "Bye" তে চলে যায়।





let myName = false;  
let yourName = "Anything";
test = myName ?? yourName ?? "Hello";
console.log(test);  //output false 

১. ?? অপারেটর কী খোঁজে?
আমরা জানি, ?? অপারেটর শুধুমাত্র দুটি জিনিস দেখলে ডান পাশের দিকে যায়:

যদি মানটি হয় null

অথবা যদি মানটি হয় undefined

২. কোডটি যেভাবে কাজ করছে:
তোমার কোডটি হলো: test = myName ?? yourName ?? "Hello";

প্রথম ধাপ (myName ?? yourName):
এখানে myName এর মান হলো false।
এখন ?? অপারেটর নিজেকে প্রশ্ন করছে: "এই false কি null বা undefined?" উত্তর হলো: না।
যেহেতু এটি null বা undefined নয়, তাই সে বাম পাশের মানটিকেই (false) গ্রহণ করে এবং সেখানেই থেমে যায়। সে আর ডানে yourName এর দিকে তাকায়ও না।
ফলাফল: test ভেরিয়েবলের ভেতর false জমা হয়ে যাচ্ছে।

৩. যদি || (OR) অপারেটর ব্যবহার করা হত?

test = myName || yourName || "Hello";
তাহলে আউটপুট আসত "Anything"।

কেন? কারণ || অপারেটর দেখে মানটি Falsy কি না। যেহেতু false একটি ফালসি (Falsy) মান, তাই সে এটিকে বাদ দিয়ে পরের ডানের মান (yourName) বেছে নিত।




let num1 = 10;  
let num2 = 20;
let test = (num1 ?? 5) * (num2 ?? 10);
console.log(test);  output 200



let num1 = 10;  
let num2 = 20;
let test = num1 ?? 5 * num2 ?? 10;
console.log(test);  output 10

এখানে আউটপুটের এই বিশাল পার্থক্যের মূল কারণ হলো Operator Precedence
সহজ কথায়, গুণ (*) চিহ্নের ক্ষমতা ?? চিহ্নের চেয়ে অনেক বেশি।

১. প্রথম ক্ষেত্রে: (num1 ?? 5) * (num2 ?? 10)এখানে ব্র্যাকেট () ব্যবহার করা হয়েছে। ব্র্যাকেটের কাজ সবার আগে হয়।
(num1 ?? 5): যেহেতু num1 এর মান ১০ (যা null/undefined নয়), তাই এখান থেকে পাওয়া যায় ১০।
(num2 ?? 10): যেহেতু num2 এর মান ২০, তাই এখান থেকে পাওয়া যায় ২০।

হিসাব: 10 * 20 = 200।

let test = num1 ?? 5 * num2 ?? 10;
ব্র্যাকেট বা প্যারেনথেসিস () সরিয়ে দিলে আউটপুট হবে ১০।

কেন এমন হবে, সেটার কারন জাভাস্ক্রিপ্টের Operator Precedence (কোন চিহ্নের কাজ আগে হবে)। 
জাভাস্ক্রিপ্টে গুণের ক্ষমতা (*) এই ?? অপারেটরের চেয়ে অনেক বেশি। তাই ব্র্যাকেট না থাকলে সে আগে গুণের কাজ সারে।
let test = num1 ?? 5 * num2 ?? 10;

ধাপ ১ (গুণের কাজ):
সবার আগে জাভাস্ক্রিপ্ট মাঝখানের গুণটি করবে: 5 * num2
অর্থাৎ: 5 * 20 = 100
এখন লাইনটি  এমন হয়ে গেল: num1 ?? 100 ?? 10

ধাপ ২ (প্রথম Nullish চেক):
এখন জাভাস্ক্রিপ্ট বাম দিক থেকে প্রথম ?? এর কাজ করবে: num1 ?? 100
যেহেতু num1 এর মান ১০ (যা null বা undefined নয়), তাই সে বাম পাশের মানটিই নিয়ে নেবে। এখান থেকে রেজাল্ট আসবে ১০।

ধাপ ৩ (শেষ Nullish চেক):
এখন বাকি থাকল: 10 ?? 10
যেহেতু প্রথম ১০ নিজেই একটি ভ্যালিড ভ্যালু, তাই আউটপুট হবে ১০।

ব্র্যাকেটসহ	(10) * (20)	  ২০০

ব্র্যাকেট ছাড়া	10 ?? (5 * 20) ?? 10	 ১০


let num1 = 10;  
let num2 = 20;
let test = num1 ?? 5 * num2 ?? 10;
console.log(test);  output 10

২. দ্বিতীয় ক্ষেত্রে: num1 ?? 5 * num2 ?? 10

সি বা জাভাস্ক্রিপ্টে গুণের (*) পাওয়ার বা অগ্রাধিকার ?? এর চেয়ে অনেক উপরে। তাই কম্পিউটার আগে গুণের কাজটি করে।
আগে গুণ হবে: মাঝখানে আছে 5 * num2। অর্থাৎ 5 * 20 = 100।
এখন ইকুয়েশনটি দাঁড়ালো: num1 ?? 100 ?? 10

এবার ?? এর কাজ (বাম থেকে ডানে):
সে দেখছে num1 কি null/undefined? উত্তর হলো—না, num1 এর মান তো ১০।
যেহেতু সে প্রথমেই একটি বৈধ মান (১০) পেয়ে গেছে, সে আর ডানের কোনো কিছুর দিকেই তাকাবে না 
ফলাফল: তাই ফাইনাল আউটপুট আসে ১০।

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
জাভাস্ক্রিপ্টে সরাসরি && বা || এর সাথে ?? ব্যবহার করলে এরর (Error) দেখায়। কিন্তু গুণের (*) সাথে এরর দেখায় না, 
তবে রেজাল্ট ভুল আসার সম্ভাবনা থাকে। তাই সেফটি হিসেবে সবসময় ব্র্যাকেট ব্যবহার করাই বেস্ট প্র্যাকটিস।

জাভাস্ক্রিপ্টে সরাসরি && বা || এর সাথে ?? ব্যবহার করলে SyntaxError দেখায়। এর কারণ হলো জাভাস্ক্রিপ্ট কনফিউজড হয়ে যায় যে  আগে কোনটির কাজ করতে চাচ্ছেন (অর্থাৎ কার অগ্রাধিকার বেশি)।
সঠিক উপায় হলো ব্র্যাকেট বা প্যারেনথেসিস () ব্যবহার করা। ব্র্যাকেট ব্যবহার করলে জাভাস্ক্রিপ্ট স্পষ্ট বুঝতে পারে কোন লজিকটি আগে কাজ করবে।

ভুল কোড (যা এরর দিবে):
// এটি SyntaxError দিবে
let result = "Hello" || "World" ?? "Default";

সঠিক কোড (ব্র্যাকেট ব্যবহার করে):
let result = ("Hello" || "World") ?? "Default";
console.log(result); // আউটপুট: Hello

আগে ?? এর কাজ হোক:
let result = "Hello" || ("World" ?? "Default");
console.log(result); // আউটপুট: Hello

জাভাস্ক্রিপ্ট ইঞ্জিনের কাছে &&, || এবং ?? এর অগ্রাধিকার (Precedence) প্রায় কাছাকাছি। যখন ব্র্যাকেট ছাড়া এগুলো একসাথে লিখা হয়, তখন ইঞ্জিন বুঝতে পারে না 
কি চাওয়া হসছে (a || b) ?? c চাচ্ছেন নাকি a || (b ?? c)  
এই বিভ্রান্তি এড়াতেই জাভাস্ক্রিপ্ট নিয়ম করে দিয়েছে যে এগুলো একসাথে ব্যবহার করলে ব্র্যাকেট দিতেই হবে।

let userName = null;
let nickName = undefined;

// সঠিক পদ্ধতি
let displayName = (userName || nickName) ?? "Guest";

console.log(displayName); // আউটপুট: Guest

?? এবং || বা && একই লাইনে থাকলে ব্র্যাকেট বাধ্যতামূলক

------- && (Logical AND) এবং ?? (Nullish Coalescing) যখন একসাথে ব্যাবহার করা হয় তখনও জাভাস্ক্রিপ্ট একই কারণে এরর দেয়। এখানেও সমাধান হলো ব্র্যাকেট () ব্যবহার করা।
ভুল কোড (যা এরর দিবে):

let isLogged = true;
let userName = null;

// সরাসরি ব্যবহার করলে SyntaxError দিবে
let result = isLogged && userName ?? "Guest";

সঠিক কোড (ব্র্যাকেট ব্যবহার করে):

let isLogged = true;
let userName = null;

// এখানে ব্র্যাকেট ব্যবহার করায় কোন এরর আসবে না
let result = (isLogged && userName) ?? "Guest";

console.log(result); // আউটপুট আসবে: "Guest"


let isPremium = true;
let coupon = null;

// এখানে (isPremium && coupon) অংশটি আগে কাজ করবে
let finalCoupon = (isPremium && coupon) ?? "SAVE10";

console.log(finalCoupon); // আউটপুট: "SAVE10"

?? এর সাথে && বা || মিক্স করলেই ব্র্যাকেট দিতে হবে।
