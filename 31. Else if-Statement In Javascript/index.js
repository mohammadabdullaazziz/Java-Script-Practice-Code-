let monthName = prompt("Enter Month Name First 3 Word :")
if (monthName == "Jan") {
  console.log("January")
} else if (monthName == "Feb") {
  console.log("February");
} else if (monthName == "Mar") {
  console.log("March");
} else if (monthName == "Apr") {
  console.log("April");
} else if (monthName == "May") {
  console.log("May");
} else if (monthName == "Jun") {
  console.log("June");
} else if (monthName == "Jul") {
  console.log("July");
} else if (monthName == "Aug") {
  console.log("August");
} else if (monthName == "Sep") {
  console.log("September");
} else if (monthName == "Oct") {
  console.log("October");
} else if (monthName == "Nov") {
  console.log("November");
} else if (monthName == "Dec") {
  console.log("December");
} else {
  console.log("BYE");
}

let amount = 21;
if (amount == 10) {
    console.log("Hello");
} else {
    console.log("Bye");
}
// Output: "Bye"

let amount2 = 21;
if (amount2 == 10) {
    console.log("Hello");
} else if (amount2 = 21) {
    console.log("21");
} 
// Output: "21"

let speed = 87;
if (speed > 90) {
  console.log("OverSpeeding");
} else if (speed > 50) {
  console.log("Normal");
} else {
  console.log("Slow");
}
// Output: "Normal"
let x = 5;
let y = 8;
if(x == y){
console.log('IF statement executed');
} else {
console.log("condition not true.ELSE statement executed");
}
--------------------------------------------------------------------------
let marks = prompt("Enter your marks: ");
marks = +marks; 

if (marks >= 90 && marks <= 100) {
    console.log("Your grade is: Golden A+");
} 
else if (marks >= 80 && marks < 90) { 
    console.log("Your grade is: A+");
} 
else if (marks >= 70 && marks < 80) {
    console.log("Your grade is: A");
} 
else if (marks >= 60 && marks < 70) {
    console.log("Your grade is: A-");
} 
else if (marks >= 50 && marks < 60) {
    console.log("Your grade is: B");
} 
else if (marks >= 40 && marks < 50) {
    console.log("Your grade is: C"); 
} 
else if (marks >= 33 && marks < 40) { 
    console.log("Your grade is: Passed");
} 
else if (marks >= 0 && marks < 33) {
    console.log("Your grade is: Fail");
} 
else {
   
    console.log("Invalid Input! Please enter a number between 0 to 100.");
}

if (marks >= 90 && marks <= 100) {
    console.log("Your grade is: Golden A+");
}

এখানে  && (AND) অপারেটর ব্যবহার করা হয়েছে। && অপারেটরের নিয়ম হলো—এর দুই পাশের শর্তই (Condition) সত্য হতে হবে।

যদি ইনপুট marks = 110।

প্রথম শর্ত: 110 >= 90 (এটি সত্য)।

দ্বিতীয় শর্ত: 110 <= 100 (এটি মিথ্যা, কারণ ১১০ ১০০-এর চেয়ে বড়)।

যেহেতু একটি শর্ত মিথ্যা হয়ে গেছে, তাই জাভাস্ক্রিপ্ট এই ব্লকের ভেতরে ঢোকেনি এবং "Golden A+" প্রিন্ট করেনি।
কেন "Invalid Input" দেখালো?
জাভাস্ক্রিপ্ট ওপর থেকে নিচ পর্যন্ত প্রতিটি else if চেক করে গেছে।

১১০ কি ৮০-৯০ এর মধ্যে? না।

১১০ কি ৭০-৮০ এর মধ্যে? না।

... এভাবে ৩৩-৪০ এবং ০-৩৩ পর্যন্ত কোনো কন্ডিশনেই ১১০ খাপ খায়নি।
যখন ওপরের কোনো শর্তই পূরণ হয় না, তখন প্রোগ্রাম সরাসরি সবার শেষে থাকা else ব্লকে চলে যায়।
else {
    console.log("Invalid Input! Please enter a number between 0 to 100.");
}
-----------------------------------
let mark = prompt("Enter your mark: ");
mark = +mark;

