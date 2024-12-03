// objects in javascript
let person = {
    firstName: "John",
    fullName: function() {   // defining a function 
        console.log(this.firstName + " " + this.lastName)
    },
    lastName: "Doe",
    age: 34
}

// Accessing properties of object
console.log(person.firstName)
console.log(person['lastName'])
console.log(person['age'])
person.fullName()

// Update values of the property in an object
person.age = 20
console.log("Updated age - " + person.age)

// Add and delete a property in an object
person.gender = 'male'
console.log(person) // printing the entire object
delete person.gender
console.log(person) // printing the entire object again

// Check if a property exists in an object
console.log("Gender exist in person - " + ('gender' in person))
console.log("Age exist in person - " + ('age' in person))

// iterate over each property in an object 
for (const key in person)
    console.log(key + " = " + person[key])

