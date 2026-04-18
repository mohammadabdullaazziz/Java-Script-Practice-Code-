let num = prompt("Enter Your Number");
num = Number(num);

// let remainder = num % 2;

if ( (num % 2) == 0) {
    console.log(num + " is Even Number")
} else {
    console.log(num + " is Odd Number");

}

----------------------------------------------------------------------------------
let input = prompt("Enter a number to check Even or Odd:");

if (input === null) {      
    // ১ম if: ইউজার যদি প্রম্পটে 'Cancel' বাটন চাপে
    console.log("Input cancelled");
} 

else {                     
    // ১ম else: যদি ইউজার কিছু লিখে 'OK' চাপে
    let num = Number(input);

    if (input.trim() === "" || isNaN(num)) {   
        // ২য় if: যদি বক্স খালি থাকে অথবা ইউজার সংখ্যা ছাড়া অন্য কিছু (যেমন: abc) লেখে
        console.log("Please enter a valid number!");
    } 

    else if (!Number.isInteger(num)) {         
        // ৩য় if: যদি ইউজার দশমিক সংখ্যা দেয় (যেমন: ৫.৫)
        console.log("Please enter an integer number!");
    } 

    else if (num % 2 === 0) {                  
        // ৪র্থ if: যদি সংখ্যাটি ২ দিয়ে নিঃশেষে বিভাজ্য হয়
        console.log(num + " is an Even Number");
    } 

    else {                                     
        // শেষ else: উপরের কোনোটি না হলে সেটি অবশ্যই বেজোড় সংখ্যা
        console.log(num + " is an Odd Number");
    } 
}



✔ Cancel detect
✔ ফাঁকা input detect
✔ String detect
✔ Decimal detect
✔ সুন্দর output format
✔ Cleaner logic
-------------------------------------------------------
let num = Number(prompt("Enter a number: "));
console.log(num % 2 === 0 ? "Even Number" : "Odd Number");
-----------------------------------------------------------------------------------------------------
let marks = Number(prompt("Enter your marks: "));

if (marks > 100 || marks < 0) {
    console.log("Invalid Input!"); 
} else if (marks >= 90) {
    console.log("Golden A++");
} else if (marks >= 80) {
    console.log("A++");
} else if (marks >= 70) {
    console.log("A Grade");
} else if (marks >= 60) {
    console.log("A-");
} else if (marks >= 50) {
    console.log("B Grade");
} else if (marks >= 40) {
    console.log("B");
} else if (marks >= 33) {
    console.log("C");
} else {
    console.log("Fail Hahahaha");
}
Abdullah লিখলে Number() ফাংশনটি সেটিকে সংখ্যায় রূপান্তর করতে না পেরে NaN (Not a Number) রিটার্ন করবে।
NaN হওয়া সত্ত্বেও কেন এটি "Fail Hahahaha" দেখাচ্ছে? এর পেছনে জাভাস্ক্রিপ্টের লজিক কাজ করার একটি নির্দিষ্ট কারণ:
যখন  marks = Number("Abdullah"), তখন marks এর মান হচ্ছে NaN। এরপর জাভাস্ক্রিপ্ট  দেওয়া শর্তগুলো (Conditions) চেক করতে শুরু করে:
NaN > 100? ➜ False

NaN < 0? ➜ False

NaN >= 90? ➜ False

NaN >= 80? ➜ False

... (এভাবে সব else if চেক করবে)

NaN >= 33? ➜ False
জাভাস্ক্রিপ্টে NaN-এর সাথে যেকোনো সংখ্যার তুলনা করলে ফলাফল সবসময় false আসে।
যেহেতু ওপরের কোনো if বা else if শর্তই সত্য (true) হয়নি, তাই জাভাস্ক্রিপ্ট নিয়ম অনুযায়ী একদম শেষের else ব্লকে চলে যায়। 
আর  else ব্লকে লেখা আছে: console.log("Fail Hahahaha");
এই কারণেই স্ক্রিনে "Fail Hahahaha" লেখাটি আসছে। জাভাস্ক্রিপ্ট বুঝতে পারছে না যে ইনপুটটি আসলে একটি নাম, সে শুধু দেখছে কোনো শর্তই মেলেনি।

যদি চাওয়া হয় যে নাম লিখলে "Fail" না দেখিয়ে "Invalid" দেখাবে, তবে  isNaN() ব্যবহার করতে হবে। কোডটি এভাবে লিখলে সবচেয়ে ভালো হয়:

let marks = Number(prompt("Enter your marks: "));

if (isNaN(marks) || marks > 100 || marks < 0) {
    console.log("Invalid Input! Please enter a number."); 
} else if (marks >= 90) {
    console.log("Golden A++");
} 
// ... বাকি কোড আগের মতোই
else {
    console.log("Fail Hahahaha");
}

Number("Abdullah") এর মান হলো NaN।

NaN কোনো সংখ্যার চেয়ে বড় বা ছোট নয়, তাই সব কন্ডিশন False হয়।



|| operator true খোঁজে Abdullah লিখলে তো পরের conditon check করবে  marks > 100 || marks < 0 check না করেই Invalid input দেখার কারনঃ

সহজ কথায়, জাভাস্ক্রিপ্টের || (OR) অপারেটর সবসময় প্রথম সত্য (True) মানটি খোঁজে। যখনই সে একটি সত্য মান পেয়ে যায়, সে পরের কন্ডিশনগুলো আর চেকই করে না।
if (isNaN(marks) || marks > 100 || marks < 0)
    
যখন  প্রম্পটে "Abdullah"
ধাপ ১: marks এর মান হয়ে গেল NaN (কারণ স্ট্রিং সংখ্যায় রূপান্তর হয়নি)।

