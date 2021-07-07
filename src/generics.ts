//Generics

const arr1: Array<string> = [];

// console.log(arr1[0].split(""));

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello ther");
  }, 2000);
});

let promisevalue = promise.then((data) => {
  console.log("DATA", data.split("")); // her we can use the split method because we have declared the generics
});

function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
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

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let decriptionText = "Got no value";
  if (element.length === 1) {
    decriptionText = "Got 1 elements";
  } else if (element.length > 1) {
    decriptionText = "Got" + element.length + "elements";
  }
  return [element, decriptionText];
}

console.log(countAndDescribe("hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "hello" }, "name"));

// the syntax below is the constraints
class DataStorage<T extends string|boolean | number> {

  private data : T[] =[];
  addItem(item : T){
    this.data.push(item)
  }
  removeItem(item : T){
    if(this.data.indexOf(item) === -1){
      return; 
    }
    this.data.splice(this.data.indexOf(item),1) //-1 if its -1 it will remove last item
  }
   getItems(){
     return [...this.data]
   }

}

const textStorage = new DataStorage<string>()
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max")
console.log(textStorage.getItems());

const numberStorage  = new DataStorage<number>()

// const objStorage = new DataStorage<object>()
// const maxObj = {
//   name : "Max"
// }
// objStorage.addItem(maxObj)
// objStorage.addItem({name : 'Manu'})
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title : string,
  description : string,
  date : Date
}
function createCourseGoal(title : string,description : string,date : Date) : CourseGoal {
  //builtin generic function <Partial> make sure not all the properties are mandatory
  let courseGoal : Partial<CourseGoal> ={}
  courseGoal.title= title,
  courseGoal.description = description
  courseGoal.date = date 
  return courseGoal as CourseGoal
}

//Using class types in Generics


class BeeKeeper {
  hasMask : boolean = true
}
class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance <T extends Animal>(arg : new()=> T) : T{
  return new arg()
}

createInstance(Lion).keeper.nametag

