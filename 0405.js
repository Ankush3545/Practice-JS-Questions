// program to check the number entered by user  is prime or not 
// prime number is a number that is divisible by 1 or itself


/*function checkPrime(){
    let num=document.getElementById('value').value;
   document.getElementById('result').innerText=`${num}`

}*/

function checkPrime(){
    var number=document.getElementById('value').value;
    //console.log(number)
    if(number==1){
        document.getElementById('result').innerHTML=`${number} is neither prime nor composite`
    }
    else if(number<0){
     document.getElementById('result').innerHTML=` ${number} is not a prime number `;
    }
    else{
        for(i=2;i<number;i++){
            if(number%i==0){
                var FinalResult=`${number} is not a prime number`
                break;
            }
            else{
                var FinalResult=`${number} is a Prime Number`
            }
        }
        document.getElementById('result').innerHTML=FinalResult;
    }

}

