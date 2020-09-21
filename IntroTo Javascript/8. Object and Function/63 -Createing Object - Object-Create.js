/*
Difference between object.Create() and function constructor
-	Object.create() builds an Object that inherit directly the one that we pass into the argument.
-	Function constructor newly created Object inherit from the constructor prototype property.
-	Benefit of Object.create() is it allow us to implement really complex inheritance structure in an easier way
    than function constructor. Because it allow us to directly specified which object should be the prototype.
 */


var personProto ={
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job ='teacher';

var jane = Object.create(personProto,{
    name: {value:'Jane'},
    yearOfBirth: {value: 1969},
    job:{value: 'designer'}
});


console.log(john);
console.log(jane);
