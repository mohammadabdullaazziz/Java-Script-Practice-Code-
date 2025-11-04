//Javascript function Default Parameter

function printName(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
printName("Abdullah", "Aziz")


function myIntro(firstName, lastName = "somethings") {
    console.log(`Hlw ${firstName} ${lastName}`)
}
myIntro("Aziz Chowdhory");

function sum(num1, num2 = 3) {
    console.log(num1 + num2);
}
sum(2, 2);

function greet(name = "Mohammad") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Mohammad!
greet("Aziz"); // Output: Hello, Aziz!

function express(name1, name2 = 1 == 1) {
    console.log(`Hey! ${name1} ${name2}`);
}
express("Ibny");

