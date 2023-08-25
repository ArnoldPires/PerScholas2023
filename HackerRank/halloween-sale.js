/*

You wish to buy video games from the famous online video game store Mist.
Usually, all games are sold at the same price,  dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost  dollars, and every subsequent game will cost  dollars less than the previous one. This continues until the cost becomes less than or equal to  dollars, after which every game will cost  dollars. How many games can you buy during the Halloween Sale?
Example
P = 20
D = 3
M = 6
S = 70
The following are the costs of the first 11, in order:
	20, 17, 14, 11, 8, 6, 6, 6, 6, 6, 6,
Start at p = 20 units cost, reduce that by d = 3 units each iteration until reaching a minimum possible price, m = 6. Starting with s = 70 units of currency in your Mist wallet, you can buy 5 games: 20 + 17 + 14 + 11 + 8 = 70.
Function Description
Complete the howManyGames function in the editor below.
howManyGames has the following parameters:
• int p: the price of the first game
• int d: the discount from the previous game price
• int m: the minimum cost of a game
• int s: the starting budget
Input Format
The first and only line of input contains four space-separated integers p, d, m and s.
Constraints
• 1 < m < p < 100
• 1 < d < 100
• 1 < s < 10
Sample Input 0
20 3 6 80
Sample Output 0
6
Explanation 0
Assumptions other than starting funds, s, match the example in the problem statement. With a budget of 80, you can buy 6 games at a cost of 20 + 17 + 14 + 11 + 8 + 6 = 76 . A 7th  game for an additional 6 units exceeds the budget.
Sample Input 1
20 3 6 85
Sample Output 1
7
Explanation 1
This is the same as the previous case, except this time the starting budget 8 = 85 units of currency. This time, you can buy 7 games since they cost 20 + 17 + 14 + 11 + 8 + 6 + 6 = 82 . An additional game at 6 units will exceed the budget.


*/

function howManyGames(p, d, m, s) {
  // Return the number of games you can buy
  let gamesYouBought = 0;
  while ( s >= p) {
    s -= p;
    gamesYouBought++;
    if (p - d > m) {
      p -= d;
    } else {
        p = m;
    }
  }
  return gamesYouBought;
}

/*

I created a variable called gamesYouBought and gave it 0
Then I did a while loop; that continues so long as "s" for starting budget is greater than or equal to "p" for price
I subtracted "p" for price with "s"
And incremented gamesYouBought.
Then I did an if statement to determine the price of the next game
If  the price is subtracted by "d" discount is greater than "m", minimum cost
If its yes, than it subtracts the "d" discount from the current "p" price
Else no, than the price is  equal to the minimum cost
Than the loop ends and returns me the variable gamesYouBought
Which is 6

*/