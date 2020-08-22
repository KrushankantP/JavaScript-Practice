T//his method checks whether the passed argument is an array.
   // TODO Syntax: Array.isArray(value)
//Returns true if it is an array, otherwise returns false.


  //  Examples value which returns true:

Array.isArray([])//true
Array.isArray([1]) //true
Array.isArray(new Array()); //true

//Array Prototype is an array of functions

Array.isArray(Array.prototype);

// Values which return false:

// the result of all statement below evaluates to false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(100);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
