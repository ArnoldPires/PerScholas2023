//While Loops - Fundamentals
let count = 2;
// ADD CODE HERE
while (count < 8) {
  count += 2;
}

// Uncomment these to check your work!
console.log(count);

//While Loops - Conditional Expression
// ADD CODE HERE
let addThis = 0;
let sum = 0;

while (addThis < 10) {
  sum += addThis;
  addThis++;
}
// Uncomment the line below to check your work!
console.log(sum);

//Control Flow - if statements
const num = 40;
let final;
// ADD CODE HERE
if (num > 100) {
  final = null;
} else {
  final = 2 * num;
}
// Log final to the console below to check your work
console.log(final);

//Fizzbuzz
const fb = [];
// ADD CODE HERE
for (let i = 1; i <= 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fb.push("fizzbuzz");
  } else if (i % 3 === 0) {
    fb.push("fizz");
  } else if (i % 5 === 0) {
    fb.push("buzz");
  } else {
    fb.push(i);
  }
}
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
console.log(fb);
