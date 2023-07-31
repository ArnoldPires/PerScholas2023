function birthdayCakeCandles(candles) {
    // Write your code here
    let maxHeight = candles[0];
    let count = 0;
    for (let i = 1; i < candles.length; i++) {
        if(candles[i] > maxHeight) {
            maxHeight = candles[i];
        }
    }
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maxHeight) {
            count++;
        }
    }
    return count;
}
const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles));