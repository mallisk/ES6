// clousure - lexical scope
var sum = function (a) {
console.log("hello world" + a)
var c = 4;
return function (b){
    return a+b+c;
}
}

var store = sum(2);

console.log(store(10));