/*
* Function Constructor
*
* The calculateAge() method is not in the function constructor (Person) and we want to still access using any objects(John, Jane, mark) we can define this method as prototype and then we create function logic into it.
*
*
* John is instance of Person:-  true – because we created through function constructor object.
  John has Own property ‘last name ‘ : false because we created

* */

var john={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

//Constructor name always start from capital latter
var Person = function (name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
// this is prototype method of person constructor function which can be access by any new object created
// using any Person constructor object for example here we are creating john2, jane and mark object
// which can access calculateAge() prototype function without creating method in Person constructor Object.

// so basically we are
Person.prototype.calculateAge = function () {
console.log(2016 - this.yearOfBirth);
};
// we can also create or add new property into person constructor object
Person.prototype.lastName ='Smith';

var john2 = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


// we haven't define calculateAge() method in person
john2.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john2.lastName);
console.log(jane.lastName);
console.log(mark.lastName)
