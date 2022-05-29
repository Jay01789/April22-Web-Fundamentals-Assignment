//var example -->

var num = 20;
console.log(num);

var num = "cat";
console.log(num);

// in var we can both re-assign values and also redeclare the variable.

// let example -->

let z = 5;
console.log(a);

let z = 6;
console.log(a);

// in let we can re-assign value but we cannot re declare the variable

// Output --> Uncaught SyntaxError: Identifier 'z' has already been declared

// const

const y = 21;

const x = 12;
x = "jay";

console.log(x);

// Output --> Uncaught TypeError: Assignment to constant variable.
