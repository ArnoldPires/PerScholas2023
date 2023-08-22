/*

Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.
She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.
Given a range of numbered days, [i…j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
Function Description
Complete the beautifulDays function in the editor below.
beautifulDays has the following parameter(s):
• int i: the starting day number
• int j: the ending day number
• int k: the divisor
Returns
• int: the number of beautiful days in the range
Input Format
A single line of three space-separated integers describing the respective values of i, j, and k.
Constraints
• 1 < I < j < 2 x 10
• 1 < k < 2 X 10
Sample Input
20 23 6
Sample Output
2
Explanation
Lily may go to the movies on days 20, 21, 22, and 23. We perform the following calculations to determine which days are beautiful:
• Day 20 is beautiful because the following evaluates to a whole number: 
• Day 21 is not beautiful because the following doesn't evaluate to a whole number: 
• Day 22 is beautiful because the following evaluates to a whole number: 
• Day 23 is not beautiful because the following doesn't evaluate to a whole number: 
Only two days, 20 and 22, in this interval are beautiful. Thus, we print 2 as our answer.

*/

function beautifulDays(i, j, k) {
    // Write your code here
    let days = 0;
    for (let bDay = i; bDay <= j; bDay++) {
        let reverse = 0;
        let goodWeather = bDay;
        while (goodWeather > 0) {
            reverse = reverse * 10 + goodWeather % 10;
            goodWeather = Math.floor(goodWeather / 10);
        }
        if (Math.abs(bDay - reverse) % k === 0) {
            days++;
        }
    }
    return days;
}