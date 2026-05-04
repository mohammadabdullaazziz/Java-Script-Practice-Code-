JavaScript-এ toFixed() এবং toPrecision() হলো Number অবজেক্টের মেথড, যা সংখ্যা ফরম্যাট (Format) করার জন্য ব্যবহৃত হয়। 
এগুলোর মাধ্যমে দশমিকের পর কয়টি ঘর থাকবে বা মোট কয়টি সংখ্যা থাকবে তা নির্ধারণ করা যায়।


let num = 20.58528;
console.log(num.toFixed(2));
console.log(typeof (num));


let num = 20.58528;
console.log(num.toPrecision(3))
console.log(typeof (num));



let num = 20;
num = num.toString();
console.log(num);
console.log(typeof (num));

জাভাস্ক্রিপ্টে parseInt() এবং parseFloat() হলো স্ট্রিংকে (string) সংখ্যায় রূপান্তর করার ফাংশন parseInt() স্ট্রিং থেকে পূর্ণসংখ্যা (integer) তৈরি করে
আর parseFloat() দশমিক সংখ্যাসহ (floating-point) মান তৈরি করে [৫]। যেমন, parseInt("10.5") দিলে ১০ হয়, কিন্তু parseFloat("10.5") দিলে ১০.৫ হয় 

let num = "20";
num = parseInt(num);
console.log(num);
console.log(typeof (num));


let num = "20.5";
num = parseFloat(num);
console.log(num);
console.log(typeof (num));


// number method 
console.log(Number("12"));

console.log(Number("12.5"));

console.log(Number(true));
console.log(Number(false));

