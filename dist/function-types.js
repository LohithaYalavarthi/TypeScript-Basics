"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is", num);
}
let combineValues;
combineValues = add;
combineValues = 5;
let alone;
alone = add;
// alone=5 - throws error
alone(5, 6);
alone = printResult;
alone(4, 5);
let morePrecise;
let morePrintPrecise;
morePrintPrecise = add;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    const need = cb(result);
    console.log("need", need);
}
addAndHandle(2, 3, (result) => {
    console.log("trace", result);
    // return result
});
//# sourceMappingURL=function-types.js.map