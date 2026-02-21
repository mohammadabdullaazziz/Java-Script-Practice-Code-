let monthName = prompt("Enter Month Name First 3 Word :")
if (monthName == "Jan") {
  console.log("January")
} else if (monthName == "Feb") {
  console.log("February");
} else if (monthName == "Mar") {
  console.log("March");
} else if (monthName == "Apr") {
  console.log("April");
} else if (monthName == "May") {
  console.log("May");
} else if (monthName == "Jun") {
  console.log("June");
} else if (monthName == "Jul") {
  console.log("July");
} else if (monthName == "Aug") {
  console.log("August");
} else if (monthName == "Sep") {
  console.log("September");
} else if (monthName == "Oct") {
  console.log("October");
} else if (monthName == "Nov") {
  console.log("November");
} else if (monthName == "Dec") {
  console.log("December");
} else {
  console.log("BYE");
}

let amount = 21;
if (amount == 10) {
    console.log("Hello");
} else {
    console.log("Bye");
}
// Output: "Bye"

let amount2 = 21;
if (amount2 == 10) {
    console.log("Hello");
} else if (amount2 = 21) {
    console.log("21");
} 
// Output: "21"

let speed = 87;
if (speed > 90) {
  console.log("OverSpeeding");
} else if (speed > 50) {
  console.log("Normal");
} else {
  console.log("Slow");
}
// Output: "Normal"
let x = 5;
let y = 8;
if(x == y){
console.log('IF statement executed');
} else {
console.log("condition not true.ELSE statement executed");
}

let marks = prompt("Enter your marks: ");
marks = +marks; 

if (marks >= 90 && marks <= 100) {
    console.log("Your grade is: Golden A+");
} 
else if (marks >= 80 && marks < 90) { 
    console.log("Your grade is: A+");
} 
else if (marks >= 70 && marks < 80) {
    console.log("Your grade is: A");
} 
else if (marks >= 60 && marks < 70) {
    console.log("Your grade is: A-");
} 
else if (marks >= 50 && marks < 60) {
    console.log("Your grade is: B");
} 
else if (marks >= 40 && marks < 50) {
    console.log("Your grade is: C"); 
} 
else if (marks >= 33 && marks < 40) { 
    console.log("Your grade is: Passed");
} 
else if (marks >= 0 && marks < 33) {
    console.log("Your grade is: Fail");
} 
else {
   
    console.log("Invalid Input! Please enter a number between 0 to 100.");
}


let marks = Number(prompt("Enter your marks: "));

if (marks > 100 || marks < 0) {
    console.log("Invalid Input!"); 
} else if (marks >= 90) {
    console.log("Golden A++");
} else if (marks >= 80) {
    console.log("A++");
} else if (marks >= 70) {
    console.log("A Grade");
} else if (marks >= 60) {
    console.log("A-");
} else if (marks >= 50) {
    console.log("B Grade");
} else if (marks >= 40) {
    console.log("B");
} else if (marks >= 33) {
    console.log("C");
} else {
    console.log("Fail Hahahaha");
}







let marks = prompt("Enter your Mark number: ");
marks = Number(marks); 


if (isNaN(marks) || marks > 100 || marks < 0) {
    console.log("দয়া করে ০ থেকে ১০০ এর মধ্যে সঠিক সংখ্যা দিন।");
} 

else if (marks >= 90) {
    console.log("Your grade is: Golden A+");
} 
else if (marks >= 80) { 
    console.log("Your grade is: A+");
} 
else if (marks >= 70) { 
    console.log("Your grade is: A");
} 
else if (marks >= 60) {
    console.log("Your grade is: A-");
} 
else if (marks >= 50) {
    console.log("Your grade is: B");
} 
else if (marks >= 40) {
    console.log("Your grade is: C");
}
else if (marks >= 33) {
    console.log("Your grade is: Passed");
} 

else {
    console.log("Your grade is: Fail");
}


// input === null → Cancel চাপলে detect করবে

// trim() === "" → ফাঁকা দিলে ধরবে

// isNaN(speed) → যদি abc টাইপ কিছু দেয়

// Negative speed check

// সব ক্ষেত্রে output নিশ্চিত

let input = prompt("Enter Your Speed: ");
let speed = Number(input);

if (input === null) {
    console.log("Input cancelled");
} 
else if (input.trim() === "" || isNaN(speed)) {
    console.log("Please enter a valid number!");
} 
else if (speed <= 0) {
    console.log("Speed cannot be negative!");
} 
else if (speed >= 80) {
    console.log("Over speed");
} 
else if (speed >= 60) {
    console.log("Normal");
} 
else if (speed >= 40) {
    console.log("Slow");
} 
else {
    console.log("Very Slow");
}

