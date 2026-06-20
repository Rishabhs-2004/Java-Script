// Operators in JavaScript

/*
Technical Definition:
Operators special symbols hote hain jo values aur variables
par operations perform karne ke liye use kiye jate hain.
*/


// ==========================
// 1. Arithmetic Operators
// ==========================

let a = 10;
let b = 5;

console.log(a + b);   // Addition        = 15
console.log(a - b);   // Subtraction     = 5
console.log(a * b);   // Multiplication  = 50
console.log(a / b);   // Division        = 2
console.log(a % b);   // Modulus         = 0
console.log(a ** b);  // Exponentiation  = 100000
console.log(++a);     // Increment       = 11
console.log(--b);     // Decrement       = 4


// ==========================
// 2. Assignment Operators
// ==========================

let x = 10;

x += 5;   // x = x + 5
x -= 2;   // x = x - 2
x *= 2;   // x = x * 2
x /= 2;   // x = x / 2
x %= 3;   // x = x % 3

console.log(x);


// ==========================
// 3. Comparison Operators
// ==========================

let num1 = 10;
let num2 = "10";

console.log(num1 == num2);   // true
console.log(num1 === num2);  // false
console.log(num1 != num2);   // false
console.log(num1 !== num2);  // true
console.log(num1 > 5);       // true
console.log(num1 < 5);       // false
console.log(num1 >= 10);     // true
console.log(num1 <= 5);      // false


// ==========================
// 4. Logical Operators
// ==========================

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);  // AND  -> false
console.log(isLoggedIn || isAdmin);  // OR   -> true
console.log(!isLoggedIn);            // NOT  -> false


// ==========================
// 5. Bitwise Operators
// ==========================

console.log(5 & 1);   // AND
console.log(5 | 1);   // OR
console.log(5 ^ 1);   // XOR
console.log(~5);      // NOT
console.log(5 << 1);  // Left Shift
console.log(5 >> 1);  // Right Shift


// ==========================
// 6. Ternary Operator
// ==========================

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";

console.log(result);


// ==========================
// 7. Type Operators
// ==========================

console.log(typeof "Rishabh");   // string
console.log(typeof 22);          // number
console.log(typeof true);        // boolean

let arr = [1, 2, 3];

console.log(arr instanceof Array);   // true


/*
Types of Operators in JavaScript:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operator
7. Type Operators
*/


/*
One-Line Note:
Operators special symbols hote hain jo variables aur values
par operations perform karte hain.
*/