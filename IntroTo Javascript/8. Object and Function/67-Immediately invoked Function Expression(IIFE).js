//*
// - If we declare function the purposely to hide an variable than we can do same thing using different why we dont need to declare function with name and call it.
// */

/*-	If function is without name, but also without the parentheses then the JavaScript parser would think that this is a function declaration, but since we don’t have any name for the function declaration then it will throw an error,
    -	So, we basically need to trick the parser, and make it believe that what we have here is an expression and not a declaration.
    And the solution is to wrap the entire thing into parenthesis because in JavaScript cannot be a statement.
-	In JavaScript what inside a parenthesis cannot be the statement, and like this, JavaScript will know that it should treat as an expression, and not as a declaration.
    Like we did in above example.
-	 we use IIFE when we want to create a new scope, so where we can safely put variables. And with this we obtain data privacy also don’t interfere with other variables.
*/


    function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
