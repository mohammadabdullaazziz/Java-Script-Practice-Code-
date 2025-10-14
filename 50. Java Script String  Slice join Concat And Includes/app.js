const text = "Bangladesh";
console.log(text.slice(0, 4));

const sentence = "Bangladesh is a small Country";
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const names = "Mohammad, Abdullah, Ebny, Aziz";
console.log(names.split(","));


const name2 = ["Mohammad", "Abdullah", "Ebny", "Aziz"];
console.log(name2.join("-"));

const test = "Bangladesh";
const test2 = " " + "is a beautiful Country";
console.log(test.concat(test2));

console.log(test.includes("a"));