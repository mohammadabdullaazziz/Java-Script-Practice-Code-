const person = {
  name: "Aziz",
  age: 22,
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  job: {
    title: "Web Developer",
    skills: {
      frontend: "JavaScript",
      backend: "Node.js"
    }
  }
};

console.log(person.name);            // Aziz
console.log(person.address.city);    // Dhaka
console.log(person.job.title);       // Web Developer
console.log(person.job.skills.frontend);  // JavaScript




console.log(person["name"]);            // Aziz
console.log(person["address"]["city"]);    // Dhaka
console.log(person["job"]["title"]);       // Web Developer
console.log(person["job"]["skills"]["frontend"]);  // JavaScript



// Dynamic Property
let key = "email";
let personOne = {
    names: "Abdullah",
    age: 28,
};
personOne[key] = "aziz@gmail.com";
console.log(personOne.email); 



let personTwo = {};
let infoType = prompt("Enter Your Name");

let value = prompt(`Your Name is ${infoType}`);

personTwo[infoType] = value;
console.log(personTwo);



