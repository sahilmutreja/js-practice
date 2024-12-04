let myName = "tarzan zayne"

// slice - create a sub array
console.log(myName.slice(0, 7))    // print Sahil

// length - total length of a string
console.log("Total length of my name - " + myName.length)

// indexOf - index of a sub string
console.log("Index of za in my name starting from 4th character= " + myName.indexOf("za", 4))

// parsing string to integers
let total = parseInt("4") + parseInt("4");
console.log("Total of 4 + 4 = " + total)

// Number of occurrences of a substring in a string 
let stringX = "bat batman bat batman bat"
let count = 0
let position = 0
while (true) {
    position = stringX.indexOf("bat", position)
    if (position != -1) {
        count++
        position++
    }
    else
        break
}
console.log("Total occurrences - " + count)
