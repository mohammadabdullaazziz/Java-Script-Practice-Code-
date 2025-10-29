let computer = {
    brand: "Lenovo",
    price: 112000,
    color: "Black",
    processor: "Intel",
    "hard Disk": "512GB",
    country: ["Bangladesh", "India", "China", "Usa"],
};

console.log(computer);

computer.ssd = "256GB"; //property add
console.log(computer);
computer.monitor = "Lenovo";

delete computer["hard Disk"]; //property delete
console.log(computer); 

// Object Built-in Methods

let pcOne = Object.keys(computer);
console.log(pcOne);

let pcTwo = Object.values(computer);
console.log(pcTwo);

let pcThree = Object.entries(computer);
console.log(pcThree);

let parson = {
    name: "Aziz",
};

let details = {
    age: 30,
    city: "Rangpur",
};

let add = Object.assign(parson, details);
console.log(add); //{ name: "Aziz", age: 25, city: "Dhaka" }



let person = {
  name: "Aziz",
  age: 25
};

// Object কে freeze করা হলো
Object.freeze(person);

// Property পরিবর্তন করার চেষ্টা
person.age = 30;

// নতুন Property যোগ করার চেষ্টা
person.city = "Dhaka";

// Property delete করার চেষ্টা
delete person.name;

console.log(person);




let person = {
  name: "Aziz",
  age: 25
};

// Object কে seal করা হলো
Object.seal(person);

// Property পরিবর্তন করা যাবে
person.age = 30;

// নতুন property যোগ করা যাবে না
person.city = "Dhaka"; // ❌ কাজ করবে না

// Property delete করা যাবে না
delete person.name; // ❌ কাজ করবে না

console.log(person);



const person = {
  name: "Aziz",
  age: 22
};

// প্রোপার্টি চেক করা হচ্ছে
console.log(Object.hasOwn(person, "name"));  // true
console.log(Object.hasOwn(person, "age"));   // true
console.log(Object.hasOwn(person, "email")); // false


const entries = [
  ["name", "Aziz"],
  ["age", 22],
  ["city", "Dhaka"]
];

const person = Object.fromEntries(entries);
console.log(person);


const obj = { a: 1, b: 2 };
const arr = Object.entries(obj);
const backToObj = Object.fromEntries(arr);

console.log(arr);        // [ ['a', 1], ['b', 2] ]
console.log(backToObj);  // { a: 1, b: 2 }

