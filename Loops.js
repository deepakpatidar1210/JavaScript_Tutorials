/*
------------------------------------
1. for Loop
------------------------------------
*/

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}


/*
------------------------------------
2. while Loop
------------------------------------
*/

let count = 1;

while (count <= 5) {
  console.log("Count:", count);
  count++;
}


/*
------------------------------------
3. do...while Loop
Runs at least once even if the
condition is false
------------------------------------
*/

let num = 1;

do {
  console.log("Do While:", num);
  num++;
} while (num <= 5);


/*
------------------------------------
4. break Statement
Stops the loop immediately
------------------------------------
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log("Break Example:", i);
}


/*
------------------------------------
5. continue Statement
Skips the current iteration
------------------------------------
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Continue Example:", i);
}