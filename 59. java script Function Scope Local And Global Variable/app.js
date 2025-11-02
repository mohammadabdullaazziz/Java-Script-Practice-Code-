//java script Function parameter, handle multiple parameters

//local variable scope
function myName() {
  let myFullName = "Mohammad";
  console.log(myFullName);
  myFullName = "Abdullah";
  console.log(myFullName);
}
myName();
// console.log(myFullName); //error

//global variable scope

let mySubject = "English";
function myIntro() {
  let name = "Abdullah";
  console.log(name);
  name = "Aziz";
  console.log(name);
  console.log(mySubject);
  mySubject = "Bangla";
 
}
myIntro();
console.log(mySubject);


let globalName = "Abdullah";
function localName() {
  let globalName = "Aziz";
  console.log(globalName);
}
localName();
console.log(globalName);