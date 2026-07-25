productPrices = [34, 234, 33, 45,]

const discountedPrices = productPrices.map((price) => {
 });

console.log(discountedPrices); 

const affordables = productPrices.filter(product => product.prices < 50);  
console.log(affordables)


let totalprice =  productPrices.reduce((a, b) => a + b, 0); 
console.log(totalprice)