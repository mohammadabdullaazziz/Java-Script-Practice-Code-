// Java script While Loop

let count = 0;

while ( count < 5) {
    console.log("Hello World");
    console.log(count)
    count++ 
}

let amount = 10;
while (amount >= 1) {
   console.log(amount);
   amount--;
}

let score = 0;
while (score <= 10) {
    console.log(score);
    score += 2;
}

জাভাস্ক্রিপ্টে While Loop হলো এমন একটি লজিক যা কোনো একটি শর্ত (Condition) যতক্ষণ পর্যন্ত সত্য (True) থাকবে, ততক্ষণ পর্যন্ত একটি কোড বারবার চালাতে থাকবে।
২. এটি কীভাবে কাজ করে? (ধাপে ধাপে)
১. প্রথমে কম্পিউটার ব্র্যাকেটের ভেতরের Condition চেক করে।
২. যদি শর্তটি সত্য হয়, তবে সে সেকেন্ড ব্র্যাকেটের { } ভেতরের কোডটি রান করে।
৩. কোডটি রান করার পর সে আবার শর্তটি চেক করতে ফিরে যায়।
৪. এভাবে চলতেই থাকে যতক্ষণ না শর্তটি মিথ্যা (False) হয়।

১. Initialization: লুপটি কোথা থেকে শুরু হবে (যেমন: let i = 0).
২. Condition: কতক্ষণ চলবে (যেমন: i < 10).
৩. Increment/Decrement: প্রতিবার শেষে মান বাড়বে নাকি কমবে (যেমন: i++

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let i = 2;
while (i <= 10) {
    console.log(i);
    i += 2;
}

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


let i = 1;
while (i <= 5) {
    console.log("Hello");
    i++;
}

প্রথম ৫টি স্কোয়ার সংখ্যা (1², 2²… )
let i = 1;
while (i <= 5) {
    console.log(i * i);
    i++;
}

১ থেকে ২০ পর্যন্ত বিজোড় সংখ্যা
let i = 1;
while (i <= 20) {
    console.log(i);
    i += 2;
}

১ থেকে ৫ পর্যন্ত যোগফল
let i = 1, sum = 0;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);


স্ট্রিং এর প্রতিটি অক্ষর প্রিন্ট---
let text = "Aziz";
let i = 0;
while (i < text.length) {
    console.log(text[i]);
    i++;
}

৫০ পর্যন্ত ৫ এর গুণিতক
let i = 5;
while (i <= 50) {
    console.log(i);
    i += 5;
}

কাউন্টডাউন টাইমার
let sec = 5;
while (sec > 0) {
    console.log("Time:", sec);
    sec--;
}

১ থেকে ১০ পর্যন্ত **
let i = 1;
while (i <= 10) {
    console.log(i ** 3);
    i++;
}

১০ বার “Bangladesh” প্রিন্ট----
let i = 1;
while (i <= 10) {
    console.log("Bangladesh");
    i++;
}

১০ বার random সংখ্যা-----
let i = 1;
while (i <= 10) {
    console.log(Math.random());
    i++;
}

এমন সংখ্যা খুঁজে বের করা যা ৩ এর গুণিতক
let i = 1;
while (i <= 20) {
    if (i % 3 === 0) console.log(i);
    i++;
}


স্ট্রিং উল্টো করে প্রিন্ট
let str = "JavaScript";
let i = str.length - 1;

while (i >= 0) {
    console.log(str[i]);
    i--;
}


১–১০ পর্যন্ত even count-
let i = 1, count = 0;
while (i <= 10) {
    if (i % 2 === 0) count++;
    i++;
}
console.log(count);

১০ বার index সহ প্রিন্ট
let i = 0;
while (i < 10) {
    console.log("Index:", i);
    i++;
}

নেগেটিভ থেকে পজিটিভ প্রিন্ট
let i = -5;
while (i <= 5) {
    console.log(i);
    i++;
}

২ এর power প্রিন্ট 
let i = 1;
while (i <= 10) {
    console.log(2 ** i);
    i++;
}

small to big character code
let i = 97;
while (i <= 122) {
    console.log(String.fromCharCode(i));
    i++;
}

