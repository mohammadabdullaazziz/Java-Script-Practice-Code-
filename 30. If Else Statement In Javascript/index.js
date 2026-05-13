JavaScript-এ if-else স্টেটমেন্ট ব্যবহার করা হয় মূলত কোনো একটি নির্দিষ্ট শর্তের (condition) ওপর ভিত্তি করে সিদ্ধান্ত নেওয়ার জন্য। সহজ কথায়, "যদি এই শর্তটি সত্যি হয় তবে এই কাজটি করো, নাহলে অন্য কাজটি করো।"

if: যদি শর্তটি সঠিক হয়।
else if: যদি আগের শর্তটি ভুল হয় কিন্তু নতুন এই শর্তটি সঠিক হয়।
else: যদি উপরের কোনো শর্তই সঠিক না হয়।

১. শর্তটি সব সময় ব্র্যাকেটের ( ) ভেতরে লিখতে হয়।

২. শর্তটি সত্য নাকি মিথ্যা তা যাচাই করার জন্য সাধারণত Comparison Operators ব্যবহার করা হয় (যেমন: ==, ===, >, <, >=, <=, !=)।

let mangoPrice = 20;
let bananaPrice = 20;
if (mangoPrice <= bananaPrice) {
    console.log("Its True");
}

let myName = "Abdullah";

if (myName == "Abdullah") {
    console.log("Hello");
 }

if (3 < 5) {
    console.log("Yes True");
}

let name = "Aziz";
    if (name == "Abdullah") {
    console.log("is false");
}

let a;

if (a = "Abdullah") {
    console.log("is True");
}

let b;
if (b = null) {
    console.log("is false");
 }

let myColor = "Orange";
if (myColor == "Orange") {
    console.log("Just like the Orange !");
}

let c;

if ( c = "Hello" ) {
    console.log("C Is True");
}

let d;

if ( d = null ) {
    console.log("C Is False");
}

let e;
if (e = "Abdullah") {
    console.log("My Name Is Abdullah");
}

if ("0") {
    console.log("This is True")
}

if ( 3 + 5 ) {
    console.log("Its True")
}

let amount = prompt("Enter Your Amount: ");
if (amount = "100") {
    console.log("Abdullah");
}


JavaScript-এ Arithmetic Operators ব্যবহার করার সময় অনেক ক্ষেত্রে ডাটা অটোমেটিকভাবে Number টাইপে রূপান্তর হয়। এটাকেই বলা হয় Type Coercion। (গাণিতিক অপারেটর যেমন: +, -, *, /) 
    
Type Coercion:   
যখন JavaScript নিজে থেকেই এক টাইপের ডাটাকে অন্য টাইপে পরিবর্তন করে, তখন তাকে Type Coercion বলে।

"10" → string
5 → number
Arithmetic operator ব্যবহার করলে JavaScript অনেক সময় string কে number বানিয়ে ফেলে।


console.log("10" - 2);   // আউটপুট: 8 (স্ট্রিং "10" সংখ্যা ১০-এ রূপান্তরিত হয়েছে)
console.log("5" * "4");  // আউটপুট: 20 (দুটি স্ট্রিংই সংখ্যায় রূপান্তরিত হয়েছে)
console.log(true + 5);   // আউটপুট: 6 (true রূপান্তরিত হয়েছে 1-এ)
console.log(false + 5);  // আউটপুট: 5 (false রূপান্তরিত হয়েছে 0-এ)
console.log(null + 10);  // আউটপুট: 10 (null রূপান্তরিত হয়েছে 0-এ)
console.log(undefined + 10);
console.log("5" + 2);    // আউটপুট: "52" (এখানে যোগ না হয়ে জোড়া লেগেছে)
console.log(5 + 2);      // আউটপুট: 7 (সাধারণ যোগ)
