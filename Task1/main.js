var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var _from , _to;

//now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

//taking initial value
_from = inputType.value;
_to = resultType.value;


function myResult(){

     
//when we change the input and output type value we need to
//update the inputTypeValue and resultTypeValue 
    _from = inputType.value;
    _to = resultType.value;


//now compare the input and resultType value and add formula 
    
    if(_from === "meter" && _to==="kilometer"){
        result.value = Number(input.value) * 0.001;
    }else if(_from ==="meter" && _to==="Centimeter"){
        result.value = Number(input.value) * 100;
    }else if(_from === "meter" && _to === "Millimeter"){
        result.value = Number(input.value) * 1000;
    } else if(_from === "meter" && _to==="meter"){
        result.value = input.value
    }

    if(_from === "kilometer" && _to==="meter"){
        result.value = Number(input.value) * 1000;
    }else if(_from ==="kilometer" && _to==="Centimeter"){
        result.value = Number(input.value) * 100000;
    }else if(_from === "kilometer" && _to==="Millimeter"){
        result.value = Number(input.value) * 1000000;
    }else if(_from === "kilometer" && _to === "kilometer"){
        result.value = input.value
    }

    if(_from === "Centimeter" && _to==="kilometer"){
        result.value = Number(input.value) * 0.00001;
    }else if(_from ==="Centimeter" && _to==="meter"){
        result.value = Number(input.value) * 0.01;
    }else if(_from === "Centimeter" && _to==="Millimeter"){
        result.value = Number(input.value) * 10;
    }else if(_from === "Centimeter" && _to==="Centimeter"){
        result.value = input.value
    }

    if(_from === "Millimeter" && _to==="kilometer"){
        result.value = Number(input.value) * 0.000001;
    }else if(_from ==="Millimeter" && _to==="meter"){
        result.value = Number(input.value) * 0.001;
    }else if(_from === "Millimeter" && _to==="Centimeter"){
        result.value = Number(input.value) * 0.1;
    }else if(_from === "Millimeter" && _to==="Millimeter"){
        result.value = input.value 
    }    




}
   
    


