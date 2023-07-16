//What is a function?
  //A function is a reusable block of code designed to perform a single purpose.
  //It optionally takes in data as input and returns a single piece of data (including complex data such as objects, functions, etc.).
  //Functions are the building blocks of programs!
  //The code in a function does not execute until that function is executed.
  //Sometimes functions execute in response to events happening, such as when:
  //When a user clicks something
  //A timer "ticks", etc
  //In addition to the functions we write, programming languages typically include numerous built-in functions.
  //Functions commonly call other functions.
//Why Functions Anyway?
  //There's no better way to tackle a complex problem than by breaking it into smaller problems.
  //Functions allow us to break up programs into more manageable blocks of code.
  //Functions provide code reuse because they can be called over and over.
  //Without functions, we might have to write the same code in multiple places of the app which violates a key principle known as DRY - Don't Repeat Yourself!

//There are 3 primary ways to define a function:

//Function declaration:
function sayHello(name) {
  console.log('Hello ' + name + '!');
}
//Function Expression:
const sayHelloTwo = function(name) {
  console.log('Hello ' + name + '!');
}
//Primary Difference Between Function Declarations & Expressions:
//For all practical purposes, the difference between them is that function expressions cannot be invoked before they are defined; 
//whereas function declarations are hoisted to the top of their scope and can therefore be invoked even if they are defined later in the source code.

//Example:

function fnDeclaration() {
  console.log("I'm coming from a function declaration");
}
const fnExpression = function() {
  console.log("I'm coming from a function expression");
}
fnDeclaration();
fnExpression();
//Arrow Functions (The third approach to defining a function)
//function Declaration:
function add(a, b) {
  return a + b;
}
function func2(){
}
//Arrow Function
const addTwo = (a,b) => a + b;
//Arrow functions offer: A more concise syntax, implicit return of a single expression, a single rule for binding the "this" keyword.
//Regardless of which of the 3 approaches are used to define functions, we call them the same way:
add(25, 100); // Returns 125

//const func2 = (u) => {
//  console.log(func2)
//}

//function declaration:
function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}
//Same function as above but written as an arrow function:
const areBothEvenTwo = (n1, n2) => {
  return !(n1 % 2) && !(n2 % 2);
}

let printBox = () => {
  let boxStrip = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      boxStrip = boxStrip + "# ";
    }
    boxStrip += "\n";
  }
  console.log(boxStrip);
};
printBox();

let printBoxTwo = () => {
  const stripTwo = buildBoxStrip("*", 8);
  console.log(stripTwo);
};

let buildBoxStrip = (boxChar, length) => {
  let boxStripTwo = "";
  for (let i = 0; i < length; i++) {
    boxStripTwo = boxStripTwo + boxChar;
  }
  return boxStripTwo;
};

printBoxTwo();

//Exercise 1: Write a Function Declaration
//Write a function named computeAreausing the function declaration approach.
//It will have two parameters: width& height.
//It will compute the area of a rectangle (width X height) and return a string in the following form:
//The area of a rectangle with a width of _ and a height of _ is ___ square units.
//Invoke the function to test it.

function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} of is ${area} square units.}`
}
console.log(computeArea(6, 10));

// let computerArea = (width, height) => {
//   let area = width * height;
//   return `The area of a rectangle with a width of ${width} and a height of ${height} of is ${area} square units`;
// }
// console.log(computerArea(4, 7));

//EXERCISE 2: Write a Function Expression
//Write a function named planetHasWater using the function expression syntax.
//It will have one parameter: planet.
//Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
//Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).
//Invoke the function a couple of times to test it!


let planetHasWater = function(planet) {
  const lowercasePlanet = planet.toLowerCase();
  if (lowercasePlanet === 'earth' || lowercasePlanet === 'mars') {
    return true;
  }else {
    return false;
  }
};
console.log(planetHasWater('Earth'))
console.log(planetHasWater('Mars'))
console.log(planetHasWater('Venus'))

function getDevObject(name) {
  let skills = [];
  for (let i = 1; i < arguments.length; i++) {
    skills.push(arguments[i]);
  }
  return {
    devName: name,
    jobSkills: skills
  };
}
console.log(getDevObject('Arnaldo'))