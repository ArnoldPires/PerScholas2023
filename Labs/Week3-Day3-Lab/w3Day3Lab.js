//Objects and Orcs
//After this lesson students will be able to:

//Use an array inside an object
//Iterate over an array that is within an object
//Use an object within an object
//Use an object within an object within an object
//Use an array within an object within an object within an object
//Use an array of objects
//Combine objects, arrays, and functions

//Use an array inside an object:
const adventurer = {
  name: "Timmy",
  hp: 10,
  items: ["Sword", "Food", "Shield"],
  companion: { //Use an object within an object
    name: "Arnold",
    type: "Human",
    companion: { //Use an object within an object within an object
      name: "Lucky",
      type: "Dog",
      items: ["Gun", "Treats", "ammo"]
    },
  },
};
//Access all values in the player.Items array:
console.log(adventurer.companion.name);
//Access a specific item in the belongings array:
console.log(adventurer.items[2]);
//Access the companion object:
console.log(adventurer.companion.type);
//Access the companion companion's name:
console.log(adventurer.companion.companion.name)
//Adding a string to the console.log
console.log(`Companion of the companion: ${adventurer.companion.companion.name}`)

//Iterate over an array that is within an object
/*
for(let i=0; i < adventurer.items.length; i++) {
  console.log(adventurer.items[i])
}
*/
//An Array of objects:
const movies = [ //These objects have no names, they are just anonymous objects packed into an array.
  {title: "Tokyo Story"},
  {title: "Mad Max"},
  {title: "Friday"},
];
//You could reference them with indexes as usual:
console.log(movies[1]);
//You could reference the properties by first asking for the index, then the property:
console.log(movies[0].title);
//You could loop over the array and just print all of the titles:
for (let i=0; i < movies.length; i++) { //Goes over the entire array and displays them in the console.
  console.log(movies[i].title);
}

//Combine objects, arrays, and functions:
//You can create a property for an object that is an array:
const foo = {
  someArray:[1,2,3]
};
foo.someArray[2];
//You can create a property for an object that is an object
const fooTwo = {
  someObject: {
    someProperty: 'oh hai Mark!'
  },
};
fooTwo.someObject.someProperty; //oh hai!
console.log(fooTwo.someObject.someProperty);
//You can create a property for an object that is a function (method)
const fooThree = {
  someMethod:()=>{
    console.log('oh hai Tim');
  }
};
fooThree.someMethod();
//You can store an object in an array:
const fooFour = [{someProperty:'weeeee'}, 2, 3];
console.log(fooFour[0].someProperty)
//You can store an array in an array:
const fooFive = [
  ["0,0", "0,1", "0,2"],
  ["1,0", "1,1", "1,2"],
  ["2,0", "2,1", "2,2"]
];
fooFive[1][2];
//You can store a functin in an array:
const fooSix = [
  1,
  "hi",
  ()=>{
    console.log('fun');
  }
];
fooSix[2]();

//Lesson Objectives:
/*
Explain why we need classes
Create a class to define the blueprint for creating objects
Add methods to a class
Set properties on an instance of a class
What is this? Why do we need it?
Make an instance of each class customizable
Create methods to alter the properties of an instance
*/

//As we can see, we need to repetitively create new objects with the same attributes a lot. Imagine we wanted to create a bunch of characters.
// We need at least: name, health, power, stamina
//Imagine if we had 500 players would this be okay....
//What if the structure changed
//What if we needed to upgrade the players:
const player = {
  name: 'Arnold the Slayer',
  health: '100',
  power: '50',
  stamina: '60'
}
const bigBoss = {
  name: 'Solid Snake',
  health: 10000000000000000,
  power: 10000000000000,
  stamina: Infinity
}
//What about a function???
const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
  const newEnemy = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
  const newPlayer = {
    name: nameIs,
    health: healthIs,
    power: powerIs,
    stamina: staminaIs
  }
  return newPlayer
}
//Great! A function that returns objects. How can we create another one? How about copy pasting, then changing all the details? Typing it all from scratch?
//What if someone makes a typo with a key?

//There is a better way! We can create a class, which will be a blueprint or template for similar objects. Not only can we add data, we can also include functionality.
//Create a class to define the blueprint for creating objects

//When creating a class, it's custom to capitalize the first letter of the variables, so we know it's a "class." This follows customs in other programming languages.
class Character {

}
//Now we can "instantiate" or create new objects using this class. We do this by adding the "new" keyword before calling the class name like a function.
const me = new Character();
const you = new Character();
console.log(me);
console.log(you);
console.log(typeof me);
console.log(typeof you);

