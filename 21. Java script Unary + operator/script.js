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

