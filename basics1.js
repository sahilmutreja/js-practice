// LESSON 1 - Datatypes and keywords var, let and const

console.log("hello world");
let a = 4
const b = 4.234
var c = "hello world"
let d = true
console.log(a + " - " + typeof(a))
console.log(b + " - " + typeof(b))
console.log(c + " - " + typeof(c))
console.log(d + " - " + typeof(d))

var c = a+b
console.log("redeclaring & reassigning variables both are posible with var keyword")
console.log(c)

d = false
console.log("redeclaring not but reassigning is possible with let")
console.log(d)

b = 3  // this raises an error - TypeError: Assignment to constant variable.
console.log(b)
console.log("neither redeclaring nor reassigning is possible with const")


