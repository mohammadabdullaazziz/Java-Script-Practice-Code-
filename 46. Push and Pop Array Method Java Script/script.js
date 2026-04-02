// Push and Pop Array Method Java Script

// ================== array push() example code ==================================
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits);

const numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers); 

const colors = ["Red", "Green"];
const newLength = colors.push("Blue", "Yellow");
console.log(colors);   
console.log(newLength); 

let city = ["New York", "Madrid", "Kathmandu"];
// add "London" to the array
city.push("London");
console.log(city);
// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]


// ================== array pop() example code ==================================
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// remove the last element
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2);

(Array Methods):
  
push()	অ্যারের শেষে নতুন মান যোগ করা	fruits.push("Grape");
pop()	অ্যারের শেষ থেকে একটি মান বাদ দেওয়া	fruits.pop();
unshift()	অ্যারের শুরুতে নতুন মান যোগ করা	fruits.unshift("Lemon");
shift()	অ্যারের শুরু থেকে একটি মান বাদ দেওয়া	fruits.shift();
splice()	নির্দিষ্ট জায়গা থেকে মান বাদ দেওয়া বা যোগ করা	fruits.splice(2, 1);
------------------------------------------------------------------------------------------------------------------------------
push() Array:
JavaScript-এ push() হলো অ্যারের সবচেয়ে বেশি ব্যবহৃত একটি মেথড। এর প্রধান কাজ হলো অ্যারের একেবারে শেষে এক বা একাধিক নতুন উপাদান (Element) যোগ করা।
সহজ কথায়, আপনার কাছে একটি তালিকা বা বক্স আছে, আপনি সেই বক্সের একদম উপরে বা শেষে নতুন কিছু রাখতে চাচ্ছেন—এই কাজটিই করে push()। 
এটি করার ফলে অ্যারের length (দৈর্ঘ্য) বেড়ে যায়।

let fruits = ["Mango", "Apple"];

// 'Orange' কে অ্যারের শেষে যোগ করি
fruits.push("Orange");

console.log(fruits); 
// আউটপুট: ["Mango", "Apple", "Orange"]


চাইলে push() ব্যবহার করে একটির বেশি মানও একবারে যোগ করতে পারেন। 

let numbers = [1, 2];

// একসাথে ৩টি সংখ্যা শেষে যোগ করি
numbers.push(3, 4, 5);

console.log(numbers); 
// আউটপুট: [1, 2, 3, 4, 5]

এটি আসলেই অনেক সময় ইন্টারভিউতে জিজ্ঞেস করা হয়। অধিকাংশ মানুষ মনে করে push() হয়তো নতুন অ্যারেটি রিটার্ন করে, কিন্তু আসলে এটি নতুন অ্যারের দৈর্ঘ্য (Updated Length) রিটার্ন করে।
যখন আমরা push() কল করি, তখন সেটি মেমরিতে অ্যারেটি আপডেট করে এবং সাথে সাথে একটি সংখ্যা (Number) ফেরত দেয়।

let fruits = ["Mango", "Apple"];

// push করার পর যা রিটার্ন আসবে তা একটি ভেরিয়েবলে রাখি
let result = fruits.push("Banana"); 

console.log(result); // আউটপুট: 3
console.log(fruits); // আউটপুট: ["Mango", "Apple", "Banana"]
------------------------------------------------------------------------------------------------------------------------------------------
pop() Array:
pop() হলো জাভাস্ক্রিপ্ট অ্যারের একটি অত্যন্ত গুরুত্বপূর্ণ মেথড, যা push()-এর ঠিক উল্টো কাজ করে। 
সহজ কথায়, এটি একটি অ্যারের একেবারে শেষ উপাদান (Last Element) টিকে মুছে ফেলে।

let fruits = ["Mango", "Apple", "Banana"];

// শেষ উপাদান 'Banana' মুছে ফেলি
fruits.pop();

console.log(fruits); 
// আউটপুট: ["Mango", "Apple"]

এটি একটি খুবই গুরুত্বপূর্ণ অংশ। push() যেখানে নতুন length রিটার্ন করে, সেখানে pop() রিটার্ন করে যে উপাদানটি সে মুছে ফেলেছে (The Removed Element)।

let numbers = [10, 20, 30];

// মুছে ফেলা মানটি একটি ভেরিয়েবলে রাখি
let removedItem = numbers.pop();

console.log(removedItem); // আউটপুট: 30
console.log(numbers);     // আউটপুট: [10, 20]


খালি অ্যারেতে pop() করলে কী হয়?
যদি আপনার অ্যারেটি আগে থেকেই খালি থাকে ([]), তবে pop() ব্যবহার করলে সেটি কোনো ভুল (Error) দেখাবে না, বরং undefined রিটার্ন করবে।
let emptyArr = [];
console.log(emptyArr.pop()); // আউটপুট: undefined

