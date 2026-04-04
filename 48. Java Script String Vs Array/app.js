JavaScript-এ String (স্ট্রিং) এবং Array (অ্যারে) উভয়েই ডাটা বা তথ্য জমা রাখার জন্য ব্যবহৃত হয়, কিন্তু এদের কাজের ধরণ এবং বৈশিষ্ট্যে অনেক বড় পার্থক্য আছে।

String হলো ' ' বা " " দিয়ে ঘেরা অক্ষর (যেমন: 'Bangla'), আর 
Array হলো [ ] দিয়ে ঘেরা কমা-সেপারেটেড ভ্যালু (যেমন: ['A', 'B', 'C'])।

String: স্ট্রিং হলো মূলত কতগুলো ক্যারেক্টার বা অক্ষরের সমষ্টি। এটি সাধারণত টেক্সট ডাটা রাখার জন্য ব্যবহৃত হয়। যেমন: "Mohammad".

Array: অ্যারে হলো একটি লিস্ট বা সংগ্রহ, যেখানে যেকোনো ধরণের ডাটা (নাম্বার, স্ট্রিং, অবজেক্ট, এমনকি অন্য অ্যারে) সিরিয়াল অনুযায়ী রাখা যায় যেমন: ["Apple", "Banana", "Mango"].

** ইমিউটেবিলিটি (Immutability) - সবচেয়ে বড় পার্থক্য:

এটি প্রোগ্রামিং লজিকের ক্ষেত্রে খুবই গুরুত্বপূর্ণ:
String are Immutable: স্ট্রিং পরিবর্তন করা যায় না। একবার একটি স্ট্রিং তৈরি করলে এর ভেতরের অক্ষর পরিবর্তন করা যায় না।

let name = "Java";
name[0] = "L"; // এটি কাজ করবে না
console.log(name); // আউটপুট "Java"-ই থাকবে

** Arrays are Mutable: অ্যারে পরিবর্তনযোগ্য। চাইলে যেকোনো পজিশনের ডাটা বদলে দেওয়া যায়।
let fruits = ["Apple", "Banana"];
fruits[0] = "Mango"; // এটি কাজ করবে
console.log(fruits); // আউটপুট হবে ["Mango", "Banana"]

// String
let str = "Hello";
str[0] = "Y"; // এটা কাজ করবে না, String পরিবর্তনযোগ্য নয়
console.log(str); // "Hello"

// Array
let arr = ["H", "e", "l", "l", "o"];
arr[0] = "Y"; // এটা কাজ করবে, Array পরিবর্তনযোগ্য
console.log(arr); // ["Y", "e", "l", "l", "o"]


বৈশিষ্ট্য          String (স্ট্রিং)                          Array (অ্যারে)

Indexing	     ০ থেকে শুরু হয়	                        ০ থেকে শুরু হয়
Length	       .length দিয়ে অক্ষরের সংখ্যা জানা যায়	    .length দিয়ে আইটেমের সংখ্যা জানা যায়
Type	         এটি একটি Primitive ডাটা টাইপ	          এটি মূলত একটি Object টাইপ
Methods	       slice(), split(), includes() ইত্যাদি	    push(), pop(), map(), filter() ইত্যাদি
	          এটি একটি প্রিমিটিভ (Primitive) ডেটা টাইপ।   এটি একটি অবজেক্ট (Object) টাইপ।
            শুধুমাত্র টেক্সট বা ক্যারেক্টার থাকে।             যেকোনো ধরনের ডেটা (String, Number, Object) থাকতে পারে।
কিছু মেথড (যেমন length, indexOf, slice) উভয়ের ক্ষেত্রেই কাজ করে। কিন্তু অ্যারের বিশেষ কিছু মেথড স্ট্রিংয়ে কাজ করে না।



এক রূপ থেকে অন্য রূপে রূপান্তর (Conversion)ঃ
প্রোগ্রামিং করার সময় আমাদের প্রায়ই স্ট্রিং থেকে অ্যারে বা উল্টোটা করার প্রয়োজন হয়।

## String to Array: split() মেথড ব্যবহার করা হয়।

let text = "Hello World";
let arr = text.split(" "); // স্পেস দিয়ে ভাগ করে অ্যারে বানাবে
// আউটপুট: ["Hello", "World"]


## Array to String: join() মেথড ব্যবহার করা হয়।
let arr = ["M", "A"];
let text = arr.join(""); // সব জোড়া দিয়ে স্ট্রিং বানাবে
// আউটপুট: "MA"

যখন শুধু কোনো লেখা বা টেক্সট নিয়ে কাজ করা হবে (যেমন: ইউজারের নাম, ঠিকানা, ইমেইল), তখন String ব্যবহার করতে হয়। 
যখন নিজের কাছে অনেকগুলো আলাদা আলাদা আইটেম বা ডাটার লিস্ট থাকে এবং সেগুলো নিয়ে লুপ চালানো বা ডাটা যোগ-বিয়োগ করার প্রয়োজন হবে, তখন Array ব্যবহার করতে হয়।
String:
const country = "Bangladesh";
const division = 'Rangpur';
const district = `Rangpur`;
const thana = new String("Gangachara");

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);
console.log(thana);

Array:
const number = [25, 55, 60, 65, 70];
number[3] = 11;
console.log(number.length);
console.log(number[3]);

const text = 'Dhaka';
text[2] = "A"; //string is immutable...not changeable
console.log(text.length);
console.log(text[0]);
console.log(text);
