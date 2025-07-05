console.log(null == undefined); true //alway
console.log(null == null); true
console.log(0 >= null); true
console.log(undefined == null); true
console.log(null === undefined); false
console.log(undefined === undefined); true
console.log( 0 > null); false
console.log( 0 == null); false
console.log( 0 > undefined); false
console.log( 0 == undefined); false
console.log(0 >= undefined); false

let firstNumber = null;
let secondNumber = undefined;
console.log(firstNumber == secondNumber); true
