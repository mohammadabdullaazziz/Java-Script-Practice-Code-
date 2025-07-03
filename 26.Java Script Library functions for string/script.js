<h3>Library functions for string</h3>

let text1 = "Bangladesh";
let len = text1.length;
document.write("Number of character " + len);


let text2 = "Bangladesh";
document.write("Number of character " + text2.length);

// 
let text3 = prompt("Enter Your Name :");
document.write("Number of character " + text3.length);


let text4 = "Bangladesh";
document.write(text4.charAt(2));
// 

// UpperCase

let text5 = "Bangladesh";
text5 = text.toUpperCase();
document.write(text5);

// Again
let text6 = "Bangladesh";
document.write(text6.toUpperCase());


// Lowercase

let text7 = "Bangladesh";
text = text7.toLowerCase();
document.write(text7);

// Again
let text8 = "Bangladesh";
document.write(text8.toLowerCase());


// Concatenation Function
let text9 = "Bangladesh";
let text10 = "is a Beautiful Country"
document.write(text9.concat(text10));

// Again
let text11 = "Bangladesh";
let text12 = "is a Beautiful Country"
let text13 = text11.concat(text12)
document.write(text13);


// Slice
let text14 = "Bangladesh";
let text15 = text.slice(0, 2);
document.write(text15);


let text16 = "Bangladesh"
document.write(text16.charCodeAt(2))


 // Task
    // get first name from user
    //get last name form user
    //add without using library function
    //print full nlet
    //total length of full name
    //convert full name into uppercase
    //print the 2nd position of full name
   
    let firstName = prompt("Enter your first name : ");
    let lastName = prompt("Enter your last name : ");
    let fullName = firstName + lastName ;
    let lenGht = fullName.length;
    document.write(" Fullname :" + fullName);
    document.write("Number of characters " + lenGht);
    document.write(fullName.charAt(2));
    document.write(fullName.toUpperCase());