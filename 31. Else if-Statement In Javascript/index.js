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


