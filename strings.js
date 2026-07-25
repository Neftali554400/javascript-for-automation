let day = 'tuesday day day ' 
console.log(day.length) 

let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1]) 

let splitDay = day.split("s") 
console.log(splitDay[1].length) 
console.log(splitDay[1].trim().length)  

let newQuote = day + "is Funday" 
console.log(newQuote) 

let val = newQuote.indexOf("day",5)
console.log(val) 

//tuesday is Funday 
let count = 0 
let value = newQuote.indexOf("day")

while(value!== -1) 
{

    count++ 
    value = newQuote.indexOf("day",value+1)
} 

console.log(count)
