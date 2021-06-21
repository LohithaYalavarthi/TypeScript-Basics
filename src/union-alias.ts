type Combinable = number | string;
type ConversionDescriptor = "asnumber" | "as-text"; //Literal types
type ObjectDesc = {
    name : string,
    age : number,
    phonenumber : number
}
let Obj1 :ObjectDesc = {
    name : "lohitha",
    age : 23,
    phonenumber : 33
}

console.log(Obj1)
function combine(input1 : Combinable,input2 : Combinable,resultConversion : ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === "number" || resultConversion == "asnumber"){
        result = +input1 + +input2  
    } 
    else {
        result = input1.toString() + input2.toString()
    }
   return result
  
  
    
}

const combineAges = combine(30,26,"asnumber");
console.log(combineAges)

const combineNames = combine("Anna","Max","as-text");
console.log(combineNames)
const combineNamesWithStrings = combine("30","20","asnumber");
console.log(combineNames)