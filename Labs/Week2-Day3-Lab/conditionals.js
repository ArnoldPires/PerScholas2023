//Learning Objectives:
//Define conditionals
//Identify and use some of the conditionals
//Describe loops
//Idenify various loops

if (x = 10) {
  //do this
}
else {
  //do this
}

//Declare a variable 'num' and assign a value to it
let num = 10;
//Write a statement that checks if 'num' is positive or negative
if (num > 0) {
  console.log("num is positive");
} else if (num < 0) {
  console.log("num is negative");
} else {
  console.log("num is zero");
} //You get back positive

//Same code but the value gets changed:
let numTwo = -10;
  if(numTwo > 0) {
    console.log("numTwo is positive");
  } else if (numTwo < 10) {
    console.log("numTwo is negative");
  } else {
    console.log("numTwo is zero");
  } //You get back negative

//You are tasked with setting up the security for a web site that 
//only grants users over the age of 18+ access to the site. 
//Write a conditional that gives users who are 18+ access 
//and logs access denied for users who do not meet the given condition.

let age = 20;
if (age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
} //Access granted because the age = 20

let ageTwo = 17;
if (ageTwo >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
} //Access is denited because the age is less than 18

//Nested if/else
//Testing more than just two conditions, structure looks like this:
if (true) {
  if (true) {
    //do this
  } else {
    //do this
  }
} else {
  //do this
}

//Write a nested if/else statement
//Declare a variable ‘num’
let numThree = 125;
//Add an if/else statement that checks if ‘num’ is positive & greater than 100
if (numThree > 0 && numThree > 100) {
  console.log("numThree is positive and greater than 100");
}
//Add another statement that checks if ‘num’ is positive but less than 100
else if (numThree > 0 && num < 100) {
  console.log("numThree is positive but less than 100");
}
//Add an the final statement to check if ‘num’ is negative
else if (numThree < 0) {
  console.log("numThree is negative");
} else {
  console.log("numThree is zero");
}

//What is your letter grade?
let studentGrade = 63;
//Write an if/else statement for the following requirements:
//If student gets 90 or higher: console log A
if (studentGrade >= 90) {
  console.log("You get an A");
  //If students get 80 or above: console log B
} else if (studentGrade >= 80) {
  console.log("You get a B");
  //If students get 70 or above: console log C
} else if (studentGrade >= 70) {
  console.log("You get a C");
  //If students get 55 or above: console log D
} else if (studentGrade >= 55) {
  console.log("You get a D");
  //Any grade lower than 55 is F
} else {
  console.log(" You get an F");
}
//Another way to write out the above code with nested elements:
let grade = 95
if (grade > 55) {
  if (grade > 70) {
    if (grade > 80) {
      if (grade > 90) {
        console.log("A")
      }else {
        console.log("B")
      }
    }else {
      console.log("C")
    }
  } else {
    console.log("D")
  }
}else {
  console.log("F");
}

//Loops
//The for loop has the following syntax:
for ( let i = 0; i < 10; i++) {
  console.log(i);
} //ends at 9
for ( let j = 0; j <= 10; j++) {
  console.log(j);
} //ends at 10

//Write a for loop that counts down from 10 to 1
for (let g = 10; g > 0; g--) {
  console.log("Count down: " + g);
}

//Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
//Odd numbers:
for (let f = 1; f < 10; f += 2) {
  console.log("Odd numbers: " + f);
}
//Even numbers:
for (let z = 2; z <= 10; z += 2) {
  console.log("Even numbers: " + z);
}

//Create a loop that outputs multiples of 3 starting at 6 ending at 60.
for (let h = 6; h <= 60; h += 3) {
  console.log("Output multiples of 3: " + h);
}

//Write a for loop for the given output:
//#
//##
//###
//####
//#####
//######
//#######
//Declare a variable to store the string of #
let string = "";
//Loop from 1 to 7
for (let y = 1; y <= 7; y++) {
  //Add one # to the string
  string += "#";
  //Print the current string
  console.log(string);
}
//The remainder operator = % (also known as modulo) returns the remainder left over 
//when one operand is divided by a second operand. 
//It always takes the sign of the dividend.
//It looks like this: %
4 % 3
//returns 1
20 % 2
//returns 0
20 % 9
//returns 2

//Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.
//Loop from 0 to 10
for (let v = 0; v <= 10; v++) {
  //Check if v is divisiable by 2 using the % operator
  if (v % 2 == 0) {
    //Print the current value of v
    console.log(v);
  }
}
//Write a for loop that iterates from 1 - 20
for (let i = 1; i <= 20; i++) {
  //Declare a variable to store the result
  let result = "";

  //Check if i is 2, which is an even number
  if (i == 2) {
    result = "even";
  }
  //Check if i is 1 or 3, which are odd numbers
  else if (i == 1 || i == 3) {
    result = "odd";
  }
  //Check if i is divisible by any number from 2 to i-1, which means it is not a prime number
  else {
    //Assume i is prime until proven otherwise
    result = "prime";
    //Loop from 2 to i-1
    for (let j = 2; j < i; j++) {
      //Check if i is divisible by j
      if (i % j == 0) {
        //i is not prime, so change the result accordingly
        if (i % 2 == 0) {
          result = "even";
        } else {
          result = "odd";
        }
        //Break out of the inner loop
        break;
      }
    }
  }
  //Print the current value of i and the result
  console.log(i + " - " + result);
}

//Javascript Arrays
//There are two ways to create an arry:
//Using class/constructor function (less common syntax)
let nums = new Array(2, 4, 18);

//Using array literal syntax (Recommended best practices)
let numsTwo = [2, 4, 18]

//Create an array consisting of three of your favorite movies (strings) and assign it to a variable named movies
let movies = ["Mad Max Fury Road", "Forest Gump", "Lord of the Rings"]
console.log(movies)

//We access elements in an array using square bracket notation, passing in the "index" (position) of the element you want to access:
let moviesTwo = ['Mad Max', 'Willy Wonka', 'Home alone'];
let firstMovie = moviesTwo[0]
console.log(firstMovie)

//You can add new elements to the end of an array using the push method:
movies.push('Up', 'Friday');
console.log(movies);

//You can add a movie to the front using the unshift method:
movies.unshift('star wars');
console.log(movies);

//You can remove an element from the end of an array using the pop method:
let movie = movies.pop();
console.log(movies)

//You can remove an element from the front of an array using the shift method:
movie = movies.shift();
console.log(movies);

//The splice method can remove or add any element with a single line of code:
let moviesThree = ['star wars', 'Mad Max', 'Willy Wonka', 'Home alone', 'Up', 'Friday']
let removedMovies = moviesThree.splice(0, 3);
console.log(removedMovies) //Shows the movies that were removed
console.log(moviesThree) //Shows the movies that remain
//The splice method always returns an array containing the removed elements

//If you want to iterate over all of the elements in an array, the forEach method is a better approach:
movies.forEach(function(movie) {
  console.log(movie);
})

//You can use the slice method to create a copy of all or part of an array:
let moviesFour = ['star wars', 'Mad Max', 'Willy Wonka', 'Home alone', 'Up', 'Friday']
let lastTwoMovies = moviesFour.slice(4, 6); //The 2 skips the first two, and the rest gets shown based off of the last number inputted
console.log(lastTwoMovies)

//You can copy all of an array using ... spread operator:
let moviesFive = ['star wars', 'Mad Max', 'Willy Wonka', 'Home alone', 'Up', 'Friday']
let moviesCopy = [...moviesFive];
console.log(moviesCopy)

//You can use the spread operator to also insert an array into another array without having to write the whole thing out again:
let moviesSix = ['star wars', 'Mad Max', 'Willy Wonka', 'Home alone', 'Up', 'Friday']
moreMovies = ['Harry Potter', 'Fast Five',...moviesSix , 'Mad Max 2']
console.log(moreMovies)

//Create a string from all the elements in an array using the join method:
let movieString = moviesSix.join(' Spaceballs ');
console.log(movieString)
