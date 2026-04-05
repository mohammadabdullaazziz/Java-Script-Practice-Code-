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

JavaScript-এ Arithmetic Operators (গাণিতিক অপারেটর যেমন: +, -, *, /) কাজ করার সময় ডাটাকে সাধারণত Number (সংখ্যা) টাইপে কনভার্ট বা রূপান্তর করে নেয়।
এই প্রক্রিয়াটিকে জাভাস্ক্রিপ্টের ভাষায় বলা হয় Type Coercion।

console.log("10" - 2);   // আউটপুট: 8 (স্ট্রিং "10" সংখ্যা ১০-এ রূপান্তরিত হয়েছে)
console.log("5" * "4");  // আউটপুট: 20 (দুটি স্ট্রিংই সংখ্যায় রূপান্তরিত হয়েছে)
console.log(true + 5);   // আউটপুট: 6 (true রূপান্তরিত হয়েছে 1-এ)
console.log(false + 5);  // আউটপুট: 5 (false রূপান্তরিত হয়েছে 0-এ)
console.log(null + 10);  // আউটপুট: 10 (null রূপান্তরিত হয়েছে 0-এ)
console.log(undefined + 10);
console.log("5" + 2);    // আউটপুট: "52" (এখানে যোগ না হয়ে জোড়া লেগেছে)
console.log(5 + 2);      // আউটপুট: 7 (সাধারণ যোগ)
