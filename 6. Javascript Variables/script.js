
var x = 10;
// console.log(x);
x = 20;
// console.log(x);
x = 50;
console.log(x);

const x = 5;
const y = 6;
const z = x + y;
console.log(z);

let x1 = 5;
let y1 = 6;
let z1 = x1 + y1;
console.log(z1);

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

01. abdullah_bin_Aziz (Snake Case);

02. abdullahBinAziz (Camale Case);

03. AbdullahBinAziz (Pascal Case);

// again repeat how to declare variable with string number boolean

let name2 = "Abdullah Arman";
// console.log(name);
name2 = "Arman Aziz";
// console.log(name);
name2 = "Rokshana Aziz"
console.log(name2);



var name = "Abdullah Arman";
// document.write(name);
name = "Aziz </br>";
var age = 29;
document.write(name,age);

var name;
var country;
var age;
name = "Mohammad </br>"
country = "Bangladesh </br>"
age = 56;
document.write(name,country,age);
var name,country,age;


var name = "Abdullah ", 
country = "Bangladesh ", 
age = 29;
console.log(name);

// string number boolean typeof operators code

var name = "Abdullah Arman";
var age = 29;
console.log(name,age);

var name = typeof 'Abdullah "Arman';
var age = typeof 29;
console.log(name,age)

var name = typeof "Azziz";
var age = typeof 28;
console.log(name,age);

boolean data type...
// false=0
// true=1

var isSubs = typeof true;
var isPassed = typeof false;
console.log(isSubs,isPassed);

console.log(3>2);
console.log(10<5);
console.log(5<10);

---------------------------------------------------------

let name = "Abdullah";
let address = "Gongachora, Rongpur";
let subject = "Programming";
let grade = "A";

let age = 30;
let height = 5.2;
let cgpa = 3.50;
let accountBalance = 12.25486545;

console.log("-------- Student Output --------\n");

console.log(`My name is: ${name}`);
console.log(`My age is: ${age} years`);
console.log(`My height is: ${height} ft`);
console.log(`My address is: ${address}`);
console.log(`My subject is: ${subject}`);
console.log(`My grade is: ${grade}`);
console.log(`My CGPA is: ${cgpa.toFixed(2)}`);
console.log(`My account balance is: $${accountBalance.toFixed(2)}`);


(Professional) Version — Object ব্যবহার করে 

const student = {
    name: "Abdullah",
    age: 30,
    height: 5.2,
    address: "Gongachora, Rongpur",
    subject: "Programming",
    grade: "A",
    cgpa: 3.50,
    accountBalance: 12.25486545
};

console.log("-------- Student Output --------");
console.log(`My name is: ${student.name}`);
console.log(`My age is: ${student.age}`);
console.log(`My height is: ${student.height} ft`);
console.log(`My address is: ${student.address}`);
console.log(`My subject is: ${student.subject}`);
console.log(`My grade is: ${student.grade}`);
console.log(`My CGPA is: ${student.cgpa.toFixed(2)}`);
console.log(`My account balance is: $${student.accountBalance.toFixed(2)}`);


