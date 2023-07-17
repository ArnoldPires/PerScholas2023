//What are objects?
//Objects are the most common data structures in object oriented programming (OOP)
//They are a collection of zero or more properties
//OOP would be used to structure your code so that it's easier to use when trying to code anything.
//What are properties? key:value pairs
    //Key: A string
    //Value: Any js expression 
//This is what an object looks like in javascript:
const car = {
  color: 'blue',
  hp: 400,
  year: 1989,
};
car.year
car.hp

//If it looks like this:
const cars = []
//It is an array
const house = {
  doors: 2,
  windows: 1,
  hasGarden: "Doesn't have one",
};
const form = {
  username: 'Arnaldo',
  password: '12345',
  email: 'oop@gmail.com',
};
console.log(form)

//Why objects?
//In OOP, we often model the goal of our application using real-world objects
//We use objects in our code to describe "nouns" like we use functions to describe "verbs" and arrays to be "lists of nouns."

//The name of your cat: String
//The age of your cat: Number
//Your cat's favorite things: Array
//Whether your cat can speak french: boolean
//Whether your cat can solve a Rubik's cube: boolean
//Your cat: Object

//Const only pervents you from reassigning a variable, it doesn't prevent you from adding or changing elements of an array or properties of objects.
const mogwai = {}
mogwai.name = 'Gizmo';
//You can't do this:
//const mogwaiTwo = {}
//mogwaiTwo = { name: 'Gizmo'}

//Use object properties with conditionals
//You can use object properties with conditionals, loops, etc
const obj = {
  salutation: 'hi',
  count: 4
}
if (obj.salutation === 'hi') {
  console.log('ok');
}
for (let i = 0; i < obj.count; i++) {
  console.log(i);
}
//You can test to see if a property exists on an object
const objTwo = {
  something: 'wutt'
}
if (objTwo.something) {
  console.log('ok');
}
if (objTwo.anotherthing) {
  console.log('ok');
} else {
  console.log("No go, I don't have that property.");
}

//We use objects to model our application's purpose
//Classes are used to create objects
//Think of classes as the blueprints used to create objects of a certain "type"
//Example: car class = car objects -> Green ford, red toyota, blue volkswagon

//Encapsulation in OOP
//Encapsulation is a key principle of OOP
//Encapsulation is the concept of bundling data (properties/attributes) and related behavior (methods) within an object.

//Class = car
//(Inside the car)
//methods: refuel() getFuel() setSpeed() getSpeed() drive()
//attributes: fuel maxspeed

//Example of Encapsulation:

const cohort = {
  id: 'High School class',
  students: ['Arnaldo', 'Cory', 'Sarah', 'Jordan'],
  instructors: ['Arthur', 'Sean', 'Julie'],
  addStudent: function(name) {
    name = name[0].toUpperCase() + name.substr(1).toLowerCase();
    this.students.push(name);
  },
  pickRandomStudent: function() {
    const rndIdx = Math.floor(Math.random() * this.students.length);
    return this.students[rndIdx];
  }
};

//Instantiating a class
//instance: An object created by a class
//instantiate: We instantiate a class to create an object
//instantiation: The process of creating an object

//const v1 = new Vehicle();

//The constructor method
//When a class is being instantiated, the special constructor method in the class will automatically be called.

class Vehicle {
  constructor(vin, make) {
    this.vin = vin;
    this.make = make;
    //return is not needed
    //Because the new object is returned by default
  }
}
const plane = new Vehicle('X123Y', 'Boeing');
//The purpose of the constructor method is to initialize the data properties of the new object being created (represented by "this")
//If there are no properties to initialize, the "constructor" method is optional (a hidden default constructor is called)

//Modify the "vehicle" class by adding an additonal property named "model"
const carTwo = new Vehicle('A1234', 'Toyota', 'Camry')

//Defining methods in a class
//Prototype methods
//static methhods

//Prototpe methods are the most common and are available to be called by any instance of the class.
//What's an instance? for example when you use Array.prototype.forEach, you can only use that method on an instance of an array like:
const nums = [1, 2, 3]
nums.forEach((nums) => {
  console.log(nums)
})
console.log(Math.random());

//Adding a "start" method to our "vehicle" class
class VehicleThree {
	// the constructor will always be called
	constructor(vin, make, model) {
		this.vin = vin
		this.make = make
		this.model = model
		this.running = false  // default to false
	}
	start() {
		this.running = true
		console.log('running...')
	}
    stop() {
		this.running = false
		console.log('not running...')
	}
}
//Overriding methods
//Thanks to another OOP principle called inheritance, subclasses inherit methods from their parent classes
//Every object inherits from the object class and thus inherits its methods, such as "toString"

car.toString()
toString(); {
   return 'Vehicle (' + this.vin + ') is a ' +
    this.make + ' model ' + this.model;
 }