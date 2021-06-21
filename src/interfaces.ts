// type AddFn = (a : number, b: number) => number
// alternative for type present in below
interface AddFn {
  (a:number, b:number) : number  // ** Function type for interface .. **
}

let add : AddFn;

add = (n1:number, n2: number) => {
  return n1+n2
}
interface Named {
    readonly name? : string;
    outputName? : string;
}
interface AnotherInterface {
    
}
interface Greeting extends Named, AnotherInterface {
    greet(phrase : string) : void;
}

class Person implements Greeting {
  name?: string;
  constructor(n: string) {
    if(n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let needed : Greeting

needed = new Person("Lohitha");
// needed.greet("I am-")

needed.greet("I am-");
 