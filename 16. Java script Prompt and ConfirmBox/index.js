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