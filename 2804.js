// Java script Interview questions for practice 
/*
1.Variable:=> let, var, const
2.Conditional Statement:=>if, else, elseIf
3.Data types:=> Primary and secondary 
4.loops:=>for loop, while loop, doWhile loop
5.String:=> is a sequence of character 
6.Array:=>collection of similar or disimilar types of data
7.function:=>block of code used for multiple use
 a.Arrow function:=>modern method for writing of function
 b.anonymous function:=>function having no name
8.Document object model(DOM):=>For accesing html element in js file
9.Promises:=>for eventual completion of task
 a.Promise method:=>
    if promise was resolve we use .then()
    if promise was not resolved we used .catch()
10.Async await:=>for waiting till result not found then execute to next
11.Closure
12.Hoisting
13.Scope:=>Global and local scope
14.Template literals
15. Objects
16.Destructuring of arrays and objects
17.Error Handling:=>Try and catch
18.Spread operator:=>for copying of data
19.Node js:=>Javascript on server
20.Local storage and Session Storage
21.OOPS concept in JS
*/

// Hello world using console.log(), alert(), document.write()
console.log("Hello world"); //basically it is used for debugging 
alert("Ankush Patrawat");
document.write("Faridabad")// used when we have to write text to html document

// to adding two number by static and dynamic numbers 
let a=10;
let b=20;
console.log(a+b);
let num1=parseInt(prompt("Enter the first number"));
let num2=parseInt(prompt("Enter the second number"));
let result=num1+num2;
console.log(`sum of num1 i.e ${num1} and num2 i.e ${num2} is :=> ${result}`);

// to find square root of a number
let num3=parseInt(prompt("Enter the number"));
let sqrt=num3*num3;
console.log(`square root of the number entered by user i.e ${num3} is :=> ${sqrt}`);

// to calculate the area of a right angle triangle
let height=parseInt(prompt("Enter the height of a triangle"));
let base=parseInt(prompt("Enter the base of a triangle"));
let area=(height*base)/2;
console.log(`Area of triangle with height ${height} and base ${base} is :=> ${area}`);

// Swapping of two numbers




