// Type Casting String data convert

let price = 100;
newPrice = toString(price);
console.log( typeof newPrice);

let test = null;
test = toString(test);
console.log(typeof test);

let text = undefined;
text = toString(text);
console.log(typeof text);

let isAdmin = true;
isAdmin = toString(isAdmin);
console.log(typeof isAdmin);

// Type Casting Number data convert
let prize = "150";
prize = parseInt(prize);
let newPrize = Number(prize);
console.log(typeof newPrize);

let prize2 = 150.25;
prize2 = parseFloat(prize2);
let newPrize1 = Number(prize2);
console.log(typeof newPrize1);

// number na diye text dile result Asbe NaN 
let prices = prompt("Enter Prices"); 
prices = Number(prices);
console.log(typeof prices);

Number = ("100"); Number
Number = (100); Number
Number = (null); 0
Number = (undefined); NaN
Number = (true); 1
Number = (false); 0
Number = ("  525  "); Number
Number = ("525a"); NaN
Number = (""); 0
Number = ("   "); 0

// let number = Number("100");
// console.log(typeof number); Number

// let number = Number(100);
// console.log(typeof number); Number

// let number = Number("ABCDE");
// console.log(typeof number); Number
// console.log(number); NaN

// let number = Number(null);
// console.log(typeof number); Number
// console.log(number); 0

// let number = Number(undefined);
// console.log(typeof number); Number
// console.log(number); NaN

// let number = Number(true);
// console.log(typeof number); Number
// console.log(number); 1

// let number = Number(false);
// console.log(typeof number); Number
// console.log(number); 0

// let number = Number("  525 ");
// console.log(typeof number); Number


// let number = Number("  525a ");
// console.log(typeof number); Number
// console.log(number); NaN

// let number = Number("   ");
// console.log(typeof number); Number
// console.log(number); 0

// Type Casting Boolean data convert

// "Abdullah" , 1 , 100 , "0" , "  " -- true
let mangoPrize = 100;
MangoPrize = Boolean(mangoPrize);
console.log(typeof mangoPrize); boolean
console.log(mangoPrize); true

let boyName = "Abdullah";
boyName = Boolean(boyName);
console.log(typeof boyName); boolean
console.log(boyName); true

// null , undefined , Nan , "" , 0  --- false
let jamPrice = null;
jamPrice = Boolean(jamPrice);
console.log(typeof jamPrice); boolean
console.log(jamPrice); false

let catPrice = undefined;
catPrice = Boolean(catPrice);
console.log(typeof catPrice); boolean
console.log(catPrice); false

let capPrice = NaN;
capPrice = Boolean(capPrice);
console.log(typeof capPrice); boolean
console.log(capPrice); false

let watchPrice = "";
watchPrice = Boolean(watchPrice);
console.log(typeof watchPrice); boolean
console.log(watchPrice); false

let penPrice = 0;
penPrice = Boolean(penPrice);
console.log(typeof penPrice); boolean
console.log(penPrice); false

// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer