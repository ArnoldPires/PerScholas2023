//Challenge: For Loops - Fundamentals
let countDown = 10;
// ADD CODE HERE
for (let i = countDown; i > -1; i--) {
  countDown = i;
}

// Uncomment the below line to check your work
console.log(countDown); // -> should print 0;

//Challenge: For Loops and Arrays
const synonyms = ["fantastic", "wonderful", "great"];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array.
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let x = 0; x < synonyms.length; x++) {
  let synonym = synonyms[x];
  let greeting = "Have a " + synonym + " day!";
  greetings.push(greeting);
}
// 2.
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let q = 0; q < greetings.length; q++) {
  let greeting = greetings[q];
  console.log(greeting);
}

//Challenge: For Loops and Array Indices
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let got = 0; got < firstNames.length; got++) {
  const firstName = firstNames[got];
  const lastName = lastNames[got];
  const whereTheyAt = places[got];
  const bio = `My name is ${firstName} ${lastName} and I am from ${whereTheyAt}`;
  bios.push(bio);
}
console.log(bios);

//Challenge: For Loops - Calculating Array Elements
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let two = 0; two < increaseByTwo.length; two++) {
  increaseByTwo[two] += 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
