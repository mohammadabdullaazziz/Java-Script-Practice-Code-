var num = 20;
num = toString(num);
console.log(typeof (num));


var num = "20";
num = parseInt(num);
console.log(typeof (num));


var num = "20.5";
num = parseFloat(num);
console.log(typeof (num));

// toFixed 
var number = 2.2587;
console.log(number.toFixed(3));

// toPrecision
var number = 2.2587;
console.log(number.toPrecision(3));

// number method 
console.log(Number("12"));

console.log(Number("12.5"));

console.log(Number(true));
console.log(Number(false));

