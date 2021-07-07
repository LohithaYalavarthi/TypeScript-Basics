function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(`constructor`, constructor);
  };
}
function WithTemplate(template: string, hookId: string) { // decorator factories
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log(`Rendering template`);
        const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    }
    // return function(constructor : Function){
    //   const hookEl = document.getElementById(hookId);
    //   if (hookEl) {
    //           hookEl.innerHTML = template;
    //           // hookEl.querySelector("h1")!.textContent = this.name;
    //     }

    // }
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Constructor person object");
  }
}

const person = new Person();
console.log(person);

//..
//Decorator for property
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

//Decorator for accessor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  //here return can be accepted
}

//Decorator for method
//If its a static method target = constructor
//If its a instance target=prototype
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  //here return can be accepted


}

//Decorator for Parameter
function Log4(target: any, name: string, position: number) {
  console.log("parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log // this will execute when class Product register with javascript
  title: string;
  private _price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    // this is called accessor
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    // this is a method
    return this._price * (1 + tax);
  }
}

// All decorators run with out instanciating
//All decorators run when we define class

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const orginalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = orginalMethod.bind(this)
      //this refferes to what ever triggering this method
      return boundFn;
    }
  }
  return adjDescriptor
}
//---



class Printer {
  message = "This works";
  @AutoBind
  showMessage() {
    console.log(this.message)
  }

}
const p = new Printer();

const button = document.querySelector("button")!;
//p here referes to button so this.message doesnt work so we need
//to bind it
button.addEventListener('click', p.showMessage)

//decorators starting
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] //['required', 'positive']
  }
}
const registeredValidators: ValidatorConfig = {};
//registeredValidators = { "className" : {title : ['required', '']}}
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]:  ['required']
  }
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}
let isValid = true
function validate(obj: any) {
  console.log(`obj`, obj)
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid= isValid && !!obj[prop]
          console.log(`validator`, isValid, validator)
          break;
        case 'positive':
          isValid= isValid && obj[prop] > 0;
          console.log(`validator`, isValid, validator)
          break;

      }
    }
  }
  console.log(`isValid`, isValid)
  return isValid; 
}
//decorators end


class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!
courseForm.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;
  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input , please try again!");
    return;

  }
  console.log(createdCourse);

})

