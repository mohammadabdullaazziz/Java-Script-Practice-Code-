<h3>Java script Unary + operator</h3>

console.log(+3); // Output: 3 (number)
console.log(+"3"); // Output: 3 (number)
console.log(+true); // Output: 1 (number)
console.log(+false); // Output: 0 (number)
console.log(+"hello"); // Output: NaN (Not a Number)
console.log(+null); // Output: 0
console.log(+undefined); // Output: NaN (Not a Number)

let s1 = "12";

// Using unary plus to convert string to number
let x = +s1;
console.log(x);

// Here we are using typeof operator
console.log(typeof (x))

// "Geeks" cannot be converted to a number
let s2 = +"Abdullah";
console.log(s2);


let str = "50";
let num = +str; // Unary + ব্যবহার করা হলো

console.log(num);        // আউটপুট: 50
console.log(typeof num); // আউটপুট: number


console.log(+true);  // আউটপুট: 1
console.log(+false); // আউটপুট: 0

let x = "10";
let y = "20";

console.log(x + y);   // আউটপুট: "1020" (কারণ এরা স্ট্রিং)
console.log(+x + +y); // আউটপুট: 30 (উভয়কে নাম্বারে রূপান্তর করে যোগ করা হয়েছে)

let name = "Aziz";
console.log(+name); // আউটপুট: NaN

console.log(+"");      // আউটপুট: 0 (খালি স্ট্রিং ০ হয়ে যায়)
console.log(+null);    // আউটপুট: 0
console.log(+undefined); // আউটপুট: NaN
