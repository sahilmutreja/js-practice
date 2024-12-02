const flag = true

if (!flag)
    console.log("condition satisfied")
else
    console.log("condition not satisfied")

let i=0
while(i>10){    
    i++
    console.log(i)
}
do{
    i++
}while(i>10);
console.log(i)

// print first 3 numbers divisible by 2 and 5 
for(let n=0,k=1;k<=200;k++){
    if(k%2==0 && k%5==0){
        console.log(k)
        n++
        if(n==3) break
    }
}