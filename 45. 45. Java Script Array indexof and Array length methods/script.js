// Array indexof and Array length methods in JavaScript

// length methods in JavaScript
let fruitsOne = ["apple", "banana", "mango"];
console.log(fruitsOne.length);

const emptyArray = [];
let emptyArrayLength = emptyArray.length;
console.log(emptyArrayLength); // Output: 0

let friendAge = [20, 25, 27, 29, 30];
console.log(friendAge.length);

const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Output:
// Red
// Green
// Blue


let numbers = [10, 20, 30, 40, 50];
console.log("Original array:", numbers); // Original array: [10, 20, 30, 40, 50]

numbers.length = 3;
console.log("Array after setting length to 3:", numbers); // Array after setting length to 3: [10, 20, 30]

numbers.length = 5;
console.log("Array after setting length to 5:", numbers); // Array after setting length to 5: [10, 20, 30, empty, empty]

// Array indexof methods in JavaScript
let friendAges = [20, 25, 27, 29, 30];
// console.log(friendAges.indexOf(27));

// Basic usage
const fruits = ['apple', 'banana', 'orange', 'apple'];
let index1 = fruits.indexOf('banana');
console.log(index1); // Output: 1

// Element not found
let index2 = fruits.indexOf('grape');
console.log(index2); // Output: -1

//  Searching for the first occurrence of a duplicate element
let index3 = fruits.indexOf('apple');
console.log(index3); // Output: 0 (returns the index of the first 'apple')

//  Using the optional 'fromIndex' parameter
// Search for 'apple' starting from index 1 (the second element)
let index4 = fruits.indexOf('apple', 1);
console.log(index4); // Output: 3

// Checking for existence using indexOf()
if (fruits.indexOf('orange') !== -1) {
  console.log('Orange exists in the array!');
} else {
  console.log('Orange does not exist in the array.');
}