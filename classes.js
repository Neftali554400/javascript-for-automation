Module.exports = class Person {
    age = 23;

    // 1. Constructor method runs automatically when 'new Person()' is created
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // 2. Getter method for location
    get location() {
        return "canada";
    }
}

// Example usage:
const person1 = new Person("Michael", "Neftali"); 
const person2 = new Person("obi nef")

console.log(person1.firstName); // Output: Michael
console.log(person1.age);       // Output: 23
console.log(person1.location);  // Output: canada






let person = new Person("Tim", "Josepth") 
console.log(person.age) 
console.log(person.location)



