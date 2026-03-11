/*
------------------------------------
1. Arithmetic Operators
Used to perform mathematical operations
------------------------------------
*/

let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


/*
Increment and Decrement
*/

let x = 5;

x++;
console.log("Increment:", x);

x--;
console.log("Decrement:", x);



/*
------------------------------------
2. Assignment Operators
Used to assign values to variables
------------------------------------
*/

let y = 10;

y += 5; 
console.log("y += 5:", y);

y -= 3;
console.log("y -= 3:", y);

y *= 2;
console.log("y *= 2:", y);

y /= 4;
console.log("y /= 4:", y);

y %= 3;
console.log("y %= 3:", y);



/*
------------------------------------
3. Comparison Operators
Used to compare two values
Returns true or false
------------------------------------
*/

let num1 = 10;
let num2 = 20;

console.log("Equal:", num1 == num2);
console.log("Strict Equal:", num1 === num2);
console.log("Not Equal:", num1 != num2);
console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);
console.log("Greater or Equal:", num1 >= num2);
console.log("Less or Equal:", num1 <= num2);



/*
------------------------------------
4. Logical Operators
Used to combine conditions
------------------------------------
*/

let age = 25;
let hasLicense = true;

console.log("AND:", age > 18 && hasLicense);
console.log("OR:", age < 18 || hasLicense);
console.log("NOT:", !(age > 18));



/*
------------------------------------
5. String Operator
+ is used for concatenation
------------------------------------
*/

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);



/*
------------------------------------
6. String + Number
------------------------------------
*/

let result1 = 5 + 5;
let result2 = "5" + 5;

console.log("Number + Number:", result1);
console.log("String + Number:", result2);



/*
------------------------------------
End of Operators Tutorial
------------------------------------
*/