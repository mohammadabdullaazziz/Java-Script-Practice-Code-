<h3>Java script Prompt and ConfirmBox</h3>

//Prompt Box
let name = prompt("Enter You Name :");
console.log(name);

let num = prompt("Enter You Number :");
num = Number(num);
console.log(num)
console.log( typeof num);

//ConfirmBox
let isAdmin = confirm("Are You Admin?");
console.log(isAdmin);

console.log(typeof isAdmin);

------------------------------------------
// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// age = Number(age);
// let height = prompt("Enter your height: ");
// height = parseFloat(height);
// let address = prompt("Enter your address: ");
// let cgpa = prompt("Enter your cgpa: ");

// console.log("Your name is: " + name);
// console.log(typeof name);
// console.log("Your age is: " + age);
// console.log(typeof age);
// console.log("Your height is: " + height);
// console.log(typeof height);
// console.log("Your address is: " + address);
// console.log(typeof address);
// console.log("Your cgpa is: " + cgpa);
// console.log(typeof cgpa);


const name = prompt("Enter your name:");
const age = Number(prompt("Enter your age:")); 
const height = parseFloat(prompt("Enter your height (in feet/cm):"));
const address = prompt("Enter your address:");
const cgpa = parseFloat(prompt("Enter your cgpa:")); 


console.log(`
--- User Information ---
Name: ${name} (${typeof name})
Age: ${age} (${typeof age})
Height: ${height} (${typeof height})
Address: ${address} (${typeof address})
CGPA: ${cgpa} (${typeof cgpa})
`);


if (cgpa >= 3.5) {
    console.log("Result: Excellent performance!");
}




----------------------------------------------------------
const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));
const height = parseFloat(prompt("Enter your height: "));
const address = prompt("Enter your address: ");
const cgpa = parseFloat(prompt("Enter your cgpa: "));
// ফোন নাম্বার স্ট্রিং হিসেবে রাখলে শুরুর '0' হারাবে না
const phoneNumber = prompt("Enter your phone Number: "); 

console.log(`
--------- Your Information ------------
Name: ${name} | Type: ${typeof name}
Age: ${age} | Type: ${typeof age}
Height: ${height} | Type: ${typeof height}
Address: ${address} | Type: ${typeof address}
CGPA: ${cgpa} | Type: ${typeof cgpa}
Phone: ${phoneNumber} | Type: ${typeof phoneNumber}
---------------------------------------
`);

সঠিক নিয়ম: typeof কে ${} এর ভেতরে রাখতে হবে। 
ভুল: ${name} typeof ${name} ➡️ আউটপুট: Aziz typeof Aziz
সঠিক: ${name} (Type: ${typeof name}) ➡️ আউটপুট: Aziz (Type: string)

ফোন নাম্বারের শুরুতে '0' হারিয়ে যাওয়া
parseInt(prompt("Enter your phone Number: "))
বাংলাদেশে ফোন নাম্বার শুরু হয় 01 দিয়ে। কিন্তু যখন parseInt বা Number ব্যবহার করা হয়, জাভাস্ক্রিপ্ট শুরুর 0 টাকে ফেলে দেয়।

উদাহরণ: ইনপুট দিলে 01711, আউটপুট আসবে 1711।

সমাধান: ফোন নাম্বার সব সময় String হিসেবে রাখা উচিত। অর্থাৎ শুধু prompt(...) লিখলেই হবে।
