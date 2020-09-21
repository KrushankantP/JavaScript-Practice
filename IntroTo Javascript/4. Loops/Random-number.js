var arr = [];
while(arr.length < 10000){
    var r = Math.floor(Math.random() * 10000) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
