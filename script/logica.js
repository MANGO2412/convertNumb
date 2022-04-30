//function to convet decimal to  Binary
const decimalToBinary = (numDecimal)=>{
    //mostrar los datos
    // console.log("tu numero decimal fue: ",numDecimal);
   
    //datos de entrada
    let bases2 = [];
    let item = 0;
    let base2 = Math.pow(2,item);
   
    
    //encontrar los exponentes de 2 para calcular el numero decimal
    while(base2 < numDecimal){
        bases2[item]= base2
        item++;
        base2 = Math.pow(2,item);
    }
    
   
    //convertir el numero decimal a binario
    let result = "";
   
    for (let i= bases2.length-1; i >= 0; i--) {
        if(bases2[i]<= numDecimal){
            result += "1";
            numDecimal= numDecimal-bases2[i];
        }else{
            result += "0";
        }
    }
   
   
    return result;
   }



 //binary to  decimal
const binaryToDecimal = (valueDecimal)=>{
    let numBinary = valueDecimal.split("");
    let base2, outputDecimal = 0,itExp = numBinary.length;

    for (let i = 0;  i< numBinary.length; i++) {
         itExp--
         base2 = Math.pow(2, itExp);
         

         if(Number(numBinary[i]) === 1){
           outputDecimal += base2;
         }
        
    }
    
    // console.log("tu valor en binario fue: "+ numBinary.join(""));
    return outputDecimal;

}




//function to convert to number hexadecimal
const addZero = (valueS)=>{
    let data = valueS, i= 0;
    
         if(valueS.length%4 == 0){
            return data;
         }else{
           while(data.length%4 !== 0){
            data = valueS.padStart(valueS.length + i,"0");
            i++;
           }
           
           return data;
  
        
         }        
    
  }


  //binary to hexaecimal
  const convertBinaryToHex = (binaryNum)=>{
    //defined variables
    let dataNumBi = addZero(binaryNum);
    //defined arrays
    let numbersChar = [];

     //defined integers variables
     let numHex = 0,
         i= dataNumBi.length -1,
         numIt = 0,
         numbersC = 0;

     //defined a variable  to my loop while
     let  loopB = true;
  
     while(loopB == true){
              if(numIt >= 4){
                numbersChar[numbersC] = numHex;
                numbersC++;
                numHex = 0;
                numIt = 0;
              }if(i<0){
                loopB = false
              }else{
                if(dataNumBi[i] == "1"){
                  numHex += Math.pow(2,numIt);
                 
                }
                i--;
                numIt++;
              }
     }
       
    let arrayInversa = numbersChar.map(function(value){
       switch(value){
         case 10:
           return value = "A";
         case 11:
           return value = "B";
         case 12:
           return value = "C";
         case 13:
           return value = "D";
         case 14:
           return value = "E";
         case 15:
           return value ="F";
         default:
           return value = value;
       }
    })
   
  
    
     return arrayInversa.reverse().join("")
}




//decimal to hexadecimal
const convertDecimalToHex = (v)=>{
    let dataBinary = decimalToBinary(v);
  
    return convertBinaryToHex(dataBinary)
  }
  



  //hexadecimal to binary
const addBits  = (value)=>{
    let  result = [], base2;
     
     for(let i= 3; i>=0; i--){
        base2 = Math.pow(2,i);
        if(base2 <= value){
          value = value - base2;
          result[i] = "1";
        }else{
          result[i] = "0"               
        }
     }

      return result.reverse().join("");
     
}


const removeBits = (value)=>{
  if(value.startsWith("0",0)){
    for(let i = 0; i<value.length; i++ ){
      if(value[i] == "1"){
        return value.substring(i);
      }
    }
  }else{
        return value
  }
}


const HexaToBinary  = (numH)=>{
  let arrayNum = numH.split("").map(function(value){
       switch(value){
         case "A":
           return value = "10";
         case "B":
           return value = "11";
         case "C":
           return value = "12";
         case "D":
           return value = "13";
         case "E":
           return value = "14";
         case "F":
           return value ="15";
         default:
           return value = value;
       }
    });

  let rest = "";

  for(let i = 0; i< arrayNum.length; i++){
     rest+= addBits(Number(arrayNum[i]));
  }

// console.log("linea 199",rest)
 return removeBits(rest); 
  
}


//hexadecimal to decimal
const hexaToDecimal = (value)=>{
  let dataBinary = HexaToBinary(value);
  
  return binaryToDecimal(dataBinary);
}


export{decimalToBinary,binaryToDecimal,addZero,convertBinaryToHex,convertDecimalToHex}
export{addBits,removeBits,HexaToBinary,hexaToDecimal}