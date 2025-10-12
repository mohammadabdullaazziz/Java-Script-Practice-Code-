const country = "Bangladesh";
const division = 'Rangpur';
const district = `Rangpur`;
const thana = new String("Gangachara");

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);
console.log(thana);

const number = [25, 55, 60, 65, 70];
number[3] = 11;
console.log(number.length);
console.log(number[3]);

const text = 'Dhaka';
text[2] = "A"; //string is immutable...not changeable
console.log(text.length);
console.log(text[0]);
console.log(text);