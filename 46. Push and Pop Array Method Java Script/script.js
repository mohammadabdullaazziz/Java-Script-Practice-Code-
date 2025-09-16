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

