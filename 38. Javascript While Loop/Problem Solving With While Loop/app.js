let num = 1;
let sum = 0;
while (num <= 10) {
    console.log(num);
    num++;
    sum = sum + num;
    console.log("sum", sum);
}

let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
    if (number % 2 == 0) {
        console.log("Odd Number")
    } else {
        console.log("Even Number");
    }
}