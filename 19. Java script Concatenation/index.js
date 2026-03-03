<h3>Javascript Concatenation</h3>

var num1 = 20;
var num2 = 30;
document.write("Num1 = " + num1 + " and Num2 = " + num2);

let firstName = "Abdullah";
let lastName = "Aziz";
let fullName = (firstName + " " + lastName);
console.log(fullName);

let result = 4 + "9";
console.log(result);
console.log(typeof result);

let results = "9" + 4;
console.log(results);
console.log(typeof results);

let result1 = 4 + 4 + "2";
console.log(result1);
console.log(typeof result1);

let result2 = "2" + 2 + 4;
console.log(result2);
console.log(typeof result2);

let result3 = 20 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = 20 * "2";
console.log(result4);
console.log(typeof result4);

let result5 = 20 / "2";
console.log(result5);
console.log(typeof result5);

let result6 = 20 % "2";
console.log(result6);
console.log(typeof result6);

let result7 = 20 ** "2";
console.log(result7);
console.log(typeof result7);

parseInt() ব্যবহার করে (পূর্ণসংখ্যার জন্য)
যদি নিশ্চিত যে সংখ্যাটি একটি পূর্ণসংখ্যা (Integer), তবে এটি ব্যবহার করা ভালো। এটি স্ট্রিংয়ের শুরু থেকে সংখ্যা খুঁজে বের করতে পারে।

let str = "49.5";
console.log(parseInt(str)); // আউটপুট: 49 (দশমিকের পরের অংশ ফেলে দেয়)

Number(x)	যেকোনো কিছুকে নাম্বারে রূপান্তর	Number("10") ➡️ 10
parseInt(x)	স্ট্রিং থেকে পূর্ণসংখ্যা বের করা	parseInt("10.5") ➡️ 10
parseFloat(x)	স্ট্রিং থেকে দশমিক সংখ্যা বের করা	parseFloat("10.5") ➡️ 10.5



20 + "2" ➡️ "202" (String)

20 - "2" ➡️ 18 (Number)

20 * "2" ➡️ 40 (Number)

20 / "2" ➡️ 10 (Number)

20 % "2" ➡️ 0 (Number)

20 ** "2" ➡️ 0 (Number)


let errorResult = 20 + "Aziz";
console.log(errorResult); // আউটপুট: "20Aziz" (এটি একটি String)

let errorResult = 20 - "Aziz";
console.log(errorResult); // আউটপুট: NaN (Not a Number)

let errorResult = 20 * "Aziz";
console.log(errorResult); // আউটপুট: NaN (Not a Number)

let errorResult = 20 / "Aziz";
console.log(errorResult); // আউটপুট: NaN (Not a Number)

let errorResult = 20 ** "Aziz";
console.log(errorResult); // আউটপুট: NaN (Not a Number)

let errorResult = 20 % "Aziz";
console.log(errorResult); // আউটপুট: NaN (Not a Number)