if (mark >= 90 && mark <= 100) {
    console.log("Golden A+");
} else if (mark >= 80 && mark <= 89) {
    console.log("A+");
} else if (mark >= 70 && mark <= 79) { 
    console.log("A grade");
} else if (mark >= 60 && mark <= 69) {
    console.log("A-");
} else if (mark >= 50 && mark <= 59) {
    console.log("B grade"); // 
} else if (mark >= 40 && mark <= 49) {
    console.log("C");
} else if (mark >= 33 && mark <= 39) {
    console.log("You passed");
} else if (mark >= 0 && mark <= 32) {
    console.log("You failed");
} else {
    console.log("Invalid Input! Please enter a number between 0 to 100.");
}

------------------------------------------------------------------------------------------
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


if (marks > 100 || marks < 0) {
    console.log("Invalid Input!"); 
}
এখানে || মানে হলো "অথবা"। যদি মার্কস ১০০-এর বেশি হয় অথবা ০-এর কম হয়, তবে শুরুতেই "Invalid Input" দেখিয়ে প্রোগ্রাম থেকে বের হয়ে যাবে। 
এটি করার ফলে নিচের লাইনগুলোতে আর অযথা চেক করার প্রয়োজন পড়ছে না।
কোডে ১০০ দিলে "Invalid Input!" না দেখিয়ে "Golden A++" দেখানোর কারণ হলো প্রথম শর্তের লজিক।

যদি মার্কস ১০০-এর বেশি হয় (যেমন: ১০১, ১০২...), তবেই এটি true হবে।
কিন্তু ১০০ দিলে, 100 > 100 শর্তটি মিথ্যা (False) হয়। কারণ ১০০ তো ১০০-এর চেয়ে বড় নয়, ১০০-এর সমান।
যেহেতু প্রথম শর্তটি মিথ্যা হয়ে গেছে, তাই জাভাস্ক্রিপ্ট "Invalid Input!" না দেখিয়ে পরের লাইনে চলে যায়।

দ্বিতীয় শর্তটি যেভাবে কাজ করছে:

else if (marks >= 90) {
    console.log("Golden A++");
}

এখন ১০০ নিয়ে জাভাস্ক্রিপ্ট এই লাইনে আসলো। এখানে ব্যবহার  >= (Greater Than or Equal to) চিহ্ন। এর মানে হলো:
মার্কস যদি ৯০-এর বেশি হয় অথবা ৯০-এর সমান হয়।
যেহেতু ১০০ সংখ্যাটি ৯০-এর চেয়ে বড়, তাই এই শর্তটি সত্য (True) হয়।
আর শর্ত সত্য হওয়ার সাথে সাথেই কনসোলে "Golden A++" লেখাটি চলে আসে।

১০০ ইনপুট দিলে জাভাস্ক্রিপ্টের ভাবনাটা অনেকটা এরকম:

"১০০ কি ১০০-এর চেয়ে বড়? না। (প্রথম if বাদ)"

"১০০ কি ০-এর চেয়ে ছোট? না।"

"তাহলে পরের লাইনে যাই..."

"১০০ কি ৯০-এর চেয়ে বড় বা সমান? হ্যাঁ! তাহলে Golden A++ প্রিন্ট করো।"
যদি লক্ষ্য হতো যে ১০০ দিলেও ইনভ্যালিড দেখাবে (যদিও পরীক্ষায় ১০০ পাওয়া সম্ভব), তবে শর্তটি এভাবে লিখতে হতো:
if (marks >= 100 || marks < 0)
---------------------------------------------------------------------------------------------------------------


let marks = prompt("Enter your Mark number: ");
marks = Number(marks); 


if (isNaN(marks) || marks > 100 || marks < 0) {
    console.log("দয়া করে ০ থেকে ১০০ এর মধ্যে সঠিক সংখ্যা দিন।");
} 

else if (marks >= 90) {
    console.log("Your grade is: Golden A+");
} 
else if (marks >= 80) { 
    console.log("Your grade is: A+");
} 
else if (marks >= 70) { 
    console.log("Your grade is: A");
} 
else if (marks >= 60) {
    console.log("Your grade is: A-");
} 
else if (marks >= 50) {
    console.log("Your grade is: B");
} 
else if (marks >= 40) {
    console.log("Your grade is: C");
}
else if (marks >= 33) {
    console.log("Your grade is: Passed");
} 

else {
    console.log("Your grade is: Fail");
}


// input === null → Cancel চাপলে detect করবে

// trim() === "" → ফাঁকা দিলে ধরবে

