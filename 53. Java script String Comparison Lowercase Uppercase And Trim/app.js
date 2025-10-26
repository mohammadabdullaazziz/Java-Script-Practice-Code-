let subject = "Chemistry";
let book = "chemistry";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("Its True");
} else {
    console.log("Somethings");
}

let drink = "water";
let liquid = "  water";

if(drink === liquid.trim()) {
    console.log("This is True");
} else{
    console.log("Somethings");
}