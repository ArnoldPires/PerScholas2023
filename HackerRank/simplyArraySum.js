//Complete the 'simpleArraySum' function
//The function is expected to return an INTEGER
//The function accepts INTEGER_ARRAY ar as parameter

function simpleArraySum(ar) {
  let sum = 0;
  for (let number = 0; number < ar.length; number++) {
    sum += ar[number];
  }
  return sum;
}

//OR

function simpleArraySumTwo(ar) {
  let sum = 0;
  for (let number of ar) {
    sum += number;
  }
  return sum;
}