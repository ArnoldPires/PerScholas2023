//Write a function called "minusOne" that takes a parameter "num". 
//Assuming the argument is a number, print the argument -1.
function minusOne(num) {
  if (typeof num === "number") {
    const result = num - 1;
    console.log(result)
  } else {
    console.log("This is not a number, please enter a number.")
  }
}
minusOne(10);
minusOne(100); 
minusOne("Infinity"); 

//Write a function "makeSentence" that takes three parameters and concatenates them
//into a fully formed sentence.
function makeSentence(sent1, sent2, sent3) {
  return `${sent1} ${sent2} ${sent3}.`;
}
console.log(makeSentence("Peter Pan", "picked a bunch of", "pickled peppers"))

//Write a function called "getLastElement" that takes a parameter "arr".
function getLastElement(arr) {
  //Invoke the function with an array as the argument.
  console.log(arr[arr.length - 1]);
}
//The function should print the last element within the array.
let elementArray = [10, 200, 3000, 40000, 50000];
getLastElement(elementArray)