push()	শেষে নতুন মান যোগ করে।	নতুন অ্যারের Length (দৈর্ঘ্য)।
pop()	শেষ থেকে মান মুছে ফেলে।	যে মানটি মুছে ফেলা হয়েছে।

let x = [5, 10, 15];
// pop() ব্যবহার করে শেষ এলিমেন্টটি বের করে 'y' ভেরিয়েবলে রাখি
let y = x.pop();
console.log(y); // আউটপুট: 15
console.log(x); // আউটপুট: [5, 10]
----------------------------------------------------------------------------------------------------------------------------------------------------
unshift() Array:
unshift() হলো জাভাস্ক্রিপ্ট অ্যারের একটি খুবই শক্তিশালী মেথড,
এটি একটি অ্যারের একদম শুরুতে (At the Beginning) এক বা একাধিক নতুন উপাদান (Element) যোগ করে।

let fruits = ["Apple", "Banana"];

// শুরুতে 'Mango' যোগ করি
fruits.unshift("Mango");

console.log(fruits); 
// আউটপুট: ["Mango", "Apple", "Banana"]

একসাথে একাধিক মান যোগ করা..

let numbers = [3, 4];

// শুরুতে ১ এবং ২ যোগ করি
numbers.unshift(1, 2);

console.log(numbers); 
// আউটপুট: [1, 2, 3, 4] 

push()-এর মতো unshift() মেথডটিও কাজ শেষ করার পর অ্যারের নতুন দৈর্ঘ্য (New Length) রিটার্ন করে। 

let colors = ["Red"];
let count = colors.unshift("Green", "Blue");

console.log(count);  // আউটপুট: 3 (কারণ এখন ৩টি রং আছে)
console.log(colors); // আউটপুট: ["Green", "Blue", "Red"] 

অ্যাডভান্সড প্রোগ্রামিংয়ে একটি বিষয় মনে রাখা জরুরি: বড় অ্যারের ক্ষেত্রে push() এর চেয়ে unshift() কিছুটা স্লো কাজ করে।
কারণ: শেষে যোগ করলে শুধু একটি নতুন ঘর তৈরি হয়। 
-----------------------------------------------------------------------------------------------------------------------------------------------------------
shift() Array
shift() মেথডটি হলো unshift()-এর ঠিক উল্টো। এটি একটি অ্যারের একদম প্রথম উপাদান (First Element) টিকে মুছে ফেলে।
let colors = ["Red", "Green", "Blue"];

// প্রথম উপাদান 'Red' মুছে ফেলি
colors.shift();

console.log(colors); 
// আউটপুট: ["Green", "Blue"]
"Green" আগে ১ নম্বর ইনডেক্সে ছিল, কিন্তু "Red" চলে যাওয়ার পর "Green" এখন ০ নম্বর ইনডেক্সে চলে এসেছে।
pop() মেথডের মতো shift() মেথডটিও যে উপাদানটি মুছে ফেলেছে, সেই মানটি (Removed Value) রিটার্ন করে।

let food = ["Pizza", "Burger", "Pasta"];

// মুছে ফেলা মানটি একটি ভেরিয়েবলে রাখি
let firstItem = food.shift();

console.log(firstItem); // আউটপুট: "Pizza"
console.log(food);      // আউটপুট: ["Burger", "Pasta"]

অ্যাডভান্সড লেভেলে  shift() মেথডটি বড় অ্যারের ক্ষেত্রে কিছুটা স্লো হতে পারে। 
কারণ প্রথম এলিমেন্টটি মুছে ফেলার পর কম্পিউটারকে অ্যারের বাকি সব এলিমেন্টের ইনডেক্স নম্বর নতুন করে সেট করতে হয় (সবগুলোকে এক ঘর বামে সরাতে হয়)। 


let ticketQueue = ["Rahim", "Karim", "Abdur"];

// প্রথম জন টিকিট পেয়ে লাইন থেকে বের হয়ে গেল
let served = ticketQueue.shift();

console.log(served + " টিকিট পেয়েছেন।"); // আউটপুট: Rahim টিকিট পেয়েছেন।
console.log("বাকি আছেন: " + ticketQueue); // আউটপুট: ["Karim", "Abdur"]
----------------------------------------------------------------------------------------------------------------------------------------------------------------
includes() Method: 
জাভাস্ক্রিপ্ট অ্যারের includes() মেথডটি খুবই সহজ কিন্তু কাজের একটি টুল। 
এটি মূলত ব্যবহার করা হয় অ্যারের ভেতরে নির্দিষ্ট কোনো মান (Element) আছে কি না তা চেক করার জন্য।
এটি মূলত একটি Boolean মান প্রদান করে।