১ থেকে ১০ পর্যন্ত দ্বিগুণ
let i = 1;
while (i <= 10) {
    console.log(i * 2);
    i++;
}

৫ বার তারকা (*) প্রিন্ট 
let i = 1;
while (i <= 5) {
    console.log("*");
    i++;
}

১–২০ divisible by 4
let i = 1;
while (i <= 20) {
    if (i % 4 === 0) console.log(i);
    i++;
}

১–১০ random integer
let i = 1;
while (i <= 10) {
    console.log(Math.floor(Math.random() * 10) + 1);
    i++;
}

শব্দ ৩ বার repeat
let i = 1;
while (i <= 3) {
    console.log("JS Rocks!");
    i++;
}


১ থেকে ১০ পর্যন্ত square root
let i = 1;
while (i <= 10) {
    console.log(Math.sqrt(i));
    i++;
}

১ থেকে ৫ পর্যন্ত যোগফল

let i = 1, sum = 0;

while (i <= 5) {
    sum += i;
    console.log("Number:", i, "Sum:", sum);
    i++;
}

১ থেকে ১০ পর্যন্ত যোগফল

let i = 1, sum = 0;

while (i <= 10) {
    sum += i;
    console.log(i, sum);
    i++;
}

শুধু জোড় সংখ্যার যোগফল
let i = 2, sum = 0;

while (i <= 20) {
    sum += i;
    console.log(i, sum);
    i += 2;
}

শুধু বিজোড় সংখ্যার যোগফল
let i = 1, sum = 0;

while (i <= 15) {
    sum += i;
    console.log(i, sum);
    i += 2;
}

৫ করে বাড়াতে বাড়াতে যোগফল
let i = 5, sum = 0;

while (i <= 50) {
    sum += i;
    console.log(i, sum);
    i += 5;
}

উল্টো সংখ্যা (১০ → ১) যোগফল
let i = 10, sum = 0;

while (i >= 1) {
    sum += i;
    console.log(i, sum);
    i--;
}

প্রথম ১০টি ঘাত (2^n) যোগফল
let i = 1, sum = 0;

while (i <= 10) {
    let power = 2 ** i;
    sum += power;
    console.log(power, sum);
    i++;
}


১–১০ পর্যন্ত সংখ্যার দ্বিগুণ + যোগফল
let i = 1, sum = 0;

while (i <= 10) {
    let dbl = i * 2;
    sum += dbl;
    console.log(dbl, sum);
    i++;
}

১–২০ পর্যন্ত শুধু ৩ এর গুণিতক + যোগফল
let i = 3, sum = 0;

while (i <= 60) {
    sum += i;
    console.log(i, sum);
    i += 3;
}

১০ বার random সংখ্যা + যোগফল
let i = 1, sum = 0;

while (i <= 10) {
    let r = Math.floor(Math.random() * 10) + 1;
    sum += r;
    console.log(r, sum);
    i++;
}

নির্দিষ্ট রেঞ্জ (৩০–৪০) যোগফল
let i = 30, sum = 0;

while (i <= 40) {
    sum += i;
    console.log(i, sum);
    i++;
}

নেগেটিভ থেকে পজিটিভ সংখ্যা যোগফল
let i = -3, sum = 0;

while (i <= 3) {
    sum += i;
    console.log(i, sum);
    i++;
}

cube সংখ্যা + যোগফল
let i = 1, sum = 0;

while (i <= 6) {
    let cube = i ** 3;
    sum += cube;
    console.log(cube, sum);
    i++;
}

১–১০ পর্যন্ত √ সংখ্যা যোগফল
let i = 1, sum = 0;

while (i <= 10) {
    let sqr = Math.sqrt(i);
    sum += sqr;
    console.log(sqr, sum);
    i++;
}

১–১০ পর্যন্ত সংখ্যাকে ৩ দিয়ে গুণ + যোগফল
let i = 1, sum = 0;

while (i <= 10) {
    let val = i * 3;
    sum += val;
    console.log(val, sum);
    i++;
}

break পাওয়া পর্যন্ত যোগফল

let i = 1, sum = 0;

while (i <= 20) {
    if (i === 12) break;
    sum += i;
    console.log(i, sum);
    i++;
}

