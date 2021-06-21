"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function PrintEmployeeInformation(emp) {
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
PrintEmployeeInformation(e1);
class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Truck driving");
    }
    loadCargo(amount) {
        console.log("load cargo", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
const paragraph = document.querySelector("p");
//typescript here identifies it is an HTMLParagraphElement or null
// const userInputElement= <HTMLInputElement>document.getElementById("message-output"); - Version1 
// const userInputElement= document.getElementById("user-input") as HTMLInputElement;
const userInputElement = document.getElementById("user-input");
if (userInputElement) {
    userInputElement.value = "Hi there";
}
//here typescript doesnt identify its an HTML paragragh element it just tells its HTMLElement
/** You can write the below way as well */
// function moveAnimal(animal : Animal){
//   if("flyingSpeed" in animal){
//       console.log(animal.flyingSpeed)
//   }
// }
//# sourceMappingURL=app.js.map