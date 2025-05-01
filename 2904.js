function convert(){
    var kms=document.getElementById('value').value;
    const factor=0.621371;
    var miles=kms*factor;
    document.getElementById('res').innerText=`${miles} miles`
}