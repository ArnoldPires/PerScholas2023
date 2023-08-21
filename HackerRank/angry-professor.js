/*

A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivelTime < 0) to arrived late (arrivelTime > 0).
Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
Example
N = 5
K = 3
A = [-2, -1, 0, 1, 2]

The first 3 students arrived on. The last 2 were late. The threshold is 3 students, so class will go on. Return YES.
Note: Non-positive arrival times (a[i] < 0) indicate the student arrived early or on time; positive arrival times (a[i] > 0) indicate the student arrived a[i] minutes late.
Function Description
Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.
angryProfessor has the following parameter(s):
• int k: the threshold number of students
• int a[n]: the arrival times of the n students
Returns
• string: either YES or NO
Input Format
The first line of input contains t, the number of test cases.
Each test case consists of two lines.
The first line has two space-separated integers, n and k, the number of students (size of a) and the cancellation threshold.
The second line contains  space-separated integers (a[1], a[2],…,a[n]) that describe the arrival times for each student.
Constraints
• 1 < t < 10
• 1 < n < 1000
• 1 < k < n
• -100 < a[i] < 100, where i e [1,…n]
• 
Sample Input
2
4 3
-1 -3 4 2
4 2
0 -1 2 1
Sample Output
YES
NO
Explanation
For the first test case, k =3. The professor wants at least 3 students in attendance, but only 2 have arrived on time (-3 and -1) so the class is cancelled.
For the second test case, k = 2. The professor wants at least 2 students in attendance, and there are 2 who arrived on time (0 and -1). The class is not cancelled.

*/

function angryProfessor(k, a) { // This function takes two parameters k and a
    // Write your code here
    // Created a variable for studentsOnTime and set it to 0.
    // This variable will keep track of the number of students who arrived on time or earlier
    let studentsOnTime = 0;
    // Created a loop using the forEach method that goes through each element in the array "a".
    // It checks if the arrival time is less than or equal to 0.
    // If it is, that means the students arrived on time or early so it will increment the
    // studentsOnTime variable.
    a.forEach(arrivalTime => {
        if (arrivalTime <= 0) {
            studentsOnTime++;
        }
    });
    // Here the loops ends, and I check to see if the number of students who arrived on time or
    // early is less than the "k" threshold. If it is, that means there are not enough students
    // who arrived on time or early for the class to go on.
    // So it returns yes or no
    if (studentsOnTime < k) {
        return "YES";
    } else {
        return "NO";
    }
} 