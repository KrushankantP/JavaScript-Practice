// Primitives-
/* - The biggest difference is variable containing primitive actually hold the data inside of the variable itself.
   - On Objects its very difference, Variable associated with object do not actually contains an object but instead the they contain the reference place in memory. Where the object seats or store.
   - So, variable declare as an object does not have an real copy of the object. It just points to an object.
 */




var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);



// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


/*
* -	When we pass primitive into the function, a simple copy is created. So, we can change A as much as we want, it will never affect the variable on the outside because it is primitive.
  -	But when we pass an object it’s not really the object that we pass, but the reference to the object.
  -	So, we do not pass object into the function but only the reference that points to the object. So when we then change the object inside of the function it is still reflected to the outside of the function.

*
* */
