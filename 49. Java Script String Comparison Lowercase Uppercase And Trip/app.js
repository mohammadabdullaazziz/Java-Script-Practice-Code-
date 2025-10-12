const school = "Changmary Maindrain High School";
const subject = "EnglisH";
const book = "English";

console.log(school.toLowerCase());
console.log(school.toUpperCase());

if (subject === book) {
    console.log("This is True");
} else {
    console.log("Its True");
}

if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("This is True");
} else {
    console.log("Its True");
}

const drink = ' water';
const liquid = 'water ';

if (drink === liquid) {
    console.log("This is True");
} else {
    console.log("Its True");
}

if (drink.trim() === liquid.trim()) {
    console.log("This is True");
} else {
    console.log("Its True");
}