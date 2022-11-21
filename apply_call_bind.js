// Apply ,call and bind in js

// problem statement

let userDetails = {
    name: "Malli",
    age : 29,
    Designation : "Sr Engineer"
}

const printDetails = function(state,country){
    console.log(this.name, state , country);
}

//call
printDetails.call(userDetails,"Kar", "india");
//apply
printDetails.apply(userDetails,["Kar", "india"]);
//bind
let newfun = printDetails.bind(userDetails,"Kar", "india");
newfun();