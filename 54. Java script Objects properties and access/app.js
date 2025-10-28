let myName = {};
console.log(myName);
console.log(typeof myName); //Blank Object (object literal)

let names = new Object();
console.log(names);
console.log(typeof names);

let objectTest = {
    name: "Abdullah",
    age: 28,
    height: 5.2,
    color: "Black",
    "user name": "Aziz",
    gmail: "Programmeraziz216@gmail.com",
    isSingle: true,
    friends: ["Mohammad", "Aziz", "Arman"],
    location: "Rangpur",
}

let test = objectTest.isSingle;
console.log(test); 

objectTest['Age'] = 30; //value update
objectTest.height = 5.3;


console.log(objectTest.name); 
console.log(objectTest["gmail"]);
console.log(objectTest["age"]);
console.log(typeof objectTest.isSingle);
console.log(objectTest["user name"]);

console.log(objectTest);