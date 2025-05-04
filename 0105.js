// conversion of celcius to fehrenhite
function convert(){
    var cel=document.getElementById("data").value;
    var fer=(cel*1.8)+32
    document.getElementById("res").innerText=`celcius: ${cel}c = Fehrenhite:${fer}f`;
    
}
// check is a number is positive negative or zero
var number=parseFloat(prompt("Enter the number"));
if(number>0){
    console.log(`${number} is Positive Number`)
}
else if(number<0){
    console.log(`${number} is negative number`)
}
else if(number===0){
    console.log(`${number} is Zero`)
}
else{
    console.log("That is not a number")
}