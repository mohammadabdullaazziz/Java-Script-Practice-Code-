// let num1 = 20;
// let num2 = 25;
// console.log(num1 > num2); false

// console.log("65" > "65"); false

// let num1 = 20;
// let num2 = 25;
// console.log(num1 < num2); true

// console.log("65" < 65); false


// let num1 = 20;
// let num2 = 25;
// console.log(num1 >= num2); false

// let num1 = 20;
// let num2 = 20;
// console.log(num1 <= num2); true


// console.log(20==20); true
// console.log(20=="20"); true

// console.log(20==40); false
// console.log("20"== 40); false

// console.log(0 == false); true
// console.log(1 == true); true

// console.log(true == true); true
// console.log(false == false); true
// console.log(null == null); true
// console.log("Abdullah" == "Abdullah"); true
// console.log("01" == 1); true
// console.log("Hello" == 123); false


// console.log(20 != "30"); true
// console.log(25 != 20); true
// console.log(25 != 25); false
// console.log(null != null); false
// console.log("Hello" != 123); true


console.log("2" > "12"); 

যখন  দুটি String-এর মধ্যে তুলোনা করা হয়, জাভাস্ক্রিপ্ট সেগুলোকে সংখ্যা হিসেবে দেখে না। সে দেখে তাদের প্রথম ক্যারেক্টার বা অক্ষরের Unicode (ডিকশনারি অর্ডার) মান।

প্রথম স্ট্রিংয়ের প্রথম অক্ষর: "2"

দ্বিতীয় স্ট্রিংয়ের প্রথম অক্ষর: "1"

যেহেতু ডিকশনারি বা ইউনিকোড অনুযায়ী "2" এর মান "1" এর চেয়ে বড়, তাই জাভাস্ক্রিপ্ট আর পরের অক্ষরগুলো চেকই করে না। সে সরাসরি বলে দেয় এটি true।
console.log("5" > "12"); 

console.log(7 > "12"); ➡️ Result: false
জাভাস্ক্রিপ্টের নিয়ম হলো: যদি একপাশে Number থাকে, তবে সে অন্যপাশের String-টিকেও Number-এ রূপান্তর করার চেষ্টা করে।

console.log("apple" > "banana"); ➡️ Result: false'
জাভাস্ক্রিপ্ট যখন দুটি স্ট্রিং তুলনা করে, তখন সে প্রতিটি অক্ষরের পেছনে থাকা একটি নির্দিষ্ট সংখ্যা (Unicode) চেক করে। ইংরেজী বর্ণমালায় অক্ষরগুলো সিরিয়াল অনুযায়ী তাদের মান পায়।
'a' এর মান হলো 97'
'b' এর মান হলো 98'
'c' এর মান হলো 99 (এভাবেই চলতে থাকে...)
  
console.log("a" > "A"); // রেজাল্ট আসবে true

জাভাস্ক্রিপ্টে প্রতিটি অক্ষরের পেছনে একটি সংখ্যা থাকে, যাকে আমরা Unicode বা ASCII ভ্যালু বলি।
ডিকশনারি বা স্ট্রিংয়ের তুলনা এই সংখ্যার ওপর ভিত্তি করেই হয়।
charCodeAt() এর মাধ্যমে ইউনিকোড মান দেখা
এটি সবচেয়ে কমন উপায়। ব্র্যাকেটের ভেতর 0 মানে হলো আমরা স্ট্রিংয়ের প্রথম অক্ষরের মান দেখতে চাই।

// "2" এবং "1" এর তুলনা কেন এমন হয় দেখুন:
console.log("2 এর ইউনিকোড মান:", "2".charCodeAt(0)); // আউটপুট: 50
console.log("1 এর ইউনিকোড মান:", "1".charCodeAt(0)); // আউটপুট: 49
// যেহেতু ৫০ > ৪৯, তাই "2" > "12" এর রেজাল্ট true আসে।
console.log("2" > "12"); // true

বর্ণমালার (Alphabets) ইউনিকোড মান-----------------
console.log("a এর মান:", "a".charCodeAt(0)); // আউটপুট: 97
console.log("b এর মান:", "b".charCodeAt(0)); // আউটপুট: 98
console.log("A এর মান:", "A".charCodeAt(0)); // আউটপুট: 65
console.log("B এর মান:", "B".charCodeAt(0)); // আউটপুট: 66

----------------------------------------------------------------------------------------------------------------------
জাভাস্ক্রিপ্টে যেকোনো অক্ষরের পেছনে থাকা আসল সংখ্যা বা Unicode মান দেখার জন্য আমরা charCodeAt() মেথড ব্যবহার করি। এটি ব্যবহার করলে পরিষ্কার হয়ে যাবে কেন 'b' বড় আর 'a' ছোট।
let word1 = "apple";
let word2 = "banana";

// প্রথম অক্ষরের ইউনিকোড মান বের করা
console.log("a এর মান:", word1.charCodeAt(0)); // আউটপুট: 97
console.log("b এর মান:", word2.charCodeAt(0)); // আউটপুট: 98
console.log(98 > 97); // true, তাই "banana" বড়



console.log("A এর মান:", "A".charCodeAt(0)); // আউটপুট: 65
console.log("a এর মান:", "a".charCodeAt(0)); // আউটপুট: 97
console.log(97 > 65); // true (তাই ছোট হাতের অক্ষর বড় হাতের চেয়ে বড়)


জাভাস্ক্রিপ্টে ইমোজিও কিন্তু এক একটি ক্যারেক্টার! এদেরও ইউনিকোড মান আছে।
console.log("😊".charCodeAt(0)); // আউটপুট: 55357 (অনেক বড় মান)
console.log("😊" > "a");         // আউটপুট: true


--------------------------------------------------------------------------------------
সরাসরি ইউনিকোড দিয়ে স্ট্রিং তৈরি করা
console.log(String.fromCharCode(65)); // আউটপুট: "A"
console.log(String.fromCharCode(97)); // আউটপুট: "a"
console.log(String.fromCharCode(50)); // আউটপুট: "2"
