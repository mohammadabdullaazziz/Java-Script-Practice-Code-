let username = prompt("Enter Your Username");
let userAccess;

if (username == "Abdullah") {
    console.log("Admin");
} else {
    console.log("Moderator");
}

userAccess = (username =="Abdullah") ? "Admin" : "Moderator";


let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(number + " is " + result);
// Output: "10 is Even"

let age = 20;
let eligibility = (age >= 18) ? "Can vote" : "Can not vote";

console.log(eligibility); // Output: "Can vote"


let marks = 40;
let result = (marks >= 33) ? "Passed" : "Failed";
console.log(result); // output: Passed


let marks = 40;
let result = (marks >= 50) ? console.log("Passed") : console.log("Failed"); output Failed

let age = 15;
let canVote = (age >= 18) ? "Yes" : "No";

console.log(canVote); // Output: No



let name = prompt("Enter your name: ");
let age = Number(prompt("Enter your age: "));

let status = (age >= 18) ? "(Adult)" : "(Child)";

console.log("Hello " + name + "!");
console.log("You are" + status);


let userName = prompt("Enter name: ");
let displayName = (userName === "" || userName === null) ? "Guest" : userName;
console.log("Welcome, " + displayName);