ধাপ ২: জাভাস্ক্রিপ্ট প্রথম অংশটি চেক করলো: isNaN(marks)। যেহেতু marks এখন NaN, তাই এই শর্তটি হয়ে গেল true।

ধাপ ৩ (Short-circuit): যেহেতু এটি একটি || (OR) অপারেটর এবং সে প্রথম শর্তেই true পেয়ে গেছে, তাই সে নিশ্চিত হয়ে গেল যে পুরো ব্র্যাকেটের রেজাল্ট true হবেই।

এখন marks > 100 কি না বা marks < 0 কি না, তা জাভাস্ক্রিপ্টের কাছে আর কোনো গুরুত্ব রাখে না।
সে সময় বাঁচানোর জন্য পরের কন্ডিশনগুলো স্কিপ (Skip) করে সরাসরি "Invalid Input!" প্রিন্ট করে দেয়।
------------------------
isNaN() ফাংশনঃ
isNaN() ফাংশনটির কাজই হলো এটি চেক করা যে, কোনো কিছুর মান NaN (Not a Number) কি না।

NaN কীভাবে তৈরি হলো?
কোডের শুরুতে: let marks = Number(prompt("Enter your marks: "));
যখন প্রম্পটে "Abdullah", তখন জাভাস্ক্রিপ্ট Number("Abdullah") করার চেষ্টা করলো।

যেহেতু "Abdullah" কোনো সংখ্যা নয়, তাই জাভাস্ক্রিপ্ট এর মান দিল NaN।
অর্থাৎ এখন marks = NaN।

isNaN(marks) কেন true হলো?
isNaN() ফাংশনটি জাভাস্ক্রিপ্টকে একটি প্রশ্ন করে: "ব্র্যাকেটের ভেতরের মানটি কি 'সংখ্যা নয়' (Not a Number)?"

কোডে এটি হয়ে গেল: isNaN(NaN)।

জাভাস্ক্রিপ্ট দেখলো, হ্যাঁ! ব্র্যাকেটের ভেতরের মানটি তো সত্যিই NaN।

তাই সে উত্তর দিল: true।

শর্তটি ছিল: if (isNaN(marks) || marks > 100 || marks < 0)

১. জাভাস্ক্রিপ্ট প্রথমে চেক করলো isNaN(marks)।
২. যেহেতু marks এর মান NaN, তাই isNaN(marks) হয়ে গেল true।
৩. যেহেতু এটি একটি || (OR) অপারেটর, তাই প্রথম অংশটি true হওয়ার সাথে সাথেই পুরো if কন্ডিশনটি true হয়ে গেল।
৪. ফলাফল হিসেবে কনসোলে "Invalid Input!" প্রিন্ট হলো।


জাভাস্ক্রিপ্টে isNaN() ফাংশনটির প্রধান কাজ হলো কোনো একটি মান "সংখ্যা নয়" (Not a Number) কি না তা যাচাই করা। এটি মূলত ইনপুট ভ্যালিডেশনের জন্য ব্যবহার করা হয়।
এর সবচেয়ে বড় কাজ হলো কোনো ভ্যারিয়েবলের মান NaN কি না তা দেখা। যদি মানটি সংখ্যা না হয়, তবে এটি true রিটার্ন করে, আর সংখ্যা হলে false রিটার্ন করে।
console.log(isNaN("Hello")); // true (কারণ এটি সংখ্যা নয়)
console.log(isNaN(100));     // false (কারণ এটি একটি সংখ্যা)

isNaN() সরাসরি চেক করার আগে মানটিকে সংখ্যায় রূপান্তর করার চেষ্টা করে। একে বলা হয় Type Coercion।

যদি এটি "123" পায়, তবে এটিকে সংখ্যায় (১২৩) রূপান্তর করে ফেলে এবং false দেয়।

যদি রূপান্তর করতে না পারে (যেমন: "abc"), তবেই কেবল true দেয়।
console.log(isNaN("500")); // false (কারণ "500" কে সংখ্যা বানানো সম্ভব)

যখন কোনো ইনপুট দেয় (যেমন: বয়স বা মার্কস), তখন সে ভুল করে নাম বা টেক্সট লিখে দিতে পারে। সেটি আটকানোর জন্য isNaN() ব্যবহার করা হয়।
let input = prompt("আপনার বয়স লিখুন:");
if (isNaN(input)) {
    console.log("ভুল ইনপুট! দয়া করে সংখ্যা লিখুন।");
}

জাভাস্ক্রিপ্টে কিছু অদ্ভুত মান আছে যা isNaN() দিয়ে চেক করলে নিচের মতো রেজাল্ট আসে:

Empty String (""): এটি false দেয় (কারণ খালি স্ট্রিংকে জাভাস্ক্রিপ্ট 0 ধরে)।

Boolean (true/false): এটিও false দেয় (কারণ true = 1 এবং false = 0)।

null: এটিও false দেয় (কারণ null কে জাভাস্ক্রিপ্ট 0 ধরে)।

জাভাস্ক্রিপ্টে একটি অদ্ভুত বিষয় হলো, আপনি যদি সরাসরি চেক করেন NaN == NaN, তবে উত্তর আসবে false। 
অর্থাৎ NaN নিজেকেও নিজে চেনে না! তাই কোনো মান NaN কি না তা নিশ্চিত হওয়ার একমাত্র উপায় হলো isNaN() ব্যবহার করা।

let result = 0 / 0; // এটি NaN তৈরি করবে
if (isNaN(result)) {
    console.log("এটি একটি বৈধ সংখ্যা নয়!");
}

isNaN() এর কাজ হলো  কোডকে ভুল ডাটা বা টেক্সট ইনপুট থেকে বাঁচানো এবং নিশ্চিত করা যে আপনি যা নিয়ে কাজ করছেন তা আসলেই একটি সংখ্যা।
