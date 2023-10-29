// Data types
// A data type is a collection of data values that are grouped together, Further data types are classified into two types

// Premitive data type
// The premitive data types are the predefined data types provided by avaScript language, they are also known as built-in data types.

// Strings
//  The string data type in javascript represent a sequence of characters that surrounded by single or double quotes. example:
let str = "Nitish this side";
let strl = 'How you guys doing?';
// Here both str and strl have data type of string
console.log("The data type of str is " + typeof("str"));
console.log("The data type of strl is " + typeof("strl"));

// Number
//  Number data type in javascript is used for storing both decimal values and non decimal values. example:
let x = 100;
let y = 23.7;
// here x and y both have number data type. 
console.log("the data type of x is " + typeof(x));
console.log("the data type of y is " + typeof(y));

// Boolean
// The boolean data type can accept only 2 values true or false. example:
let bool = true;
let bool2 = false;

console.log("The data type of bool is " + typeof(bool));
console.log("The data type of bool2 is " + typeof(bool2));

// Null 
// The behaviour of null is marked as one of the premitive values cause it's behaviour is premitive, however it returns an object value. exapmle:
let nal = null;

console.log("The data type of nal is " + typeof(null));

// Undefined 
// This is a premitive value automatically assigned to variable that just been declared. example:

let z;

console.log("The value of z is "+ typeof(z));


// Reference data type
// The reference data types are the data types that are derived from the premitive data types of JavaScript language. 
// The are also known as derived data types

// Array
// Array are the data types where we can store different type of values together like number, boolean, string, etc. example:

myarr = [1,2,3,4, true, "same"];
console.log("The value of myarr is " + typeof(myarr));

// Object literals
//  In object literals we save objects in a key value pair, so that every value has a key to access it. example:

let marks = {
    singh: 78,
    shyam: 88,
    shubam: 43,
}

console.log("The value of marks is "+ typeof marks );

// Functions
// A functions is a block of code designed to perform aperticular taske, it is executed when someone invokes it(call it). example:

function add() {
    console.log(a + b);
}

a = 2;
b = 7;

add(); 
// here we are calling add function and making it add the values 
