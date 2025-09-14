// Javascript Continue Statement 
for (let i = 1; i <= 10; i++) {
  if (i > 4 && i < 9) {
    continue; 
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 9
// 10


let i = 0;
while (i < 10) {
  i++;
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i);
}
// Output:
// 1
// 3
// 5
// 7
// 9


let text = "";
let m = 0;
while (i < 5) {
  m++;
  if (m === 3) continue;
  text += m + "<br>";
}



// Output:
// 1
// 3
// 5