"use strict";
console.log("Your code goes on here...");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var phrase = "Result is:";
var result = add(number1, number2, printResult, phrase);
console.log(result);
//# sourceMappingURL=basics.js.map