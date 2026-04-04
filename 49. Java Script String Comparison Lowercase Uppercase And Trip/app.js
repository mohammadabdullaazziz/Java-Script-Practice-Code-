JavaScript-এ স্ট্রিং তুলনা (Comparison) করার সময় Lowercase (ছোট হাতের অক্ষর), Uppercase (বড় হাতের অক্ষর) এবং Trim (ফাঁকা জায়গা বাদ দেওয়া) এই তিনটি বিষয় খুবই গুরুত্বপূর্ণ। 
কারণ, জাভাস্ক্রিপ্ট একটি Case-sensitive ভাষা, অর্থাৎ এখানে "A" এবং "a" এক নয়।

const school = "Changmary Maindrain High School";
const subject = "EnglisH";
const book = "English";

console.log(school.toLowerCase());
console.log(school.toUpperCase());

if (subject === book) {
    console.log("This is True");
} else {
    console.log("Its False");
}

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("This is True");
} else {
    console.log("Its False");
}

1st Time কোডে false আসার প্রধান কারণ হলো Case Sensitivity (কেস সেন্সিটিভিটি)। সহজ বাংলায় বলতে গেলে, 
জাভাস্ক্রিপ্ট বড় হাতের অক্ষর (Capital Letter) এবং ছোট হাতের অক্ষরকে (Small Letter) আলাদা জিনিস হিসেবে গণ্য করে।

জাভাস্ক্রিপ্টের কাছে "H" এবং "h" এক নয়। যেহেতু দুটির স্পেলিং বা বানানের কেস (Case) আলাদা, তাই subject === book চেক করার সময় 
দেখেছে তারা হুবহু এক নয়, তাই রেজাল্ট False এসেছে। যেহেতু একটি অক্ষরও আলাদা (Case-এর দিক থেকে), তাই === অপারেটর বলছে এরা এক নয়।
বড় হাতের H এর ইউনিকোড হলো U+0048 And ছোট হাতের h এর ইউনিকোড হলো U+0068
=== অপারেটর দুটি জিনিস চেক করে:
Value (মান): লেখাটি এক কি না।
Type (ধরন): দুটিই স্ট্রিং কি না।

2nd Time দুটি স্ট্রিংকেই একই কেসে (সবগুলো ছোট হাতের বা বড় হাতের) রূপান্তর। এর জন্য toLowerCase() বা toUpperCase() ব্যবহার করা হয়।
console.log("This is True");
Value (মান): লেখাটি এক ।
Type (ধরন): দুটিই স্ট্রিং এক।


trim() Method:
জাভাস্ক্রিপ্টে trim() মেথডের প্রধান কাজ হলো একটি স্ট্রিং বা টেক্সটের শুরুতে এবং শেষে যদি কোনো অপ্রয়োজনীয় খালি জায়গা (Space), ট্যাব বা নতুন লাইন (Newline) থাকে, তবে সেগুলোকে মুছে ফেলা।
এটি স্ট্রিংয়ের মাঝখানের স্পেসগুলোতে কোনো পরিবর্তন করে না।

const nameWithSpace = "   Mohammad Abdullah   ";
const cleanName = nameWithSpace.trim();

console.log("Ago:", nameWithSpace.length); // output: ২৩ (স্পেসসহ)
console.log("Now:", cleanName.length);    // output: ১৭ (স্পেস ছাড়া)
console.log("Result: '" + cleanName + "'");    // output: 'Mohammad Abdullah'

১. trim(): শুরু এবং শেষ—উভয় দিকের স্পেস মুছে ফেলে।
২. trimStart(): শুধুমাত্র স্ট্রিংয়ের শুরু থেকে স্পেস মুছে ফেলে।
৩. trimEnd(): শুধুমাত্র স্ট্রিংয়ের শেষ থেকে স্পেস মুছে ফেলে।

const text = "   Hello   ";

console.log(text.trimStart()); // "Hello   "
console.log(text.trimEnd());   // "   Hello"


const drink = ' water';
const liquid = 'water ';

if (drink === liquid) {
    console.log("This is True");
} else {
    console.log("Its True");
}

if (drink.trim() === liquid.trim()) {
    console.log("This is True");
} else {
    console.log("Its True");
}

drink.trim() === liquid.trim()—এই লাইনে দুই দিকেই trim() ব্যবহার করার কারণ হলো নিশ্চয়তা (Certainty)।
দুটি জিনিসের তুলনা , জানা যায় না কোন ভ্যারিয়েবলে বাড়তি স্পেস আছে। তাই নিরাপদ থাকার জন্য দুই পাশকেই পরিষ্কার করে নেওয়া হয়।
যদি শুধু একপাশে trim() করা হত, তবে অন্য পাশের স্পেসের কারণে রেজাল্ট false আসতো। 
দুই পাশে trim() করলে জাভাস্ক্রিপ্ট দুই পাশের বাড়তি স্পেস মুছে ফেলে শুধু "Water" === "Water" তুলনা করবে, যা true হবে।

const drink = "  Tea"; 
const liquid = "Tea  ";

console.log(drink.trim() === liquid.trim()); 
// "Tea" === "Tea" -> Result: true


const name1 = "Mohammad";
const name2 = "Mohammad";
const name3 = "Abdullah";

console.log(name1 === name2); // true (কারণ দুটোই এক)
console.log(name1 === name3); // false (কারণ লেখা আলাদা)

const user1 = "Gangachara";
const user2 = "gangachara";
console.log(user1 === user2); // false
console.log(user1.toLowerCase() === user2.toLowerCase()); // true

