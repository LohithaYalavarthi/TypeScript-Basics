type Admin= {
    name : string;
    privileges : string[];
}
type Employee= {
    name : string;
    startDate  : Date;
}


//Intersection Type -Intersect this two types
type  ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name : "Max",
    privileges : ["create-server"],
    startDate : new Date(),
}

type Combinable = string | number
type Numeric = number | string


type Universal = Combinable & Numeric;

function add (a:number,b:number):number;
function add (a:string,b:string):string;
function add(a:Combinable,b:Combinable){
 if(typeof a == "string"  || typeof b =="string"){
     return a.toString()+b.toString()
 }
 return a+b

}

const result = add(1,5);

//We can typecast to tell typescript that return element from a function will be of string
// const result_string = add ("Max","schwarx") as string

//another way is declaring function overloading

const result_string = add ("Max","schwarx")

result_string.split(""); // this wont throw error because we have declared function overloading


// type UnknownEmployee = Employee | Admin

// function PrintEmployeeInformation(emp : UnknownEmployee){
//     if('privileges' in emp){
//         console.log(emp.privileges)
//     }
//     if('startDate' in emp){
//         console.log(emp.startDate)
//     }
// }

// PrintEmployeeInformation(e1)

// class Car {
//     drive(){
//         console.log("Driving");
//     }
// }
// class Truck {
//     drive(){
//         console.log("Truck driving")
//     }
//     loadCargo(amount : number){
//         console.log("load cargo", amount);
//     }
// }

// type Vehicle = Car|Truck

// const v1 = new Car()
// const v2= new Truck()

// function useVehicle(vehicle : Vehicle){
//     vehicle.drive()
//     if('loadCargo' in vehicle){
//         vehicle.loadCargo(1000)
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// // interface TryingTruck{
// //   drive(): void;
// //   loadCargo() : void
// // }

// // let object1 : TryingTruck

// // object1={
// //     drive(){
// //         console.log("Truck try")
// //     },
// //     loadCargo (){
// //        console.log("Cargo Driving") 
// //     }
// // }

// // object1.loadCargo()

// interface Bird {
//   type : "bird",
//   flyingSpeed : number
// }
// interface Horse {
//     type : "horse",
//     runningSpeed : number
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal : Animal){
//     let speed;
//    switch(animal.type){
//        case "bird" : 
//           speed = animal.flyingSpeed;
//           break;
//        case "horse" : 
//             speed = animal.runningSpeed;
//    }

// }
// moveAnimal({type : "bird", flyingSpeed : 10 })

// const paragraph = document.querySelector("p");
// //typescript here identifies it is an HTMLParagraphElement or null

// // const userInputElement= <HTMLInputElement>document.getElementById("message-output"); - Version1 
// // const userInputElement= document.getElementById("user-input") as HTMLInputElement;

// const userInputElement= document.getElementById("user-input")





// if(userInputElement){
//     (userInputElement as HTMLInputElement).value ="Hi there";
// }
// interface ErrorContainer { //{email: "Not a valid email", username : "Must start with a character"}
//  [prop:string] :string // I dont know the property name and I dont know the property count
// }

// const errorBag : ErrorContainer={
//     email : "Not a valid email",
//     username : 'Must start with a capital character'
// }
//here typescript doesnt identify its an HTML paragragh element it just tells its HTMLElement
/** You can write the below way as well */
// function moveAnimal(animal : Animal){
//   if("flyingSpeed" in animal){
//       console.log(animal.flyingSpeed)
//   }
// }








