"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
let needed;
needed = new Person("Lohitha");
// needed.greet("I am-")
needed.greet("I am-");
//# sourceMappingURL=interfaces.js.map