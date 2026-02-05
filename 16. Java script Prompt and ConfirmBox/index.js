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
