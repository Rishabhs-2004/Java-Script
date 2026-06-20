// NaN in JavaScript

/*
Technical Definition:
NaN (Not a Number) ek special Number value hai jo indicate karti hai
ki mathematical operation ka valid numeric result nahi nikla.
NaN ka type "number" hota hai.
*/


// Invalid Mathematical Operations

console.log("Hello" / 2);       // NaN
console.log(0 / 0);             // NaN
console.log(parseInt("abc"));   // NaN
console.log(Number("Rishabh")); // NaN


// Checking NaN using isNaN()

console.log(isNaN("Hello"));    // true
console.log(isNaN(100));        // false
console.log(isNaN(NaN));        // true


// Checking NaN using Number.isNaN()

console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN("Hello"));   // false
console.log(Number.isNaN(100));       // false


// Type of NaN

console.log(typeof NaN);   // "number"


/*
Important Points:

1. NaN ka full form "Not a Number" hota hai.
2. NaN ek special Number value hai.
3. Invalid mathematical operations ka result NaN hota hai.
4. typeof NaN ka result "number" aata hai.
5. NaN khud ke equal bhi nahi hota.

   Example:
   console.log(NaN == NaN);    // false
   console.log(NaN === NaN);   // false
*/


/*
One-Line Note:
NaN ek special Number value hai jo invalid ya undefined
numeric result ko represent karti hai.
*/