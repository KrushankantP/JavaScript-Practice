// Ex-1
// ES5
function  isFullAge5() {

    //console.log(arguments);
    var argsArr =Array.prototype.slice.call(arguments);
    argsArr.forEach(function (cur) {
        console.log((2016-cur)>=18);
    })
}

isFullAge5(1990,1999,1965);
isFullAge5(1990,1999,1965,2016,1987);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016-cur)>=18));
}

isFullAge6(1990,1999,1965,2016,1987);


//Ex-2
//ES5
function  isFullAge55(limit) {
    var argsArr = Array.prototype.slice.call(arguments,1);
    argsArr.forEach(function (cur) {
        console.log((2016 - cur) >= limit);
    })
}
isFullAge55(16,1990,1999,1965);
isFullAge55(1990,1999,1965,2016,1987);

//ES6
function  isFullAge66(limit, ...years) {
years.forEach(cur => console.log((2016 -cur )>= limit));
}

isFullAge66(16,1990,1999,1965,2016,1987);
