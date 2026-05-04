Undefined Data Type:

জাভাস্ক্রিপ্টে Undefined একটি প্রিমিটিভ (Primitive) ডেটা টাইপ। সহজ কথায়, যখন কোনো ভেরিয়েবল ঘোষণা করা হয় (declare) কিন্তু তাতে কোনো মান (value) সেট করা হয় না, 
তখন জাভাস্ক্রিপ্ট নিজে থেকেই তাতে undefined বসিয়ে দেয়। 

যখন একটি ভেরিয়েবল তৈরি করা হয় কিন্তু তাকে কোনো ডাটা দেওয়া হয় না, তখন তার মান এবং টাইপ উভয়ই হয় undefined।

let name;
console.log(name); // Output: undefined
let nameTwo = undefined;   

let myName; 
console.log(myName); // আউটপুট: undefined
console.log(typeof myName); // আউটপুট: undefined


Undefined বনাম Nullঃ

undefined এবং null এদের মূল পার্থক্য হলো:
Undefined: মানে হলো জাভাস্ক্রিপ্ট জানে না এর মান কী (অনির্ধারিত)। এটি অটোমেটিক ঘটে।
Null: মানে হলো আপনি নিজে ইচ্ছাকৃতভাবে ভেরিয়েবলটি খালি রেখেছেন (শূণ্য)।
