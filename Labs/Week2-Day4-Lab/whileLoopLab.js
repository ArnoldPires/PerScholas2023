/*
Write a while loop for the given output:
 10, 30, 50, 70, 90
 20, 40, 60, 80, 100

- This could be acheived a few ways, be creative.
*/
let loopyOne = 10;
while (loopyOne <= 90) {
  console.log("loopy One " + loopyOne + ",");
  loopyOne += 20;
}

let loopyTwo = 20;
while (loopyTwo <= 100) {
  console.log("loopy Two " + loopyTwo);
  loopyTwo += 20;
}

let loopy = 10
let loopyLoopy = 20
const loopyLoopyLoopy = []
const loopyLoopyLoopyLoopy = []

while(loopy < 100 && loopyLoopy <= 100) {
  if(loopy % 2 === 0) {
    loopyLoopyLoopy.push(loopy);
    loopy+=20;
  }
  if(loopyLoopy % 2 === 0) {
    loopyLoopyLoopyLoopy.push(loopyLoopy);
    loopyLoopy+=20
  }
}
console.log(`${loopyLoopyLoopy} \n${loopyLoopyLoopyLoopy}`);
/*
Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.
*/
let loopyThree = 500;
while (loopyThree <= 800) {
  if (loopyThree % 4 === 0) {
    console.log("loopyThree " + loopyThree)
  }
  loopyThree++
}