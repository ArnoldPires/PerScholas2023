/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. 
// That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable const when you don't want the variable to change, and let if you do
let randomVariable
// 2.) Change the value of this variable
randomVariable = 10;
// 3.) Change the data type of this variable
randomVariable = 'string Cheese';
// 4.) Create another variable and the one from above to concatenate
let anotherVariable = ' is delicious.';
// 5.) Use any of the variables above or create new ones and print using string interpolation
let stringInterpolation = `${randomVariable}${anotherVariable}`;
console.log(stringInterpolation)
// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let teenAgeWtich = 'Sabrina';
let printI = teenAgeWtich.charAt(4);
console.log(printI);
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
//Unicode is an international character encoding standard that provides a unique number for every character across languages and scripts.
//Making a bunch of characters accessible across platforms, programs, and devices.
let uniMyCode = "Teddy".charCodeAt(2);
console.log(uniMyCode)
// Using fromCharCode() - make it readable for us :). You'll see!
let uniMyCodeTwo = String.fromCharCode(uniMyCode);
console.log(uniMyCodeTwo)
// Take your first and last name and concat()
let firstName = 'Arnaldo ';
let lastName = 'Pires';
const fullName = firstName.concat(lastName);
console.log(fullName)
// Create a string and make it return true using startsWith()
let stringy = "This is a string using startsWith()";
console.log(stringy.startsWith('This'));
// Now use any variable with endsWith() and return false
let stringyTwo = "This is a string using endsWith()";
console.log(stringyTwo.endsWith("endWith()"))
// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log(ozgur.includes('Moon'));
// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const indexTheCow = joshHadALittleLambOopsCow.indexOf('cow');
console.log(indexTheCow);
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
const stringUniverseAliens = 'E.T Sonic The Predator Groot Spock Xenomorph Marvin the Martian Vanessa';
const fireAtVanessa = vanessa.lastIndexOf('Vanessa');
console.log(`All ships fire at ${fireAtVanessa}! Thats where Vanessa hiding!`);
const fireAtVanessaTwo = stringUniverseAliens.lastIndexOf('Vanessa');
console.log(`All ships fire at ${fireAtVanessaTwo}! Thats where Vanessa's doppelganger is also hiding!`);
// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
console.log("Yes we can, it's " + noWeCantTeo.length);
// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
console.log(replaceGokuWithVegeta.replace('Goku', 'Vegeta'));
// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
console.log(joshIsLookingForWifey.search('wifey'));
// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
const halfThePizza = pizzaSentence.slice(7);
console.log(halfThePizza);
// Now using the pizza sentence, return only pizza (before the comma)
const returnedPizza = pizzaSentence.slice(0, pizzaSentence.indexOf(','));
console.log(returnedPizza);
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
const checkPlease = splitTheBill.split(' and ');
console.log(checkPlease)
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const splitPlease = splitTheBill.split('')
console.log(splitPlease)
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const continuedAnger = "AIN'T NOBODY GOT TIME FOR THAT!";
console.log(continuedAnger.toLowerCase() + ' Yo Tuan, chillll');
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase())
// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
console.log(basicGreeting.substring(1, 4, 5))
// Returns "JavaScript"
const ohReally = "JavaScript Substring"
console.log(ohReally.substring(0, 10))
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15))
// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const lovelyHandles = "       If only I can use this for my love handles...     ";
console.log(lovelyHandles.trim())
// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d !== a)
console.log(a !== 15)
console.log(a < b < c)
console.log(c > b > a !== d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
let spinToWin = 10;
for (let spinnin = 1; spinnin <= spinToWin; spinnin++) {
  console.log(`Ken! It's not just your head thats spinnin, the whole dam house is spinnin! ${spinnin}`);
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
spinToWin = 20;
for (let spinning = 1; spinning <= spinToWin; spinning++) {
  console.log("Oh god, now Teo's vision is spinnin! " + spinning )
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let imSorry = 1;
const sayImSorry = 20;
while (imSorry <= sayImSorry) {
  console.log("I'm sorry");
  imSorry++;
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}
for (let element in whateverQueenBeySaid) {
  console.log(element)
}
// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for (let element in lana) {
  console.log(element);
}
// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']
for (let element of tia) {
  console.log(element);
}
// Look into forEach() loop, it accepts a callback aka a function inside a function.   
const perscholas = ['Amira', 'Arely', 'Jonathan'] // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. 
perscholas.forEach(name => {
  const prefix = "PS"; // Inside the function, create a variable with the string "PS". 
  console.log(name + prefix); // Print their name in the console concatenated with the variable. 
});
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1])
// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
let smoothie = fruits.join(' ');
console.log(smoothie);
// Remove orange
fruits.pop();
console.log(fruits);
// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes');
console.log(fruits);
// Remove apple
fruits.shift();
console.log(fruits);
// Add mango at the beginning of the array
fruits.unshift('mango');
console.log(fruits);
// Add lemon, and grapefruit between mango and banana
fruits.splice(1, 0, 'lemon', 'grapefruit');
console.log(fruits);
// Remove banana and strawberry
fruits.splice(3, 2);
console.log(fruits);
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
const exoticFruits = ['Durian', 'Dragon fruit', 'jackfruit'];
const allTheFruits = fruits.concat(exoticFruits);
console.log(allTheFruits);
// Print the last two exotic fruits without altering the newly concatenated array.
const theLastFruits = allTheFruits.slice(-2);
console.log(theLastFruits);
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsOrganzied = monalissaIsMessy.sort();
console.log(monalissaIsOrganzied);
// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
kevGetYoButtBackToReality = mirrorMirrorOnTheWall.reverse();
console.log(kevGetYoButtBackToReality);
// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. 
// Help him write code to eliminate the badword in his sentences. Must return a string sentence. 
// Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const stopWithThatLanguage = RafaelNoBadWords.split(" ");
const words = stopWithThatLanguage.filter((word) => {
  return word !== "badword";
});
console.log(words.join(" "));

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const doTheMath = numbersToAddUp.reduce((accumlator, currentValue) => accumlator + currentValue);
console.log(doTheMath);
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const itsLateButHereIam = [1, 2, 3, "It's almost 12am, please. I need my sleep."];
const spreadOperator = [...itsLateButHereIam];
console.log(spreadOperator);
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const arrayNumberOne = ["Hey! Look at me, I'm array number one!"];
const arrayNumberTwo = ["Hey! Also look at me, I'm array number two!"];
const conjoinedArrays = [...arrayNumberOne , ...arrayNumberTwo ];
console.log(conjoinedArrays);
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const smashThemTogether = ["Oh god! we're being smashed into each other to make one! Why would you do this to us? It's like that movie, the Thing, all over again, ahhhhhh!"]
const smashThemTogetherNow = [...conjoinedArrays, ...smashThemTogether]
console.log(smashThemTogetherNow);
// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const beforeTheyWereSmashedTheyWerebrothersInArms = ["Hey arrayNumberTwo you are my best friend after saving my life during the war. Your my best friend too arrayNumberOne. Oh look it's Sarah! Lets get her attention arrayNumberTwo."]
const addAllTheThings = [...beforeTheyWereSmashedTheyWerebrothersInArms, ...smashThemTogetherNow];
console.log(addAllTheThings);
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
//[index0, index1, index2, index3]
const applecrumbleDonut = donutShop[1][0][1];
console.log(applecrumbleDonut);
// Tosi wants ihatethis. :) Print!\
const ihatethisDonut = donutShop[2][0][0][1][0];
console.log(ihatethisDonut)

// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
const isTeoAPerson = true;// Check if Teo is a person. 
if (isTeoAPerson) {
  console.log('Teo is a person!'); //If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
}
const isTeoAFemaleOrMale = 'male';
if (isTeoAFemaleOrMale === 'male') { // If Teo is a person, check to see if he is a male or a female.
  console.log('You got it right!'); //If male, print 'You got it right!'
} else {
  console.log('Wrong. Teo is going to remove you from the class.'); //if not then print 'Wrong. Teo is going to remove you from the class.'.
}
const isTeoHungry = 'hungry';
if (isTeoHungry === 'hungry') { //If male, check to see if Teo is hungry.
  console.log("Let's buy Teo some tacos!") //If Teo is 'hungry' then print 'Let's buy Teo some tacos!'
} else if (isTeoHungry === 'not hungry') {
  console.log("He doesn't need to eat") // If Teo is 'not hungry' then print 'He doesn't need to eat.'. 
} else {
  console.log("If Teo is not hungry, am I hungry?") // Anything else, print 'If Teo is not hungry, am I hungry?'
}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const gustavo = 'not the coolest';
gustavo === "coolest" ? console.log("You got that right!")/*true*/:/*False */console.log("James wants to argue. He says he's the best!");
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
const sayGreeting = () => {
  console.log("Hello, ma'amsir!");
}
sayGreeting();
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
const printSomething = function(string) {
  console.log(`This is my ${string}`);
}
printSomething("car");
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
const add = (num1, num2, num3) => {
  return num1 + num2 + num3;
}
const firstNum = 3;
const secondNum = 13;
const thirdNum = 7;
console.log(add(firstNum, secondNum, thirdNum));
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
const fightClub = function(name) {
  if (name === 'Teo') {
    return "1st rule: You do not talk about Fight Club.";
  } else if (name === "Manara") {
    return "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.";
  } else if (name === 'Liv') {
    return "3rd rule: If someone yells 'Stop!', goes limp, taps out, the fight is over.";
  } else if (name === "Devin") {
    return "4th rule: Only two guys to a fight.";
  } else {
    return "No shirts.";
  }
};

console.log(fightClub("Manara"));
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
const hello = function() {
  console.log("Hello");
  return function() {
    console.log("Goodbye");
  }
}
const helloVar = hello();
helloVar();
// Create a function expression with your first name as the variable and then print your first and last name
const fullNameTwo = function(firstName) {
  const lastName = "Pires";
  return `${firstName} ${lastName}`
}
console.log(fullNameTwo("Arnaldo"))
// Create an arrow function that accepts a number and have it return that number doubled
const doubleTheNumber = (num) => {
  return num * 2;
}
console.log(doubleTheNumber(4));
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: 'Arnold',
  age: 31,
  location: "Boston, MA"
};
console.log(human);
// Access the name using dot notation
console.log(human.name)
// Access the age using square brackets
console.log(human["age"]);
// Use object destructuring to access location
const {location} = human;
console.log(location)
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}
// Print overgrow
console.log(bulbasaur.abilities[0].ability);
// Print cut
console.log(bulbasaur.moves[2])
// Print Bulbahhhh!!!!!
bulbasaur.sound()
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
console.log(bulbasaur)
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur["order"] = 1;
// Print an array that contains every single properties in bulbasaur
const bulbArray = Object.keys(bulbasaur);
console.log(bulbArray);
// Print every single properties one by one in the console
for (let k in bulbasaur) {
  console.log(k + ':', bulbasaur[k]);
}
// Print an array that contains every single values in bulbasaur
console.log(Object.values(bulbasaur));