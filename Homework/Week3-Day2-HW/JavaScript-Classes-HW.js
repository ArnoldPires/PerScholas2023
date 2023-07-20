//Give the class at least 3 properties
class Cat {
  constructor(name, claws, fangs, fur, food) {
    this.name = name;
    this.claws = claws;
    this.fangs = fangs;
    this.fur = fur;
    this.food = food;
  }
  //Give the class at least 3 methods
  pounce() { //Method that describes the cats claws
    return`${this.name} has very sharp claws. `
  } 
  pounceTwo() {
    return `${this.name} has nice normal claws. `
  }
  pounceThree() {
    return `${this.name} doesn't have sharp claws. `
  }
  
  ripNtear() { //Method that describes the cats fangs
    return `${this.name} has very sharp fangs. `
  }
  ripNtearTwo() { 
    return `${this.name} has no fangs. `
  }
  ripNtearThree() { 
    return `${this.name} doesn't have sharp fangs. `
  }
  
  furColor() { //Method that describes the cats fur
    return `${this.name} has very soft black fur. `
  }
  furColorTwo() { 
    return `${this.name} has very soft white fur. `
  }
  furColorThree() { 
    return `${this.name} has very soft orange fur. `
  }
}
//Create two instances of the class (two cats)
const catOne = new Cat('Sami', 'sharp claws', 'sharp fangs', 'black', 'eating fish');
const catTwo = new Cat('Simba', 'normal claws', 'no fangs', 'white', 'eating tuna');
const catThree = new Cat('Jojo', 'claws not sharp', 'fangs not sharp', 'orange', 'lapping milk');
//Log both instances to see their properties
const cats = [catOne, catTwo, catThree];
cats.forEach(cat => {
  console.log(cat.name);
  console.log(cat.claws);
  console.log(cat.fangs);
  console.log(cat.fur);
  console.log(cat.food);
});
//Invoke each method from both instances
//catOne
console.log(catOne.pounce() + catOne.ripNtear() + catOne.furColor());
//catTwo
console.log(catTwo.pounceTwo() + catTwo.ripNtearTwo() + catTwo.furColorTwo());
//catThree
console.log(catThree.pounceThree() + catThree.ripNtearThree() + catThree.furColorThree());



class Pirate {
  constructor(name, age, weapon, quote) { //create 3 properties that are set by the constructor
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.quote = quote;
  }
  //create 3 methods
  ahoyMateys() {
    console.log(`Ahoy! I am ${this.name}.`);
  }
  
  weaponOfChoice() {
    console.log(`${this.name} prefers to use ${this.weapon}.`);
  }
  
  attack() {
    console.log(`${this.name} attacks ${this.name} with a ${this.weapon}.`);
  }
  
  rum() {
    console.log(`${this.name} loves to drink rum and is feeling quite merry.`);
  }
}
//instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
//jollyRoger array
const jollyRoger = [
  new Pirate("Blackbeard", 40, "several flintlock pistols", "It is a blessing for a man to have a hand in determining his own fate."),
  new Pirate("Captain Hook", 200, "Iron hook", "All children grow up, or they die, or both. All children, except one."),
  new Pirate("Long John Silver", 35, "cutlass", "I'll show you what I think of your curse, you mewling little lily-livered, toffee-hearted little wuss of a crustacean!")
];

//blackPeral array
const blackPearl = [
  new Pirate("Jack Sparrow", 53, "Sword of Cortes", "Why is the rum always gone?"),
  new Pirate("Will Turner", 43, "Sword of Destiny", "No cause is lost if there is but one fool left to fight for it."),
  new Pirate("Elizabeth Swann", 43, "cutlass", "You can never predict when they're going to do something incredibly stupid.")
];

//Loop over each array and print 3 properties of each pirate
jollyRoger.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Weapon: ${pirate.weapon} Quote: ${pirate.quote}`);
});

blackPearl.forEach(pirate => {
  console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Weapon: ${pirate.weapon} Quote: ${pirate.quote}`);
});

//I got a little carried away with this one and ran out of time....