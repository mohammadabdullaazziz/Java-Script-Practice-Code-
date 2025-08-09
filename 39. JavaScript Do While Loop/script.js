// syntax of a do...while loop
do {
   // Statements
}while(Boolean_expression);

// JavaScript Do While Loop 
let looCount = 1;
do{
    console.log("Hello" + looCount);
    looCount++;
} while(looCount <= 5);

let count = 0;

do {
  console.log("Current count: " + count);
  count++;
} while (count < 5);

console.log("Loop finished. Final count: " + count);



let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

