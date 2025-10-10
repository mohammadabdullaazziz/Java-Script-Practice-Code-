let FriendName = ["Abdullah", "Ebny", "Aziz", "Arman"]; //case sensetive
console.log(FriendName.join('+')); //join('|')
console.log(FriendName.includes("Mohammad")); //false
console.log(FriendName.includes("Aziz"));  //true

if (FriendName.includes("Mohammad")) {
    console.log("Party");
} else {
    console.log("No Food. We Are Fasting");
}

console.log(FriendName.indexOf("Aziz"));
console.log(FriendName.indexOf("potato")); //-1

let num = [];
let foods = "Ro So Go LL Ah";
console.log(Array.isArray(FriendName));
console.log(Array.isArray(num));
console.log(Array.isArray(foods));