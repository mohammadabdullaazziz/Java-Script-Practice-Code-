let num = prompt("Enter Your Number");
num = Number(num);

// let remainder = num % 2;

if ( (num % 2) == 0) {
    console.log(num + " is Even Number")
} else {
    console.log(num + " is Odd Number");

}


if (input === null) {      // ১ম if শুরু
    console.log("Input cancelled");
}                          // ১ম if শেষ

else {                     // else শুরু
    let num = Number(input);

    if (input.trim() === "" || isNaN(num)) {   // ২য় if শুরু
        console.log("Please enter a valid number!");
    }                                          // ২য় if শেষ

    else if (!Number.isInteger(num)) {         // ৩য় if
        console.log("Please enter an integer number!");
    } 

    else if (num % 2 === 0) {                  // ৪র্থ if
        console.log(num + " is an Even Number");
    } 

    else {                                     // শেষ else
        console.log(num + " is an Odd Number");
    }                                          // ভিতরের if-else শেষ
}                                              // বাইরের else শেষ


✔ Cancel detect
✔ ফাঁকা input detect
✔ String detect
✔ Decimal detect
✔ সুন্দর output format
✔ Cleaner logic
-------------------------------------------------------
let num = Number(prompt("Enter a number: "));
console.log(num % 2 === 0 ? "Even Number" : "Odd Number");
