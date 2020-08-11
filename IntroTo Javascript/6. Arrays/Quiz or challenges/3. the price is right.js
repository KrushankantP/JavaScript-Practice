/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements.
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
for (var index = 0; index<prices.length; index++){
    //change the value of first element
    if(index===0){
        prices[index]=11;
    }
    //change the value of third element
    else if(index===2){
        prices[index]=33;
    }
    //change the value of seventh element
    else if(index===6){
        prices[index]=77;
    }
}
console.log(prices);
