import{
    decimalToBinary,
    binaryToDecimal,
    addZero,
    convertBinaryToHex,
    convertDecimalToHex,
    addBits,
    removeBits,
    HexaToBinary,
    hexaToDecimal
  }from "./logica.js"



//get elements with the Dom
const form1 = document.getElementById("form1");


const activeFunction = (valueInput, valueOutput,numbInput,numOuput)=>{
      
    let compInput = numbInput.value !== ""

    if(valueInput == "Decimal" && valueOutput === "Binario" && compInput ){

        numOuput.value = decimalToBinary(Number(numbInput.value));

    }else if(valueInput == "Decimal" && valueOutput == "Hexadecimal" && compInput){
       
        numOuput.value = convertDecimalToHex(Number(numbInput.value));

    }else if(valueInput == "Binario" && valueOutput == "Decimal" && compInput){

        numOuput.value = binaryToDecimal(numbInput.value);

    }else if(valueInput == "Binario" && valueOutput == "Hexadecimal" && compInput){

        numOuput.value = convertBinaryToHex(numbInput.value);

    }else if(valueInput == "Hexadecimal" && valueOutput == "Decimal" && compInput){

        numOuput.value = hexaToDecimal(numbInput.value);

    }else if(valueInput == "Hexadecimal" && valueOutput == "Binario"){
        
        numOuput.value = HexaToBinary(numbInput.value);

    }else{
        alert("selecciona correctamente tus opciones o llena el campo de entrada")
    }
}



//event that work  in the element form
form1.addEventListener("submit", (event)=>{
   event.preventDefault();
    
    activeFunction(form1["valueStart"].value,form1["valueResult"].value, form1["valueConvert"],form1["valueResponse"]);

})















