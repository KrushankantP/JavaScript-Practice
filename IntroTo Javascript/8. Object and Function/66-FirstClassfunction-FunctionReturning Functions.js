/*
* -	Function are always first-class function in JavaScript because they are effectively objects.
* So we simply actually return an object, it’s simply an object that happen to be a function,
*
* -	Function expression store in a variable.
* */



function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(`${name} can you please explain what UX design is?`)
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(`What subject do you teach, ${name} ?`)
        }
    } else {
        return function (name) {
            console.log(`Hello  ${name}, what do you do? `);
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
    designerQuestion('John');
    designerQuestion('jane');
    designerQuestion('Mark');
    designerQuestion('Mike');

    interviewQuestion('teacher')('Mark');


