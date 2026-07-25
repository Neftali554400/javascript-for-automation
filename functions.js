//block of code 
//var - global level/functional 

var greet = "Evening" 

if (1==1) {
    var greet ="Afternoon"
}

function add (a, b) {
    return a + b;
}

let sum = add(2, 3);    
console.log(sum);  // Output: 5  
console.log(greet)

//do not have name = > Anonymous function
let sumofIntegers = function (a, b) {
    return a * b;
}

let sumOfNumbers = (c,d) => c + d 
console.log(sumOfNumbers (2,8))