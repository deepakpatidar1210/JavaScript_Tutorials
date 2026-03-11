/*
------------------------------------
1. if Statement
Executes code if condition is true
------------------------------------
*/

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}


/*
------------------------------------
2. if...else Statement
Runs one block if true, another if false
------------------------------------
*/

let number = 10;

if (number % 2 === 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}


/*
------------------------------------
3. if...else if...else Statement
Used when checking multiple conditions
------------------------------------
*/

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}



/*
------------------------------------
4. switch Statement
Used when checking many specific values
------------------------------------
*/

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;

  case 6:
    dayName = "Saturday";
    break;

  case 7:
    dayName = "Sunday";
    break;

  default:
    dayName = "Invalid day";
}

console.log("Today is:", dayName);



