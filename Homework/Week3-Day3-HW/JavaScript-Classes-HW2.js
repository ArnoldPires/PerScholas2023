//Static Methods and Properties

//There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

class Governor {
  static name = 'Maura Healey, Governor of Massachusetts';
  static party = 'Democratic Party';
  static age = 52;
  static termLengthInMass = 4;
  static yearElected(currentYear) {
    return currentYear + this.termLengthInMass;
  }
  static runningPromise() {
    return "Our job from day one will be to make our state more affordable, Healey said. I'll be a governor for every person struggling with higher costs.";
  }
}
console.log(Governor.name);
console.log("She is", Governor.age);
console.log("Maura Healey is a part of the",Governor.party);
console.log(Governor.runningPromise())
const currentYear = 2023;
console.log(`If she decides to re-run, she will re-run in ${Governor.yearElected(currentYear)}`);


//Inheritance
//Your base class

//Think of three properties all people share, set them with the constructor

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  //Think of three methods all people share
  breathAir(air) {
    console.log(`My name is ${this.name}, and I need to ${air}.`);
  }
  eat(food) {
    console.log(`${this.name} loves to eat ${food}.`);
  }
  sleep(hours) {
    console.log(`Sleep is very important, but I tend to average about ${hours} of sleep`);
  }
}
//Create a PostalWorker class that inherits from person, add some methods
class PostalWorker {
  constructor(name, age, routeZip) {
    this.person = new Person(name, age);
    this.routeZip = routeZip;
  }
  eat(food) {
    this.person.eat(food);
  }
  breathAir(air) {
    this.person.breathAir(air)
  }
}
//Create a Chef class that inherits from person, add some methods
class Chef {
  constructor(name, age, bestDish) {
    this.person = new Person(name, age);
    this.bestDish = bestDish;
  }
  chef() {
    console.log(`${this.person.name} is one of the best chefs in the world.`)
  }
  cooking(dish) {
    console.log(`${this.person.name} is a great chef. His signature dish ${dish} is simply divine.`)
  }
}
//Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
//PostalWorkers
const postalWorker1 = new PostalWorker('Junior', 47, '02125');
const postalWorker2 = new PostalWorker('Alex', 34, '02124');

//Chefs
const chef1 = new Chef('Alain Ducasse', 65, 'male', 'Rum baba');
const chef2 = new Chef('Pierre Gagnaire', 73, 'male', 'Lobster with fresh coriander sauce.');

//Testing methods
postalWorker1.eat('Burgers');
postalWorker2.breathAir('breath air');

chef1.chef();
chef1.cooking('Rum baba');
chef2.chef();
chef2.cooking('Lobster with fresh coriander')