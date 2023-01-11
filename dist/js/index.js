"use strict";
// Basic types
let firstName = 'Vitor';
let chosenNumber = 10;
let booleanValue = true;
// Array(type)
let myArray = [1, 2, 3];
// Tuples
let myTuple = [1, 'vitor', [1, 2, 3]]; // order matters
// Object literals => {prop: value}
const user = {
    name: 'Vitor',
    age: 30,
    student: true,
};
// Any
let anything = 0;
anything = 'test';
anything = true;
anything = 1;
// Union type
let numberOrString = "123";
numberOrString = 123;
let newVariable = 123;
newVariable = 'Test';
// Enum
// Example => Clothing sizes (sizes: S, M, L)
var Size;
(function (Size) {
    Size["S"] = "small";
    Size["M"] = "medium";
    Size["L"] = "large";
})(Size || (Size = {}));
const tShirt = {
    color: "blue",
    size: Size.L
};
// Literal types
let test;
test = "authenticated"; // only option
test = null;
// Functions
function sum(a, b) {
    return a + b;
}
function sayHelloTo(name) {
    return `Hello, ${name}`;
}
function logger(msg) {
    console.log(msg);
}
// Interfaces