console.log("apple" < "banana"); // true (কারণ 'a' ডিকশনারিতে আগে আসে)
console.log("Z" < "a");          // true (ইউনিকোড অনুযায়ী বড় হাতের অক্ষর ছোট হয়) 

স্ট্রিংয়ের অংশ বিশেষ তুলনা (Partial Comparison):
কখনো কখনো পুরো স্ট্রিং নয়, বরং শুরু বা শেষ মিল আছে কি না তা দেখতে হয়:

includes(): কোনো শব্দ ভেতরে আছে কি না।

startsWith(): নির্দিষ্ট কিছু দিয়ে শুরু হয়েছে কি না।

endsWith(): নির্দিষ্ট কিছু দিয়ে শেষ হয়েছে কি না।

const message = "JavaScript is powerful";

console.log(message.includes("Script")); // true
console.log(message.startsWith("Java")); // true

endsWith() মেথডটি জাভাস্ক্রিপ্টে খুব সহজ একটি কাজ করে—এটি চেক করে একটি স্ট্রিং বা টেক্সট নির্দিষ্ট কোনো অক্ষর বা শব্দ দিয়ে শেষ হয়েছে কি না। যদি শেষ হয়, তবে এটি true দেয়, আর না হলে false দেয়।

const fileName = "my_photo.jpg";
console.log(fileName.endsWith(".jpg")); // আউটপুট: true
console.log(fileName.endsWith(".png")); // আউটপুট: false

endsWith() বড় হাতের এবং ছোট হাতের অক্ষরের পার্থক্য করে। তাই "A" আর "a" এক নয়।(Case Sensitivity)

const school = "Gangachara Govt College";
console.log(school.endsWith("College")); // true
console.log(school.endsWith("college")); // false (কারণ 'c' ছোট হাতের)

পজিশন বা দৈর্ঘ্য সেট করা:
চাইলে স্ট্রিংয়ের একটি নির্দিষ্ট দৈর্ঘ্য পর্যন্ত চেক করা যায়। ধরা যাক, শুধু প্রথম ১০টি অক্ষরের মধ্যে চেক হবে ।

const message = "JavaScript is fun";
// প্রথম ১০টি অক্ষরের মধ্যে (অর্থাৎ "JavaScript") 'Script' দিয়ে শেষ হয়েছে কি না
console.log(message.endsWith("Script", 10)); // আউটপুট: true

endsWith() ব্যবহারঃ 
যখন Student Information Management প্রজেক্ট বা কোনো ওয়েবসাইট বানাতেঃ 

Email Validation: ইমেইলটি "@gmail.com" দিয়ে শেষ হয়েছে কি না তা দেখতে।

URL Checking: কোনো লিঙ্ক "https://" দিয়ে শুরু হয়ে ".com" বা ".net" দিয়ে শেষ হয়েছে কি না তা যাচাই করতে।

File Filter: ইউজার ভুল করে অন্য কোনো ফরম্যাটের ফাইল আপলোড করছে কি না তা চেক করতে।


যদি বড়-ছোট হাতের ঝামেলা থাকবে না, তবে চেক করার আগে স্ট্রিংটিকে ছোট হাতের করে নিতে: 
const input = "IMAGE.JPG";
console.log(input.toLowerCase().endsWith(".jpg")); // আউটপুট: true 



const userSelection = "Gangachara Govt College";

// ১. সব বড় হাতের করবে -> "GANGACHARA GOVT COLLEGE"
// ২. চেক করবে "COLLEGE" দিয়ে শেষ কি না
const result = userSelection.toUpperCase().endsWith("COLLEGE");

console.log(result); // আউটপুট: true



const fileName = "nature_photo.jpg";
// প্রথমে সব বড় হাতের করে নিচ্ছি, তারপর চেক করছি ".JPG" দিয়ে শেষ কি না
if (fileName.toUpperCase().endsWith(".JPG")) {
    console.log("হ্যাঁ, এটি একটি JPG ফাইল।");
} else {
    console.log("না, এটি অন্য কোনো ফরম্যাটের ফাইল।");
}


toUpperCase() এর কাজ:
এটি একটি স্ট্রিংয়ের ভেতরে থাকা সব ছোট হাতের (lowercase) অক্ষরকে বড় হাতের (UPPERCASE) অক্ষরে রূপান্তর করে। 
তবে এটি মূল স্ট্রিংটিকে পরিবর্তন করে না, বরং একটি নতুন স্ট্রিং তৈরি করে দেয় (কারণ স্ট্রিং ইমিউটেবল)।

const name = "gangachara";
const upperName = name.toUpperCase();

console.log(upperName); // আউটপুট: "GANGACHARA"

const mixText = "Js is PoWeRfUl";
console.log(mixText.toUpperCase()); // আউটপুট: "JS IS POWERFUL"

সংখ্যা বা বিশেষ চিহ্ন (যেমন: @, #, !) এর কোনো ছোট বা বড় হাতের রূপ নেই, তাই এগুলো যেমন আছে তেমনই থাকবে।
const code = "java123@script";
console.log(code.toUpperCase()); // আউটপুট: "JAVA123@SCRIPT"

let city = "rangpur";
city.toUpperCase(); // এটি কিছু পরিবর্তন করবে না যদি না আপনি আবার অ্যাসাইন করেন
console.log(city); // আউটপুট: "rangpur"

city = city.toUpperCase(); // এখন পরিবর্তন হবে
console.log(city); // আউটপুট: "RANGPUR"
