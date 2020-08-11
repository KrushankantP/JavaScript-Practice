/*****************************
 * Objects and methods
 */

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return this.age = 2020 - this.birthYear;
    }
};


console.log(john);
console.log( john.firstName + " Age is: ", john.calcAge());
