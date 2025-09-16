// Push and Pop Array Method Java Script

// ================== array push() example code ==================================
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits);

const numbers = [1, 2];
numbers.push(3, 4, 5);
console.log(numbers); 

const colors = ["Red", "Green"];
const newLength = colors.push("Blue", "Yellow");
console.log(colors);   
console.log(newLength); 

let city = ["New York", "Madrid", "Kathmandu"];
// add "London" to the array
city.push("London");
console.log(city);
// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]


// ================== array pop() example code ==================================
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
// remove the last element
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2);

// ================== array sort() example code ==================================
let x = [5, 2, 6,8, 7, 13, 11, 1, 0];
x.sort();
console.log(x);

const fruitsOne = ["Banana", "Orange", "Apple", "Mango"];
fruitsOne.sort();
console.log(fruitsOne); // Output: ["Apple", "Banana", "Mango", "Orange"]

// const numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers); // Output: [1, 5, 10, 25, 40, 100]



// const numbersDesc = [40, 100, 1, 5, 25, 10];
// numbersDesc.sort(function(a, b) {
//   return b - a;
// });
// console.log(numbersDesc); // Output: [100, 40, 25, 10, 5, 1]


// const numbersDesc = [40, 100, 1, 5, 25, 10];
// numbersDesc.sort(function(a, b) {
//   return b - a;
// });
// // console.log(numbersDesc); // Output: [100, 40, 25, 10, 5, 1]


const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

// Sort by age in ascending order
people.sort(function(a, b) {
  return a.age - b.age;
});
console.log(people); 
/* Output:
[
  { name: "Bob", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Charlie", age: 35 }
]
*/

// Sort by name in alphabetical order
// people.sort(function(a, b) {
//   const nameA = a.name.toUpperCase(); // Ignore case
//   const nameB = b.name.toUpperCase(); // Ignore case
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0; // Names are equal
// });
// console.log(people);
/* Output:
[
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
]
*/