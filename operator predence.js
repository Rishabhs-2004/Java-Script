// Operator Precedence in JavaScript

/*
Technical Definition:
Operator Precedence decide karti hai ki ek expression me
multiple operators hone par kaunsa operator pehle execute hoga.
Jis operator ki precedence zyada hoti hai, woh pehle evaluate hota hai.
*/


// Example 1: Multiplication before Addition

let result1 = 10 + 5 * 2;

console.log(result1);   // 20

// Explanation:
// 5 * 2 = 10
// 10 + 10 = 20


// Example 2: Parentheses have Highest Priority

let result2 = (10 + 5) * 2;

console.log(result2);   // 30

// Explanation:
// (10 + 5) = 15
// 15 * 2 = 30


// Example 3: Division before Addition

let result3 = 20 + 10 / 2;

console.log(result3);   // 25

// Explanation:
// 10 / 2 = 5
// 20 + 5 = 25


// Example 4: Same Precedence (Left to Right)

let result4 = 20 - 5 + 2;

console.log(result4);   // 17

// Explanation:
// 20 - 5 = 15
// 15 + 2 = 17


/*
Operator Precedence Order (High to Low)

1. ( )              Parentheses
2. ++, --           Increment / Decrement
3. **               Exponentiation
4. *, /, %          Multiplication, Division, Modulus
5. +, -             Addition, Subtraction
6. <, <=, >, >=     Relational Operators
7. ==, !=, ===      Equality Operators
8. &&               Logical AND
9. ||               Logical OR
10. ?:              Ternary Operator
11. =, +=, -=       Assignment Operators
*/


/*
Important Points:

1. Higher precedence operator pehle execute hota hai.
2. Parentheses ( ) sabse pehle execute hoti hain.
3. Same precedence wale operators Left to Right execute hote hain.
4. Exponentiation (**) Right to Left execute hota hai.
*/


/*
One-Line Note:
Operator Precedence define karti hai ki expression me
kaunsa operator pehle execute hoga.
*/