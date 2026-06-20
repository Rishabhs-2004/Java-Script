// let, var and const Keywords in JavaScript

/*
Technical Definition:
var, let aur const JavaScript me variables declare karne ke
keywords hote hain. Inka use data ko memory me store karne
ke liye kiya jata hai.
*/


// =====================
// 1. var Keyword
// =====================

// var Function Scoped hota hai.
// var ko redeclare aur reassign dono kar sakte hain.

var name = "Rishabh";
var name = "Rahul";     // Redeclare Allowed

name = "Aman";          // Reassign Allowed

console.log(name);      // Aman


// =====================
// 2. let Keyword
// =====================

// let Block Scoped hota hai.
// let ko redeclare nahi kar sakte.
// let ko reassign kar sakte hain.

let age = 22;

// let age = 23;         // Error: Redeclaration Not Allowed

age = 23;               // Reassign Allowed

console.log(age);       // 23


// =====================
// 3. const Keyword
// =====================

// const Block Scoped hota hai.
// const ko redeclare aur reassign dono nahi kar sakte.
// Declaration ke time value dena mandatory hota hai.

const country = "India";

// const country = "USA";   // Error
// country = "USA";         // Error

console.log(country);      // India


/*
Difference Between var, let and const

Keyword   Scope            Redeclare   Reassign
------------------------------------------------
var       Function Scope   Yes         Yes
let       Block Scope      No          Yes
const     Block Scope      No          No
*/


/*
Important Points:

1. var ES5 me introduce hua tha.
2. let aur const ES6 (2015) me introduce hue.
3. Modern JavaScript me var ka use avoid kiya jata hai.
4. Jab value change karni ho to let use karo.
5. Jab value change na karni ho to const use karo.
*/


/*
One-Line Note:
var, let aur const JavaScript me variables declare karne ke
keywords hain, jinka scope aur behavior alag-alag hota hai.
*/