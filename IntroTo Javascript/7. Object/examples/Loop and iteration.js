/*****************************
 * Loops and iteration
 */


// for loop
console.log("-------------for loop start here--------------")

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}
console.log("-------------for loop end here--------------")
console.log("\n");

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

console.log("-------------John loop start--------------")

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
console.log("-------------John loop end--------------")
console.log("\n")
// While loop
console.log("-------------while loop for john start--------------")
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
console.log("-------------while loop end for john--------------")


console.log("\n");
// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log("-------------1st For loop end here (continue)--------------")
console.log("\n")
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
console.log("-------------2nd for loop end here (Break)----------------")
console.log("\n");

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
console.log("-------------3rd for loop end here (backwards)--------------")


