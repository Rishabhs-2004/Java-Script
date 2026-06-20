 // Data Types in JavaScript

/*
Technical Definition:
Data Types define karti hain ki variable kis type ki value store karega.
JavaScript me Data Types 2 types ki hoti hain:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/


// =======================
// 1. Primitive Data Types
// =======================

// String - Text values store karta hai
let name = "Rishabh";

// Number - Integer aur Decimal numbers
let age = 22;
let price = 99.99;

// Boolean - True ya False value
let isStudent = true;

// Undefined - Variable declare hua hai but value assign nahi hui
let city;

// Null - Intentional empty value
let phone = null;

// BigInt - Bahut bade integers store karta hai
let bigNumber = 123456789012345678901234567890n;

// Symbol - Unique identifier create karta hai
let id = Symbol("id");


// Primitive Data Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol



// ====================================
// 2. Non-Primitive (Reference) Types
// ====================================

// Object - Key-value pairs me data store karta hai
let person = {
    name: "Rishabh",
    age: 22
};

// Array - Multiple values store karta hai
let numbers = [10, 20, 30, 40];

// Function - Reusable block of code
function greet() {
    console.log("Hello");
}


// Non-Primitive Data Types:
// 1. Object
// 2. Array
// 3. Function



/*
One-Line Note:
JavaScript me Data Types 2 categories me divide hoti hain:
Primitive aur Non-Primitive (Reference) Data Types.

Yaad Rakhne Wali Line:
Primitive = Single Value
Non-Primitive = Reference Based / Multiple Values
*/