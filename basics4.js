// named functions 
function add(a,b){
    return a+b
}
console.log(add(1,2))

// anonymous function 
let total = (a,b)=>a+b
console.log(total(2,2))

// var - global & functional level scope
// let - global & block level scope
// var & let both can be reassigned a new value

var greet = "morning - global level"
let say = "hi - global level"
if(true) {
    var greet = "night - block level" // greet value is replaced as var is never block level
    let say = "hello - block level"
}
function saySomething(){
    var greet = "afternoon - function level"
    let say = "hey - function level"
    console.log(greet)    
    console.log(say)    
}
saySomething() 
console.log(greet) // greet will print night as the var only works on global not on block level
console.log(say) // say will print hi as the value was never replaced 

// const is like let but cannot be rassigned new values
const name = "john"
// name = "tommy"   // Throws error - TypeError: Assignment to constant variable.
console.log(name)