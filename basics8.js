//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties,Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child class) and 
//the class whose properties are inherited is known as superclass

// old way i.e. ES5 way of import is saving the import to a const variable
// const Test1 = require('./basics7')
// let test1 = new Test1()
// console.log(test1.name)

// new way of importing i.e. in ES6 is using import from keywords
import Person from './basics7.js'

class Actor extends Person {
    // overriding the parent class definition
    get location() {
        return 'India'
    }
    
    // it is mandatory to define call class constructor when using inheritance 
    // it can be done using "super" keyword
    constructor(firstName, lastName, totalMovies) {
        super(firstName, lastName)  
        // child class can have its own properties
        this.totalMovies = totalMovies
    }
    getMyDetails() {
        return this.firstName + " " + this.lastName + " " + this.totalMovies
    }

}

let employee1 = new Person('john', 'doe')
console.log(employee1.firstName)
console.log(employee1.lastName)
console.log(employee1.age)
console.log(employee1.location)
console.log("Full name - " + employee1.getFullName())

let actor1 = new Actor('shahrukh', 'khan') // totalMovies will be undefined
let actor2 = new Actor('salman', 'khan', 100)

console.log(actor1.getMyDetails())
console.log(actor2.getMyDetails())


