// ES6
// Rest and Spred Operator


// Rest Operator -> combined recive parameters
function AddNumbers(a,b,c, ...other){
    // ES5 console.log(arguments);
    // ES6 console.log(other) -> [5,6]
 return a+b+c;
}
const res = AddNumbers(1,2,3,5,6);
console.log(res);

// Spred Operator -> combined pass arguments

var names = ["malli","SK","Arjun"];
function getNames(name1,name2,name3){
console.log(name1,name2,name3)
}
getNames(...names);

// with Objects

//Rest with object 
var student = {
    name:"malli",
    age:"28",
    hobbies: ["cricket","badmiton"]
}

//const age= student.age;
// array distructring 
const {age,...rest} = student;
console.log(age,rest);

// Spred in object
const newstudent = {
    ...student,
    age:30
}
console.log(newstudent);