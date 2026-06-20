// Numbers in JavaScript

/*
Technical Definition:
Number ek Primitive Data Type hai jo integer aur floating-point
(decimal) values ko store karne ke liye use hota hai.
JavaScript me alag se int aur float data type nahi hoti,
dono ko Number Data Type represent karti hai.
*/


// Integer Numbers
let age = 22;
let marks = 95;

console.log(age);
console.log(marks);


// Decimal (Floating Point) Numbers
let price = 99.99;
let percentage = 85.5;

console.log(price);
console.log(percentage);


// Negative Numbers
let temperature = -10;

console.log(temperature);


// Special Number Values
let infinityValue = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

console.log(infinityValue);
console.log(negativeInfinity);
console.log(notANumber);


// Number Methods

let num = 123.456;

// toFixed() - Decimal places set karta hai
console.log(num.toFixed(2));       // 123.46

// toString() - Number ko String me convert karta hai
console.log(num.toString());

// Number() - Kisi value ko Number me convert karta hai
console.log(Number("100"));        // 100

// parseInt() - Integer me convert karta hai
console.log(parseInt("50.99"));    // 50

// parseFloat() - Decimal Number me convert karta hai
console.log(parseFloat("50.99"));  // 50.99


/*
Important Points:

1. Number Primitive Data Type hoti hai.
2. Integers aur Decimal values dono Number me aati hain.
3. JavaScript me Maximum Number Value:
   Number.MAX_VALUE

4. JavaScript me Minimum Number Value:
   Number.MIN_VALUE

5. Invalid Mathematical Operations ka result NaN hota hai.
*/


/*
One-Line Note:
Number ek Primitive Data Type hai jo integer aur decimal values
ko represent karti hai.
*/