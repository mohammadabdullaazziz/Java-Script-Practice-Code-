// Logical || OR Operator


// Example 1: Basic boolean evaluation
console.log(true || false); // Output: true (true is truthy)
console.log(false || true); // Output: true (true is truthy)
console.log(false || false); // Output: false (both are falsy, returns the last falsy value)

// Example 2: Short-circuiting with truthy values
let result1 = "Hello" || "World";
console.log(result1); // Output: "Hello" ("Hello" is truthy, "World" is not evaluated)

let result2 = 0 || 5;
console.log(result2); // Output: 5 (0 is falsy, 5 is truthy)

// Example 3: Handling falsy values
let result3 = "" || null;
console.log(result3); // Output: null (both are falsy, returns the last falsy value)

let result4 = undefined || 0;
console.log(result4); // Output: 0 (both are falsy, returns the last falsy value)

// Example 4: Using with variables and conditions
let age = 16;
let hasGuardian = true;

if (age >= 18 || hasGuardian) {
  console.log("Allowed to enter."); // Output: Allowed to enter. (hasGuardian is true)
} else {
  console.log("Not allowed to enter.");
}

true || true; // || t returns true
false || true; // || t returns true
true || false; // || f returns true
false || 3 === 4; // || f returns false
"Cat" || "Dog"; // || t returns "Cat"
false || "Cat"; // || t returns "Cat"
"Cat" || false; // || f returns "Cat"
"" || false; // || f returns false
false || ""; // || f returns ""
false || varObject; // || object returns varObject

console.log(true || false);
console.log(false || false);
console.log(1 || 0);
console.log(1 || 2);
console.log("1" || true);
console.log("0" || true);

let num1 = 50;
let num2 = 30;
let num3 = 20;
console.log(num1 > num2 || num3 < num1);


const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true

    let firstName = "Abdullah";
    let lastName = "Aziz";
    if ( (firstName == "Arman") || (lastName == "Aziz") ) {
        console.log("output true");
    }

