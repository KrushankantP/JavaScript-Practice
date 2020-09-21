//Ex-1

//ES5

var box5={
    color: 'green',
    position:1,
    clickMe: function(){
        var self= this;
        document.querySelector('.green'). addEventListener('click', function () {
            var str ='This is box number ' +self.position+ ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();

//ES6
// In simple words when we define
const box6 ={
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click', ()=>{
            var str =`This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        })
    }
}
box6.clickMe();

// This will give us undefined because "ClickME: ()=>" function surrounded by global object and
// here 'this' keyword will refer to global/window scope that is window object and there is no where defined
// 'position' and 'color' in global/windows object.

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();

//Ex-2


function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 =function(friends) {
var arr = friends.map(function (el) {
    return this.name +' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends =['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6= function (friends) {
var arr = friends.map(el=>`${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Mike').myFriends6(friends);




