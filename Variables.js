
/*
Variables are containers used to store data.

------------------------------
Declaring Variables with let
------------------------------
let variables can be updated but cannot be redeclared in same scope
*/


let score = 50;
score = 60;

console.log("Score:", score);


/*
-------------------------------- 
Declaring Variables with const
--------------------------------
const variables cannot be reassigned
*/

const country = "India";
console.log("Country:", country);

// country = "USA"; // ERROR


/*
------------------------------
Using var (Old Method)
------------------------------
It can be redeclared and updated
*/

var city = "Delhi";
var city = "Mumbai";

console.log("City:", city);


 