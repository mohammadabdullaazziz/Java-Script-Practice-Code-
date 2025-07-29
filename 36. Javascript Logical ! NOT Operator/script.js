// Logical ! NOT Operator
console.log(! true);
console.log(! false);
console.log(! 25 > 22);
console.log(! 25 < 22);


const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false

!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false

// Example 1: Inverting a boolean literal
let isTrue = true;
let isFalse = !isTrue; // isFalse will be false
console.log(isFalse); // Output: false

// Example 2: Inverting a boolean variable
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in."); // This will be executed
} else {
  console.log("Welcome back!");
}

// Example 3: Inverting the result of a comparison
let num1 = 10;
let num2 = 5;
let isNum1NotGreaterThanNum2 = !(num1 > num2); // !(true) which becomes false
console.log(isNum1NotGreaterThanNum2); // Output: false

// Example 4: Using with non-boolean values (truthy/falsy conversion)
// In JavaScript, various values are considered "truthy" or "falsy" when evaluated in a boolean context.
// Falsy values include: false, 0, "", null, undefined, NaN. All other values are truthy.

console.log(!0); // Output: true (0 is falsy, !0 is true)
console.log(!"hello"); // Output: false ("hello" is truthy, !"hello" is false)
console.log(!null); // Output: true (null is falsy, !null is true)
console.log(!undefined); // Output: true (undefined is falsy, !undefined is true)
console.log(!!0); // Output: false (double negation converts to actual boolean value)