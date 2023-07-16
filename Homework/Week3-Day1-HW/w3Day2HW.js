/*
1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
If they are the same, return that number. 
Use the if-else construct or a ternary expression - the Math.max method is not allowed.
*/

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  // or more "elegantly" using the fantastic ternary expression!
  // return x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9));
console.log(maxOfTwoNumbers(311, 90));
console.log(maxOfTwoNumbers(6, 100000));

//
let maxofTwoNumbersTwo = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log(maxofTwoNumbersTwo(5, 12))
console.log(maxofTwoNumbersTwo(6, 54))
console.log(maxofTwoNumbersTwo(99, 54))
//
let maxofTwoNumbersThree = (x, y) => {
  return x >= y ? x : y;
}
console.log(maxofTwoNumbersThree(12, 19))
console.log(maxofTwoNumbersThree(122, 199))
console.log(maxofTwoNumbersThree(1222, 1999))

/*
2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. 
Again, the Math.max method is not allowed.
*/

let maxOfThree = function(num1, num2, num3){
  let bigestNumOfThree = num1;
  if (num2 > bigestNumOfThree) {
    bigestNumOfThree = num2;
  }
  if (num3 > bigestNumOfThree) {
    bigestNumOfThree = num3;
  }
  return bigestNumOfThree
}
console.log(maxOfThree(5, 10, 2)); 
console.log(maxOfThree(100, 20, 50)); 
console.log(maxOfThree(3, 3, 3)); 

/*
3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/

function isCharAVowel(letter) {
  return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}
console.log(isCharAVowel('a'))
console.log(isCharAVowel('p'))
console.log(isCharAVowel('e'))
//
function isCharAVowelTwo(word) {
  const firstLetter = word.charAt(0).toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
}
console.log(isCharAVowelTwo('apple'))
console.log(isCharAVowelTwo('Poland'))
console.log(isCharAVowelTwo('Eric'))

/*
4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
For example, sumArray([2, 4, 5]);would return 11.
*/
let sumArray = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
console.log(sumArray([2, 4, 5])); 
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([-1, -2, -3])); 

/*
5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. 
For example, multiplyArray([2, 4, 5]);would return 40.
*/

function multiplyArray(array) {
  let multi = 1;
  for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
}
console.log(multiplyArray([2, 4, 8]));
console.log(multiplyArray([1, 2, 3, 4, 5]));
console.log(multiplyArray([-1, -2, -3]));

/*
6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
*/

const numArgs = function() {
  return arguments.length
}
console.log(numArgs(1, 2, 3))
console.log(numArgs(1))
console.log(numArgs(1, 489, 78))
console.log(numArgs())

/*
7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
For example, reverseString('rockstar');would return the string "ratskcor".
*/

function reverseString(backwards) {
  let upSideDownWorld = '';
  for (let i = backwards.length - 1; i >= 0; i--) {
    upSideDownWorld += backwards[i];
  }
  return upSideDownWorld;
}
console.log(reverseString('Party'));
console.log(reverseString('Javascript'));
console.log(reverseString('vitamins'));

/*
8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
*/

let longestStringInArray = function(bigWords) {
  let biggestWords = 0;
  for (let i = 0; i < bigWords.length; i++) {
    if (bigWords[i].length > biggestWords) {
      biggestWords = bigWords[i].length;
    }
  }
  return biggestWords;
};
console.log(longestStringInArray(['Hello', 'World', 'JavaScript']));
console.log(longestStringInArray(['Peter', 'Pan', 'Pickled', 'Peppers']));
console.log(longestStringInArray(['Spooder Man', 'to the', 'rescue!']));

/*
9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; 
and returns an array of the strings that are longer than the number passed in. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
*/

function stringsLongerThan(array, length) {
  const stringy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > length) {
      stringy.push(array[i]);
    }
  }
  return stringy;
};
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
console.log(stringsLongerThan(['apple', 'banana', 'orange', 'grape'], 5));
console.log(stringsLongerThan(['Always', 'remember', 'to', 'brush', 'your', 'teeth'], 3));