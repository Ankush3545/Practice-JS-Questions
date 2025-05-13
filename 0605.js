// Js program to find factorial of a number
let num=parseInt(prompt("Enter the number"));
var fact=1;
if(num===0){
    console.log(`factorial of 0 is 1`)
}
else if(num<0){
    console.log(`factorial of a negative number is not exist`)
}
else{
    for(i=1;i<=num;i++){
        fact=fact*i
    }
    console.log(`factorial of ${num} is ${fact}`)
}


