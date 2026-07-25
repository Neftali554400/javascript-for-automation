//Objects is a collection of properties

let person = {
    firstname: 'michael',
    lastname: 'neftali',
    age: 25, 
    fullname: function() {
        console.log(this.firstname + ' ' + this.lastname);
    } 
};

// Just execute it directly (don't wrap in another console.log)
person.fullname(); 
// Output: "michael neftali"

console.log(person.lastname)
console.log(person['firstname'])

console.log(person.lastname) 
console.log(person['lastname'])
// person.firstname = 'Tim Joe'
// console.log(person.firstname)

person.gender = 'male'
console.log(person) 

delete person.gender 
console.log(person)  

console.log("===")

//print all the value in the javascript object
for (let key in person) 
{
    console.log(person[key])
}