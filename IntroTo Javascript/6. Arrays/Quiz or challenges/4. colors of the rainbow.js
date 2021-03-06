/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
// From index position 2, remove 1 element. Afterwards, add all the elements mentioned in the argument.
rainbow.splice(2, 1, "Yellow", "Green");
// From index position 5, remove 0 elements. This means, no removal of any element.
// Afterwards, add all the elements mentioned in the argument.
rainbow.splice(5, 0, "Purple");

console.log(rainbow);
