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


var marks = [32, 45, 67, 89, 90, 100]; 

var sum = 0;
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]); 
    sum = sum + marks[i];
} 

console.log(sum);