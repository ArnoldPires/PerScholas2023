// While loops
a = 1
while (a < 10) { // while statement
  console.log(a) //code block
  a+= 2 //code block
}
b = 1
while (a < 7) {
  if (a % 2 == 0) {
    console.log( b + " is even")
  } else {
    console.log(b + " is odd")
  }
  a++
}
i = 7
while (i >= 0) {
  console.log(i)
  i--
}
/*
Syntax: 
let i = 1;
while(condition){
  console.log("Hello")
  i ++;
}
*/
//Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop:
f = 1
while(f < 35){
  if(f % 3 == 0){ //if f is divisible by 3
    console.log(f)
  }
  f++ //increasing f by 1
}
//Keep printing integers in multiples of 5 as long as integers are less than 100
let y = 4
while(y < 100){
  if(y % 5 == 0){
    console.log(y)
  }
  y++
}
//Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.\
let t = 0;
while(t <= 20){
  if(t % 2 === 0) {
    console.log(t * 3);
  }
  t++;
}
//Using a while loop, print out all prime numbers between 0 - 20
let num = 2;
while (num < 20) {
  let is_prime = true;
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      is_prime = false;
      break;
    }
  }
  if (is_prime) {
    console.log(num);
  }
  num++;
}
let c = 2
while(c <= 20){
  if (c % 2 !== 0 && c * 1 === c){
    console.log(c)
  }
  c++
}
let nums = 2; // start from the first prime number
while (nums < 20) { // loop until the upper limit
  let is_prime = true; // assume nums is prime
  for (let jj = 2; jj < nums; jj++) { // check all possible divisors
    if (nums % jj == 0) { // if nums is divisible by jj
      is_prime = false; // then nums is not prime
      break; // stop checking
    }
  }
  if (is_prime) { // if nums is still prime
    console.log(nums); // print it out
  }
  nums++; // increment nums by 1
}