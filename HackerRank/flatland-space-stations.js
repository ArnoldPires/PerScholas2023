/*

Flatland is a country with a number of cities, some of which have space stations. Cities are numbered consecutively and each has a road of 1km length connecting it to the next city. It is not a circular route, so the first city doesn't connect with the last city. Determine the maximum distance from any city to its nearest space station.
Example
N = 3
C = [1]
There are n = 3 cities and city 1 has a space station. They occur consecutively along a route. City 0 is 1 - 0 = 1 unit away and city 2 is 2 - 1 = 1  units away. City 1 is 0 units from its nearest space station as one is located there. The maximum distance is 1.
Function Description
Complete the flatlandSpaceStations function in the editor below.
flatlandSpaceStations has the following parameter(s):
• int n: the number of cities
• int c[m]: the indices of cities with a space station
Returns
- int: the maximum distance any city is from a space station
Input Format
The first line consists of two space-separated integers, n and m.
The second line contains m space-separated integers, the indices of each city that has a space-station. These values are unordered and distinct.
Constraints
• 1 < n < 10
• 1 < m < n
• There will be at least 1 city with a space station.
• No city has more than one space station.
Output Format
Sample Input 0
STDIN   Function
-----   --------
5 2     n = 5, c[] size m = 2
0 4     c = [0, 4]
Sample Output 0
2
Explanation 0
This sample corresponds to following graphic:

The distance to the nearest space station for each city is listed below:
• C[0] has distance 0 km, as it contains a space station.
• C[1] has distance 1 km to the space station in c[0].
• C[2] has distance 2 km to the space stations in c[0] and c[4].
• C[3] has distance 1 km to the space station in c[4].
• C[4] has distance 0 km, as it contains a space station.
We then take max(0, 1, 2, 1, 0) = 2.
Sample Input 1
6 6
0 1 2 4 3 5
Sample Output 1
0
Explanation 1
In this sample, n = m so every city has space station and we print 0 as our answer.

*/

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);
    
    let distance = 0;
    distance = Math.max(distance, c[0]);
    
    for (let i = 1; i < c.length; i++) {
        const distanceBetween = Math.floor((c[i] - c[i - 1]) / 2);
        distance = Math.max(distance, distanceBetween);
    }
    distance = Math.max(distance, n - 1 - c[c.length - 1]);
    return distance
}

/*
So what I did first was use the sort method on the c array.
C.sort in ascending order. A, b equal greater than a - b
Created a variable called distance and set it to 0; Since the rest of the function is going to be about calculating the distance.
I did distance = Math.max(distance, c[0]
So it updates the distance by taking the maximum between its current value and the distance to the first space station, which is c[0]
Then I did a for loop that iterates the sorted c array. I did the second element 1 first since 0, the first element is already handled.
Made a new variable called distanceBetween, so const distanceBetween = Math.floor c[i] which is the current space station and c[I - 1] which is the previous space station divided by 2. 
The Math.floor is so I get a integer result.
Distance = Math.max(the distance, distanceBetween
Distance - Math.max(distance, n which represents the total number of cities - 1 - c[c.length - 1]
Return the distance
*/