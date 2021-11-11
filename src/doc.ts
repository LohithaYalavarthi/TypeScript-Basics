console.log("Your code goes on here...");
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = "Result is:";

const result = add(number1, number2, printResult, phrase);
console.log(result);

/** Trying the document */

let helloworld = "Hello world";
let user1 = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}

let user2 : User = {
    name : "Hayes",
    id : 0
}
interface User {
 name : string;
 id : number;
}
class UserAccount {
    name : string ;
    id : number;
    constructor(name : string, id : number ){
        this.name = name;
        this.id = id
    }

}
const user : User = new UserAccount("Murphy", 1)
let unknownValue : unknown
let velocity : string = "getthis"
let anyValue : any = 32
unknownValue = 5;
unknownValue ="Hello"
unknownValue= {name :  "lohitha"}
unknownValue = velocity
//velocity = unknownValue // this is not possible unknown value s not assignable to the string
velocity = anyValue

/** Check NoimplicitAny */

function sendAnalytics(data){
    console.log(`data`, data)
}
sendAnalytics("string")

// checking strictNullChecks : false
let property1 
let property2: string
// here it throws error of Variable 'property2' is used before being assigned
//  property1 = property2!.toUpperCase()  //  Dont do this before property2 being assigned.


 //Narrowing
 type Fish = {
   swim : () => void; // This is callable signature
   name :string;
 }
 type Bird = { fly: () => void; name :string; };
 declare function getSmallPet () : Fish | Bird 
 //Type Predicate 
 function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//  let pet = getSmallPet()

//  if(isFish(pet)){
//    pet.swim()
//  }
//  else {
//    pet.fly()
//  }
//  const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
//  const underWater1: Fish[] = zoo.filter(isFish);

//  const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });
type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // this is callable signatures
};
//Function Construct Signatures

type SomeConstruct = {
  new (s: string) : Date;
  (n?: number): number;

}

function fn(ctor: SomeConstruct) {
  return new ctor("hello");
}
//Generic Functions

function map<Input, Output>(arr :Input[] , func : (arg: Input) => Output) : Output[] {
    return arr.map(func)
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


function AddNumber (a : number,ac:number, b? : number) : number{
  if(b){
    return a+b+ac

  }
  else{
    return a+ac
  }
}

function callFunction<Type>(arr : Type[], callback :(arg :Type, index?: number ) => void) {
  for(let i =0 ; i<arr.length; i++) {
    callback(arr[i],i)
  }
}
callFunction([1, 2, 3], (a) => console.log(a));
callFunction([1, 2, 3], (a,i) => console.log(a,i));
// callFunction([1, 2, 3], (a,i) => console.log(i.toFixed()));

interface Circle {
  kind :"circle",
  radius : number
}
interface Square {
  kind :"square",
  sidelength : number
}

interface Triangle {
  kind : "triangle"
}

type Shape = Circle | Square | Triangle

function getArea(shape: Shape){
  switch(shape.kind){
    case "circle" : 
        return Math.PI * shape.radius ** 2;
    case "square" :
       return Math.PI * shape.sidelength ** 2;
    // if the below case is not written
    case "triangle" :
      return ; 
    default :
    const _exhaustiveCheck : never = shape
    //Type 'Triangle' is not assignable to type 'never'.ts(2322)
    //never cant be assigned to any type
    // you can assign any type to never
    return _exhaustiveCheck
  }
}