//Add methods to a class
//Right now, our object doesn't do anything. Let's have it do some stuff:
class CharacterTwo {
  greet () {
    console.log("hi!");
  }
}
const meTwo = new CharacterTwo();
const youTwo = new CharacterTwo();
meTwo.greet();
youTwo.greet();

//These methods can, of course take parameters:
class CharacterThree {
  greet (otherCharacter) {
    console.log('hi' + otherCharacter + '!');
  }
}
const meThree = new CharacterThree();
const youThree = new CharacterThree();
meThree.greet('you');
youThree.greet('me');
//We only had to update our code in one place, and then every instance of the class now has the updated functionality.
//If we have multiple methods, don't put commas between them:

class CharacterFour {
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}
const meFour = new CharacterFour();
const youFour = new CharacterFour();
meFour.greet('bob');
meFour.smite();
youFour.greet('Tim');
youFour.smite();

//Set properties on an instance of a class
//If we log the instances of our class, we'll see they don't have any properties
console.log(meFour);
console.log(youFour);

//Let's add some properties with a "constructor" function. This is a function that gets called once, each time an object is created:
class CharacterFive {
  constructor () {
    this.legs = 2;
    this.arms = 2;
    this.eyes = 'hazel';
    this.hair = 'gray';
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person.');
  }
}
const meFive = new CharacterFive();
console.log(meFive)
//"Constructor" is a special function. Try misspelling "contructor" (ie "constr") and see if you still get the same results.

//Make an instance of each class customizable 
//We need a way to customize each object: Our constructor function can take params which we can use to alter the properties of the object instantiated.
//This allows us to customize each instance:

class CharacterSix {
  constructor (name, age, eyes, hair) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
  }
  greet (otherCharacter) {
    console.log('hi' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person');
  }
}
const meSix = new CharacterSix("Cathy the Vile", 29, 'brown', 'locs of dark brown');
console.log(meSix);

//Create default values
//Sometimes, you want to create default values that can be overwritten.
//There are two ways to write it, writing it in the constructor with an " = " is the newer way. Using " || " is the older way and does work.
//In both cases, values with that have default parameters should go at the end (Why?)
class Character7 {
  constructor (name, age, eyes, hair, lovesCats = false, loveDogs) {
this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.loveDogs = loveDogs || false;
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  smite() {
    console.log('I smite thee you vile person');
  }
}
const me7 = new Character7('Cathy the vile', 29, 'brown', 'locs of dark brown'. true, true);
const you7 = new Character7('Arthur the wavy', 32, 'blond', 'his waves be spinnin keep of the g for greatness');
console.log(me7);
console.log(you7);

//Create methods to alter the properties of an instance
//We can of course, alter the properties of an instance, after it is created:
me7.hair = 'supernova red'; //Instead of locs of dark brown, its now supernova red
console.log(me7);

//But it's a nice practice to define a method that will alter that:
class Character8 {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet(otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  smite() {
    console.log('I smite thee you vile person');
  }
}

const me8 = new Character8('Arthur', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
console.log(me8);
me8.setHair('red');
//This way, everything is done with methods

//Objects interacting with other objects
//We can pass an object to another object to have them interact
class Character9 {
  constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  setHair(hairColor) {
    this.hair = hairColor;
  }
  smite() {
    console.log('I smite thee you vile person');
  }
}
const me9 = new Character9("Arthur", 32, 'brown', 'his waves be spinnin keep of the g for greatness');


//Lesson Objectives:
//Make a class inherit attributes from a "parent class"
//Create static properties for a class
//Creat a factory

//Make a class inherit attributes from a "parent class"
//Sometimes we want to have a "parent" class that will have some basic attributes that will be inherited by "child" classes. Here is our parent class. 
//But what if we have a super hero amongst us that has all our human attributes and more?
class Character10 {
  constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.name = name;
    this.age = age;
    this.eyes = eyes;
    this.hair = hair;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || true;
  }
  greet (otherCharacter) {
    console.log('hi ' + otherCharacter + '!');
  }
  classyGreeting (otherClassyCharacter) {
    console.log('Howdy ' + otherClassyCharacter.name + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  smite () {
    console.log('i smited thee.');
  }

}
 const hobbit = new Character10('Mr Baggins', 33, 'brown', 'black')
console.log(hobbit);

//We could just copy paste the above and add what we need, but that's not sticking to the
//principal of DRY. Instead we can "extend" our characters class for our Hobbit.
//We can now add additional functionality.
class Hobbit extends Character {
  steal() {
    console.log('lets get away!');
  }
}
const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
console.log(frodo);
frodo.smite();
frodo.steal();