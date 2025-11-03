//java script Function parameter, handle multiple parameters
function addNumber(num1, num2) {
  console.log(num1 + num2);
}
addNumber(5, 7);



function myName(name, country) {
  console.log("My name is" + " " + name + "i live in" + " " + country);
}
myName("Abdullah", "Bangladesh");


let myFirstName = "Programmer";
let myLastName = "Aziz";
function printName(firstName, middleName, lastName) {
  console.log(firstName + " " + middleName + " " + lastName);
}
printName("Mohammad", "Abdullah", "Aziz");
printName("Mohammad");
printName(myFirstName, myLastName); //let variable


function sum(sum1, sum2) {
  console.log(sum1 + sum2 );
}
sum(2);  //result NaN

//user Input

function addition(firstNum, secondNum){
  console.log(firstNum + secondNum);
}

let firstNum = prompt("Enter Your First Number: ");
firstNum = Number(firstNum);
let secondNum = prompt("Enter Your Second Number: ")
secondNum = Number(secondNum);
addition(firstNum, secondNum);


