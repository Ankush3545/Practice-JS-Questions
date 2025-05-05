// program to generate a random number using math.random() that is a flaot number
var rnum=Math.random();
console.log(`before calculation ${rnum}`);
rnum=rnum*(10000-1)+1;
console.log(`after calculation${rnum}`);

// to find random  integer number
var rrnum=Math.floor(Math.random()*(10000-1)+1);
console.log(`Random value:${rrnum}`);

/*
var x=Math.random();
x=x*1000;
console.log(x)
*/

// to check odd and even number using if else condition

let x=parseInt(prompt("Enter the value of x"));
if(x%2===0){
    console.log(`number ${x} is even `)
}
else if(x%2!=0){
    console.log(`number ${x} is odd`)
}
// to check odd and even using ternary operator

var num=parseInt(prompt("enter the value of number"));
var finalnum=num%2===0 ?"even" : "odd" ;
console.log(`${num} is ${finalnum}`);