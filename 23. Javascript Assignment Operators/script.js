<h3>Javascript Assignment Operators</h3>

Assignment operator

let xyz = 10;

// =,  +=, -=, *=, /=, %=; **=,

let b = 6;
b += 3; //x = x + 3;
console.log(b)

let y = 1;
y -= 4; //y = y - 4;
console.log(y);


let z = 2;
z *= 6; //z = z * 6;
console.log(z);

let x = 20;
x /= 4; // x is now 5 (equivalent to x = x / 4)

let m = 10;
m %= 3; // m is now 1 (equivalent to x = x % 3)

let k = 2;

k **= 3; // k is now 8 (equivalent to x = x ** 3)

===============================================================
let a, b, c;

// চেইনিং অ্যাসাইনমেন্ট
a = b = c = 50;

console.log(a); // আউটপুট: 50
console.log(b); // আউটপুট: 50
console.log(c); // আউটপুট: 50

এটি কীভাবে কাজ করে? (How it works)
জাভাস্ক্রিপ্ট এই কোডটিকে ডান দিক থেকে পড়া শুরু করে:

প্রথমে c = 50 হয় (এবং এটি ৫০ রিটার্ন করে)।

তারপর b = 50 হয় (আগের রিটার্ন করা মানটি নিয়ে)।

সবশেষে a = 50 হয়।

let x, y, z;

x = y = z = 10 + 20; 

console.log(x); // আউটপুট: 30
console.log(y); // আউটপুট: 30
console.log(z); // আউটপুট: 30

১ম	10 + 20 হিসাব হবে	+ এর অগ্রাধিকার = এর চেয়ে বেশি
২য়	z = 30	অ্যাসাইনমেন্ট ডান দিক থেকে শুরু হয়
৩য়	y = z (বা ৩০)	ডানের মান বামের ভেরিয়েবলে যায়
৪র্থ	x = y (বা ৩০)	সবার শেষে বামের ভেরিয়েবল মান পায়


// এটি এড়িয়ে চলো (Don't do this)
let a = b = c = 100;

সঠিক উপায়:
let a, b, c;
a = b = c = 100;
