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