
// 1. IF/ELSE STATEMENT
const flag = true;
if (flag) {
    console.log("The flag is true");
} else {
    console.log("The flag is false");
} 
// <-- IF/ELSE ENDS HERE (Prints: "The flag is true")


// 2. WHILE LOOP

let i = 1; 
while (i < 10) {
    console.log(i++); 
} 
// <-- WHILE LOOP ENDS HERE
// Output: Prints 1 through 9
// Current value of 'i' at this point is 10



// 3. DO-WHILE LOOP

do {
    console.log(i++); // Prints current 'i', then increments it
} while (i < 10); 
// <-- DO-WHILE LOOP ENDS HERE
// Note: Since 'i' is already 10, the body runs ONCE (prints 10, 'i' becomes 11).
// Then it checks (11 < 10), which is false, so it stops immediately! 
console.log("======="); 


// 5. FOR LOOP
let n = 0;  // Declare n
for (let k = 1; k <= 100; k++) { 
    if (k%2 == 0 || k%5 == 0) {
        n++;
        console.log(k);
        if(n == 3) {
            break;
        }
    }
}

let required = true
while (required) {
    console.log(required);
    break; 
    
}