// Read full documentation on import export - https://javascript.info/import-export

// old way i.e. ES5 way of export is saving the class to export.modules
// module.exports = class Test1{
//     name = 'smoke test'
// }

// new way of exporting i.e. in ES6 is
// To export a class just save the class definition in module.exports
export default class Person {
    // age and location are fixed values so they are class variables
    age = 30
    get location() {
        return 'Germany'
    }
    // firstname and lastname are tied to object so they are instance variables 
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    // class can have functions defined as follows 
    getFullName() {
        return this.firstName + " " + this.lastName
    }
}