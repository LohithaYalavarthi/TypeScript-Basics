function add (n1 : number ,  n2 : number){
    return n1+n2
}

function printResult(num : number) {
    console.log("Result is",num)
}


let combineValues
combineValues = add(2,3)
combineValues = 5

let alone :Function

alone = add;

alone(5,6)

alone=printResult

alone(4,5)


let morePrecise :  () => void;

let morePrintPrecise : (a : number,b : number) => void 

morePrintPrecise = add

function addAndHandle (n1:number, n2:number,cb:(num : number)=>void){
    const result = n1+n2
   const need =  cb(result);
   console.log("need",need)
}


addAndHandle(2,3,(result)=>{
    console.log("trace",result);
    // return result
})