let sum = 0;

for (let number = 0; number <= 10; number++) {
    console.log(number);
    sum = sum + number;
}
console.log("Sum", sum);
----------------------------------
//decremental for loop
let add = 10;
for (let number = 10; number >= 0; number--){
    console.log(number);
    add = add - number;
}
console.log(add);
----------------------------

for (let i = 0; i <= 10; i++){
    if (i % 2 == 0 ){
      console.log(i);
    } 
}
------------------------
for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0 ){
      console.log(i);
    }  
}
--------------------------
for (let i = 0; i <= 30; i++){
    if (i % 3 == 0 || i % 5 == 0){
      console.log(i);
    }  
}
