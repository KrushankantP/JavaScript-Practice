/*
    Function are also Objects in javaScript
-	A function is an instance of the Object type;
-	A function behave like any other object;
-	We can store function in a variable;
-	We can pass a function as an argument to another function;
-	We can return a function from a function.

*/



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
console.log(fullAges);

/*
- so here we created generic function[arrayCalc] which loops over an input array.  Then we give it a function as input which is used to calculate something based on each element of the array.
- We have created a bunch of different callback function[ calculateAge(), isFullAge(), maxHeartRate() ] for this and  we could create even more.
- This is way better than having one big function calculating all of this stuff at the same time, because it creates   more modular and readable code.
- Each function here, of these three that we coded here, each one has a simple and single task.

*/
