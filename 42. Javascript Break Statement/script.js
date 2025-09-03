// Java script Break Statement

// Breaking out of a for loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exits the loop when 'i' reaches 5
  }
  console.log(i);
}
// Output: 0 1 2 3 4

// Breaking out of a while loop
let count = 0;
while (true) { // An infinite loop
  console.log(count);
  count++;
  if (count === 3) {
    break; // Exits the loop when 'count' reaches 3
  }
}
// Output: 0 1 2


let text = "";
for (let i = 0; i < 5; i++) {
  if (i == 3) break;
  text += i + "<br>";
}

let text2 = "";i = 0;
while (i < 5) {
  text2 += i + "<br>";
  i++;
  if (i === 3) break;
}