
/* The Array.from method creates a new shallow copy from an array-like or iterable object.*/


//     Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

//    TODO Syntax : Array.from(sourceArray [, mapFn [, thisArg] ])

// EX - 1 Array from a String

var str = "123"; //String is iterable
Array.from(str); // [ '1', '2', '3' ]
console.log('EX - 1 Array from a String: ', Array.from(str));

// Ex - 2 Duplicating an array.

var array = [1,2,3,4,5];
var newArray = Array.from(array); //[1,2,3,4,5]

console.log('Ex - 2 Duplicating an array: ', newArray);

// Ex - 3: Copying array with reference.

var array1 =[
    {
        name:'Krishna'
    }
]
var newArray1 = Array.from(array);

newArray1[0].name; // Krishna

array1[0].name = "Patel";

newArray1[0].name; //Patel

//the value is change to Patel in the copied array because it is shallow copied.

// This also behave the same for, array inside an array:

var array2 =[[1,2], [2,3]]
var newArray2 = Array.from(array2);

array2[1][1] = 5;
console.log(array2);
newArray2; //[ [ 1, 2 ], [ 2, 5 ] ]
console.log(newArray2);

// Ex - 4 Creating a new array of unique values from the array with duplicate values.

var array3 = [1,2,3,4,5,5,4,3,2,1];

var set = new Set(array3); // Removes duplicate elements

var uniqueArray = Array.from(set) // [1,2,3,4,5]
console.log('UniqueArray =', uniqueArray);

// Ex - 5 Using the map function.

var array4 =[1,2,3,4,5]
var doubleArray = Array.from(array4, (value, index) => value+ value);

console.log('Using the map function:', doubleArray); // [ 2, 4, 6, 8, 10 ]

//In example 5, we can also create an Array from the object if the object has the property of length. If an
// object has a property of length Array.from methods thinks it is an iterable object and creates an array of
// that length and sets the value as undefined.

var obj = {length : 3}
var array5 = Array.from(obj);
console.log(array5); // [undefined, undefined, undefined]

//We can use the map function with the above code to create a function that will generate an array with numbers.

function fillArray(length) {

    var obj = {length};
    return newArray5 = Array.from(obj, (val, index) => index);

}
fillArray(10); //[0,1,2,3,4,5,6,7,8,9]
console.log(newArray5);
