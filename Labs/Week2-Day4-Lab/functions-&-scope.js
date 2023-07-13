//A block of code enclosed in braces { } Is used when same lines of code are being used multiple times throughout the program That block is declared as function using the right keyword
function addition(x,y)  {
  //body
  let z;
  z = x + y;
}
/*
{ The beginning of the block
} The end of the block
*/
function multTwo(x,y){ //function declaration 
  console.log(x*2 + ' and ' + y*2)
}
multTwo(3,4)//Calling the function

function additionTwo(x,y){
  let z;
  z = x + y;
  return z;
}
console.log(additionTwo(2,4));

//Arrow function
let additionThree = (x,y) => x + y;
console.log(additionThree(2,4));

function addThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber + secondNumber + thirdNumber
}
addThree(6,7,8)

//Write a function that adds three numbers in ES5
function addThree2(x, y, z) {
  return x, y, z
}
console.log(addThree2(6,7,8));
//Write a function that adds three number and divide the result by 3 in ES5
let additionThree3 = (x, y, z) => x + y + z
console.log(additionThree3(6,7,8));

let mathD = (f,s,t) => (f + s + t) / 3
console.log(mathD(10,20,30))

let mathD2 = (f,s,t) => {
  return (f + s + t) / 3
}
console.log(mathD2(10,20,30))

//Scope - Global
//Global scope of a variable, or Global variables are the variables declared in the program so that they can be accessed any time in any function.
let gloabl = 10;
function fun() {
  let local = 5;
}
let foreign = addThree(6,7,8) //global variable
console.log(foreign)

//Scope - Global vs local
function usaGas(){
    var moneyIGetPaid = 100 // can be used ANYWHERE in usaGas function
    function ps(){
      moneyIGetPaid = 200 // changes the value of moneyIGetPaid ONLY when this function is called
      console.log(moneyIGetPaid + ' in ps')
    }
    console.log(moneyIGetPaid + ' in usaGas')
}

usaGas()

//let vs var
function varExample(){
var x = 1
if(true){
  var x = 2 // same variable
  console.log(x)
}
console.log(x)
}

varExample()

function letExample(){
    let x = 1
    if(true){
      let x = 2 // different variable
      console.log(x)
    }
    console.log(x)
}
letExample()

function cookieChange(payment, cost) {
  let change = (payment - cost) * 4
  return change
}
console.log(cookieChange(20, 2))

//Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, 
//and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
//When you have that working, modify your program to print "FizzBuzz", 
//for numbers that are divisible by both 3 and 5 
//(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
for (let g = 1; g <= 100; g++) {
  if (g % 3 === 0 && g % 5 === 0) {
    console.log("FizzBuzz");
  } else if (g % 3 === 0) {
    console.log("Fizz");
  } else if (g % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(g);
  }
}
//In this above code, a `for` loop is used to iterate from 1 to 100. The `if` statements inside the loop check for the given conditions:
//If the number is divisiable by both 3 and 5 (i.e., `g % 3 === 0` and `g % 5 === 0`), it prints "FizzBuzz."
//If the number is only divisible by 3 (i.e., `g % 3 === 0`), it prints "Fizz."
//If the number is only divisible by 5 (i.e., g % 5 === 0), it prints "Buzz."
//For all other numbers, it simply prints the number itself.