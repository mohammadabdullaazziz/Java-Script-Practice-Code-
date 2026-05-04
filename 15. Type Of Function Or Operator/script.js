Type Of Function Or Operator

জাভাস্ক্রিপ্টে typeof মূলত একটি অপারেটর (Operator), কোনো ফাংশন নয়। তবে এটি ব্যবহারের সময় অনেক সময় ভুল করে একে ফাংশনের মতো মনে করা হয়।
জাভাস্ক্রিপ্টে typeof একটি বিশেষ অপারেটর (operator), যা কোনো ভেরিয়েবল বা এক্সপ্রেশনের ডাটা টাইপ (data type) বা ধরন কী, তা খুঁজে বের করতে ব্যবহৃত হয়। 
এটি মূলত একটি স্ট্রিং (string) রিটার্ন করে, যা ওই ভেরিয়েবলের ধরন নির্দেশ করে।

typeof দিয়ে যে কোনো ভেরিয়েবল বা ডাটাটি স্ট্রিং (string), সংখ্যা (number), অবজেক্ট (object), বুলিয়ান (boolean), বা আনডিফাইনড (undefined) কি না চেক করা হয় ।

typeof //Type Of Operator
typeof() //Type Of Function

let name = "Abdullah";
console.log(typeof name); //string data type

let price = 30;
console.log(typeof(price)); //Number data type

console.log(typeof true); //Boolean data type
console.log(typeof false); //Boolean data type


console.log(typeof undefined); //undefined data type
console.log(typeof null); // object 

typeof {name: 'John'} // রিটার্ন করবে "object"

typeof function(){} // রিটার্ন করবে "function"

console.log(typeof 12n); // BigInt
