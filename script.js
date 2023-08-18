function soma(){
    var number = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value )
    
    document.getElementById("result").innerHTML= number + numberTwo

    
}

function subtracao(){
    var number = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value )
    
    document.getElementById("result").innerHTML= number - numberTwo
}

function multiplication(){
    var number = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value )
    
    document.getElementById("result").innerHTML= number * numberTwo

}

function divisor(){
    var number = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value )
    
    document.getElementById("result").innerHTML= number / numberTwo

}