let shoppingList = ["Eggs", "Milk", "Bread", "Sugar"];

// চেক করি 'Milk' আছে কি না
let hasMilk = shoppingList.includes("Milk");
console.log(hasMilk); // আউটপুট: true

// চেক করি 'Rice' আছে কি না
let hasRice = shoppingList.includes("Rice");
console.log(hasRice); // আউটপুট: false

ইনডেক্স নম্বর দিয়ে চেক করা (Advanced):
চাইলে বলে দিতে পারেন যে, কত নম্বর ইনডেক্স থেকে খোঁজা শুরু করতে হবে।

let numbers = [1, 2, 3, 4, 5];

// ২ নম্বর ইনডেক্স থেকে '1' খোঁজা শুরু করো
console.log(numbers.includes(1, 2)); // আউটপুট: false
// কারণ ২ নম্বর ইনডেক্সে আছে ৩, আর তার পরে ১ নেই। 

কেস সেনসিটিভিটি (Case Sensitivity) 

let fruits = ["Apple", "Mango"];

console.log(fruits.includes("apple")); // আউটপুট: false

শর্ত যাচাই (If Statement):

let allowedUsers = ["admin", "editor", "moderator"];
let currentUser = "guest";

if (allowedUsers.includes(currentUser)) {
    console.log("আপনার প্রবেশের অনুমতি আছে।");
} else {
    console.log("দুঃখিত, আপনি প্রবেশ করতে পারবেন না।");
} 

indexOf() বনাম includes() (পার্থক্য):

জাভাস্ক্রিপ্টে indexOf() এবং includes() উভয়ই অ্যারেতে কোনো মান আছে কি না তা খুঁজতে ব্যবহৃত হয়। তবে এদের আউটপুট বা ফলাফল দেওয়ার ধরণ আলাদা।

indexOf() মেথড (ইনডেক্স নম্বর দেয়)
এটি কোনো মান খুঁজে পেলে তার অবস্থান (Index Number) রিটার্ন করে। আর যদি না পায়, তবে -1 রিটার্ন করে।

let colors = ["Red", "Green", "Blue"];

// 'Green' কত নম্বর ইনডেক্সে আছে?
console.log(colors.indexOf("Green")); // আউটপুট: 1

// 'Yellow' তো নেই, তাহলে কী হবে?
console.log(colors.indexOf("Yellow")); // আউটপুট: -1

includes() মেথড (হ্যাঁ/না উত্তর দেয়): যে মানটি অ্যারেতে আছে কি না। উত্তর দেয় true অথবা false দিয়ে।

let colors = ["Red", "Green", "Blue"];

// 'Green' কি আছে?
console.log(colors.includes("Green")); // আউটপুট: true

// 'Yellow' কি আছে?
console.log(colors.includes("Yellow")); // আউটপুট: false


বৈশিষ্ট্য     	         indexOf()	                                          includes()
আউটপুট (Output)	   ইনডেক্স নম্বর (0, 1, 2...) অথবা -1	                    true অথবা false
কখন ব্যবহার করবেন?	  যখন আপনার মানটির অবস্থান জানা দরকার।	              যখন শুধু জানতে চান মানটি আছে কি না।
শর্ত বা Condition	      if (arr.indexOf("val") !== -1)	                    if (arr.includes("val"))
NaN চেক	              NaN খুঁজে পায় না।	                                    NaN খুঁজে পায়।

কেন includes() বেশি জনপ্রিয়?: 
আগে যখন includes() ছিল না, তখন এভাবে কোড লিখতে হতো:
if (colors.indexOf("Red") !== -1) {
    // মানটি আছে
} 


Includes :

if (colors.includes("Red")) {
    // মানটি আছে
} 
-------------------------------------------------------------------------------------------------------------------------------------------
Array.isArray() মেথড: 
Gemini said
জাভাস্ক্রিপ্টে কোনো একটি ভেরিয়েবল আসলে Array কি না, তা চেক করার জন্য সবচেয়ে নির্ভরযোগ্য এবং স্ট্যান্ডার্ড উপায় হলো Array.isArray() মেথড।
Array.isArray() মেথড (Standard Way)
এটি একটি স্ট্যাটিক মেথড যা আপনাকে সরাসরি true অথবা false আউটপুট দেয়।

let fruits = ["Mango", "Apple"];
let name = "Abdullah";
let book = [];
console.log(Array.isArray(fruits)); // আউটপুট: true
console.log(Array.isArray(name));   // আউটপুট: false
console.log(Array.isArray(book));   


