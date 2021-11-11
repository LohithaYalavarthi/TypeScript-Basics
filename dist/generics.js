"use strict";
//Generics
const arr1 = [];
// console.log(arr1[0].split(""));
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello ther");
    }, 2000);
});
let promisevalue = promise.then((data) => {
    console.log("DATA", data.split("")); // her we can use the split method because we have declared the generics
});
function mergeObj(objA, objB) {
    return Object.assign(objA, objB);
}
//this syntax is cubersome
// const mergedObj = mergeObj({name : 'lohi'},{age : 26}) as {name : string, age : number}
// if('name' in mergedObj){
//     console.log(mergeObj.name)
//    }
//we use generics
const mergedObj = mergeObj({ name: "lohi", hobbies: ["Sports"] }, { age: 26 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let decriptionText = "Got no value";
    if (element.length === 1) {
        decriptionText = "Got 1 elements";
    }
    else if (element.length > 1) {
        decriptionText = "Got" + element.length + "elements";
    }
    return [element, decriptionText];
}
console.log(countAndDescribe("hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));
//keyof
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "hello" }, "name"));
// the syntax below is the constraints
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1 if its -1 it will remove last item
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    //builtin generic function <Partial> make sure not all the properties are mandatory
    let courseGoal = {};
    courseGoal.title = title,
        courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}
//Using class types in Generics
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = "Mikle";
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
function createInstance(arg) {
    return new arg();
}
createInstance(Lion).keeper.nametag;
//# sourceMappingURL=generics.js.map