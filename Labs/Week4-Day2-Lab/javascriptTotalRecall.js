// A. Q + A:

// 1. How do we assign a value to a variable? 

let variableName = 'value';

// 2. How do we change the value of a variable?

//You can change the value of the variable by using the assignment operator '='
variableName = 'changed value';

// 3. How do we assign an existing variable to a new variable?

let firstVariableOne = 'Hello World';
let secondVariableTwo = firstVariableOne;

// 4. Remind me, what are 'declare', 'assign', and 'define'.

//Declaring is creating a variable and storing it in the computers memory.
//Assign is storing a value into that variable.
//Define is the combo of declaring and assigning a value to the variable in one step.

// 5. What is pseudocoding and why should you do it? 

//Pseudo code is the practice of writing out the logical steps of your program, before you write out the program.
//It involves breaking down the code into smaller steps and then solving for those smaller steps.
//Finding a solution by just typing it out without using the proper syntax of actually making it work via code.
//You can write it out before you start programming to give you a better idea of what your code should be.
//It can also be used to communicate with other devs about what your code does.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// I don't think there is a specific or fixed percentage of time that should be spent thinking about a problem vs typing it in code to solve it, unless there is a deadline.
//In case of a deadline, most likely you would want to spend about 80% of your time thinking through the problem and coming up with a proper solution.
//And about 20% of that time actually coding the solution out. The 80-20 rule. You don't want to rush it.

// B. Strings:

// 1. Create a variable called `firstVariable` 

let firstVariable;
// 2. Assign it the value of string "Hello World"
firstVariable = "Hello World";
// 3. Change the value of this variable to some number
firstVariable = 100;
// 4. Store the value of `firstVariable` in a new variable called `secondVariable`
let secondVariable = firstVariable;
// 5. Change the value of `secondVariable` to any string.
secondVariable = "Hello planet";
// 6. What is the value of `firstVariable`?
console.log(firstVariable) //100
// 7. Create a variable called `yourName` and set it equal to your name as a string.
let yourName = 'Arnaldo Pires';
//Then, write an expression that takes the string "Hello, my name is" and the variable `yourName` so that it returns a new string with them concatenated.
let hello = 'Hello, my name is ';
console.log(hello + yourName)
//OR
const greeting = "Hello, my name is " + yourName;
console.log(greeting)

// C. Booleans:
//Using the provided variable definitions, replace the blanks so that all log statements print `true` in the console.
//Answers should be all vaild JS syntax and not weird things that don't make sense but happen to print `true` to the console.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > b);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm
// 1. Declare a variable `animal`. Set it to be either "cow" or something else.
let animal = 'Lizard';
// 2. Write code that will print out "mooooo" if the it is equal to `cow`.
if (animal === 'cow') {
  console.log('mooooo')
} else { // 3. Change your code so that if the variable `animal` is anything other than a cow, it will print "Hey! You're not a cow."
  console.log("Hey! You're not a cow.") 
}
// 4. Commit
console.log(animal === 'cow');

// E. Driver's Ed
// 1. Make a variable that holds a person's age; be semantic.
let dadsAge = 68;
// 2. Write code that print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16,
// a message should print "Sorry, you're too young."
if (dadsAge >= 16) {
  console.log("Here are the keys!")
} else if (dadsAge < 16) {
  console.log("Sorry, you're too young.")
}
console.log(dadsAge >= 16)

// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i < 11; i++) {
  console.log(i);
}
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. Get even
// 1. Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
  console.log(i)
}
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}

// C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
for (let i = 5; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!")
  }
}
// 1. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// 1. For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 5; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!")
  } else if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd.")
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("I found a " + i + ". High five! Three is a crowd.")
  }
}

for (let i = 5; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("I found a " + i + ". High five! Three is a crowd.")
  } else if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!")
  } else if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd.")
  }
}

// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);
// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let bank_accountTwo = 0;
for (let i = 1; i <= 100; i++) {
  bank_accountTwo += i * 2;
}
console.log(bank_accountTwo);
// III. Arrays & Control flow

// A. Talk about it:
// 1. What are the things in an array called?
console.log("The 'things' inside of an array are called 'elements'. They can be any of the 7 data types or even other arrays.")
// 2. Do Arrays guarantee those things will be in order?
console.log("No, arrays do not guarentee that elements will be in order. Arrays are a data structure that can store elements of any type, and the order in which the elements are stored is not guaraenteed.")
// 3. What real-life thing could you model with an array?
console.log("You can use an array to create a shopping list, family memebers, a to-do list, list of events, etc.")

// B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called `quotes`
let quotes = ["Be yourself; everyone else is already taken", "The only way to do great work is to love what you do", "In the end, we will remember not the words of our enemies, but the silence of our friends."];;
console.log(quotes)

// C. Accessing elements
// Given the following array `const randomThings = [1, 10, "Hello", true]`
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
const firstElement = randomThings[0];
console.log(firstElement)
// 2. Change the value of "Hello" to "World"
randomThings[2] = 'World';
// 3. Check the value of the array to make sure it updated the array. How? Why, yes! `console.log();`
console.log(randomThings)

// D. Change values
// Given the following array `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`
// 1. What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const thirdElement = ourClass[2];
console.log(thirdElement)
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = 'Octocat';
console.log(ourClass)
// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);
// E. Mix It Up

// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: `const myArray = [5, 10, 500, 20]`
// 1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon", " JavaScript array")
console.log(myArray);
// 2. Remove the `5` from the beginning of the array.
myArray.shift();
console.log(myArray);
// 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")
console.log(myArray)
// 4. Remove the string of your choice from the end of the array.
myArray.pop()
console.log(myArray)
// 5. Reverse this array using `Array.prototype.reverse()`. Did you mutate the array? What does mutate mean? Did the `.reverse()` method return anything?
myArray.reverse()
console.log(myArray)
console.log("The array did get mutated. Mutate means the method modifies the original array directly, changing the elements order.")

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an `if ... else` statement that:
// 1. console.log() s "little number" if the number is entered is less than 100
 const littleNumber = 0 ;
 if (littleNumber < 100) {
  console.log("little number")
 } else { // 2. console.log() s big number if the number is greater than or equal to 100
  console.log("big number")
 }

// G. Monkey in the Middle
// Write an `if ... else if ...` else statement:
// 1. console.log()little number if the number entered is less than 5.
const littleNumberTwo = 0;
if (littleNumberTwo < 5) {
  console.log("little number");
} else if (littleNumberTwo >= 5 && littleNumberTwo <= 10 ) { // 2. If the number entered is more than 10, log `big number`.
  console.log("big number");
} else { // 3. Otherwise, log "monkey".
  console.log("monkey.")
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
const clothes = kristynsCloset[2];
console.log("Kristyn is rocking that " + clothes + " today!")
// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
const find = kristynsCloset.indexOf(kristynsCloset[5]);
kristynsCloset.splice(find + 1, 0, "raybans");
console.log(kristynsCloset);
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
if (find !== -1) {
  kristynsCloset[find] = "stained knit hat";
}
console.log(kristynsCloset);
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
const outfit = thomsCloset[0][0];
console.log(outfit)
// 5. In the same way, access one item from Thom's pants array.
const outfitTwo = thomsCloset[1][2];
console.log(outfitTwo);
// 6. Access one item from Thom's accessories array.
const thomsAccessories = thomsCloset[1][0];
console.log(thomsAccessories)
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
const thomsOutfit = thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", " + "and " + thomsCloset[2][1];
console.log("Thom is looking fierce in a " + thomsOutfit + "!")
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajams";
console.log(thomsCloset)

// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
function printGreeting(name) {
  return `Hello, ${name}!`;
}
console.log(printGreeting("Slimer"));

// B. printCool
// Write a function printCool that accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
  console.log(`${name} is cool`);
}
printCool("JavaScript");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(sideLength) {
  const volume = sideLength ** 3;
  console.log(volume);
}
console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.
// In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
function isVowel(letter) {
  const vowelCheck = letter;
  return vowelCheck === 'a' || vowelCheck === 'e' || vowelCheck === 'i' || vowelCheck === 'o' || vowelCheck === 'u';
}
console.log(isVowel('a'));
console.log(isVowel('i'));
console.log(isVowel('0'));
console.log(isVowel('x'));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(string1, string2) {
  const lengthOne = string1.length;
  const lengthTwo = string2.length;
  return [lengthOne, lengthTwo];
}
console.log(getTwoLengths("Flabbergast", "marshmallow"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings.
// The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(array) {
  const lengthOfArray = [];
  for (let i = 0; i < array.length; i++) {
    lengthOfArray.push(array[i].length);
  }
  return lengthOfArray;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// If all numbers are the same, it doesn't matter which one is returned.
// If the two largest numbers are the same, one of them should be returned. 
// Be sure to test it with larger values in each of the three locations.
function maxOfThree(number1, number2, number3) {
  if (number1 >= number2 && number1 >= number3) {
    return number1;
  } else if (number2 >= number1 && number2 >= number3) {
    return number2;
  } else {
    return number3
  }
}
console.log(maxOfThree(6, 9, 1));
console.log(maxOfThree(10, 20, 51));
console.log(maxOfThree(600, 9000, 100));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(wordsArray) {
  return wordsArray.reduce((longest, currentWord) =>
    currentWord.length > longest.length ? currentWord : longest
  );
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data.
// The object data structure is a good way to organize the data from our user.
// A. Make a user object
// 1. Create an object called user.
const user = {
  name: "Arnaldo Pires", // 2. Write in to the object the key-value pairs for name, email, age, and purchased.
  email: "arnold.pires92@gmail.com",
  age: 31,
  purchased: [], // Set the value of purchased to an empty array []. Set the other values to whatever you would like.
};

// B. Update the user
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
const updateTheUser = {...user, email: 'newEmail@gmail.com'};
console.log(updateTheUser)
// 2. Our user has had a birthday! Without changing the original userobject, increment the age value using the postfix operator. Hint: age++
const updateTheUserTwo = {...user, age: ++user.age,};
console.log(updateTheUserTwo)

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
const updateTheUserThree = {...user, location: "Boston MA"};
console.log(updateTheUserThree)

// D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");
console.log(user);
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");
console.log(user);
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodhpurs");
console.log(user);
// 4. Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
// When we console.log user, we would see the friend object added to our user object.
// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
const friend = {
  name: "Michelle King",
  age: 35,
  location: "Florida, Tampa",
  purchased: [],
}
user.friend = friend;
console.log(user);
// 2. Console.log just the friend's name
console.log(user.friend.name);
// 3. Console.log just the friend's location
console.log(user.friend.location);
// 4. CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);
// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The one Ring")
console.log(user.friend)
// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte")
console.log(user.friend)
// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1])

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// 1. Write a single function update User that takes no parameters. When the function is run, it should:
function updateUser() {
  user.age++; // 2. it should increment the user's age by 1
  user.name = user.name.toUpperCase(); // 3. make the user's name uppercase
}
updateUser();
console.log(user);
//The function does not need a return statement, it will merely modify the user object.

// 4. Write a function oldAndLoud that performs the exact same tasks as updateUser, 
// but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoud function with user as the argument.
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toLowerCase();
}
oldAndLoud(user);
console.log(user);