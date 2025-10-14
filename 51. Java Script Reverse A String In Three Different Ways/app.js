const sentence = "Many People Live In Bangladesh";

for (const letter of sentence){
   console.log(letter);
}

let reverse = '';
for (letter of sentence){
   reverse = letter + reverse;
}
console.log(reverse);