// isNaN(speed) → যদি abc টাইপ কিছু দেয়

// Negative speed check

// সব ক্ষেত্রে output নিশ্চিত

let input = prompt("Enter Your Speed: ");
let speed = Number(input);

if (input === null) {
    console.log("Input cancelled");
} 
else if (input.trim() === "" || isNaN(speed)) {
    console.log("Please enter a valid number!");
} 
else if (speed <= 0) {
    console.log("Speed cannot be negative!");
} 
else if (speed >= 80) {
    console.log("Over speed");
} 
else if (speed >= 60) {
    console.log("Normal");
} 
else if (speed >= 40) {
    console.log("Slow");
} 
else {
    console.log("Very Slow");
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let speed = prompt("Enter speed(0-100)");
speed = +speed;

if (speed >= 90 && speed <= 100) {
    console.log("Very High");
} else if (speed >= 80 && speed <= 89) {
    console.log("High Speed");
} else if (speed >= 50 && speed <= 79) {
    console.log("Medium");
} else if (speed >= 0 && speed <= 49) {
    console.log("Good");
} else {
    console.log("Invalid (0-100)"); 
}

speed >= 80 && speed <= 89 (৮০ থেকে ৮৯)
speed >= 50 && speed <= 79 (৫০ থেকে ৭৯)
যদি কেউ ৭৯.৫ (79.5) ইনপুট দেয়? তখন কোড কোনো আউটপুট দেবে না, কারণ ৭৯.৫ সংখ্যাটি কোনো রেঞ্জেই নেই।

প্রফেশনাল কোডিংয়ে আমরা সাধারণত এভাবে লিখা হয় এতে কোনো সংখ্যাই বাদ পড়ে না।

let speed = prompt("Enter speed(0-100)");
speed = +speed; // দশমিক থাকলেও এটি কাজ করবে

if (speed >= 90 && speed <= 100) {
    console.log("Very High");
} else if (speed >= 80 && speed < 90) { 
    console.log("High Speed");
} else if (speed >= 50 && speed < 80) { 
    console.log("Medium");
} else if (speed >= 0 && speed < 50) {
    console.log("Good");
} else {
    console.log("Invalid (0-100)");
}


let speed = Number(prompt("Enter your speed: "));

if (speed > 100 || speed < 0 || isNaN(speed)) {
    console.log("Invalid Input"); 
} else if (speed >= 90) {
    console.log("Very hard");
} else if (speed >= 50) {
    console.log("Hard");
} else if (speed >= 30) {
    console.log("Medium");
} else {
    console.log("Slow");
}



let speed = prompt("Enter speed (0-100):");
speed = +speed;

if (speed > 100 || speed < 0) {
    console.log("Invalid (0-100)"); 
} else if (speed >= 90) {
    console.log("Very High");
} else if (speed >= 80) {
    console.log("High Speed");
} else if (speed >= 50) {
    console.log("Medium");
} else {
    console.log("Good");
}
পয়েন্ট বা দশমিক সংখ্যাসহ সব মান কভার করার জন্য শর্তগুলো এমনভাবে দিতে হয় যাতে একটির শেষ অন্যটির শুরু হয়। একে বলা হয় "Continuous Range"।

ক্যান্সেল (Cancel) দিলে কেন "Good" দেখাচ্ছে, তার কারণ:

১. prompt যখন null রিটার্ন করে
যখন প্রম্পট বক্সে "Cancel" বাটনে ক্লিক করা হয়, জাভাস্ক্রিপ্ট তখন speed ভ্যারিয়েবলে কোনো লেখা বা সংখ্যা পাঠায় না, বরং পাঠায় null।

২. ইউনারি প্লাস (+) এর
কোডের দ্বিতীয় লাইনে আছে: speed = +speed;
জাভাস্ক্রিপ্টে যখন আপনি কোনো null মানের আগে প্লাস (+) চিহ্ন বসানো হয়, তখন জাভাস্ক্রিপ্ট সেটিকে সংখ্যায় রূপান্তর করার চেষ্টা করে। আর null কে সংখ্যায় রূপান্তর করলে তার মান হয় 0।
let test = null;
console.log(+test); // আউটপুট: 0

৩. কন্ডিশন চেক (কেন "Good" দেখাচ্ছে?)
যেহেতু ক্যান্সেল করার কারণে আপনার speed এখন 0 হয়ে গেছে, তাই জাভাস্ক্রিপ্ট if-else লজিকগুলো চেক করতে শুরু করে:

speed >= 90? (০ কি ৯০-এর বড়?) -> না (False)
speed >= 80? (০ কি ৮০-এর বড়?) -> না (False)
speed >= 50? (০ কি ৫০-এর বড়?) -> না (False)
speed >= 0 && speed <= 49? (০ কি ০-এর সমান বা বড় এবং ৪৯-এর ছোট?) -> হ্যাঁ (True)
যেহেতু এই শর্তটি সত্য হয়ে গেছে, তাই কনসোলে "Good" লেখাটি চলে আসে।

যদি চাওয়া হয় ক্যান্সেল করলে "Good" না দেখিয়ে "Invalid" বা অন্য কিছু দেখাবে, তবে চেক করতে হবে ইউজার আদৌ কিছু দিয়েছে কি না।
let speedInput = prompt("Enter speed(0-100)");

// ইউজার যদি ক্যান্সেল করে তবে speedInput হবে null
if (speedInput === null) {
    console.log("Input Cancelled!");
} else {
    let speed = +speedInput; // সংখ্যায় রূপান্তর 

    if (speed >= 90 && speed <= 100) {
        console.log("Very High");
    } else if (speed >= 80 && speed < 90) {
        console.log("High Speed");
    } else if (speed >= 50 && speed < 80) {
        console.log("Medium");
    } else if (speed >= 0 && speed < 50) {
        console.log("Good");
    } else {
        console.log("Invalid (0-100)");
    }
}
জাভাস্ক্রিপ্ট অনেক সময় ডাটা টাইপ নিয়ে নিজে নিজেই সিদ্ধান্ত নেয় (যাকে বলে Type Coercion)। null কে 0 বানিয়ে ফেলার কারণেই লজিক অনুযায়ী সেটি "Good" রেঞ্জে ঢুকে পড়েছে।


!!!!!!!!!যখন প্রম্পট বক্সে কিছু না লিখে শুধু "OK" বাটনে ক্লিক করা হয়, তখন জাভাস্ক্রিপ্ট একটি খালি স্ট্রিং ("") রিটার্ন করে। আর এই খালি স্ট্রিংটিই কোডে থাকা + (প্লাস) চিহ্নের কারণে 0 (শূন্য) হয়ে যাচ্ছে।
যখন প্রম্পটে কিছু না লিখে OK দেওয়া হয়:

speed এর মান হয়: "" (Empty String)।
যখন  speed = +speed;, তখন জাভাস্ক্রিপ্ট এই খালি স্ট্রিংকে সংখ্যায় রূপান্তর করার চেষ্টা করে।
জাভাস্ক্রিপ্টের নিয়ম অনুযায়ী, +"" এর মান হয় 0।
let input = ""; 
console.log(+input); // আউটপুট: 0

কেন "Good" আউটপুট আসে?
যেহেতু speed এখন ০, তাই জাভাস্ক্রিপ্ট আপনার শর্তগুলো চেক করে:
speed >= 90? (না)
speed >= 80? (না)
speed >= 50? (না)
speed >= 0 && speed <= 49? (হ্যাঁ! কারণ ০ সংখ্যাটি ০-এর সমান)।
যেহেতু এই রেঞ্জটি সত্য হয়ে গেছে, তাই সে "Good" দেখাচ্ছে।

যদি চাওয়া হয় যে ইউজার কিছু না লিখে OK দিলে বা উল্টোপাল্টা কিছু লিখলে সেটি "Good" দেখাবে না, তবে চেক করতে হবে ইনপুটটি আসলে খালি কি না।
let input = prompt("Enter speed(0-100)");

// ইউজার যদি কিছু না লিখে OK দেয় (input === "") 
// অথবা যদি ক্যান্সেল করে (input === null)
if (input === "" || input === null) {
    console.log("Please enter a valid number!");
} else {
    let speed = +input;

    if (isNaN(speed)) {
        console.log("This is not a number!");
    } else if (speed >= 90 && speed <= 100) {
        console.log("Very High");
    } else if (speed >= 80 && speed < 90) {
        console.log("High Speed");
    } else if (speed >= 50 && speed < 80) {
        console.log("Medium");
    } else if (speed >= 0 && speed < 50) {
        console.log("Good");
    } else {
        console.log("Invalid (0-100)");
    }
}


// ১. আগে স্ট্রিং হিসেবে ইনপুট নিন, কনভার্ট করবেন না
let input = prompt("Enter your marks: (0-100) ");

// ২. ইনপুট ভ্যালিডেশন করুন (স্ট্রিং অবস্থায়)
if (input === null || input.trim() === "" || isNaN(Number(input))) {
    console.log("Enter a valid number");
} else {
    // ৩. ভ্যালিডেশন পাস করলে তখন সংখ্যায় রূপান্তর করুন
    let marks = Number(input); 

    if (marks >= 90 && marks <= 100) {
        console.log("Very High");
    } else if (marks >= 80 && marks < 90) {
        console.log("High Speed");
    } else if (marks >= 50 && marks < 80) {
        console.log("Medium");
    } else if (marks >= 0 && marks < 50) {
        console.log("Good");
    } else {
        console.log("Invalid (0-100)");
    }
}

Cancel ক্লিক করলে: জাভাস্ক্রিপ্ট পায় null, যা + করলে হয় 0।

কিছু না লিখে OK দিলে: জাভাস্ক্রিপ্ট পায় "", যা + করলেও হয় 0।
জাভাস্ক্রিপ্ট "" এবং null-কে গাণিতিক কাজের সময় 0 হিসেবে ধরে নেয়।


isNaN() Function:
জাভাস্ক্রিপ্টে ইনপুট ভ্যালিডেশনের জন্য isNaN() একটি অত্যন্ত গুরুত্বপূর্ণ ফাংশন। এর পূর্ণরূপ হলো "is Not a Number"। এটি মূলত চেক করে যে কোনো একটি ভ্যালু বা মান "সংখ্যা নয়" এমন কিছু কি না।
১. বেসিক কাজ (Basic Working)
isNaN() ফাংশনটি যেকোনো মান গ্রহণ করে এবং ফলাফল হিসেবে Boolean (true / false) রিটার্ন করে।

true রিটার্ন করে: যদি মানটি সংখ্যা না হয় (যেমন: "Hello", undefined)।

false রিটার্ন করে: যদি মানটি একটি বৈধ সংখ্যা হয় (যেমন: 10, 5.5, "100")।

console.log(isNaN("Hello")); // true (কারণ এটি সংখ্যা নয়)
console.log(isNaN(100));     // false (কারণ এটি একটি সংখ্যা)
console.log(isNaN("100"));   // false (জাভাস্ক্রিপ্ট "100" স্ট্রিংটিকে সংখ্যায় রূপান্তর করতে পারে)

২. isNaN() কেন ব্যবহার করবোঃ
ইউজার যদি সংখ্যার বদলে ভুল করে "abc" লিখে OK দিত, তবে আপনার কোড উল্টোপাল্টা রেজাল্ট দিতে পারত। isNaN() দিয়ে সেটি আটকানো যায়:

let input = prompt("Enter speed:");
let speed = +input;

if (isNaN(speed)) {
    console.log("Invalid input! Please enter numbers only.");
} else {
    console.log("Your speed is: " + speed);
}

যখন isNaN(value) কল করা হয়, জাভাস্ক্রিপ্ট পর্দার আড়ালে নিচের ধাপগুলো অনুসরণ করে:

প্রথমে সে মানটিকে Number-এ রূপান্তর করার চেষ্টা করে (যেমন: Number(value))।

যদি রূপান্তর করতে গিয়ে সে NaN (Not a Number) পায়, তবেই সে true দেয়।

আর যদি সফলভাবে সংখ্যায় রূপান্তর করতে পারে, তবে সে false দেয়।

জাভাস্ক্রিপ্ট কিছু কিছু মানকে সংখ্যা হিসেবে গণ্য করে,
খালি স্ট্রিং ("") বা null: এগুলোকে জাভাস্ক্রিপ্ট 0 হিসেবে ধরে। তাই isNaN("") বা isNaN(null) দিলে ফলাফল আসবে false (অর্থাৎ সে মনে করছে এগুলো সংখ্যা)।
বুলিয়ান (true / false): true মানে ১ এবং false মানে ০। তাই isNaN(true) দিলে আসবে false।

৫. Number.isNaN() বনাম isNaN()ঃ

আধুনিক জাভাস্ক্রিপ্টে (ES6) আরও একটি ভার্সন আছে— Number.isNaN()। এটি একটু বেশি কঠোর (Strict)।
isNaN("abc"): এটি "abc"-কে সংখ্যায় রূপান্তর করার চেষ্টা করে এবং true দেয়।
Number.isNaN("abc"): এটি কোনো রূপান্তর করে না। এটি সরাসরি দেখে মানটি আসলে NaN কি না। যেহেতু "abc" একটি স্ট্রিং, তাই এটি false দেবে।


---------------------------------------------------------------------------------------------------------------------------------
Math.floor()ঃ
Math.floor() হলো জাভাস্ক্রিপ্টের একটি বিল্ট-ইন ফাংশন, যা যেকোনো দশমিক সংখ্যাকে (Decimal Number) তার নিকটবর্তী নিচের দিকের পূর্ণ সংখ্যায় (Integer) রূপান্তর করে।
সহজ কথায়, এটি সংখ্যাটিকে সবসময় "মেঝেতে" (Floor) নামিয়ে আনে। দশমিকের পরে যাই থাকুক না কেন (যেমন: .১ বা .৯), সেটিকে ছেঁটে ফেলে দিয়ে শুধু নিচের পূর্ণ সংখ্যাটি রাখে।
একটি স্পিড বা মার্কস ইনপুট নিয়েছেন যা দশমিকে আছে। Math.floor() সেটিকে এভাবে পরিবর্তন করবে:

Math.floor(89.1)  ➜  89

Math.floor(89.9)  ➜  89 (এখানে ৮৯.৯ হলেও সে এটিকে ৯০ বানাবে না, কারণ এটি সবসময় নিচের দিকে নামায়)

Math.floor(45.0)  ➜  45

Math.floor(-5.1)  ➜  -6 (ঋণাত্মক সংখ্যার ক্ষেত্রে এটি আরও নিচের দিকে যায়)

প্রোগ্রামিংয়ে অনেক সময় আমাদের নিখুঁত পূর্ণ সংখ্যা দরকার হয়। যেমন:

স্পিড মিটার: যদি কেউ ৮৯.৫ দেয়, আপনি তাকে "৮৯" হিসেবে ধরে কোনো একটি ক্যাটাগরিতে ফেলতে পারেন।

পেমেন্ট: যদি কোনো হিসাবে টাকা আসে ১০.৭৫ টাকা, আপনি হয়তো কাস্টমারকে শুধু ১০ টাকাই দেখাতে চান।

র্যান্ডম নম্বর: লটারি বা লুডু খেলার ছক্কা তৈরির সময় এটি প্রচুর ব্যবহার করা হয়।

let input = prompt("Enter speed (0-100):");

// ১. চেক করা হচ্ছে ইউজার কিছু লিখেছে কি না বা ক্যান্সেল করেছে কি না
if (input === "" || input === null) {
    console.log("Input cannot be empty!");
} else {
    // ২. ইনপুটকে সংখ্যায় রূপান্তর এবং Math.floor() দিয়ে পূর্ণ সংখ্যা করা
    let speed = Math.floor(+input);

    // ৩. চেক করা হচ্ছে ইনপুটটি কি আসলে একটি বৈধ সংখ্যা?
    if (isNaN(speed)) {
        console.log("Error: Please enter a valid number, not text.");
    } 
    // ৪. রেঞ্জ অনুযায়ী রেজাল্ট দেখানো
    else if (speed >= 90 && speed <= 100) {
        console.log("Very High");
    } else if (speed >= 80 && speed <= 89) {
        console.log("High Speed");
    } else if (speed >= 50 && speed <= 79) {
        console.log("Medium");
    } else if (speed >= 0 && speed <= 49) {
        console.log("Good");
    } else {
        console.log("Invalid Range (0-100 only)");
    }
}

Math.round() এবং Math.ceil() এর সাথে পার্থক্য:

ফাংশন	                কাজ	                                            উদাহরণ (৮৯.৬)	      আউটপুট
Math.floor()	          সবসময় নিচের দিকে নামায়।	                          Math.floor(89.6)	     89
Math.ceil()	            সবসময় উপরের দিকে (সিলিংয়ে) উঠায়।	                Math.ceil(89.1)	       90
Math.round()	          দশমিকের মান .৫ বা তার বেশি হলে উপরে, নয়তো নিচে।	Math.round(89.6)	     90
