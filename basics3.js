// 3 ways to create an array
var arr = Array(6) // just give the length
var arr = new Array(1,2,10,50,60) //give actual elements while creating an obj
var arr = [1,2,10,50,60] // directly the elements in box braces

console.log(arr); //original array

console.log(arr[2]); // print 3rd element 

// Update element using index
arr[2] = 30
console.log(arr); 

// Using push() - add element at the end
arr.push(100);
console.log(arr); 

// Using pop() - remove the last element
arr.pop();
console.log(arr); 

// Using unshift - insert element at the beginning
arr.unshift(20)
console.log(arr); 

// Access element using index
console.log("index of element 30 = " + arr.indexOf(30))

// Check if element exist in array using includes()
console.log("Array contains/includes element 50 = " + arr.includes(50))

// Create a sub array from existing aray using slice(startIndex, lastIndex+1)
subArr = arr.slice(3,6) 
console.log(subArr) 
console.log("Final array = " + arr)

// Calculate sum using traditional method 
console.log("Traditional Sum of arr elements = ")
sum=0
for(let i=0;i<arr.length;i++) sum+=arr[i]
console.log(sum)

// Calculate sum using reduce()
console.log("sum using reduce = ")
newsum = arr.reduce((finalAns,element)=>finalAns+element,0)  // 0 is the start value of finalAns
console.log(newsum)

// print only even marks array we can use filter()
let marks = [1,2,3,4,5]
console.log("Original marks arr = " + marks)
let evenMarks = marks.filter(m=>m%2==0)
console.log("Even marks arr = " + evenMarks)

// Using map function modify each element in array
console.log("print a new marks array with each mark multiplied by 10 - ")
newMarks = marks.map(mark=>mark*10)
console.log(newMarks)

// chaining array functions 
let arrX = [1,2,3,4,5]
let finalAns = arrX.filter(i=>i%2==0)
                    .map(i=>i*10)
                    .reduce((sum,k)=>sum+k,0)
console.log("Original Arr = " + arrX)
console.log("Filtering only even numbers multiplying them by 10 and adding all we get")
console.log(finalAns)

// Sort & Reverse strings and numbers
let names = ["apple", "mango", "beetroot", "cranberry", "strawberry"]
console.log("Original array" + names)
console.log("Sorting ascending - " + names.sort())
console.log("Sorting descending - " + names.reverse())

let numbers = [1,3,2,5,4]
console.log("Original Arr - " + numbers)
console.log("Sorted array - ")
console.log(numbers.sort((a,b)=>a-b))
console.log("Reverse Sorted array - ")
console.log(numbers.sort((a,b)=>b-a))

