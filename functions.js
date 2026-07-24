function add (a, b) {
    return a + b;
}

let sum = add(2, 3);    
console.log(sum);  // Output: 5 

//do not have name = > Anonymous function
let sumofIntegers = function (a, b) {
    return a * b;
}

let sumOfNumbers = (c,d) => c + d 
console.log(sumOfNumbers (2,8))