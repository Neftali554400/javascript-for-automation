var marks = Array(6);
var marks = new Array(32, 45, 67, 89, 90, 100); 

var marks = [32, 45, 67, 89, 90, 100]; 
subMarks = marks.slice(2, 5);
console.log(subMarks); 

marks[2] = 70;
console.log(marks);  

marks.push(110);
console.log(marks); 

marks.pop();
console.log(marks); 

marks.unshift(10);
console.log(marks); 


console.log(marks.indexOf(89)); 
console.log(marks.includes(150));  

console.log("=======");

// Array containing the student marks
var marks = [32, 45, 67, 89, 90, 100]; 
console.log(marks[2])

console.log("=======");

// Variable to store the running total sum
var sum = 0;

// Loop through each element in the marks array
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]); // Print the mark at current index 'i'
    sum = sum + marks[i];  // Add current mark to the total sum
} 

// Print the final total sum after loop finishes (Output: 423)
console.log(sum);

//Reduce filter map. 

let total = marks.reduce((sum, mark) => sum + mark, 0); 
console.log(total); 

var scores = [234, 398, 24, 44, 55, 66, 77, 88, 99, 100];    
var evenScores = [] 

for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 === 0) { 
        evenScores.push(scores[i]); 
    }
} 

console.log(evenScores);


let newFilteredScores = scores.filter(score => score % 2 === 0);
console.log(newFilteredScores);  


console.log("=======");

//map method  

var scores = [234, 398, 24, 44, 55, 66, 77, 88, 99, 100]; 

let mappedArray = newFilteredScores.map(score => score * 3); 
console.log(mappedArray); 
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0); 
console.log(totalVal); 

console.log("=======");
 
var scores1 = [234, 398, 24, 44,]; 
let sumValue = scores1.filter(score => score % 2 === 0).map(score => score * 3).reduce((sum, val) => sum + val, 0);
console.log(sumValue);

//sort method

let fruits = ["Banana", "Orange", "Apple", "Mango"]; 
console.log(fruits.sort()); 
console.log(fruits.reverse()); 

var scores2 = [234, 398, 24, 44, 55, 66,]; 
console.log(scores2.sort((a, b) => b - a));