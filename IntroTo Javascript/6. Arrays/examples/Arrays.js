
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // will add an element to the end
john.unshift('Mr.'); //will add an element at the first
console.log(john);

john.pop(); // will remove an element from the end
john.pop();
john.shift(); // will remove an element from the start
console.log(john);

console.log(john.indexOf(23)); // will provide element based on index position.

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
