// 3 ways to create an array
var arr = Array(6) // just give the length
var arr = new Array(1,2,10,50,60) //give actual elements while creating an obj
var arr = [1,2,10,50,60] // directly the elements in box braces

console.log(arr); //original array

console.log(arr[2]); // print 3rd element 

arr[2] = 30
console.log(arr); // updated 3rd element

arr.push(100);
console.log(arr); // added 100 at the end

arr.pop();
console.log(arr); // removed 100

arr.unshift(20)
console.log(arr); // added in the beginning

console.log("index of element 30 = " + arr.indexOf(30))

console.log("Array contains/includes element 50 = " + arr.includes(50))

subArr = arr.slice(3,6) // slice(startIndex, lastIndex+1)
console.log(subArr) 

console.log("Final array = " + arr)

console.log("Sum of arr elements = ")
sum=0
for(let i=0;i<arr.length;i++) sum+=arr[i]
console.log(sum)