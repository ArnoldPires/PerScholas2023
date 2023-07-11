//Write an if/else statement for the following requirements:
//- If student gets 80 or higher: console log  You did a good job
//- If students get 70 or above: console log Keep trying
//- If students get 60 or above: console log ehhhh
//- If students get 55 or above: console log Not to good
//- Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

//let studentGrade = prompt("Enter your grade:");
let studentGrade = 85;
if (studentGrade >= 100) {
  console.log("Wow, perfect score!")
} else if(studentGrade >= 90) {
  console.log("You did a great job!")
} else if (studentGrade >= 80) {
  console.log("You did a good job")
} else if (studentGrade >= 70) {
  console.log("Keep trying")
} else if (studentGrade >= 60) {
  console.log("ehhhh")
} else if (studentGrade >= 55) {
  console.log("Not to good")
} else if (studentGrade <= 55 ) {
  console.log("Bad Grade But You'll Get Em Next Time")
}

//Write a for loop for the given output:
// 10, 30, 50, 70, 90
// 20, 40, 60, 80, 100
//- This could be acheived a few ways, be creative

for (let i = 10; i <= 90; i += 20) {
  console.log("Loop one: " + i);
}
//The first loop starts a 10 and then increments by 20 until it reaches 90
for (let x = 20; x <= 100; x += 20) {
  console.log("Loop two: " + x);
}
//The second loop, it starts at 20, and then continues to increment by 20 until it reachs 100
